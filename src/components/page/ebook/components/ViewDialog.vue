<template>
    <div>
        <!-- 查看弹出框 -->
        <el-dialog title="查看" :visible="visible" :show-close = false
                   width="60%">
            <el-row :gutter="24" v-if="pics.length">
                <el-col :span="18" :offset="3">
                    <el-carousel :interval="5000" arrow="always">
                        <el-carousel-item v-for="item in pics" :key="item" style="text-align: center">
                            <img :src="item" style="height: 100%" alt=""/>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>

            <el-row v-for="(item, index) in content" :key="index" :gutter="24" style="margin-top: 20px">
                <el-col :span="4" :offset="4">
                    <div>{{item.label}}:</div>
                </el-col>
                <el-col :span="12">
                    <p v-if="item.name === 'des'" style="float: left" v-html="item.value"/>
                    <div v-else style="float: left">{{item.value}}</div>
                </el-col>
            </el-row>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="closeDialog">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    name: 'viewDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      pics: {
        type: Array,
        default: function () {
          return []
        }
      },
      content: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      closeDialog () {
        this.$emit('close')
      }
    },
    watch: {

    }
  }
</script>

