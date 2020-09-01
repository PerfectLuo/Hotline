<template>
  <div class="bg">
    <span 
      :class="`percent ${this.color || 'blue'}`" 
      :style="`width:${percent}%`">
      <i></i>
    </span>
  </div>
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
    // background-color: #19366f;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    .percent {
      display: inline-block;
      position: absolute;
      top: 10px;
      height: 1px;
      width: 0;
      transition: width 1s ease-in;
      i {
        position: absolute;
        width: 5px;
        height: 16px;
        right: 0;
        top: -8px;
      }
      &.blue {
        background-color: #2f507a;
        i {
          background-color: @color4;
        }
      }
      &.yellow {
        background-color: #82844b;
        i {
          background-color: @color2;
        }
      }
    }
  }
</style>
