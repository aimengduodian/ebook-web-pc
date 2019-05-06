<template>
    <div>
        <mycenter v-if="showPanelFlag === 0" @sendChildDataToFather="getChildData"></mycenter>
        <advice v-if="showPanelFlag === 1"></advice>
        <version v-if="showPanelFlag === 2"></version>
        <test></test>
        <navbar></navbar>
    </div>
</template>

<script>
    import navbar from '../../components/navbar';
    import advice from './advice';
    import version from './version';
    import mycenter from './mycenter';
    import test from '../z-example/requestTest';

    export default {
        components: {
            navbar,
            advice,
            version,
            mycenter,
            test,
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

