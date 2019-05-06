<template lang="html">
    <div>
        <headerAd/>
        <div :class="$style.content">
            <grid-view/>
        </div>
        <nav-bar/>
    </div>
</template>

<script>
    import headerAd from '../../components/filtrate'
    import navBar from '../../components/navbar'
    import gridView from '../../components/gridView'

    export default {
        name: 'Book',
        components: {
            headerAd,
            navBar,
            gridView,
        },
        data() {
            return {
                msg: '图书',
                grid: {},
                load: 0,
                queryList: {
                    bookName: '',
                    bookType: '',
                    startPrice: '',
                    endPrice: '',
                    startTime: '',
                    endTime: ''
                },
                bookTypeName: '',
                isShow: false
            }
        },
        methods: {
            getBookList() {
                // 请求book数据
                this.$api.page1.testDetail(this.idBook, {}).then(res => {
                    this.author = res.data.page.info.author;
                    this.bookName = res.data.page.info.bookName;
                });
            }
        }

    }
</script>

<style lang="scss" module>
    .content {
        /*局部滑动，实现在微信中隐藏滚动条*/
        position: absolute;
        top: 12vh;
        left: 0;
        right: 0;
        height: 80vh; /*根据设计稿计算高度*/
        overflow: scroll;
        transform: translate3d(0, 0, 0);
    }
</style>
