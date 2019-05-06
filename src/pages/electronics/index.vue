<template lang="html">
    <div>
        <headerAd/>
        <div :class="$style.content">
            <foot/>
        </div>
        <navbar/>
    </div>
</template>

<script>
    import headerAd from '../../components/filtrate';
    import navbar from '../../components/navbar';
    import foot from '../../components/footer'

    export default {
        components: {
            headerAd,
            navbar,
            foot,
        }
    }
</script>

<style lang="scss" module>
    .content {
        /*局部滑动，实现在微信中隐藏滚动条*/
        position: absolute;
        top: 12vh;
        left: 0;
        right: 0;
        height: 80vh;  /*根据设计稿计算高度*/
        overflow: scroll;
        transform: translate3d(0, 0, 0);
    }
</style>
