import { isVNode, h, render } from "vue";
import notificationComponent from "./Notification.vue";
import PopupManager from "./PopupManager";
const MOUNT_COMPONENT_REF = "el_component";
const COMPONENT_CONTAINER_SYMBOL = Symbol("el_component_container");

/**
 *
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @returns
 */
const createComponent = (Component, props, children) => {
  const vnode = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children);
  const container = document.createElement("div");
  vnode[COMPONENT_CONTAINER_SYMBOL] = container;
  render(vnode, container);
  return vnode.component;
};
/**
 * 销毁组件实例对象
 * @param {*} ComponentInstance 通过createComponent方法得到的组件实例对象
 */
const unmountComponent = (ComponentInstance) => {
  render(undefined, ComponentInstance.vnode[COMPONENT_CONTAINER_SYMBOL]);
};

const instanceList = [];
const INTERVAL_HEIGHT = 16;

export function Notification(options) {
  return createNotification(mergeProps(options));
}

const addInstance = (instance) => {
  instanceList.push(instance);
};
const createNotification = (options) => {
  const instance = createNotificationOpts(options);
  setZIndex(instance);
  addInstance(instance);
  addToBody(instance);
  return instance.proxy;
};
const createNotificationOpts = (opts) => {
  if (isVNode(opts.message)) {
    return createComponent(notificationComponent, opts, () => opts.message);
  }
  return createComponent(notificationComponent, opts);
};
const setZIndex = (instance) => {
  instance.vnode.el.style.zIndex = PopupManager.nextZIndex();
};
const addToBody = (instance) => {
  document.body.append(instance.vnode.el);
};
const mergeProps = (options) => {
  const position = options.position || "top-right";
  const verticalOffset = calculateVerticalOffset(position);
  console.log("mergeProps:", verticalOffset);
  const defaultOptions = { position, verticalOffset };

  const userOnClose = options?.onClose;
  delete options?.onClose;
  defaultOptions.onClose = (instance) => {
    closeNotification(instance);
    if (userOnClose) userOnClose(instance.proxy);
  };

  const userOnClick = options?.onClick;
  delete options?.onClick;
  defaultOptions.onClick = (instance) => {
    if (userOnClick) userOnClick(instance.proxy);
  };

  if (typeof options === "string" || isVNode(options)) {
    defaultOptions.message = options;
    return defaultOptions;
  }
  return Object.assign({}, defaultOptions, options);
};
const calculateVerticalOffset = (position, offset = 0) => {
  let verticalOfffset = offset;
  instanceList
    .filter((instance) => instance.props.position === position)
    .forEach((instance) => {
      verticalOfffset +=
        (instance.vnode.el.offsetHeight || 0) + INTERVAL_HEIGHT;
    });
  verticalOfffset += INTERVAL_HEIGHT;
  return verticalOfffset;
};

const closeNotification = (instance) => {
  updatePosition(instance);
};
const updatePosition = (closeInstance) => {
  const currentInstanceIndex = getIndexByInstance(closeInstance);
  if (currentInstanceIndex < 0) return;

  const instance = instanceList[currentInstanceIndex];
  const len = instanceList.length;
  removeInstance(instance);
  if (len <= 1) return;
  const position = instance.props.position;
  const removedHeight = instance.vnode.el.offsetHeight;
  for (let i = currentInstanceIndex; i < len - 1; i++) {
    if (instanceList[i].props.position === position) {
      const stl = instance.props.position.startsWith("top") ? "top" : "bottom";
      instanceList[i].vnode.el.style[stl] =
        parseInt(instanceList[i].vnode.el.style[stl], 10) -
        removedHeight -
        INTERVAL_HEIGHT +
        "px";
    }
  }
};
const removeInstance = (instance) => {
  instanceList.splice(getIndexByInstance(instance), 1);
};
const getIndexByInstance = (instance) => {
  return instanceList.findIndex((i) => i.uid == instance.uid);
};

["success", "warning", "info", "error"].forEach((type) => {
  Notification[type] = (options) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Notification(options);
  };
});

Notification.closeAll = () => {
  instanceList.forEach((instance) => {
    instance.proxy.close();
    removeInstance(instance);
  });
};
