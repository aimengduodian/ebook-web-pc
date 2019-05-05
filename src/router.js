import Vue from 'vue'
import Router from 'vue-router'
//去除默认样式
import "./assets/scss/reset.scss"
//组件模块
import Home from './pages/home/index'
import Book from './pages/book/index'
import Electronics from './pages/electronics/index'
import Tutor from './pages/tutor/index'
import Other from './pages/other/index'
//测试模块
//import Example from './pages/example.vue'
//import Editor from './pages/editor.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/book',
            name: 'book',
            component: Book
        }, {
            path: '/electronics',
            name: 'electronics',
            component: Electronics
        }, {
            path: '/tutor',
            name: 'tutor',
            component: Tutor
        }, {
            path: '/other',
            name: 'other',
            component: Other
        }
    ]
})
