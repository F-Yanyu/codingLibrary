<template>
  <div class='echartsResize'>
    <h1 style='text-align:center;color:deepskyblue'>让echarts图表变成响应的</h1>
    <el-button @click='editEcharts'>改变echarts大小</el-button>
    <div class='main' v-bind:class='{main2:btnState}'></div>
  </div>
</template>

<script>
// 通过element-resize-detector监听DOM元素
import elementResizeDetectorMaker from 'element-resize-detector'

export default {
  name: 'index',
  data() {
    return {
      btnState: false,
      // screenWidth:document.body.clientWidth
    }
  },
  mounted() {
    this.initEcharts()
    let that = this
    // 方法一 通过element-resize-detector监听dom元素
    let erd = elementResizeDetectorMaker()
    erd.listenTo(document.getElementsByClassName('main')[0], (element) => {
      let width = element.offsetWidth
      let height = element.offsetHeight
      console.log(width)
      console.log(height)
      that.$nextTick(() => {
        this.$echarts.init(document.getElementsByClassName('main')[0]).resize()
      })
    })

    // 方法二 通过监听窗口的变化赋值，监听值的改变，重新加载echarts图表
    // window.onresize = ()=>{
    //   return (()=>{
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //   })()
    // }
  },
  // watch:{
  //   // 方法二
  //   screenWidth(newV){
  //     // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
  //     if(!this.timer){
  //       this.screenWidth = newV
  //       this.timer = true
  //       let that = this
  //       setTimeout(()=>{
  //         console.log(this.screenWidth)
  //         this.$echarts.init(document.getElementsByClassName('main')[0]).resize()
  //         that.timer = false
  //       },400)
  //     }
  //   }
  // },
  methods: {
    initEcharts() {
      const chartDom = document.getElementsByClassName('main')[0]
      const myChart = this.$echarts.init(chartDom)
      let option

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }

      option && myChart.setOption(option)
    },
    editEcharts() {
      this.btnState = !this.btnState
    }
  }
}
</script>

<style scoped>
.main {
  width: 60%;
  height: 400px;
  background-color: deepskyblue;
  transition: all 1s ease-out;
}

.main2 {
  width: 100%;
  height: 1000px;
  background-color: deepskyblue;
}
</style>
