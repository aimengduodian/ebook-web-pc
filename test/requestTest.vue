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
                <p>{{bookName}}</p>
                <p>{{author}}</p>
                <button @click="onLoad">测试加载</button>
            </article>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import store from "../src/js/store";

    export default {
        data() {
            return {
                id: 'ce643ec922584fa7b750645072e51d79',
                bookName: '',
                author: ''
            }
        },
        methods: {
            onRefresh() {
                // 通过跳转一个空页面再返回的方式
                // 来实现刷新当前页面数据的目的
                this.$router.replace('/refresh')
            },
            onLoad() {
                // 请求数据
                this.$api.page1.testDetail(this.id, {}).then(res => {
                    this.author = res.data.page.info.author;
                    this.bookName = res.data.page.info.bookName;
                    console.log(store.state);
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
