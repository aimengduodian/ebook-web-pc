##vue-cli 3.x搭建的项目，路由要手动安装
##1.npm install vue-router
##2.创建router文件
##3.在main.js中引入router的路径
#   import router from 'router-path'
#   new Vue({ router })
##4.在route文件中添加内容
#   import Vue from 'vue'
#   import Router from 'vue-router'
#   组件模板引入 import Main from 'path'
#   Vue.use(Router)
#   export default new Router({ routes:[{path:'/', name:'home', component: Main}] })
##5.使用路由html中 <router-link to="/">主页</router-link>
#   跳转到指定组件js中 this.$router.push('./main');
#   返回上一级 window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
