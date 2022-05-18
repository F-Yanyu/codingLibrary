<template>
  <div class='about'>
    <now-time></now-time>
    <!-- 高德地图组件 -->
    <amap-choose ref='AmapRef'></amap-choose>
    <!--    elementui表格组件-->
    <merge-table></merge-table>
    <!-- docx问你件保存，预览 -->
    <docx-file></docx-file>
    <!-- 动态表格 -->
    <splice-table></splice-table>
    <el-button @click='toRouterUser'>RouterParams</el-button>
    <g2plot></g2plot>
    <echarts-resize class='EchartsR'></echarts-resize>
<!--    <Button-->
<!--      :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}"-->
<!--      type='text'-->
<!--      @click='toggleClick'-->
<!--    >-->
<!--      <Icon type='md-menu' size='32'></Icon>-->
<!--    </Button>-->
  </div>
</template>
<script>
import amapChoose from '@/components/content/amap/amap-choose.vue'
import MergeTable from '@/components/content/table/MergeTable.vue'
import DocxFile from '@/components/content/docxfile/DocxFile.vue'
import SpliceTable from '@/components/content/table/SpliceTable.vue'
import G2plot from '@/components/content/G2plot/G2plot'
import NowTime from '@/components/content/nowtime/NowTime.vue'
import EchartsResize from '@/components/content/echartsResize/index.vue'

export default {
  name: 'about',
  data() {
    return {
      btnshow: true,
      shrink: false
    }
  },
  methods: {
    toggleClick() {
      this.shrink = !this.shrink
    },
    toRouterUser() {
      this.$router.push(
        '/user/fuyanyu'
      )
    }
  },
  components: {
    amapChoose,
    MergeTable,
    DocxFile,
    SpliceTable,
    G2plot,
    NowTime,
    EchartsResize
  }
}
</script>
<style lang='scss' scoped>
@import "./About.scss";
</style>
