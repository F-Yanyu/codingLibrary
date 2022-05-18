<template>
  <div class='user'>
    我是通过params拿到的路由参数：{{this.$route.params}}
    <el-button @click='uploadFiles'>点击同时下载多个文件</el-button>
  </div>
</template>

<script>
export default {
  name: 'User',
  data(){
    return {
      fileData:['http://fuimg.fuyanyu.cn/3.%E8%AE%BA%E6%96%87%E6%A8%A1%E7%89%88.doc','http://fuimg.fuyanyu.cn/133.docx']
    }
  },
  methods:{
    uploadFiles(){
      for (let i = 0; i < this.fileData.length; i++) {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.style.height = 0;
        // url自己进行指定
        iframe.src = this.fileData[i];
        document.body.appendChild(iframe);
        // 不能马上将iframe进行删除，否者也会出现马上取消的情况
        setTimeout(() => {
          iframe.remove();
        }, 5 * 1000);
      }
    }
  }
}
</script>

<style scoped>

</style>
