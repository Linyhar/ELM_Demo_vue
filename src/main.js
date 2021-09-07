import Vue from 'vue'
import App from './App.vue'
//引入路由插件
import VueRouter from 'vue-router'
//引入路由对象
import router from "./router.js"

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

//引入通用的css
import "@/assets/css/resetbase.css"
//引入图标库
import "/public/aliicon_0wbet54pbps/iconfont.css"
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
