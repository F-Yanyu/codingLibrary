<template>
  <div class="g2plot">
    <div id="container"></div>
  </div>
</template>

<script>
// import { Line } from '@antv/g2plot';
import { Liquid } from '@antv/g2plot'
export default {
  name: 'G2plot',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // const data = [
      //   { year: '1991', value: 3 },
      //   { year: '1992', value: 4 },
      //   { year: '1993', value: 3.5 },
      //   { year: '1994', value: 5 },
      //   { year: '1995', value: 4.9 },
      //   { year: '1996', value: 6 },
      //   { year: '1997', value: 7 },
      //   { year: '1998', value: 9 },
      //   { year: '1999', value: 13 },
      // ];

      const liquidPlot = new Liquid('container', {
        percent: 0.55,
        shape: 'diamond',
        outline: {
          border: 4,
          distance: 8
        },
        wave: {
          length: 128
        }
      })

      liquidPlot.render()
    }
  }
}
</script>

<style scoped>
#container {
  width: 300px;
  height: 300px;
}
</style>
