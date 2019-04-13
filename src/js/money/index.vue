<template lang="html">
    <div :class="$style.body">
        <headerAd/>
        <div :class="$style.content">
            <slider/>
            <foot/>
        </div>
        <navbar/>
    </div>
</template>

<script>
    import headerAd from '../components/header';
    import navbar from '../components/navbar';
    import foot from '../components/footer'
    import slider from '../money/mslider'
    export default {
        components: {
            headerAd,
            navbar,
            slider,
            foot,
        }
    }
</script>

<style lang="scss" module>
    .content {
        /*局部滑动，实现在微信中隐藏滚动条*/
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        height: 82vh;  /*根据设计稿计算高度*/
        overflow: scroll;
        transform: translate3d(0, 0, 0);
    }
</style>
