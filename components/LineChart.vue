<template>
  <div id="chart"></div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/custom'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
export default {
  props: {
    data: Array,
    xAxisData: Array,
    legendData: Array
  },
  data() {
    return {
      option:  {
        color: ['#66fbf9', '#75bffe', '#fbf666'],
        grid: {
          right: 0,
          left: 10,
          top: 80
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 30,
          top: 30,
          textStyle: {
            color: '#bbcddc',
            padding: [0, 0, 0, 6],
            fontSize: 15
          }
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#293655'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 16,
            color: '#a8c4dc',
            fontSize: 13,
            interval: 0
          }
        },
        yAxis:{
          type: 'value',
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
            color: '#293655'
          }
        },
        axisTick: {
          length: 10,
          lineStyle: {
            color: '#fff'
          }
        }
      },
      series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'none'
      },
      {
        type: 'line',
        smooth: true,
        symbol: 'none'
      },
      {
        name: '差  值',
        type: 'custom'
      }
      ]
    }
    }
  },
  methods: {
    drawChart () {
      const myChart = echarts.init(document.getElementById('chart'))
      this.option.legend.data = this.legendData
      this.option.xAxis.data = this.xAxisData
      this.option.series[0].name = this.legendData[0]
      this.option.series[0].data = this.data[0]
      this.option.series[1].name = this.legendData[1]
      this.option.series[1].data = this.data[1]
      this.option.series[2].data = this.data[2]
      myChart.setOption(this.option)
    }
  },
  mounted () {
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
