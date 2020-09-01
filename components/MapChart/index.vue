<template>
  <div id="map-chart" />
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/tooltip'
import ezhou from './420700_full'
export default {
  props: {
    data: Array,
    xAxisData: Array,
    legendData: Array
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        geo: {
        	map: 'ezhou',
            // roam: true,
          regions: [{
            name: '华容区',
            itemStyle: {
              normal: {
                areaColor: '#053863'
              }
            }
          }, {
            name: '梁子湖区',
            itemStyle: {
              normal: {
                areaColor: '#15488a'
              }
            }
          }, {
            name: '鄂城区',
            itemStyle: {
              normal: {
                areaColor: '#3166aa'
              }
            }
            // selected: true
          }]
        },
        series: [{
          type: 'map',
          mapType: 'ezhou',
          zoom: 1,
          geoIndex: 0,
          top: 30,
        	label: {
            normal: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          data: [{ name: '鄂城区', value: 1000 }]
        }]
      }
    }
  },
  mounted () {
    this.drawChart() 
  },
  methods: {
    drawChart () {
      const myChart = echarts.init(document.getElementById('map-chart'))
      echarts.registerMap('ezhou', ezhou);
      // this.option.legend.data = this.legendData
      // this.option.xAxis.data = this.xAxisData
      // this.option.series[0].name = this.legendData[0]
      // this.option.series[0].data = this.data[0]
      // this.option.series[1].name = this.legendData[1]
      // this.option.series[1].data = this.data[1]
      // this.option.series[2].data = this.data[2]
      myChart.setOption(this.option)
    }
  }
}
</script>
<style lang="less" scoped>
  #map-chart {
    // width: 100%;
    height: 100%;
  }
</style>
