<template lang="html">
    <div>
        <headerAd/>
        <div :class="$style.content">
            <slider/>
            <novice></novice>
            <borrow></borrow>
            <money></money>
            <product></product>
            <life></life>
            <foot></foot>
        </div>
        <navbar/>
    </div>
</template>

<script>
    import headerAd from '../../components/header';
    import navbar from '../../components/navbar';
    import slider from './hslider'
    import novice from './novice'
    import borrow from './borrow'
    import money from './money'
    import product from './product'
    import life from './life'
    import foot from '../../components/footer'

    export default {
        components: {
            headerAd,
            navbar,
            slider,
            novice,
            borrow,
            money,
            product,
            life,
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
        height: 84vh;  /*根据设计稿计算高度*/
        overflow: scroll;
        transform: translate3d(0, 0, 0);
    }
</style>
