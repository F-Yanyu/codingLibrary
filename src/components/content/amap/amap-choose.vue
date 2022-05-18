<template>
  <div class='amap__wrapper'>
    <el-dialog
      title='选择坐标'
      width='70%'
      :modal-append-to-body='true'
      :append-to-body='true'
      @close='closeHandle'
      :visible.sync='dialogVisible'
    >
      <el-row>
        <div class='amap-page-container'>
          <el-amap-search-box
            class='search-box'
            ref='searchBox'
            :search-option='searchOption'
            :on-search-result='onSearchResult'
            :center='center'
          ></el-amap-search-box>
          <el-amap
            :vid="'amap-vue'"
            :zoom='zoom'
            ref='map'
            :center='center'
            :events='events'
            :plugin='plugins'
            style='height:500px;'
          >
            <el-amap-marker
              :position='marker.position'
              :events='marker.events'
              :visible='marker.visible'
              :draggable='marker.draggable'
            ></el-amap-marker>
          </el-amap>
        </div>
      </el-row>
      <span slot='footer' class='dialog-footer'>
        <el-button @click='dialogVisible = false'>取 消</el-button>
        <el-button type='primary' @click='submit'>确 定</el-button>
      </span>
    </el-dialog>
    <el-button @click='opendialog'>高德地图</el-button>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap'

const amapManager = new AMapManager()
export default {
  data() {
    return {
      q: '',
      zoom: 14,
      amapManager,
      point: {},
      center: [114.514859, 38.042306],
      marker: {
        address: '',
        position: [114.514859, 38.042306],
        visible: true,
        draggable: false
      },
      searchOption: {
        city: '全国',
        citylimit: false
      },
      plugins: [
        {
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 100, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: false, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: 'all',
          // 地图定位按钮
          pName: 'Geolocation',
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.center = [self.lng, self.lat]
                self.loaded = true
                self.$nextTick()
              }
            })
          }
        }
        // {
        //   //地图工具条
        //   pName: "ToolBar",
        //   init(o) {},
        // },
        // {
        //   // 左下角缩略图插件 比例尺
        //   pName: 'Scale',
        //   // init(o) {
        //   // }
        // }
      ],
      events: {
        click: (e) => {
          this.marker.position = [e.lnglat.lng, e.lnglat.lat]
          this.getFormattedAddress()
        }
      },
      dialogVisible: false
    }
  },
  methods: {
    // ?父组件打开弹框
    opendialog(value) {
      this.dialogVisible = value
    },
    open(lng, lat) {
      if (lng && lat) {
        this.center = [lng, lat]
        this.marker.position = [lng, lat]
      }
      this.dialogVisible = true
    },
    onSearchResult(pois) {
      if (pois.length > 0) {
        this.$nextTick(() => {
          this.$refs.searchBox.keyword = pois[0].name
        })
      }
      // 这边类似模糊查询 会返回一个数组，我就直接取第一个值了。
      this.center = [pois[0].lng, pois[0].lat]
    },
    submit() {
      this.$emit('on-choose', this.point)
      this.dialogVisible = false
    },
    getFormattedAddress() {
      // eslint-disable-next-line no-undef
      AMap.plugin('AMap.Geocoder', () => {
        const GeocoderOptions = { city: '秦皇岛' }
        // eslint-disable-next-line no-undef
        const geocoder = new AMap.Geocoder(GeocoderOptions)
        geocoder.getAddress(this.marker.position, (status, result) => {
          console.log('通过经纬度拿到的地址', result)
          if (status === 'complete' && result.info === 'OK') {
            this.marker.address = result.regeocode.formattedAddress
            this.point = result.regeocode
          } else {
            this.marker.address = '无法获取地址'
          }
        })
      })
    },
    // 弹窗关闭时
    closeHandle() {
    }
  }
}
</script>
<style lang='scss'>
.amap__wrapper {
  .el-dialog__wrapper{
    .el-dialog {
    }
  }

}
</style>

<style lang='scss' scoped>
.amap__wrapper {
  .amap-page-container {
    /*width: 100%;*/
    /*height: 100%;*/
  }

  .search-box {
    margin-top: 0px;
    position: relative;
    top: 65px;
    left: 20px;
  }
}

</style>
