<template>
    <section :class="$style.header">
        <span :class="$style.left">
            <a>注册</a>&nbsp;|&nbsp;<a>登陆</a>
        </span>
        <btn :class="$style.appDownload">App下载</btn>
    </section>
</template>

<script>
import btn from './core/btn'
export default {
    components:{
        btn,
    },
}
</script>

<style lang="scss" module>
    //做css module处理
    .header{
        color: #666;
        height: 7vh;
        line-height: 7vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center no-repeat;
        background-size: auto 50%;
        z-index: 100;
        .left{
            font-size: 16px;
            padding: 0;
            margin-left: 12px;
        }
        .appDownload{
            float: right;
            font-size: 16px;
            height: 20px;
            border-width: 0;
            border-radius: 1px;
            padding: 0;
            margin: 15px 12px 0 0;
        }
    }
</style>
