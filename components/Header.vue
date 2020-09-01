<template>
  <header>
    <ul class="left">
      <nuxt-link to="/public_appeal">
        市民诉求
      </nuxt-link>
      <nuxt-link to="/performance_analyze">
        绩效分析
      </nuxt-link>
    </ul>
    <ul class="right">
      <nuxt-link to="">
        重点事件
      </nuxt-link>
      <nuxt-link to="">
        感知预警
      </nuxt-link>
    </ul>
  </header>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
  header {
    background: url('../assets/images/header/bg.png') no-repeat;
    height: 105px;
    width: 100%;
    position: relative;
    ul {
      position: absolute;
      top: 60px;
      &.left {
        left: 236px;
      }
      &.right {
        right: 236px;
      }
      a {
        background: url('../assets/images/header/menu.png') no-repeat;
        height: 46px;
        width: 171px;
        display: inline-block;
        color: #fff;
        line-height: 46px;
        text-align: center;
        text-decoration: none;
        &.active {
          background: url('../assets/images/header/menu2.png') no-repeat;
        }
      }
    }
  }
</style>
