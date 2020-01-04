<template>
    <div>
        <div class="crumbs">
            <el-form :inline="true" class="demo-form-inline" style="text-align:left">
                <el-form-item label="商品名称">
                    <el-input placeholder="商品名称" v-model="searchForm.productName"></el-input>
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
                        :pics="dialogMsg.picMsg.picArr" :content="dialogMsg.productInfo"/>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {
    // fetchUsersReportDetail,
    fetchUsersReportMsgDelete,
    fetchReportUsers
  } from '../../../api/ebook/usersWarning'
  import commonFunction from '../../../utils/common'
  import config from '../../../utils/BaseConfig'
  import MyViewDialog from './components/ViewDialog'
  import MyTable from './components/MyTable'

  export default {
    name: 'productWarning',
    components: {
      MyViewDialog,
      MyTable
    },
    data () {
      return {
        // 搜索配置
        searchForm: {
          productName: '',
          startTime: '',
          endTime: '',
          reportType: '',
          productType: ''
        },
        // 弹框信息配置
        dialogMsg: {
          editVisible: false,
          picMsg: {
            picArr: [],
            bookMsg: 'bookPic',
            electronicsMsg: 'electronicsPic',
            othersMsg: 'otherPic'
          },
          productInfo: [],
          productUserMsg: {
            nickname: { name: 'nickname', label: '发布人昵称', value: '无' },
            weiXin: { name: 'weiXin', label: '发布人微信', value: '无' },
            phone: { name: 'phone', label: '发布人电话', value: '无' },
            studNo: { name: 'studNo', label: '发布人学号', value: '无' }
          },
          reportMsg: [
            { name: 'id', label: '消息id', value: '无' },
            { name: 'productId', label: '产品id', value: '无' },
            { name: 'productName', label: '名称', value: '无' },
            { name: 'productType', label: '产品类型', value: '无' },
            { name: 'reportType', label: '举报类型', value: '无' },
            { name: 'createUser', label: '发布用户', value: '无' },
            { name: 'createTime', label: '发布时间', value: '无' },
            { name: 'weiXin', label: '联系人微信号', value: '无' },
            { name: 'dataStatus', label: '数据状态', value: '无' },
            { name: 'des', label: '详细信息', value: '无' }
          ]
        },
        // 表格配置信息
        tableConfigMsg: {
          tableTitle: [
            { name: 'productName', label: '产品名称', align: 'center', width: '' },
            { name: 'productType', label: '产品类型', align: 'center', width: '180' },
            { name: 'reportType', label: '举报类型', align: 'center', width: '120' },
            { name: 'weiXin', label: '用户微信', align: 'center', width: '180' },
            { name: 'phone', label: '联系电话', align: 'center', width: '180' },
            { name: 'createTime', label: '发布日期', align: 'center', width: '180' },
            { name: 'viewTimes', label: '浏览次数', align: 'center', width: '80' }
          ],
          operation: {
            display: true,
            label: '操作',
            align: 'center',
            width: '300',
            btnArr: [
              { label: '查看商品', type: 'text', icon: 'el-icon-present', name: 'product' },
              { label: '处理', type: 'text', icon: 'el-icon-edit', name: 'edit' },
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
        list: 'getUsersWarningsList',
        totalPages: 'totalPages_report'
      }),
      tableData: function () {
        const table = JSON.parse(JSON.stringify(this.list))
        if (table !== null) {
          table.forEach(item => {
            Object.keys(item).forEach(key => {
              let aValues = item[key]
              if (key === 'createTime') {
                aValues = commonFunction.toDate(aValues) || aValues
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
        this.$store.dispatch('updateUsersWarnings')
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
        if (val.opt === 'report') {
          // 查看举报
          this.handleReportMsg(val.index, val.row)
        } else if (val.opt === 'edit') {
          // 处理举报产品
          this.handleProductProduct(val.index, val.row)
        } else if (val.opt === 'delete') {
          // 删除举报信息
          this.handleDeleteReportMsg(val.index, val.row)
        }
      },
      // 查看举报详情
      handleReportMsg (index, row) {
        this.dialogMsg.picMsg.picArr = []
        this.dialogMsg.productInfo = []

        // 保存产品信息
        const aProductMsg = JSON.parse(JSON.stringify(this.dialogMsg.reportMsg))
        aProductMsg.forEach(item => {
          item.value = row[item.name]
        })
        this.dialogMsg.productInfo = aProductMsg

        this.dialogMsg.editVisible = true
      },
      // 下架举报的产品
      handleProductProduct (index, row) {
        this.$confirm('此操将下架此产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let type = row.productType
          this.productTypes.forEach(item => {
            if (item.name === type) {
              type = item.id
            }
          })
          let data = {
            productType: Number(type),
            id: row.id,
            productId: row.productId
          }
          fetchReportUsers(data).then(res => {
            if (res.code === 100) {
              this.$message.success('操作成功')
            } else {
              this.$message.info('操作失败!')
            }
          }).catch((e) => {
            this.$message.info('数据包发送失败!')
          })
          this.getData()
        }).catch(() => {})
      },
      // 删除举报信息
      handleDeleteReportMsg (index, row) {
        this.$confirm('此操将删除此条举报信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //调用方法进行删除
          let data = {
            id: row.id
          }
          fetchUsersReportMsgDelete(data).then(res => {
            if (res.code === 100) {
              this.$message.success('删除成功')
            } else {
              this.$message.info('删除失败!')
            }
            this.getData()
          }).catch((e) => {
            this.$message.info('数据包发送失败!')
          })
        }).catch(() => {})
      }
    }
  }
</script>

