<template>
    <div class="cube-page" :class="type">
        <div class="wrapper">
            <main class="content">
                <slot name="content">{{content}}</slot>
            </main>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~cube-ui/src/common/stylus/variable.styl"
    .cube-page
        position: absolute
        z-index: 10
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: #efeff4
        > .wrapper
            height: 100%
            overflow-x: hidden
            overflow-y: auto
            .desc
                padding: 10px
                margin: 10px 0
                line-height: 20px
                font-size: 14px
            .content
                margin: 10px
</style>
