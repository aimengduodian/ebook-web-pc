import Vue from "vue"
import Router from "vue-router"
import "../styles/scss/reset.scss"
//组件模块
import Home from "../page/home/index"
import Money from "../page/money/index"
//组件测试模块
import StorageTest from "../page/test/storageTest"
import RequestTest from "../page/test/requestTest"
import Example from "../page/test/example"
import PicTest from "../../src/components/picUpload/picProcess"

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
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
        },
        {
            path: "/picTest",
            name: "picTest",
            component: PicTest,
        },
        {
            path: "/example",
            name: "example",
            component: Example,
        }
    ]
})
