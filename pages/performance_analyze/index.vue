<template>
  <div class="container merits_box">
    <div class="subject_box">
      <div class="left_box">
        <div class="left_top_box">
          <div class="common_title">
            主要涉及问题
          </div>
          <div class="content">
            <ul>
              <li v-for="(item,index) in handleList" :key="index" :class="{'active':index==0}">
                <div :style="{height:item.num/100*118+10+'px'}">
                  <div :style="{bottom:item.num/100*118+10+'px'}">
                    <span>{{ item.num }}%</span>
                    <img v-if="index!=0" src="../../assets/images/merits/merits_top_left_sb_bg.png" alt="">
                    <img v-if="index==0" src="../../assets/images/merits/merits_top_left_sy_bg.png" alt="">
                  </div>
                </div>
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="left_center_box">
          <div class="title common_title">
            解 决 率
          </div>
          <div class="content">
            <ul>
              <li v-for="(item,index) in solveClass" :key="index" :class="{'active':index==0}">
                <span>{{ item.name }}</span>
                <div><span :style="{width:item.num/problemTotal*100+'%'}" /></div>
                <span>{{ item.num }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="left_bottom_box">
          <div class="title common_title">
            延迟办理情况
          </div>
          <div class="content">
            <div id="myChart" :style="{width: '422px', height: '80px'}" />
            <ul>
              <li v-for="(item,index) in delayClass" :key="index" :class="{'active':index==0}">
                <div>
                  <span>{{ item.num }}</span>
                </div>
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="center_box">
        <div class="center_center_box">
          <div>2020年</div>
          <div>区 政 府</div>
          <div>委办局</div>
        </div>
        <div class="center_bottom_box">
          <div><span>及时办结率</span><span class="digital">30%</span></div>
          <div><span>满意度</span><span class="digital">30%</span></div>
        </div>
      </div>
      <div class="right_box">
        <div class="right_top_box">
          <div class="common_title">
            满 意 率
          </div>
          <div class="content">
            <div />
          </div>
        </div>
        <div class="right_bottom_box">
          <div class="common_title">
            推诿扯皮
          </div>
          <div class="content">
            <ul>
              <li v-for="(item,index) in otherClass" :key="index" :class="{'active':index==0}">
                <span>{{ item.name }}</span>
                <span>{{ item.num }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Progress from '@/components/Progress'
export default {
  components: {
    // Progress
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
        { name: '鄂城区', num: 63 },
        { name: '华容区', num: 21 },
        { name: '梁子湖区', num: 10 },
        { name: '葛店开发区', num: 10 },
        { name: '临空经济区', num: 10 }
      ],
      otherClass: [
        { name: '鄂城区', num: 63 },
        { name: '华容区', num: 21 },
        { name: '梁子湖区', num: 10 },
        { name: '葛店开发区', num: 10 },
        { name: '临空经济区', num: 10 }
      ],
      problemTotal: 1031218,
      entrustList: [
        { name: 'XXXXXX单位', num: 2452 },
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
      currentDayNum: 2945068,
      solveClass: [
        { name: '鄂城区', num: 886491 },
        { name: '华容区', num: 61735 },
        { name: '梁子湖区', num: 26009 },
        { name: '葛店开发区', num: 24260 },
        { name: '临空经济区', num: 24260 }
      ],
      delayClass: [
        { name: '鄂城区', num: 1234 },
        { name: '华容区', num: 1234 },
        { name: '梁子湖区', num: 1234 },
        { name: '葛店开发区', num: 1234 },
        { name: '临空经济区', num: 1234 }
      ]
    };
  },
  mounted() {
    this.initEchartsData();
  },
  methods: {
    initEchartsData() {
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
            // tooltip: {
            //     trigger: 'axis'
            // },
            grid: {
                left: '3%',
                right: '5%',
                bottom: '6%',
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
                data: ['1', '2', '3', '4', '5'],
                show: true,
                axisLabel: {
                  show: false,
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
                    name: '同比',
                    type: 'line',
                    symbolSize: 10,
                    symbol: 'circle',
                    stack: '总量2',
                    lineStyle: { color: '#66fbf9' },
                    data: [1, 182, 2, 234, 3],
                    itemStyle: {
                      normal: {
                        color: '#66fbf9', // 折线点的颜色
                        lineStyle: {
                        color: '#66fbf9'// 折线的颜色
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
.merits_box{
  .subject_box{
    width: 1857px;
    height: 896px;
    background-image: url(../../assets/images/merits/merits_content_bg.png);
    .bgCover();
    margin: 19px auto 0;
    display: flex;
    align-items: flex-start;
    >.left_box{
      width: 645px;
      .left_top_box{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        margin-top: 48px;
        .common_title{
          margin-right: 74px;
          margin-bottom: 18px;
        }
        .content{
          height: 206px;
          ul{
            height: 100%;
            display: flex;
            li{
              height: 100%;
              width: 95px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: center;
              >div{
                width: 77px;
                height: 118px;
                max-height: 118px;
                background-position: bottom;
                .bgCover();
                background-image:url(../../assets/images/merits/merits_top_left_b_bg.png);
                position: relative;
                >div{
                  position: absolute;
                  left: -5px;
                  width: 86px;
                  height: 78px;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                  img{
                    width: 100%;
                    display: block;
                  }
                  span{
                    position: absolute;
                    bottom: 30px;
                    width: 100%;
                    text-align: center;
                    font-size: 22px;
                    color: #ffffff;
                  }

                }
              }
              &.active{
                >div{
                  background-image:url(../../assets/images/merits/merits_top_left_y_bg.png);
                }
              }
              >span{
                margin-top: 21px;
                color: #a8c4dc;
                font-size: 15px;
                margin-bottom: 35px;
                line-height: 1;
              }
            }
          }
        }
      }
      .left_center_box{
        display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 29px;
      .common_title{
        margin-top: 21px;
      }
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
      .left_bottom_box{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        
        .common_title{
          margin-top: 33px;
          margin-right: 74px;
          margin-bottom: 30px;
        }
        .content{
          margin-right: 74px;
          position: relative;
          >div{
            position: relative;
            z-index: 1;
          }
          >ul{
            position: absolute;
            left: 3%;
            top: 0;
            right: 5%;
            width: 100%;
            display: flex;
            li{
              width: 89px;
              &:nth-last-of-type(1){
                margin-right: -12px;
              }
              >div{
                width: 66px;
                height: 123px;
                background-color: rgba(18, 59, 94, .7);
                border-radius: 3px;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                color: #ffffff;
                font-size: 18px;
                padding-bottom: 10px;
                margin-bottom: 16px;
              }
              >span{
                font-size: 15px;
                color: #a8c4dc;
              }
              &:nth-of-type(1){
                >div{
                  background-color: rgba(58, 57, 40, .7);
                }
              }
            }
          }
        }
        
      }
    }
    >.center_box{
      width: 543px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .center_center_box{
        margin-top: 71px;
        width: 489px;
        height: 568px;
        .bgCover();
        background-image:url(../../assets/images/merits/merits_center_bg.png);
        margin-bottom: 82px;
        >div{
          line-height: 1;
          text-align: center;
          &:nth-of-type(1){
            font-size: 38px;
            color: #ffffff;
            margin-top: 167px;
            margin-bottom: 31px;
            font-weight: 900;
          }
          &:nth-of-type(2){
            font-size: 66px;
            color: #ffffff;
            margin-bottom: 63px;
            font-weight: 900;
          }
          &:nth-of-type(3){
            color: #6581a8;
            font-size: 38px;
          }
        }
      }
      .center_bottom_box{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >div{
          width: 255px;
          height:77px;
          .bgCover();
          background-image:url(../../assets/images/merits/merits_center_bottom_bg.png);
          display: flex;
          align-items: center;
          justify-content: center;
          span{
            &:nth-of-type(1){
              font-size: 28px;
              color: #a8c4dc;
              margin-right: 22px;
            }
            &:nth-of-type(2){
              font-size: 46px;
              color: #fbf666;
            }
          }
        }
      }
    }
    >.right_box{
      flex: 1;
      overflow: hidden;
      .right_top_box{
        .common_title{
          margin-left: 92px;
          margin-top: 65px;
        }
        .content{
          height: 359px;
        }
      }
      .right_bottom_box{
        .common_title{
          margin-left: 124px;
          margin-top: 66px;
          margin-bottom: 51px;
        }
        .content{
          margin-left: 93px;
          ul{
            display: flex;
            flex-wrap: wrap;
            li{
              width: 164px;
              height: 75px;
              .bgCover();
              background-size: 116px 75px;
              background-position: 50% 50%;
              background-image:url(../../assets/images/merits/merits_right_top_icon4.png);
              margin-bottom: 45px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              &.active{
              background-image:url(../../assets/images/merits/merits_right_top_icon3.png);
              }
              >span{
                &:nth-of-type(1){
                  color: #a8c4dc;
                  font-size: 22px;
                }
                &:nth-of-type(2){
                  font-size: 28px;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
    }
  }
  
}
</style>
