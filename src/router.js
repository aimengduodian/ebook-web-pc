import Vue from 'vue'
import Router from 'vue-router'
//去除默认样式
import "./assets/scss/reset.scss"
//组件模块
import Home from './pages/home/index'
//测试模块
import Example from './pages/example.vue'
import Editor from './pages/editor.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/example',
            name: 'example',
            component: Example
        }, {
            path: '/editor',
            name: 'editor',
            component: Editor
        }
    ]
})
