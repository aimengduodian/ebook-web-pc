<template>
    <section :class="$style.header">
        <span :class="$style.left">
            <a>注册</a>&nbsp;|&nbsp;<a>登陆</a>
        </span>
        <btn :class="$style.appDownload">App下载</btn>
    </section>
</template>

<script>
import btn from '../core/btn'
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
        height: 50px;
        line-height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 16px;
        background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center no-repeat;
        background-size: auto 50%;
        z-index: 100;
        .left{
            font-size: 14px;
            height: 15px;
            line-height: 15px;
            margin: 9px 0 0 9px;
        }
        .appDownload{
            float: right;
            font-size: 12px;
            border-width: 0;
            height: 28px;
            line-height: 28px;
            min-width: 60px;
            padding: 0;
            border-radius: 2px;
            margin: 14px 12px 0 0;
        }
    }
</style>
