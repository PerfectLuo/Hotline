import Mock from 'mockjs'
// const Random = Mock.Random
// 查询各分类工单统计
Mock.mock(/\/screen\/queryWpTypeNum/,  {
    "resultCode":'0',
    "d": {
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
    },
    "r": 1,
    "m": "操作成功"
})
Mock.mock(/\/screen\/queryWpClassNum/,  {
    "resultCode":'0',
    "d": [
        {
            "classWpNum": 114,
            "nodename": "信息咨询"
        },
        {
            "classWpNum": 65,
            "nodename": "门前三包区域"
        },
        {
            "classWpNum": 21,
            "nodename": "转接政务中心"
        }
    ],
    "r": 1,
    "m": "操作成功"
})
