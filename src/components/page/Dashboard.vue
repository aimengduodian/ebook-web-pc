<template>
    <div>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-1">
                        <i class="el-icon-lx-people grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">1234</div>
                            <div>用户访问量</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-2">
                        <i class="el-icon-lx-notice grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">321</div>
                            <div>系统消息</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-3">
                        <i class="el-icon-lx-goods grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">5000</div>
                            <div>数量</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-3">
                        <div class="grid-cont-right">
                            <div style="font-size: 18px; font-weight: bold">上次登录时间</div>
                            <div>XXXX-XX-XX</div>
                            <div style="font-size: 18px; font-weight: bold">上次登录地点</div>
                            <div>**</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" style="height: 300px">
                    <div slot="header" class="clearfix">
                        <span>今日发布类型占比</span>
                    </div>
                    图书
                    <el-progress :percentage="11" color="#42b983"></el-progress>
                    电子
                    <el-progress :percentage="24" color="#f1e05a"></el-progress>
                    辅导
                    <el-progress :percentage="18"></el-progress>
                    其他
                    <el-progress :percentage="29" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card shadow="hover" style="height: 300px">
                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import Schart from 'vue-schart'
  import bus from '../common/bus'

  export default {
    name: 'dashboard',
    data () {
      return {
        name: sessionStorage.getItem('ms_username'),
        options: {
          type: 'bar',
          title: {
            text: '最近一周产品发布图'
          },
          xRorate: 25,
          labels: ['周一', '周二', '周三', '周四', '周五'],
          datasets: [
            {
              label: '图书',
              data: [234, 278, 270, 190, 230]
            },
            {
              label: '电子',
              data: [164, 178, 190, 135, 160]
            },
            {
              label: '辅导',
              data: [144, 198, 150, 235, 120]
            },
            {
              label: '其他',
              data: [184, 178, 159, 25, 190]
            }
          ]
        },
        options2: {
          type: 'line',
          title: {
            text: '最近几个售趋势图'
          },
          labels: ['6月', '7月', '8月', '9月', '10月'],
          datasets: [
            {
              label: '图书',
              data: [234, 278, 270, 190, 230]
            },
            {
              label: '电子',
              data: [164, 178, 150, 135, 160]
            },
            {
              label: '其他',
              data: [74, 118, 200, 235, 90]
            }
          ]
        }
      }
    },
    components: {
      Schart
    },
    computed: {
      role () {
        return this.name === 'admin' ? '超级管理员' : '普通用户'
      }
    },
    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
      changeDate () {
        const now = new Date().getTime()
        this.data.forEach((item, index) => {
          const date = new Date(now - (6 - index) * 86400000)
          item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        })
      }
      // handleListener() {
      //     bus.$on('collapse', this.handleBus);
      //     // 调用renderChart方法对图表进行重新渲染
      //     window.addEventListener('resize', this.renderChart);
      // },
      // handleBus(msg) {
      //     setTimeout(() => {
      //         this.renderChart();
      //     }, 200);
      // },
      // renderChart() {
      //     this.$refs.bar.renderChart();
      //     this.$refs.line.renderChart();
      // }
    }
  }
</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .schart {
        width: 100%;
        height: 300px;
    }
</style>
