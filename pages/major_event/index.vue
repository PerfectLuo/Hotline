<template>
  <div class="container flex">
    <div class="left flex">
      <div class="common_title">工单分析</div>
      <div class="flex-1">
        <!-- <MixChart :xAxisData="['5月', '6月', '7月']" :data="[[5000, 2600, 1300, 1300, 1250, 1500, 1800, 1900, 1200, 1000, 1300, 1400], [0.25, 0.38, 0.76, 0.76, 0.88, 0.9, 0.8, 0.77, 0.56, 0.34, 0.45, 0.23], [0.35, 0.48, 0.78, 0.86, 0.98, 0.94, 0.9, 0.87, 0.66, 0.44, 0.55, 0.33]]"/> -->
        <MixChart 
          :xAxisData="['5月', '', '', '', '6月', '', '', '', '7月', '', '', '']" 
          :data="[[{value:5000, name: '5月第一周'}, {value:2600, name: '5月第二周'}, {value:5000, name: '5月第三周'}, {value:1300, name: '5月第四周'}, {value:1250, name: '6月第一周'}, {value:1500, name: '6月第二周'}, {value:1800, name: '6月第三周'}, {value:1900, name: '6月第四周'}, {value:1200, name: '7月第一周'}, {value:1000, name: '7月第二周'}, {value:1300, name: '7月第三周'}, {value:1400, name: '7月第四周'}], 
          [0.25, 0.38, 0.76, 0.76, 0.88, 0.9, 0.8, 0.77, 0.56, 0.34, 0.45, 0.23], 
          [0.35, 0.48, 0.78, 0.86, 0.98, 0.94, 0.9, 0.87, 0.66, 0.44, 0.55, 0.33]]"/>
      </div>
    </div>
    <div class="center flex-1">
      <div class="item">
        <div>
          <h6>解决率</h6>
          <div class="digital">98<span>%</span></div>
        </div>
      </div>
      <div class="item">
        <div>
          <h6>满意率</h6>
          <div class="digital">96<span>%</span></div>
        </div>
      </div>
      <div class="item">
        <div>
          <h6>及时办结率</h6>
          <div class="digital">98<span>%</span></div>
        </div>
      </div>
      <div class="bottom">
        <h6>重点事件</h6>
        <img src="@/assets/images/major_event/bottom.png"/>
      </div>
    </div>
    <div class="right flex">
      <div>
        <div class="common_title">区域分布</div>
        <div><PictorialBarChart :data="[2691, 5000, 3000, 4666, 2666]" :xAxisData="['鄂城区', '梁子湖区', '华容区', '葛店开发区', '临空经济区']"/></div>
      </div>
      <div class="flex flex-1">
        <div class="common_title">承办单位</div>
        <div class="flex-1">
          <table>
            <thead>
              <tr>
                <td>承办单位</td>
                <td>工单量</td>
                <td><label>满意率</label><label>解决率</label><label>及时办结率</label></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
              <tr>
                <td class="maroon">市公安局</td>
                <td class="maroon strong">123456</td>
                <td><span>95%</span><span>95%</span><span>95%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PictorialBarChart from '@/components/PictorialBarChart'
import MixChart from '@/components/MixChart'
export default {
  components: {
    PictorialBarChart,
    MixChart
  }
}
</script>

<style lang="less" scoped>
  @import 'index';
</style>
