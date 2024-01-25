<template>
  <Transition
    name="el-notification-fade"
    @after-leave="handleAfterLeave"
    appear
  >
    <div
      v-show="visible"
      :class="['el-notification', customClass, horizontalClass]"
      :style="positionStyle"
      @keydown="handleKeydown"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      @click="onClickHandler"
      role="alert"
    >
      <div class="el-notification__title">
        {{ title }}
      </div>
      <div class="el-notification__message">
        {{ message }}
      </div>
      <button
        v-if="showClose"
        class="el-notification__close-button"
        @click="onCloseHandler"
      >
        关闭
      </button>
    </div>
  </Transition>
</template>
<script>
export default {
  name: "ElNotification",
};
</script>
<script setup>
import { computed, getCurrentInstance, ref } from "vue";
import { notificationProps } from "./props";
const props = defineProps(notificationProps);
const emit = defineEmits(["click", "close"]);

const instance = getCurrentInstance();
const visible = ref(true);
const verticalOffsetVal = ref(props.verticalOffset);

const horizontalClass = computed(() => {
  return props.position.endsWith("right") ? "right" : "left";
});
const verticalProperty = computed(() => {
  return props.position.startsWith("top") ? "top" : "bottom";
});
/** 没有起作用 */
const positionStyle = computed(() => {
  return {
    [verticalProperty.value]: `${verticalOffsetVal.value}px`,
  };
});

const _click = () => {
  emit("click", instance);
};
const handleClick = () => {
  _click();
};
const click = () => {
  _click();
};

const _close = () => {
  clearTimeout(timer);
  emit("close", instance);
  visible.value = false;
};
const handleClose = () => {
  _close();
};
const close = () => {
  _close();
};

let timer;
const delayClose = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      _close();
    }, props.duration);
  }
};

const handleKeydown = (e) => {
  if (e.keyCode == 46 || e.keyCode == 8) {
    clearTimeout(timer);
  } else if (e.keyCode == 27) {
    _close();
  } else {
    delayClose();
  }
};
const handleMouseenter = () => {
  clearTimeout(timer);
};
const handleMouseleave = () => {
  delayClose();
};
const handleAfterLeave = () => {
  instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
};

delayClose();

defineExpose({
  close,
  click,
  visible,
  positionStyle,
  horizontalClass,
  verticalProperty,
  verticalOffsetVal,
  handleClose,
  handleClick,
  handleKeydown,
  handleMouseenter,
  handleMouseleave,
  handleAfterLeave,
});
</script>

<style lang="scss">
@import "../styles/mixin";
@include b(notification) {
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  border: solid 1px #eeeeee;
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba($color: #000000, $alpha: 0.2);
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  overflow: hidden;
  &.right {
    right: 16px;
  }
  &.left {
    left: 16px;
  }

  .el-notification__title {
    font-weight: bold;
    font-size: 16px;
    color: #333;
    margin: 0;
  }
  .el-notification__message {
    font-size: 14px;
    line-height: 21px;
    margin: 6px 0 0 0;
    color: #666666;
    text-align: justify;
    p {
      margin: 0;
    }
  }
  .el-notification__close-button {
    position: absolute;
    top: 18px;
    right: 15px;
    cursor: pointer;
    color: #999;
    font-size: 12px;
    &:hover {
      color: #333;
    }
  }
}

.el-notificaiton-fade-enter-from {
  &.right {
    right: 0;
    transform: translateX(100%);
  }
  &.left {
    left: 0;
    transform: translateX(-100%);
  }
}
.el-notificaiton-fade-leave-active {
  opacity: 0;
}
</style>
