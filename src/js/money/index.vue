<template lang="html">
    <div>
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
    .content{
        overflow: hidden;
    }
</style>
