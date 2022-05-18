<template>
  <div class='FilePreView_el-dialog'>
    <el-dialog
      :visible.sync='dialogVisible'
      :modal='false'
      :destroy-on-close='true'
      title='文件预览'
    >
      <!-- docx -->
      <div ref='file' id='pdf_viewer' style='overflow:visible'>
        <img :src='previewpic' alt=''>
      </div>
      <!--      <div id='imgDiv' v-if='imgShow'></div>-->
      <!--      <iframe :src='previewpic' id='wordPreView' frameborder='0' />-->
      <!--    <iframe src="https://view.officeapps.live.com/op/view.aspx?src=http://mczaiyun.top/ht/3.docx"  />-->
      <!--      <img :src='previewpic' alt='' v-if='imgShow'/>-->
      <!--          <span slot='footer' class='dialog-footer'>-->
      <!--            <el-button type='primary' @click='dialogVisible = false'>确定</el-button>-->
      <!--          </span>-->
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'

let docx = require('docx-preview')
import Pdfh5 from 'pdfh5'

export default {
  name: 'filePreView',
  data() {
    return {
      FileNo: false,
      pdfh5: null,
      dialogVisible: false,
      previewpic: '',
      // 文件后缀名
      ext: ''
    }
  },
  // mounted() {
  // this.init()
  // },
  // watch:{
  //   dialogVisible(){
  //     this.$nextTick(() => {
  //       let iframe = document.getElementById('zzDt')
  //       let iwindow = iframe.contentWindow
  //       iframe.addEventListener('load',function(){
  //         let idoc = iwindow.document
  //         let img = idoc.getElementsByTagName('img')[0]
  //         img.style.display = 'block'
  //         img.style.height = '70%'
  //         img.style.margin = '40px auto'
  //       })
  //     })
  //   }
  // },
  methods: {
    init(FileUrl, ext) {
      this.dialogVisible = true
      this.ext = ext
      // let index = FileUrl.lastIndexOf('.')  // 截取位置开始下标
      // this.ext = FileUrl.substr(index + 1)  // 获取后缀
      this.previewpic = FileUrl
      this.previewPic()
    },
    // previewPic() {
    //   if (this.ext == 'docx' || this.ext == 'doc' || this.ext == 'pptx') {
    //     this.previewpic = 'https://view.officeapps.live.com/op/view.aspx?src=' + this.previewpic
    //   }
    // else if (this.ext == 'png' || this.ext == 'jpg' || this.ext == 'jpeg') {
    //     let img = document.createElement('img')
    //     img.src = this.previewpic
    //     img.setAttribute('id', 'newImg')
    //     let imgDiv = document.getElementById('imgDiv')
    //     imgDiv.appendChild(img)
    // }
    // }
    // 预览大图
    previewPic() {
      if (this.ext === 'docx' || this.ext == 'png' || this.ext == 'jpg') {
        axios({
          method: 'get',
          responseType: 'blob', // 设置响应文件格式
          url: this.previewpic //对应文件路径
        }).then(({ data }) => {
          docx.renderAsync(data, this.$refs.file) // 渲染到页面预览
        })
      } else if (this.ext === 'pdf') {
        // PDF嵌入到网页
        this.pdfh5 = new Pdfh5(this.$refs.file, {
          pdfurl: this.previewpic
        })
        //监听完成事件
        this.pdfh5.on('complete', function(status, msg, time) {
          console.log(
            '状态：' +
            status +
            '，信息：' +
            msg +
            '，耗时：' +
            time +
            '毫秒，总页数：' +
            this.totalNum
          )
        })
      }
      // else {
      //   let arr = document.createElement('p')
      //   let txt = document.createTextNode('请检查文件格式，文件格式不支持')
      //   arr.appendChild(txt)
      //   let par = document.getElementById('pdf_viewer')
      //   par.appendChild(arr)
      //   // alert('请检查文件格式，文件格式不支持')
      //   // this.OnClose = true
      // }
    }
  }
}
</script>
<style lang='scss'>
.FilePreView_el-dialog {
  .el-dialog {
    text-align: center;
    width: 60%;
    height: 90%;
    margin-top: 2.5% !important;
    margin-bottom: 0 !important;
    overflow: auto;
  }
  //#wordPreView {
  //  width: 100%;
  //  height: 93.8vh;
  //  text-align: center;
  //}
  .el-dialog__body {
    padding: 0;
    font-size: 5px;
  }

  .el-dialog__header {
    text-align: start;
  }

  .docx-wrapper{
    background:none;
    padding:0;
  }
}
</style>
<style lang='scss' scoped>
.el-dialog {
  position: relative;

  #pdf_viewer {
    width:80%;
    height:100vh;
    text-align: center;
    margin:0 auto;
    //::-webkit-scrollbar {
    //  display: none;
    //}

  }
  //img {
  //  position: absolute;
  //  top: 50%;
  //  min-height: 100%;
  //  min-width: 100%;
  //  transition: all .3s;
  //  transform: translateY(-50%);
  //  z-index: -1;
  //}

  //#imgDiv {
  //
  //  img {
  //    position: absolute;
  //    top: 50%;
  //    min-height: 100%;
  //    min-width: 100%;
  //    transition: all .3s;
  //    transform: translateY(-50%);
  //    z-index: -1;
  //  }
  //}

}
</style>
