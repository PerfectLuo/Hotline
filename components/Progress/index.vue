<template>
  <div class="bg"><span :class="color" :style="`width:${percent}%`"></span></div>
</template>
<script>
export default {
  props: {
    color: String,
    percent: String
  }
}
</script>
<style lang="less" scoped>
  .bg {
    background-image: url('./images/gray.png');
    background-position: center;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    text-align: left;
    span {
      display: inline-block;
      height: 100%;
      width: 0%;
      background-position: center;
      background-repeat-x: repeat;
      background-repeat-y: no-repeat;
      transition: width 1s ease-in;
    }
  }
  .blue {
    background-image: url('./images/blue.png');
  }
  .green {
    background-image: url('./images/green.png');
  }
  .yellow {
    background: url('./images/yellow.png') no-repeat;
  }
</style>
