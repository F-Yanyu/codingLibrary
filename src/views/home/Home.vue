<template>
  <!--//? vue相关的demo页面，相关的时间和传值操作 -->
  <div class="home">
    <Tabs type="card" :animated="false" class="demo-tabs-style2">
      <TabPane label="综合"><comprehensive></comprehensive></TabPane>
      <TabPane label="前段"><front-end></front-end></TabPane>
      <TabPane label="后端"><rear-end></rear-end></TabPane>
    </Tabs>
  </div>
</template>

<script>
import Comprehensive from '@/views/home/comprehensive/Comprehensive'
import FrontEnd from '@/views/home/front-end/FrontEnd'
import RearEnd from '@/views/home/rear-end/RearEnd'

export default {
  name: 'Home',
  data() {
    return {
      firstname: '',
      showView: false
    }
    /**
     *  监听
     *  immediate：! 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样
     *  deep：那么我们需要监听obj里的属性a的值呢？这时候deep属性就派上用场了:
     */
    // watch: {
    //   //普通属性监听
    //   // firstname: function (newname, oldname) {
    //   //   this.fullcontent = newname + '' + this.lastname
    //   // },
    //
    //   // 属性监听
    //   firstname: {
    //     handler(newname) {
    //       console.log('先执行handler')
    //       this.fullcontent = newname + '' + this.lastname
    //     },
    //     immediate: true,
    //     deep: true
    //   }
  },
  // 自定义指令
  directives: {
    focus: {
      //? 指令的定义  页面加载时绑定事件的属性立即获取聚焦
      inserted: function (el) {
        el.focus()
      }
    }
    // delete: {
    //   inserted: function(el) {
    //     el.delete()
    //   }
    // }
  },
  components: {
    Comprehensive,
    FrontEnd,
    RearEnd
  },
  methods: {
    // 弹框信息
    // commitContent() {
    //   // 自定义模板
    //   // const h = this.$createElement
    //   // this.$message({
    //   //   message: h('p', { style: 'backgroud:blue' }, [
    //   //     h('p', { style: 'color:red' }, '内容可以是'),
    //   //     h('i', null, '付延余')
    //   //   ])
    //   // })
    //
    //   // 使用elementui弹框提示
    //   // this.$message.error('别点我')
    // },
    // 接受子组件的值
    // showname(firstname) {
    //   this.firstname = firstname
    // }
    toAboutComponets() {
      this.$router.push('/about')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Home.scss';
</style>
