<template>
  <div id="chart"></div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
export default {
  props: {
    data: Array,
    xAxisData: Array
  },
  data() {
    return {
      option:  {
        grid: {
          top: '14%',
          bottom: '26%'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: '#75bffe',
            fontSize: 17,
            margin: 16
          },
          axisLine: {
            lineStyle: {
              color: '#243563'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          // name:'111',
          type: 'bar',
          barWidth: '70px',
          zlevel: 11,
          // showBackground: true,
          itemStyle: {
            borderTopWidth: 4,
            borderColor: '#75bffe',
            color: '#2b74b2'
          }
        },
        {
          // name: '总',
          type: 'bar',
          barWidth: '70px',
          barGap: '-100%',
          itemStyle: {
            barBorderRadius: [6, 6, 0, 0],
            color: '#1f355a'
          },
          data: [1],
          label: {
            show: true,
            position: 'top',
            formatter: '50%',
            color: '#fff',
            fontSize: 17
          },
          zlevel: 9
        }]
      }
    }
  },
  methods: {
    drawChart () {
      const myChart = echarts.init(document.getElementById('chart'))
      this.option.xAxis.data = this.xAxisData
      this.option.series[0].data = this.data
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
