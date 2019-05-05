import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
//导入cube-ui
import './assets/cube/cube-ui'
//导入api接口
import api from './common/request/api'

Vue.config.productionTip = false

//将api挂载到vue的原型上、定义为全局变量
Vue.prototype.$api = api;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
