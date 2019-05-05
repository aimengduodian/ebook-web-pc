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
                <div style="text-align: center">
                    <button @click="hideShowFilter" class="button  button-light icon-right ion-android-arrow-dropdown">
                        筛选
                    </button>
                </div>
            </li>
            <li>
                <div title="搜索" v-show="isShow">
                    <ul>
                        <li class="cube-index-list-item">
                            <div class="">
                                <div>
                                    <span>价格:</span>
                                    <span>
                                        <span>￥{{}}</span>&nbsp;&nbsp;至&nbsp;&nbsp;
                                        <span>￥{{}}</span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="cube-index-list-item">
                            <div>
                                <div>
                                    <span>图书类型:</span>
                                    <span class="book-name green"></span>
                                </div>
                            </div>
                        </li>
                        <li class="cube-index-list-item">
                            <div>
                                <div>
                                    <span>日期:</span>
                                </div>
                                <input type="text" readonly="readonly" placeholder="请选择开始日期">
                                <span class="line-span">——</span>
                                <input type="text" readonly="readonly" placeholder="请选择结束日期">
                            </div>
                        </li>

                        <li class="cube-index-list-item">
                            <cube-button :light="true">重置</cube-button>
                            <cube-button :light="true">搜索</cube-button>
                        </li>
                    </ul>
                </div>
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
        margin: 2px 0;
        & > h4 {
            display: none;
        }
        .content {
            @include flex;
            li {
                &:first-child {
                    @include flex(row);
                    input {
                        padding-left: 15px;
                        flex-grow: 1;
                    }
                    button {
                        margin-right: 2px;
                        margin-bottom: 4px;
                        color: white;
                        background-color: #56b6e7;
                        border: 1px solid transparent; //自定义边框
                        height: 100%;
                        width: 60px;
                        font-size: 16px;
                    }
                    border-bottom: 5px solid #f5f5f5;
                }
                &:nth-child(2) {
                    border-bottom: 5px solid #f5f5f5;
                    margin-top: 2px;
                }
                &:nth-child(3){
                    background-color: #f5f5f5;
                    z-index: 1200;
                }
            }
        }
    }

</style>
