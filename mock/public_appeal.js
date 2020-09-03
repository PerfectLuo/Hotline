import Mock from 'mockjs'
// const Random = Mock.Random
// 查询各分类工单统计
Mock.mock(/\/screen\/queryWpTypeNum/,  {
    'r': 1,
    'm': 'SUCCESS',
    'd': {
        "wpTypeNumList": [
            {
                "wpTypeNum": 3115,
                "nodename": "咨询类"
            },
            {
                "wpTypeNum": 1358,
                "nodename": "投诉类"
            },
            {
                "wpTypeNum": 593,
                "nodename": "紧急类"
            }
        ],
        "wpDayTotal": 5357,
        "turnWpNum": 741,
        "answerWpNum": 3460
    }
  })
