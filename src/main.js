import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routers/index' //router 名称不可自定义
//import './AI'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router:router,
  render: h => h(App) //render函数渲染模板， template只能渲染字符串
}).$mount("#apps");
