import dayjs from "dayjs";
export default function(app) {
    app.directive("format-time", {
        mounted(el, bindings) {
            // 1. 也可以把formatString放在 created 里面
            let formatString = bindings.value;
            if(!formatString) {
                formatString = "YYYY-MM-DD HH:mm:ss"
            }

            const textContent = el.textContent;
            let timestamp = parseInt(textContent);
            if(textContent.length === 10) {
                timestamp = timestamp * 1000;
            }
            el.textContent = dayjs(timestamp).format(formatString)

        }
    })
}