export default {
    install(app) {
        app.config.globalProperties.$name = "lau";
        console.log(app);
    }
}