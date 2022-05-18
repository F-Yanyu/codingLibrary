<template>
  <div class="layout">
    <Layout :min-width="1000">
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Row :gutter="10" style="height: 60px">
          <Col span="1">
            <div class="avatar">
              <img src="../../assets/images/coding.png" alt="" />
            </div>
          </Col>
          <Col span="3"><span>代码裤</span></Col>
          <Col span="5">
            <Menu mode="horizontal" :theme="theme" active-name="1" width="auto">
              <MenuItem name="1" to="/home">
                <Icon type="ios-paper" />
                首页
              </MenuItem>
              <MenuItem name="2" to="/components-library">
                <Icon type="ios-people" />
                组件
              </MenuItem>
            </Menu>
          </Col>
          <Col span="6" offset="8">
            <Input
              suffix="ios-search"
              placeholder="Enter text"
              style="width: 100%"
            />
          </Col>
        </Row>
      </Header>
      <Content
        :style="{
          marginTop: '64px ',
          background: '#fff',
          minHeight: '500px'
        }"
      >
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data() {
    return {
      theme: 'dark'
    }
  }
}
</script>
<style lang="scss" scoped>
@import './FrontPage.scss';
</style>
