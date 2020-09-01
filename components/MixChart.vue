<template>
  <div id="mix-chart"></div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
export default {
  props: {
    data: Array,
    xAxisData: Array
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          formatter: params => {
            let html = `<span style="color:#75bffe;font-size:15px;">${params[0].name}</span><br>`
            params.forEach(item => {
              html += `<div><div style="width:80px;display: inline-block;"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color.colorStops ? item.color.colorStops[0].color : item.color};"></span>`
                if (item.seriesIndex) {
                    html += `<span style="margin-right:40px">${item.seriesName}</span></div><span style="width: 41px;display: inline-block;">${(item.value * 100).toFixed(1)}%</span></div>`
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
            name: '工单',
            icon: 'circle'
           }, {
            name: '同比'
           }, {
            name: '环比'
           }]
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#a8c4dc'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 16,
            color: '#a8c4dc',
            fontSize: 15
          }
        },
        yAxis: [
          {
            name: '件',
            nameGap: 30,
            nameTextStyle: {
              color: '#a8c4dc',
              fontSize: 15
            },
            type: 'value',
            max: 10000,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: '#a8c4dc'
              }
            }
          },
          {
            name: '%',
            nameGap: 30,
            nameTextStyle: {
              color: '#a8c4dc',
              fontSize: 15
            },
            type: 'value',
            min: -1,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: '#a8c4dc'
              }
            }
          }
        ],
        series: [
          {
            name: '工单',
            type: 'bar',
            barWidth: '16px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#74bdfc' // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: '#385d89' // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#08122f' // 100% 处的颜色
                    }
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 30, 30]
              }
            }
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            symbol: 'none',
            itemStyle: {
              normal: {
                color: '#66fbf9'
              }
            }
          },
          {
            name: '环比',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            symbol: 'none',
            itemStyle: {
              normal: {
                color: '#75bffe'
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    drawChart() {
      const myChart = echarts.init(document.getElementById('mix-chart'))
      this.option.xAxis.data = this.xAxisData
      this.option.series[0].data = this.data[0]
      this.option.series[1].data = this.data[1]
      this.option.series[2].data = this.data[2]
      myChart.setOption(this.option)
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="less" scoped>
#chart {
  width: 100%;
  height: 100%;
}
</style>
