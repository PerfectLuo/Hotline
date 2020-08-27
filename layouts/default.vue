<template>
  <div class="main">
    <header-layout></header-layout>
    <Nuxt />
  </div>
</template>
<script>
import HeaderLayout from '@/components/Header'
export default {
  components: {
    HeaderLayout
  }
}
</script>
<style lang="less" scoped>
  .main {
    display: grid;
    grid-template-rows: 105px 1fr;
    width: 100%;
    height: 100%;
  }
</style>
