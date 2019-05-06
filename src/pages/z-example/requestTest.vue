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
    import config from '../../common/api/config'
    export default {
        data() {
            return {
                idEle: 'dce17be799c04a0cb920a9ea6fd9ce18',
                EleName: '',
                pic: '',

            }
        },
        methods: {
            onLoad() {
                // 请求数据
                let that = this;
                let data = []
                this.$api.getView('/electronics/getById/'+ this.idEle, data).then(res => {
                    that.EleName = res.data.page.info.electronicsName;
                    that.pic = config.picUrl + res.data.page.info.electronicsPic;
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
            header {
                margin: 10px;
                color: cornflowerblue;
                font-size: 15px;
            }
        }
    }
</style>
