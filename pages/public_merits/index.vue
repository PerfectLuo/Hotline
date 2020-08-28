<template>
  <div class="container merits_box">
    <div class="subject_box">
      <div class="left_box">
    </div>
    <div class="center_box">
    </div>
    <div class="right_box">
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
        { name: '鄂 城 区', num: 576 },
        { name: '华 容 区', num: 490 },
        { name: '梁子湖区', num: 416 },
        { name: '葛店开发区', num: 308 },
        { name: '临空经济区', num: 273 }
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
      currentDayNum: 2945068
    };
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
      width: 587px;
    }
    >.center_box{
      width: 543px;
    }
    >.right_box{
      flex: 1;
      overflow: hidden;
    }
  }
  
}
</style>
