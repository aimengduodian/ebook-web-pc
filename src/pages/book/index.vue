<template lang="html">
    <div>
        <headerAd/>
        <div :class="$style.content">
            <grid-view :grid="grid" url="/book/books" :load="load"></grid-view>
        </div>
        <nav-bar/>
    </div>
</template>

<script>
    import headerAd from '../../components/filtrate';
    import navBar from '../../components/navbar';
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
        created() {
            this.queryList.flag = parseInt(this.$route.query.flag);
            this.$store.commit('setFlag', parseInt(this.$route.query.flag));
            this.initType();
            this.initGrid();
        },
        computed: {
            power() {
                return this.$store.getters.power;
            },
            power_flag() {
                return this.$store.getters.power_flag;
            }
        },
        methods: {
            search() {
                this.load++;
                this.isShow = false;//搜索下拉隐藏
                this.initGrid();
            },
            initGrid() {
                //console.log("this.grid",this.queryList)
                this.grid = {
                    img: 'bookPic',
                    query: this.queryList,
                    view: this.view,
                    del: this.del,
                    edit: this.update,
                    columns: [
                        {title: "名称", key: 'bookName'},
                        {title: "出版社", key: 'bookPub'},
                        {title: "价格", key: 'bookPrice', format: this.setPrice},
                    ],
                };
            },
            setPrice(row) {
                return "￥" + row.bookPrice;
            },
            view(row) {
                this.$router.push({path: '/bookView', query: {id: row.id}});
            },
            del(row, callback) {
                let para = {id: row.id};
                this.$post('/book/delete', para, (msg) => {
                    this.$createDialog({
                        type: 'alert',
                        title: '信息',
                        content: '删除成功 ',
                        icon: 'cubeic-right',
                        onConfirm: () => {
                            callback(msg.data.code);
                        }
                    }).show()
                });
            },
            update(row) {
                this.$router.push({path: '/bookAdd', query: {id: row.id}})
            },
            initType() {

            },
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
