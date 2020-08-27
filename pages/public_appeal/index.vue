<template>
  <div class="container appeal_box">
    <div class="left_box">
      <div class="top_box">
        <div class="title">来电分类</div>
        <div class="content">
          <ul>
            <li v-for="(item,index) in callClass" :key="index">
              <span>{{item.name}}</span>
              <span class="digital">{{item.num}}<b>%</b></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="center_box">
        <div class="title common_title">主要涉及问题</div>
        <div class="content">
          <ul>
            <li v-for="(item,index) in problemClass" :key="index" :class="{'active':index==0}">
              <span>{{item.name}}</span>
              <div><span :style="{width:item.num/problemTotal*100+'%'}"></span></div>
              <span>{{item.num}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom_box">
        <div class="common_title">受理分析</div>
      </div>
    </div>
    <div class="center_box">

    </div>
    <div class="right_box">
      <div class="top_box">
        <div class="common_title">转派诉求处理</div>
        <div class="content">
          <div class="content_left"></div>
          <div class="content_right">
            <ul>
            <li v-for="(item,index) in handleList" :key="index" :class="{'active':index==0}">
              <span>{{item.name}}</span>
              <span>{{item.num}}</span>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      callClass: [
        { name: '咨 询 类', num: 63 },
        { name: '投 诉 类', num: 63 },
        { name: '举 报 类', num: 63 },
        { name: '表 扬 类', num: 63 },
        { name: '建 议 类', num: 63 }
      ],
      problemClass: [
        { name: '疾控防疫', num: 886491 },
        { name: '无效来电', num: 61735 },
        { name: '交通违章', num: 26009 },
        { name: '网站使用', num: 24260 },
        { name: '网上购物', num: 17971 },
        { name: '工时假期', num: 14752 }
      ],
      handleList: [
        { name: '鄂 城 区', num: 576 },
        { name: '华 容 区', num: 490 },
        { name: '梁子湖区', num: 416 },
        { name: '葛店开发区', num: 308 },
        { name: '临空经济区', num: 273 }
      ],
      problemTotal: 1031218
    };
  }
}
</script>

<style lang="less" scoped>
ul{
  list-style: none;
}
.appeal_box{
  display: flex;
  align-items: flex-start;
  .common_title{
      width: 389px;
      height: 20px;
      background-image: url(../../assets/images/appeal/appeal_left_title.png);
      background-size: 389px 15px;
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
      font-size: 20px;
      color: #ffffff;
      line-height: 1;
  }
  >.left_box{
    padding-top: 55px;
    margin-left: 68px;
    margin-right: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top_box{
      width: 513px;
      height: 135px;
      background-image: url(../../assets/images/appeal/appeal_top_border.png);
      background-size: 100% 100%;
      margin-bottom: 43px;
      .title{
        width: 100%;
        height: 31px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: #ffffff;
        font-size: 18px;
      }
      .content{
        ul{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 105px;
          padding: 0 8px;
          li{
            width: 97px;
            height: 88px;
            background-image: url(../../assets/images/appeal/appeal_top_left_bg.png);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            span{
              &:nth-of-type(1){
                font-size: 15px;
                color: #75bffe;
              }
              &:nth-of-type(2){
                font-size: 36px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .center_box{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 22px;
      .content{
        margin-top: 26px;
        ul{
          li{
            display: flex;
            align-items: center;
            margin-bottom: 21px;
            >span{
              &:nth-of-type(1){
                width: 94px;
                font-size: 15px;
                color: #a8c4dc;
              }
              &:nth-of-type(2){
                width: 85px;
                text-align: right;
                font-size: 15px;
                color: #ffffff;
              }
            }
            >div{
              width: 253px;
              height: 17px;
              border: solid 1px #75bffe;
              box-sizing: border-box;
              padding: 3px;
              display: flex;
              span{
                background-color: #75bffe;
                display: block;
                height: 100%;

              }
            }
            &.active{
              >div{
                border-color: #66fbf9;
                span{
                  background-color: #66fbf9;
                }
              }
            }
          }
        }
      }
    }
  }
  >.center_box{
    width: 749px;
    height: 100%;
    background-image: url(../../assets/images/appeal/appeal_center_bottom_bg.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  >.right_box{
    flex: 1;
    overflow: hidden;
    padding-top: 61px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top_box{
      .content{
        margin-top: 40px;
        display: flex;
        align-items: center;
        .content_left{
          width: 328px;
          height: 309px;
          background-image: url(../../assets/images/appeal/appeal_right_top_bg.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .content_right{

        }
      } 
    }
  }
}
</style>
