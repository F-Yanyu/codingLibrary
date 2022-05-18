<template>
  <div>
    <el-dialog :visible.sync="visible">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          :prop="item"
          :label="item"
          width="180"
          v-for="(item, index) in tableTitle.En"
          :key="index"
        >
        </el-table-column>
        <el-table-column prop="file" label="file">
          <template slot-scope="scope">
            <span @click="previewPic(scope.row.file)">{{scope.row.name}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="btnClick">删除第一项</el-button>
    </el-dialog>

    <file-pre-view v-if="zizujianvisible" ref="FilePreViewRef"></file-pre-view>

    <el-button @click="visible = true">SpliceTable</el-button>
  </div>
</template>

<script>
import FilePreView from './filePreView.vue'
export default {
  name: 'SpliceTable',
  data() {
    return {
      visible: false,
      tableTitle: {
        En: ['date', 'name', 'address']
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          file: 'http://fuimg.fuyanyu.cn/c0249164eb83db4af74bcee6c3a2e58d.jpg'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          file: 'http://fuimg.fuyanyu.cn/Web%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88_%E4%BB%98%E5%BB%B6%E4%BD%99.pdf'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          file: 'http://fuimg.fuyanyu.cn/7E1F2C90A56745502F8AC5286704DA39.pptx'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          file: 'http://fuimg.fuyanyu.cn/3.%E8%AE%BA%E6%96%87%E6%A8%A1%E7%89%88.doc'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          file: 'http://fuimg.fuyanyu.cn/133.docx'
        }
      ],
      previewpicUrl: '',
      ext: '',
      zizujianvisible: false
    }
  },
  components: {
    FilePreView
  },
  methods: {
    btnClick() {
      // for(let i = 0;i<this.tableTitle.length;i++){
      //   if(i===2){
      //     this.
      //   }
      // }
      this.tableTitle.En.splice(1, 1)
    },
    previewPic(url) {
      this.zizujianvisible = true
      this.previewpicUrl = url
      let index = url.lastIndexOf('.')  // 截取位置开始下标
      this.ext = url.substr(index + 1)  // 获取后缀
      if(this.ext == 'pdf'|| this.ext =='docx'||this.ext=='jpg'||this.ext=='png'||this.ext=='jpeg'){
        this.$nextTick(() => {
          this.$refs.FilePreViewRef.init(this.previewpicUrl,this.ext)
        })
      }else{
        alert('文件类型不支持，请检查文件格式')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// #pdf_viewer {
//   width: 100%;
//   height: 100%;
// }
</style>
