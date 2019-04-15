#Vue-router路由安装
###1.安装vue-router
    npm install vue-router
###2.创建router文件
    mkdir router/index.js
###3.在main.js中引入router的路径
    import router from 'router-path'
    new Vue({ router })
###4.在route/index.js文件中添加内容
    import Vue from 'vue'
    import Router from 'vue-router'
    //组件模板引入 
    import Main from 'path'
    
    export default new Router({
        routes: [
            {
                path: "/",
                name: "main",
                component: Main,
            },
        ]
    })
###5.使用路由
    html: 
        <router-link to="/">主页</router-link>
    
    跳转到指定组件js中: 
        this.$router.push('./main');
        
    返回上一级:
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
##
