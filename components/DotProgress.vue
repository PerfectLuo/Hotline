<template>
  <div class="bg"><span :style="`left:${percent}%`"></span></div>
</template>
<script>
export default {
  props: {
    percent: String
  }
}
</script>
<style lang="less" scoped>
  .bg {
    background-color: #19366f;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    span {
      display: inline-block;
      position: absolute;
      height: 100%;
      width: 8px;
      background-color: @color4;
      transition: left 1s ease-in;
    }
  }
</style>
