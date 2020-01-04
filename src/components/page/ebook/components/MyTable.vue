<template>
    <div>
        <el-table :data="tableData" border class="table" header-cell-class-name="table-header">
            <el-table-column v-for="(item, index) in configData" :key="index"
                             :label="item.label" :align="item.align" :width="item.width">
                <template slot-scope="scope">{{scope.row[item.name]}}</template>
            </el-table-column>

            <el-table-column v-if="operation.display" :label="operation.label" fixed="right" :width="operation.width"
                             :align="operation.align">
                <template slot-scope="scope">
                    <el-button v-for="(item, index) in operation.btnArr" :key="index"
                               :type="item.type" :icon="item.icon"
                               @click="handleButton(scope.$index, scope.row, item.name)">{{item.label}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :total="totalPages"
                    @current-change="pageChange"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'myTable',
    props: {
      tableData: {
        type: Array,
        default: function () {
          return []
        }
      },
      configData: {
        type: Array,
        default: function () {
          return []
        }
      },
      operation: {
        type: Object,
        default: function () {
          return {
            display: false,
            label: '操作',
            align: 'center',
            width: 180,
            btnArr: [
              { label: '查看', type: 'text', icon: 'el-icon-edit', name: 'edit' },
              { label: '删除', type: 'text', icon: 'el-icon-delete', name: 'delete' }
            ]
          }
        }
      },
      totalPages: {
        type: Number,
        default: 0
      }
    },
    methods: {
      // 分页点击事件
      pageChange (currentPage) {
        this.$emit('pagechange', currentPage)
      },
      // 添加按钮点击事件
      handleButton (index, row, opt) {
        const msg = {
          index: index,
          row: row,
          opt: opt
        }
        this.$emit('btnclick', msg)
      }
    }
  }
</script>

<style scoped>
    .table {
        width: 100%;
        font-size: 14px;
    }
</style>
