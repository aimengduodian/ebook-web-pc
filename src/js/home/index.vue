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
    import headerAd from '../components/header';
    import navbar from '../components/navbar';
    import slider from './hslider'
    import novice from './novice'
    import borrow from './borrow'
    import money from './money'
    import product from './product'
    import life from './life'
    import foot from '../components/footer'
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
    .content{
        overflow: hidden;
    }
</style>
