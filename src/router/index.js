import Vue from "vue"
import Router from "vue-router"
import "../css/reset.scss"

//组件模块
import Home from "../js/home/index"
import Money from "../js/money/index"
//组件测试模块
import StorageTest from "../../test/storageTest"
import RequestTest from "../../test/requestTest"

Vue.use(Router);

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
        },
        {
            path: "/storageTest",
            name: "storageTest",
            component: StorageTest,
        },
        {
            path: "/requestTest",
            name: "requestTest",
            component: RequestTest,
        }
    ]
})
