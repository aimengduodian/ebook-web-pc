<template lang="html">
    <div>
        <headerAd/>
        <slider/>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <foot></foot>
        <navbar></navbar>
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
