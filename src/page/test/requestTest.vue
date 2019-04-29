<template lang="html">
    <div :class="$style.content">
        <h1>Axios模块测试</h1>
        <div>
            <header>断网测试</header>
           <!-- <article v-if="!network">
                <button @click="onRefresh">我没网了</button>
            </article>-->
        </div>
        <div>
            <header>post请求测试</header>
            <article>
                <h3>图书信息</h3>
                <p>{{bookName}}</p>
                <p>{{author}}</p>
                <h3>电子信息</h3>
                <p>{{EleName}}</p>
                <img :src="pic" alt="">
                <button @click="onLoad">测试加载</button>
            </article>
        </div>
        <router-view/>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                idBook: 'ce643ec922584fa7b750645072e51d79',
                bookName: '',
                author: '',
                idEle: '79649e1071f64f3ca020f0dce62e17bb',
                EleName: '',
                pic: '',

            }
        },
        methods: {
            onRefresh() {
                // 通过跳转一个空页面再返回的方式
                // 来实现刷新当前页面数据的目的
                this.$router.replace('/refresh')
            },
            onLoad() {
                // 请求page1数据
                this.$api.page1.testDetail(this.idBook, {}).then(res => {
                    this.author = res.data.page.info.author;
                    this.bookName = res.data.page.info.bookName;
                });
                // 请求page2数据
                this.$api.page2.testDetail(this.idEle, {}).then(res => {
                  //console.log(res)
                      this.EleName = res.data.page.info.electronicsName;
                      this.pic = 'http://47.106.222.50:8080' + res.data.page.info.electronicsPic;
                })
            }
        }
    }
</script>

<style lang="scss" module>
    .content {
        margin-top: 20px;
        width: 100%;
        text-align: center;
        h1 {
            font-size: 22px;
        }
        div {
            margin: 20px 0;
            header{
                margin: 10px;
                color: cornflowerblue;
                font-size: 15px;
            }
        }
    }
</style>
