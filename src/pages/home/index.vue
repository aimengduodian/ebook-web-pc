<template>
    <div>
        <headerAd></headerAd>
        <section class="content has-header">
            <div class="list card">
                <header class="item item-avatar">
                    <img src="../../assets/pic/head.png">
                    <h2 style="margin-top:11px;">昵称：{{ userinfo.nickName }}</h2>
                </header>

                <article class="item item-body">
                    <div class="weui-cells">
                        <span class="weui-cell weui-cell_access">
                             <div class="weui-cell__bd">
                                <router-link :to="{path:'/advice' }">用户建议</router-link>
                             </div>
                            <div class="weui-cell__ft">
                            </div>
                        </span>
                        <span class="weui-cell weui-cell_access">
                            <div class="weui-cell__bd">
                                  <router-link :to="{path:'/version'}">关于我们</router-link>
                            </div>
                            <div class="weui-cell__ft">
                            </div>
                        </span>
                    </div>
                </article>
            </div>
        </section>
        <navbar></navbar>
    </div>
</template>

<script>
    import headerAd from '../../components/header';
    import navbar from '../../components/navbar';
    export default {
        name: "mycenter",
        components: {
            headerAd,
            navbar,
        },
        data() {
            return {
                userinfo: {
                    nickName: "vxiao",
                },
            }
        },
        created() {
        },
        methods: {},
    }
</script>

<style scoped>
    .add_border {
        border: saddlebrown 1px solid;
    }

    .router-link-active {
        text-decoration: none;
    }

</style>
