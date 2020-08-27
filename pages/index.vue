<template>
  <div class="body">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right">
      <ul>
        <li>2015年</li>
        <li>2016年</li>
        <li>2017年</li>
        <li>2018年</li>
        <li>2019年</li>
        <li class="active">2020年</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="less" scoped>
  .body {
    position: relative;
    background: url('../assets/images/index/bg.png') no-repeat;
    & > div {
      position: absolute;
    }
    .right {
      background: url('../assets/images/index/dq.png') no-repeat;
      bottom: 110px;
      right: 0;
      height: 803px;
      width: 510px;
      li {
        position: absolute;
        list-style: none;
        background: url('../assets/images/index/border.png') no-repeat;
        color: @color1;
        width: 112px;
        height: 65px;
        line-height: 65px;
        text-align: center;
        cursor: pointer;
        &:nth-child(1) {
          left: -40px;
          top: 114px;
          transform: rotateZ(38deg);
        }
        &:nth-child(2) {
          left: -80px;
          top: 184px;
          transform: rotateZ(30deg);
        }
        &:nth-child(3) {
          left: -104px;
          top: 264px;
          transform: rotateZ(16deg);
        }
        &:nth-child(4) {
          left: -114px;
          top: 344px;
          transform: rotateZ(8deg);
        }
        &:nth-child(5) {
          left: -114px;
          top: 424px;
        }
        &:nth-child(6) {
          left: -98px;
          top: 504px;
          transform: rotateZ(-10deg);
        }
        &.active {
          color: @color2;
          background: url('../assets/images/index/border2.png') no-repeat;
        }
      }
    }
  }
</style>
