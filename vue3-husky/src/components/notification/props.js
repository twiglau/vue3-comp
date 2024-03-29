export const notificationProps = {
  customClass: { type: String, default: "" },
  dangerouslyUserHTMLString: { type: Boolean, default: false },
  duration: { type: Number, default: 4500 },
  id: { type: String, default: "" },
  verticalOffset: { type: Number, default: 0 },
  message: [String, Object],
  position: { type: String, default: "top-right" },
  onClick: null,
  showClose: { type: Boolean, default: true },
  title: { type: String, default: "" },
  type: {
    type: String,
    default: "",
    validator(val) {
      return ["", "success", "warning", "info", "error"].includes(val);
    },
  },
};
