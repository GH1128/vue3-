import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // 样式初始化
import { componentsPlugin, componentIcon } from './element-plus/index'
import 'element-plus/dist/index.css'
import '@/style/index.less'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

const app = createApp(App)

componentsPlugin(app)
componentIcon(app)

app.use(store).use(router).mount('#app')
