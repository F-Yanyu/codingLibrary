import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import store from './store'
import AMap from 'vue-amap'
import * as echarts from 'echarts'
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  importRequest,
  uploadFileRequest
} from '@/libs/axios'

Vue.use(AMap)
window._AMapSecurityConfig = {
  securityJsCode: '68da64d679406744d82c934013e1c59e'
}
AMap.initAMapApiLoader({
  key: 'b2a026e168c11383249e83f99e676e80',
  plugin: [
    'AMap.Autocomplete', //输入提示插件
    'AMap.PlaceSearch', //POI搜索插件
    'AMap.Scale', //右下角缩略图插件 比例尺
    'AMap.OverView', //地图鹰眼插件
    'AMap.ToolBar', //地图工具条
    'AMap.MapType', //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    'AMap.PolyEditor', //编辑 折线多，边形
    'AMap.CircleEditor', //圆形编辑器插件
    'AMap.Geolocation' //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  v: '1.4.15'
})

Vue.use(ElementUI)
Vue.use(ViewUI)

Vue.config.productionTip = false

// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.importRequest = importRequest
Vue.prototype.uploadFileRequest = uploadFileRequest
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
