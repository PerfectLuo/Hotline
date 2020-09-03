<template>
  <div class="container merits_box">
    <div class="subject_box">
      <div class="left_box">
        <div class="left_top_box">
          <div class="common_title">
            及时办结率
          </div>
          <div class="content">
            <ul>
              <li v-for="(item,index) in handleList" :key="index" :class="{'active':index==0}">
                <div :style="{height:item.num/100*80+0+'px'}">
                  <div :style="{bottom:item.num/100*80+0+'px'}">
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
          <div><span>满意度</span><span class="digital">90%</span></div>
        </div>
      </div>
      <div class="right_box">
        <div class="right_top_box">
          <div class="common_title">
            满 意 率
          </div>
          <div class="content">
            <div class="content_left_box">
              <div class="left_top_item">
                <div class="content_box" :style="{width:'77px',height:'90px'}">
                  <span>33%</span><span>鄂城区</span>
                </div>
              </div>
              <div class="left_bottom_item">
                <div class="content_box" :style="{width:'92px',height:'108px'}">
                  <span>47%</span><span>梁子湖区</span>
                </div>
              </div>
            </div> 
            <div class="content_center_box">
              <div class="content_box active">
                <span>97%</span><span>葛店开发区</span>
              </div>
            </div> 
            <div class="content_right_box">
              <div class="right_top_item">
                <div class="content_box" :style="{width:'67px',height:'78px'}">
                  <span>28%</span><span>华容区</span>
                </div>
              </div>
              <div class="right_bottom_item">
                <div class="content_box" :style="{width:'119px',height:'139px'}">
                  <span>64.5%</span><span>临空经济区</span>
                </div>
              </div>
            </div> 
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
        { name: '鄂城区', num: 100 },
        { name: '华容区', num: 50 },
        { name: '梁子湖区', num: 0 },
        { name: '葛店开发区', num: 10 },
        { name: '临空经济区', num: 10 }
      ],
      otherClass: [
        { name: '鄂城区', num: 269 },
        { name: '华容区', num: 258 },
        { name: '梁子湖区', num: 219 },
        { name: '葛店开发区', num: 269 },
        { name: '临空经济区', num: 249 }
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
        { name: '华容区', num: 10 },
        { name: '梁子湖区', num: 1500 },
        { name: '葛店开发区', num: 0 },
        { name: '临空经济区', num: 1204 }
      ]
    };
  },
  mounted() {
    this.initEchartsData();
  },
  methods: {
    initEchartsData() {
      const that = this;
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
            grid: {
                left: '5%',
                right: '5%',
                bottom: '0%',
                top: '0%',
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
              show: false,
              min:'0',
              max:'2000'
            },
            series: [
                {
                    name: '同比',
                    type: 'line',
                    symbolSize: 33,
                    symbol: 'circle',
                    stack: '总量2',
                    markPoint: {
                      data: [{
                        name: '',
                        coord: [0, that.delayClass[0].num]
                      }],
                      symbolSize: 33,
                      symbol: 'circle',
                      itemStyle: {
                        color: 'transparent', // 折线点的颜色
                        borderColor: '#fbf666',
                        borderWidth: 3
                      }
                    },
                    data: [that.delayClass[0].num, that.delayClass[1].num, that.delayClass[2].num, that.delayClass[3].num, that.delayClass[4].num],
                    itemStyle: {
                      normal: {
                        color: 'transparent', // 折线点的颜色
                        borderColor: '#75bffe',
                        borderWidth: 3,
                        lineStyle: {
                          color: '#75bffe'// 折线的颜色
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
@import 'index';
</style>
