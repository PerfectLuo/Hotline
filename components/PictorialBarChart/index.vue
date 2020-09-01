<template>
  <div id="chart" />
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pictorialBar'
export default {
  props: {
    data: Array,
    xAxisData: Array
  },
  data() {
    return {
      option: {
        grid: {
          top: '14%',
          bottom: '26%'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: '#a8c4dc',
            fontSize: 15,
            margin: 16
          },
          axisLine: {
            lineStyle: {
              color: '#a8c4dc'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#30477a'
            }
          }
        },
        yAxis: {
          type: 'value',
          // name: '单位：万元',
          axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: '#a8c4dc'
            }
          }
      },
        series: [{
           type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: params => params.dataIndex === 0 ? '#6d6a06' : '#208be7'
                    // {
                    //   params.dataIndex === 0 ? '#208be7' : '#6d6a06'
                    //   console.log(params)
                    //    return new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1, [{
                    //       offset: 0,
                    //       color: '#208be7'
                    //     },
                    //     {
                    //       offset: 1,
                    //       color: '#0f2253'
                    //     }
                    //   ])
                    // }
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [14, 4],
            symbolPosition: 'start',
            // symbolOffset: [1, -1],
            // symbolBoundingData: 5,
            animationEasing: 'elasticOut'
        }]
      }
    }
  },
  mounted () {
    this.drawChart() 
  },
  methods: {
    drawChart () {
      const myChart = echarts.init(document.getElementById('chart'))
      this.option.xAxis.data = this.xAxisData
      this.option.series[0].data = this.data
      myChart.setOption(this.option)
    }
  }
}
</script>
<style lang="less" scoped>
  #chart {
    width: 100%;
    height: 100%;
  }
</style>
