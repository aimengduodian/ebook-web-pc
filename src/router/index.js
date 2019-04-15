import Vue from "vue"
import Router from "vue-router"
import "../styles/reset.scss"

//组件模块
import Home from "../page/home/index"
import Money from "../page/money/index"
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
