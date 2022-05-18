<template>
  <div class="comprehensive">
    <file-card :width="CardWidth" :DataList="DataList"></file-card>
  </div>
</template>

<script>
import FileCard from '@/components/common/file-card/FileCard'

export default {
  name: 'Comprehensive',
  data() {
    return {
      CardWidth: '60%',
      DataList: [
        {
          name: 'The Shawshank Redemption',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: 'Forrest Gump',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: 'Life Is Beautiful',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: 'Spirited Away',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: "Schindler's List",
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: 'The Legend of 1900',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: 'WALL·E',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: 'Inception',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ]
    }
  },
  components: {
    FileCard
  }
}
</script>

<style lang="scss" scoped>
.comprehensive {
  width: 80%;
  margin: 0 auto;
}
</style>
