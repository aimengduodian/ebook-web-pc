<template>
    <cube-page type="scroll-view" class="toutiao">
        <template slot="content">
            <div class="content-scroll-wrapper">
                <div class="content-scroll-list-wrap" ref="scrollWrapper">
                    <cube-scroll ref="contentScroll"
                                 :data="content"
                                 :options="options"
                                 @pulling-down="onPullingDown"
                                 @pulling-up="onPullingUp">
                        <ul class="imgs-wrapper">
                            <li v-for="(item, index) in content" :key="index" class="imgs-item">
                                <div v-if="item.id !== '0'" class="item item-thumbnail-left">
                                    <img :src="item.url" @load="onImgLoad">
                                    <p>哈哈哈哈哈哈哈哈哈</p>
                                    <p>嘿嘿嘿嘿嘿</p>
                                    <p>哈哈哈哈哈哈哈哈哈</p>
                                </div>
                                <div v-else>
                                    <ads></ads>
                                </div>
                            </li>
                        </ul>
                        <template slot="pulldown" slot-scope="props">
                            <div v-if="props.pullDownRefresh" class="cube-pulldown-wrapper"
                                 :style="props.pullDownStyle">
                                <div v-if="props.beforePullDown" class="before-trigger"
                                     :style="{paddingTop: props.bubbleY + 'px'}">
                                    <span :class="{rotate: props.bubbleY > 0}">🌹</span>
                                </div>
                                <div class="after-trigger" v-else>
                                    <div v-show="props.isPullingDown" class="loading">
                                        <cube-loading></cube-loading>
                                    </div>
                                    <transition name="success">
                                        <div v-show="!props.isPullingDown" class="text-wrapper">
                                            <span class="refresh-text">ebook向您推荐成功</span>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </template>
                    </cube-scroll>
                </div>
            </div>
        </template>
    </cube-page>
</template>

<script type="text/ecmascript-6">
    import CubePage from './core/cube-page.vue'
    import Ads from '../pages/tutor/borrow'

    const imgs = [
        {
            id: 'ffhseufhesif',
            url: 'https://dpubstatic.udache.com/static/dpubimg/7EzIhoEvnG/toutiao_12.JPG'
        },
        {
            id: 'ffhseufhesif',
            url: 'https://dpubstatic.udache.com/static/dpubimg/GR0Piaf5sz/toutiao_21.JPG'
        },
        {
            id: '0',
            url: 'https://dpubstatic.udache.com/static/dpubimg/K1JqUN8HSA/toutiao_31.JPG'
        },
        {
            id: 'ffhseufhesif',
            url: 'https://dpubstatic.udache.com/static/dpubimg/K1JqUN8HSA/toutiao_31.JPG'
        }
    ]
    let cnt = 1
    export default {
        props: {
            listMsg: {
                type: Array,
                default: [],
            },
            content: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                content: imgs.slice(),
                options: {
                    pullDownRefresh: {
                        threshold: 60,
                        stopTime: 1000,
                        txt: '更新成功'
                    },
                    pullUpLoad: true
                },
                secondStop: 26
            }
        },
        components: {
            CubePage,
            Ads
        },
        methods: {
            onPullingDown() {
                setTimeout(() => {
                    this.content.unshift(imgs[cnt++ % 3])
                    this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
                }, 1000)
            },
            onPullingUp() {
                setTimeout(() => {
                    this.content = this.content.concat(imgs)
                }, 1000)
            },
            onImgLoad() {
                const contentScroll = this.$refs.contentScroll
                contentScroll.scroll.beforePullDown && contentScroll.refresh()
            }
        },
        mounted() {
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .toutiao
        .content
            margin: 0 !important
            height: 100%
            display: flex
            flex-flow: column
        .content-scroll-wrapper
            flex: 1
            position: relative
            .content-scroll-list-wrap
                height: 100%
                width: 100%
                transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
                position: absolute
                top: 0
                bottom: 0
                overflow: hidden
                .imgs-wrapper
                    .imgs-item
                        padding-bottom 5px
                        > img
                            width: 100%
        .cube-pulldown-wrapper
            text-align: center
            .before-trigger
                height: auto
                font-size: 30px
                align-self: flex-end
                span
                    display: inline-block
                    line-height: 1
                    transition: all 0.3s
                    color: #666
                    padding: 15px 0
                    &.rotate
                        transform: rotate(180deg)
            .after-trigger
                flex: 1
                margin: 0
                .text-wrapper
                    margin: 0 auto
                    margin-top: 14px
                    padding: 5px 0
                    color: #498ec2
                    background-color: #d6eaf8
                .cube-loading-spinners
                    margin: auto
        .success-enter-active, .success-leave-active
            transition: width .5s
        .success-enter, .success-leave-to
            width: 70%
        .success-enter-to, .success-leave
            width: 100%
</style>
