<template>
    <div :class="[btnClass, cname]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    //属性传递
    props: {
        cname: {
            type: String,
            required: false, //是否为必填
            default: "",
        },
    },
    data() {
        return {
            btnClass: "btn",
        }
    }
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.btn{
    @include btn;
}
</style>
