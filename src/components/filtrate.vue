<template>
    <panel title="搜索*筛选" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.search">
                <input type="text" placeholder="点击搜索"/>
                <router-link style="display: inline-block" :to="{name:'home',query:{id:0}}">
                    <button>发布</button>
                </router-link>
            </li>
            <li>
                <cube-button @click="hideShowFilter" style="background-color: #f5f5f5; color: grey">
                    筛选
                </cube-button>
            </li>
            <li title="搜索" v-show="isShow" :class="$style.filter">
                <ul>
                    <li>
                        <label>价格:</label>
                        <input type="text" placeholder="￥起始"/>
                        <em class="line-span">——</em>
                        <input type="text" placeholder="￥结束"/>
                    </li>
                    <li>
                        <label>类型:</label>
                        <input type="text" placeholder="￥结束"/>
                    </li>
                    <li>
                        <label>日期:</label>
                        <input type="text" placeholder="请选择开始日期">
                        <em class="line-span">——</em>
                        <input type="text" placeholder="请选择结束日期">
                    </li>
                    <li>
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
        & > h4 {
            display: none;
        }
        height: 12vh;
        position: fixed;
        margin-top: 2px;
        left: 2px;
        right: 2px;
        background: #F5F5F5;
        text-align: center;
        z-index: 1200;
        .content {
            @include flex;
            .search {
                @include flex(row);
                box-sizing: border-box;
                input {
                    flex-grow: 1;
                    padding-left: 5%;
                }
                button {
                    height: 100%;
                    color: white;
                    background-color: #56b6e7;
                    border: 0 solid transparent; //自定义边框
                }
            }
            .filter {
                background-color: white;
                ul {
                    @include flex;
                    li {
                        @include flex(row);
                        label, em {
                            vertical-align:middle;
                            width: 15%;
                        }
                        input {
                            width: 35%;
                            flex-grow: 1;
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

</style>
