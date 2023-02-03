import { createApp } from 'vue'
import App from './13_plugins使用/App.vue'
import registerDirectives from './11_自定义指令/directives';
import pluginObject from './13_plugins使用/plugins/plugins_object'
import pluginFunction from './13_plugins使用/plugins/plugins_function'
const app = createApp(App)

app.use(pluginObject)
app.use(pluginFunction)
registerDirectives(app)

app.mount('#app')
