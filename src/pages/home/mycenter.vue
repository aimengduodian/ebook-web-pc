<template>
    <div>
        <section class="content has-header">
            <div class="list card">
                <header class="item item-avatar">
                    <img src="../../assets/pic/timg.jpg">
                    <h2 style="margin-top:11px;">昵称：{{ userinfo.nickName }}</h2>
                </header>

                <article class="item item-body">
                    <div>
                        <div @click="sendChildDataToFather(1)">用户建议</div>
                        <br/>
                    </div>
                    <div>
                        <br/>
                        <div @click="sendChildDataToFather(2)">关于我们</div>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "mycenter",
        components: {},
        data() {
            return {
                userinfo: {
                    nickName: "vxiao",
                },
            }
        },
        created() {
        },
        methods: {
            sendChildDataToFather(num) {
                this.$emit('sendChildDataToFather', num)
            }
        },
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
