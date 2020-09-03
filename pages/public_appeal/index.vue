<template>
  <div class="container appeal_box">
    <div class="left_box">
      <div class="top_box">
        <div class="title">
          来电分类
        </div>
        <div class="content">
          <ul>
            <li v-for="(item,index) in wpTypeNumList" :key="index">
              <span>{{ item.nodename }}</span>
              <span class="digital">{{ (item.wpTypeNum/wpDayTotal*100).toFixed(0) }}<b>%</b></span>
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
              <Progress class="flex-1" color="blue" :percent="(item.num/5000*100).toFixed(2)" />
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
      wpTypeNumList: [],
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
      currentDayNum: 2945068,
      wpDayTotal:1
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.initEchartsData();
  },
  methods: {
    async initData() {
      const res = await this.$axios.get('/screen/queryWpTypeNum')
      const data = res.data.d;
      this.wpTypeNumList = data.wpTypeNumList
      this.wpDayTotal = data.wpDayTotal
    },
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
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjI5QURFRkVFRDA0MTFFQTkzRjBDM0UzNEFFNTQwM0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjI5QURFRkRFRDA0MTFFQTkzRjBDM0UzNEFFNTQwM0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA4NTYyOEJFQ0VBMTFFQTg5QjhGRDIyRUFFMkU2QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA4NTYyOENFQ0VBMTFFQTg5QjhGRDIyRUFFMkU2QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hVcESAAAAzElEQVR42mJM+/2TgUjABcTfgfg/suBMFjY4m4UIQ3iAWB1N7AIQ/0VXyETAIGMsBoGAARCzkmKYMRKbDYkN840eqS4DATEg/oXE/wMNPxCQJMYwJyT2Kyzy36C0ESHDdIH4I5Ex/AKfYTJo4UMQpP/5xYjNMH4gFmcgHbihGwZyjQoDeeANsmGM0HBigLJJASxQrzrDDIPFCCt6ViEC/IHSH4AGcsMS4H0g/grEzFALkGlmPHwmpDSnATLsLAMFAJTRga7iAzJVAQIMAINcISlNCAe2AAAAAElFTkSuQmCC',
                color : 'transparent',
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
                        color: 'transparent',
                        lineStyle: {
                          color: 'transparent'// 折线的颜色
                        },
                        areaStyle: {
                          type: 'default',
                          color: 'rgba(102, 251, 249, .3)'
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
@import 'index';
</style>
