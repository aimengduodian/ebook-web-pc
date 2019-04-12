<template lang="html">
    <div>
        <headerAd/>
        <slider/>
        <foot/>
        <navbar/>
    </div>
</template>

<script>
    import headerAd from '@/js/components/header';
    import navbar from '@/js/components/navbar';
    import foot from '@/js/components/footer'
    import slider from '@/js/money/mslider'
    export default {
        components: {
            headerAd,
            navbar,
            slider,
            foot,
        }
    }
</script>
