<template>
    <panel title="搜索*筛选" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <input type="text" placeholder="点击搜索"/>
                <router-link style="display: inline-block" :to="{name:'home',query:{id:0}}">
                    <button>发布</button>
                </router-link>
            </li>
            <li>
                <button @click="hideShowFilter" class="button  button-light icon-right ion-android-arrow-dropdown">
                    筛选
                </button>
            </li>
            <li title="搜索" v-show="isShow">
                <ul>
                    <li class="cube-index-list-item">
                        <label>价格:</label>
                        <input type="text" placeholder="￥起始"/>
                        <em>&nbsp;&nbsp;至&nbsp;&nbsp;</em>
                        <input type="text" placeholder="￥结束"/>
                    </li>
                    <li class="cube-index-list-item">
                        <label>类型:</label>
                        <input type="text" placeholder="￥结束"/>
                    </li>
                    <li class="cube-index-list-item">
                        <label>日期:</label>
                        <input type="text" placeholder="请选择开始日期">
                        <em class="line-span">——</em>
                        <input type="text" placeholder="请选择结束日期">
                    </li>
                    <li class="cube-index-list-item">
                        <cube-button :light="true">重置</cube-button>
                        <cube-button :light="true">搜索</cube-button>
                    </li>
                </ul>
            </li>
        </ul>

    </panel>
</template>

<script>
    import Panel from "./core/panel"

    export default {
        components: {Panel},
        data() {
            return {
                isShow: false,  //筛选面板是否显示
            }
        },
        methods: {
            //隐藏、显示筛选栏
            hideShowFilter() {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../assets/scss/element";

    .panel {
        @include panel;
        margin-top: 0;
        & > h4 {
            display: none;
        }
        .content {
            @include flex;
            li {
                border: 1px solid #f5f5f5;
                z-index: 1200;
                &:nth-child(1) {
                    @include flex(row);
                    input {
                        flex-grow: 1;
                       // padding-left: 5%;
                    }
                    button {
                        color: white;
                        background-color: #56b6e7;
                        border: 0 solid transparent; //自定义边框
                        height: 100%;
                        width: 60px;
                        font-size: 16px;
                    }
                }
                &:nth-child(2) {
                    button {
                        width: 100%;
                    }
                }
                &:nth-child(3) {
                    background-color: white;
                    ul {
                        @include flex;
                        li {
                            @include flex(row);
                            height: 6vh;
                            border: 0;
                            label, em {
                                text-align: center;
                                width: 15%;
                                line-height: 6vh;
                            }
                            input {
                                width: 35%;
                                height: 100%;
                            }

                            &:nth-child(2) {
                                input {
                                    width: 85%
                                }
                            }

                            &:nth-child(4) {
                                > * {
                                    display: inline-block;
                                    width: 50%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
