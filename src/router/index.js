import Vue from "vue"
import Router from "vue-router"
import "@/css/reset.scss"

//组件模块
import Home from "@/js/home/index"
import Money from "@/js/money/index"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        }
    ]
})
