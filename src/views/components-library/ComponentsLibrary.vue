<template>
  <div class='components-library'>
    <Row :gutter='2'>
      <Col span='12'>
        <file-card></file-card>
      </Col>
      <Col span='12'>
        <file-card></file-card>
      </Col>
    </Row>
  </div>
</template>

<script>
import FileCard from '@/components/common/file-card/FileCard'
export default {
  name: 'ComponentsLibrary',
  components:{
    FileCard
  }
}
</script>

<style scoped>
@import "./ComponentsLirary.scss";
</style>
