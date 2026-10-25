import { createApp } from 'vue'

// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element ui

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
createApp(App).use(store).use(router).use(ElementPlus, { locale: zhCn }).mount('#app')

// new Vue({
//     router,
//     store,
//     render: h=> h(App)
// }).$mount('#app')




