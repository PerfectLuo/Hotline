<template>
  <div class="body">
    <div class="left">
      <div class="item">
        <div class="top flex">
          <div>
            <h6>累计诉求总量</h6>
            <div><span class="digital">24.3</span>万件</div>
          </div>
          <div>
            <h6>合并热线</h6>
            <div><span class="digital">54</span>条</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="middle flex">
          <div>
            <img src="@/assets/images/index/icon1.png">
            <div>限时办理机制</div>
          </div>
          <div>
            <div class="flex">
              <span>1个工作日</span><Progress class="flex-1" color="green" percent="11.79" /><span>11.79%</span>
            </div>
            <div class="flex">
              <span>3个工作日</span><Progress class="flex-1" color="blue" percent="45.04" /><span>45.04%</span>
            </div>
            <div class="flex">
              <span>5个工作日</span><Progress class="flex-1" color="yellow" percent="90.67" /><span>90.67%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="bottom flex">
          <div>
            <img src="@/assets/images/index/icon2.png">
            <div>回访反馈机制</div>
          </div>
          <div />
        </div>
      </div>
    </div>
    <div class="center">
      <h6>2020年大事记</h6>
      <div>
        <ul>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
          <li>
            <span>1月1日</span>
            <span>市政府常务会议听取12345市民热线工作情况。</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/index/logo.png">
      <ul>
        <li>2015年</li>
        <li>2016年</li>
        <li>2017年</li>
        <li>2018年</li>
        <li>2019年</li>
        <li class="active">
          2020年
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress'
export default {
  components: {
    Progress
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
    .left {
      left: 56px;
      width: 592px;
      height: 742px;
      top: 81px;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      .item {
        background: url('../assets/images/index/bottom.png') no-repeat;
        background-position: bottom;
        margin-bottom: 48px;
        text-align: center;
        & > div {
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
      .top {
        & > div {
          display: inline-block;
          font-size: 17px;
          &:first-child {
            margin-right: 42px;
          }
          h6 {
            color: @color1;
            text-align: center;
            margin-bottom: 14px;
            font-size: inherit;
            font-weight: normal;
          }
          .digital {
            font-size: 46px;
            width: 108px;
            display: inline-block;
            text-align: center;
          }
          & > div {
            background: url('../assets/images/index/box.png') no-repeat;
            width: 190px;
            height: 84px;
            color: @color3;
            text-align: left;
            padding: 18px 22px 0;
          }
        }
      }
      .middle {
        color: @color4;
        & > div:first-child {
          font-size: 20px;
          margin-right: 24px;
        }
        & > div:last-child {
          font-size: 17px;
          & > div {
            width: 348px;
            height: 37px;
            border: 1px solid #243563;
            display: flex;
            padding: 0 14px;
            align-items: center;
            .flex-1 {
              margin: 0 14px;
            }
            &:not(:last-child) {
              margin-bottom: 18px;
            }
          }
        }
      }
      .bottom {
        color: @color4;
        & > div:first-child {
          font-size: 20px;
          margin-right: 24px;
        }
        & > div:last-child {
          width: 348px;
          height: 147px;
        }
      }
    }
    .center {
      top: 30px;
      left: 702px;
      h6 {
        font-size: 26px;
        text-align: center;
        color: @color2;
      }
      ul {
        background: url('../assets/images/index/center.png') no-repeat;
        width: 531px;
        height: 773px;
        padding: 74px 22px 56px;
        font-size: 19px;
        li {
          list-style: none;
          margin-bottom: 30px;
          & > span:first-child {
            color: @color1-light;
            margin-right: 20px;
          }
          & > span:last-child {
            color: @color1;
            max-width: 398px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
            vertical-align: top;
          }
        }
      }
    }
    .right {
      background: url('../assets/images/index/dq.png') no-repeat;
      bottom: 110px;
      right: 0;
      height: 803px;
      width: 510px;
      img {
        position: absolute;
        top: 45%;
        left: 40%;
      }
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
