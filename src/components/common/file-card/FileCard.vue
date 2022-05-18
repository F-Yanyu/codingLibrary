<template>
  <div class="file-card">
    <Card
      :style="{ width: CardWidth }"
      v-for="(item, index) in DataList"
      :key="index"
    >
      <template #title>
        <Icon type="ios-film-outline"></Icon>
        {{ item.name }}
      </template>
      <template #extra>
        <a href="#" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          Change
        </a>
      </template>
      <p class="rate-demo" v-for="item in randomMovieList">
        <a :href="item.url" target="_blank">{{ item.name }}</a>
        <span> <Rate disabled v-model="item.rate" />{{ item.rate }} </span>
      </p>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'FileCard',
  data() {
    return {
      randomMovieList: []
    }
  },
  props: {
    CardWidth: {
      type: String,
      default: '100%'
    },
    DataList: {
      type: Array,
      default: []
    }
  },
  methods: {
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = []
        for (let index in arr) {
          temp_array.push(arr[index])
        }
        const return_array = []
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length)
            console.log(arrIndex)
            return_array[i] = temp_array[arrIndex]
            temp_array.splice(arrIndex, 1)
          } else {
            break
          }
        }
        return return_array
      }

      this.randomMovieList = getArrayItems(this.DataList, 5)
      console.log(this.randomMovieList)
    }
  },
  mounted() {
    this.changeLimit()
  }
}
</script>

<style lang="scss" scoped>
.rate-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
