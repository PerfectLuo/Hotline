<template>
  <div class="container appeal_box">
    <div class="left_box">
      <div class="top_box">
        <div class="title">
          来电分类
        </div>
        <div class="content">
          <ul>
            <li v-for="(item,index) in callClass" :key="index">
              <span>{{ item.name }}</span>
              <span class="digital">{{ item.num }}<b>%</b></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="center_box">
        <div class="title common_title">
          主要涉及问题
        </div>
        <div class="content">
          <ul>
            <li v-for="(item,index) in problemClass" :key="index" :class="{'active':index==0}">
              <span>{{ item.name }}</span>
              <div><span :style="{width:item.num/problemTotal*100+'%'}" /></div>
              <span>{{ item.num }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom_box">
        <div class="common_title">
          受理分析
        </div>
        <!-- <img src="../../assets/images/appeal/explain.png" alt=""> -->
        <div class="content">
          <div id="myChart" :style="{width: '457px', height: '277px'}" />
        </div>
      </div>
    </div>
    <div class="center_box">
      <div class="current_day_num digital">
        {{ currentDayNum }}
      </div>
      <div class="current_day_title">
        当日数据
      </div>
      <img class="appeal_center_icon1" src="../../assets/images/appeal/appeal_center_icon1.png" alt="">
      <img class="appeal_center_icon2" src="../../assets/images/appeal/appeal_center_icon2.png" alt="">
      <div class="appeal_center_box appeal_center_box1">
        <span>转派诉求</span><span class="digital">34.9<b>%</b></span>
      </div>
      <div class="appeal_center_box appeal_center_box2">
        <span>当场解答</span><span class="digital">65.8<b>%</b></span>
      </div>
      <div v-for="(item,index) in centerList" :key="index" class="item_box" :class="'item_box'+index">
        <div class="digital">
          {{ item.num }}<b>%</b>
        </div>
        <div v-html="item.name" />
      </div>
    </div>
    <div class="right_box">
      <div class="top_box">
        <div class="common_title">
          转派诉求处理
        </div>
        <div class="content">
          <div class="content_left" />
          <div class="content_right">
            <ul>
              <li v-for="(item,index) in handleList" :key="index" :class="{'active':index==0}">
                <span>{{ item.name }}</span>
                <span>{{ item.num }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom_box">
        <div class="title">
          委办局
        </div>
        <div class="content">
          <ul>
            <li v-for="(item,index) in entrustList" :key="index">
              <span>TOP{{ index+1 }}</span>
              <span>{{ item.name }}</span>
              <Progress class="flex-1" color="blue" :percent="item.num/5000*100" />
              <span class="right_box">{{ item.num }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress'
export default {
  components: {
    Progress
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
      problemTotal: 1031218,
      entrustList: [
        { name: 'XXXXXX单位', num: 100 },
        { name: 'XXXXXX单位', num: 2452 },
        { name: 'XXXXXX单位', num: 2452 },
        { name: 'XXXXXX单位', num: 2452 },
        { name: 'XXXXXX单位', num: 2452 }
      ],
      centerList: [
        { name: '12345<br />语音', num: 59 },
        { name: '网站', num: 59 },
        { name: '你呼<br />我应', num: 59 },
        { name: '省平台', num: 59 },
        { name: '微信<br />公众号', num: 59 }
      ],
      currentDayNum: 2945068
    };
  },
  mounted() {
    this.initEchartsData();
  },
  methods: {
    initEchartsData() {
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
            tooltip: {
                trigger: 'axis',
                formatter: params => {
                  let html = `<span style="color:#75bffe;font-size:15px;">${params[0].name}日</span><br>`
                  params.forEach(item => {
                    html += `<div><div style="width:80px;display: inline-block;"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color.colorStops ? item.color.colorStops[0].color : item.color};"></span>`
                      if (item.seriesIndex) {
                          html += `<span style="margin-right:40px">${item.seriesName}</span></div><span style="width: 41px;display: inline-block;">${(item.value / 100).toFixed(1)}%</span></div>`
                      } else {
                        html += `<span style="margin-right:40px">${item.seriesName}</span></div><span style="width: 41px;display: inline-block;">${item.value}</span></div>`
                      }
                  })
                  return `<div style="padding: 0 10px;">${html}</div>`
                }
            },
            legend: {
              top: 10,
              itemGap: 20,
              textStyle: {
                color: '#a8c4dc',
                fontSize: 15
              },
              data: [{
                name: '受理量',
                icon: 'circle'
              }, {
                name: '同比'
              }, {
                name: '环比'
              }]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    // saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['30', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22'],
                show: true,
                axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#a8c4dc'
                  }
                },
                axisLine: {
                  show: false
                },
                 axisTick: {
                  show: false
                }
            },
            yAxis: {
                type: 'value',
                splitLine: { // 网格线
                  show: false
              },
              show: false
            },
            series: [
                {
                    name: '受理量',
                    type: 'line',
                    stack: '总量1',
                    lineStyle: { color: '#66fbf8' },
                    symbol: 'none',
                    smooth: true,
                    data: [10, 20, 10, 25, 22, 21, 10, 10, 20, 10, 40, 10],
                    itemStyle: {
                      normal: {
                        color: '#66fbf8',
                        lineStyle: {
                          color: '#66fbf8'// 折线的颜色
                        },
                        areaStyle: {
                          type: 'default',
                          color: 'rgba(102, 251, 249, .6)'
                        }
                      }
                    }
                },
                {
                    name: '同比',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 7,
                    stack: '总量2',
                    lineStyle: { color: '#66fbf9' },
                    data: [70, 80, 72, 67, 80, 65, 55, 70, 55, 65, 80, 70],
                    itemStyle: {
                      normal: {
                        color: '#66fbf9', // 折线点的颜色
                        lineStyle: {
                        color: '#66fbf9'// 折线的颜色
                        }
                      }
                    }
                },
                {
                    name: '环比',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 7,
                    stack: '总量3',
                    lineStyle: { color: '#fbf666' },
                    data: [60, 70, 60, 80, 70, 50, 65, 75, 45, 55, 70, 60],
                    itemStyle: {
                      normal: {
                        color: '#fbf666', // 折线点的颜色
                        lineStyle: {
                        color: '#fbf666'// 折线的颜色
                        }
                      }
                    }
                }
            ]
        });
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/styles/introduce);
ul{
  list-style: none;
}
.appeal_box{
  display: flex;
  align-items: flex-start;
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
      .bgCover();
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
                b{
                  font-weight: normal;
                }
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
    .bottom_box{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .common_title{
        margin-bottom: 21px;
      }
      >img{
        margin-bottom: 10px;
      }
    }
  }
  >.center_box{
    width: 749px;
    height: 100%;
    background-image: url(../../assets/images/appeal/appeal_center_bottom_bg.png);
    .bgCover();
    background-position: bottom;
    position: relative;
    .current_day_num{
      position: absolute;
      bottom: 89px;
      width: 253px;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 50px;
      color: #fbf666;
      left:-10px;
      right: 0;
      margin: 0 auto;
    }
    .current_day_title{
      position: absolute;
      left: -15px;
      right: 0;
      margin: 0 auto;
      bottom: 175px;
      font-size: 24px;
      color: #75bffe;
      text-align: center;
    }
    .appeal_center_icon1{
      position: absolute;
      bottom: 482px;
      left: 190px;
    }
    .appeal_center_icon2{
      position: absolute;
      bottom: 444px;
      left: 305px;
    }
    .appeal_center_box{
      position: absolute;
      color: #ffffff;
      transform: rotate(-8deg);
      >span{
        &:nth-of-type(1){
          font-size: 20px;
          margin-right: 30px;
        }
        &:nth-of-type(2){
          font-size: 28px;
          b{
            font-size: 20px;
            font-weight: normal;
          }
        }
      }
    }
    .appeal_center_box1{
      bottom: 505px;
      left: 247px;
    }
    .appeal_center_box2{
      bottom: 466px;
      left: 356px;
    }
    .item_box{
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      div{
        &:nth-of-type(1){
          color: #fbf666;
          font-size: 38px;
          margin-bottom: 10px;
          b{
            font-weight: normal;
            font-size: 24px;
          }
        }
        &:nth-of-type(2){
          width: 108px;
          height: 124px;
          background-image: url(../../assets/images/appeal/appeal_center_top_bg.png);
          .bgCover();
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #75bffe;
          text-align: center;
        }
      }
      &.item_box0{
        bottom: 511px;
      }
      &.item_box1{
        bottom: 685px;
        left: 106px;
      }
      &.item_box2{
        bottom: 763px;
        left: 314px;
      }
      &.item_box3{
        bottom: 685px;
        left: 536px;
      }
      &.item_box4{
        bottom: 500px;
        right: 9px;
      }
    }
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
        align-items: flex-start;
        .content_left{
          width: 328px;
          height: 309px;
          background-image: url(../../assets/images/appeal/appeal_right_top_bg.png);
          .bgCover();
        }
        .content_right{
          padding-top: 23px;
          ul{
            li{
              line-height: 1;
              span{
                &:nth-of-type(1){
                  font-size: 15px;
                  color: #a8c4dc;
                }
                &:nth-of-type(2){
                  font-size: 20px;
                  color: #ffffff;
                }
              }
              &:nth-of-type(1){
                margin-bottom: 58px;
              }
              &:nth-of-type(2){
                margin-bottom: 53px;
              }
              &:nth-of-type(3){
                margin-bottom: 39px;
              }
              &:nth-of-type(4){
                margin-bottom: 29px;
              }
            }
          }
        }
      } 
    }
    .bottom_box{
      display: flex;
      flex-direction: column;
      width: 100%;
      .title{
        padding-left: 78px;
        font-size: 20px;
        color: #ffffff;
        margin-top: 37px;
        margin-bottom: 31px;
      }
      .content{
        display: flex;
        justify-content: center;
        ul{
          li{
            width: 434px;
            margin-bottom: 30px;
            padding-left: 23px;
            height: 57px;
            display: flex;
            align-items: center;
            &:nth-child(odd){
              background-image: url(../../assets/images/appeal/appeal_right_bottom_border.png);
              .bgCover();
            }
            >span{
              &:nth-of-type(1){
                font-size: 15px;
                color: #ffffff;
              }
              &:nth-of-type(2){
                width: 140px;
                padding: 0 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 15px;
                color: #75bffe;
              }
              &.right_box{
                width: 98px;
                text-align: center;
                font-size: 18px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
