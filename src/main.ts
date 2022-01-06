import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' // css初始化

import '@/assets/fonts/iconfont.css'
import * as ElIconModules from '@element-plus/icons'
// 引入Element-Plus
import 'element-plus/lib/theme-chalk/index.css'
import { components, plugins } from './element-plus/index'
// 创建实例
const app = createApp(App)
// 统一注册el-icon图标
for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
}
// 循环注册组件
components.forEach(component => {
    app.component(component.name, component)
})

// 循环注册插件
plugins.forEach(plugin => {
    app.use(plugin)
})

app.use(store).use(router).mount('#app')


