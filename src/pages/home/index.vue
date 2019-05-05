<template>
    <div>
        <headerAd></headerAd>
        <mycenter v-if="showPanelFlag === 0" @sendChildDataToFather="getChildData"></mycenter>
        <advice v-if="showPanelFlag === 1"></advice>
        <version v-if="showPanelFlag === 2"></version>
        <navbar></navbar>
    </div>
</template>

<script>
    import headerAd from '../../components/filtrate';
    import navbar from '../../components/navbar';
    import advice from './advice';
    import version from './version';
    import mycenter from './mycenter';

    export default {
        components: {
            headerAd,
            navbar,
            advice,
            version,
            mycenter,
        },
        data() {
            return {
                userinfo: {
                    nickName: "vxiao",
                },
                showPanelFlag: 0,  //显示哪一个组件1.用户建议 2.关于我们
            }
        },
        created() {
        },
        methods: {
            getChildData(data) {
                this.showPanelFlag = parseInt(data);
            }
        },
    }
</script>

