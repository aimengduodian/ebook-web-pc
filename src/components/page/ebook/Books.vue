<template>
    <div>
        <div class="crumbs">
            <el-form :inline="true" class="demo-form-inline" style="text-align:left">
                <el-form-item label="图书名称">
                    <el-input placeholder="图书名称" v-model="searchForm.bookName"></el-input>
                </el-form-item>

                <el-form-item label="图书类型">
                    <el-select v-model="searchForm.bookType" clearable placeholder="请选择">
                        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"/>
                    </el-select>
                </el-form-item>

                <el-form-item label="开始时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="searchForm.startTime"
                                    style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="searchForm.endTime"
                                    style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="queryData">查询</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 自定义table表格 -->
        <div class="container">
            <my-table :table-data="tableData" :config-data="tableConfigMsg.tableTitle"
                      :operation="tableConfigMsg.operation" :total-pages="totalPages"
                      @pagechange="current_change"
                      @btnclick="handleOpt"/>
        </div>

        <!-- 查看弹出框 -->
        <my-view-dialog :visible="dialogMsg.editVisible" @close="dialogMsg.editVisible = false"
                        :pics="dialogMsg.pics" :content="dialogMsg.productInfo"/>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { fetchDeleteBook } from '@/api/ebook/book'
  import commonFunction from '../../../utils/common'
  import config from '../../../utils/BaseConfig'
  import MyViewDialog from './components/ViewDialog'
  import MyTable from './components/MyTable'

  export default {
    name: 'books',
    components: {
      MyViewDialog,
      MyTable
    },
    data () {
      return {
        // 搜索配置
        searchForm: {
          bookName: '',
          startTime: '',
          endTime: '',
          bookType: ''
        },
        // 弹框信息配置
        dialogMsg: {
          editVisible: false,
          pics: [],
          productInfo: [],
          productUserMsg: {
            nickname: { name: 'nickname', label: '发布人昵称', value: '无' },
            weiXin: { name: 'weiXin', label: '发布人微信', value: '无' },
            phone: { name: 'phone', label: '发布人电话', value: '无' },
            studNo: { name: 'studNo', label: '发布人学号', value: '无' }
          },
          bookMsg: [
            { name: 'id', label: '产品id', value: '无' },
            { name: 'author', label: '图书作者', value: '无' },
            { name: 'bookName', label: '图书名称', value: '无' },
            { name: 'bookPrice', label: '图书价格', value: '无' },
            { name: 'bookPub', label: '出版社', value: '无' },
            { name: 'bookType', label: '图书类型', value: '无' },
            { name: 'createTime', label: '发布时间', value: '无' },
            { name: 'phone', label: '联系人手机号', value: '无' },
            { name: 'weiXin', label: '联系人微信号', value: '无' },
            { name: 'des', label: '详细信息', value: '无' }
          ]
        },
        // 表格配置信息
        tableConfigMsg: {
          tableTitle: [
            { name: 'bookName', label: '图书名称', align: 'center', width: '' },
            { name: 'bookType', label: '图书类型', align: 'center', width: '180' },
            { name: 'bookPrice', label: '图书价格', align: 'center', width: '100' },
            { name: 'weiXin', label: '用户微信', align: 'center', width: '180' },
            { name: 'phone', label: '联系电话', align: 'center', width: '180' },
            { name: 'createTime', label: '发布日期', align: 'center', width: '180' },
            { name: 'viewTimes', label: '浏览次数', align: 'center', width: '180' }
          ],
          operation: {
            display: true,
            label: '操作',
            align: 'center',
            width: '180',
            btnArr: [
              { label: '查看', type: 'text', icon: 'el-icon-edit', name: 'edit' },
              { label: '删除', type: 'text', icon: 'el-icon-delete', name: 'delete' }
            ]
          }
        }
      }
    },
    created () {
      this.getData()
    },
    computed: {
      ...mapGetters({
        list: 'getBooks',
        totalPages: 'booksTotalPages',
        options: 'getBookTypes'
      }),
      tableData: function () {
        const table = JSON.parse(JSON.stringify(this.list))
        if (table !== null) {
          table.forEach(item => {
            Object.keys(item).forEach(key => {
              let aValues = item[key]
              if (key === 'bookType') {
                aValues = this.toType(aValues) || aValues
              } else if (key === 'createTime') {
                aValues = commonFunction.toDate(aValues) || aValues
              } else if (key === 'bookPrice') {
                aValues = '￥ ' + aValues
              }
              item[key] = aValues
            })
          })
        }
        return table
      }
    },
    methods: {
      getData () {
        this.$store.dispatch('updateBooks')
      },
      // 类型转换
      toType (type) {
        let result = type
        if (this.options !== null) {
          const obj = this.options.find(obj => {
            return Number(obj.id) === Number(type)
          })
          if (obj) {
            result = obj.name
          }
        }
        return result
      },
      // 分页
      current_change (currentPage) {
        this.$store.dispatch('changeNum', currentPage)
        this.getData()
      },
      // 分页导航
      handlePageChange (val) {
        this.$set(this.query, 'pageIndex', val)
        this.getData()
      },
      // 搜索
      queryData () {
        //将当前页初始化为1
        this.$store.dispatch('changeNum', 1)
        //将searchForm赋值给formDate
        this.$store.dispatch('changeData', this.searchForm)
        //调用方法进行搜索
        this.getData()
      },
      // 触发搜索按钮
      handleSearch () {
        this.$set(this.query, 'pageIndex', 1)
        this.getData()
      },
      handleOpt (val) {
        if (val.opt === 'edit') {
          this.handleEdit(val.index, val.row)
        }
        if (val.opt === 'delete') {
          this.handleDelete(val.index, val.row)
        }
      },
      // 查看详情
      handleEdit (index, row) {
        // 清空数据
        this.dialogMsg.productInfo = []

        // 保存图片信息
        let pic = row.bookPic.split(',')
        this.dialogMsg.pics = []
        for (let i = 0; i < pic.length; i++) {
          this.dialogMsg.pics[i] = config.picUrl + pic[i]
        }

        // 保存产品信息
        const aProductMsg = JSON.parse(JSON.stringify(this.dialogMsg.bookMsg))
        aProductMsg.forEach(item => {
          item.value = row[item.name]
        })
        this.dialogMsg.productInfo = this.dialogMsg.productInfo.concat(aProductMsg)

        console.log(row)
        // 保存创建人信息
        const userMsg = row.createUser
        Object.keys(this.dialogMsg.productUserMsg).forEach(key => {
          this.dialogMsg.productUserMsg[key].value = userMsg[key]
          this.dialogMsg.productInfo.push(this.dialogMsg.productUserMsg[key])
        })

        this.dialogMsg.editVisible = true
      },
      // 删除
      handleDelete (index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //调用方法进行删除
          let data = {
            id: row.id
          }
          fetchDeleteBook(data).then(res => {
            if (res.code === 100) {
              this.$message.success('删除成功')
            } else {
              this.$message.info('删除失败!')
            }
          }).catch((e) => {
            this.$message.info('数据包发送失败!')
          })
          this.getData()
        }).catch(() => {})
      }
    }
  }
</script>
