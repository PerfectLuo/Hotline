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
Mock.mock(/\/screen\/queryAreaAndUnitsNum/,  {
    "resultCode":'0',
    "d": {
        "wpAreaNumList": [
            {
                "wpAreaName": "龙华区",
                "wpAreaNum": 315
            },
            {
                "wpAreaName": "秀英区",
                "wpAreaNum": 286
            },
            {
                "wpAreaName": "美兰区",
                "wpAreaNum": 98
            },
            {
                "wpAreaName": "琼山区",
                "wpAreaNum": 1
            }
        ],
         "wpUnitsNumList": [
            {
                "wpUnitsName": "市公安局",
                "wpUnitsNum": 315
            },
            {
                "wpUnitsName": "市公安局交通警察支队",
                "wpUnitsNum": 286
            },
            {
                "wpUnitsName": "省级单位",
                "wpUnitsNum": 98
            },
            {
                "wpUnitsName": "琼山区卫生局",
                "wpUnitsNum": 1
            }
        ]
    },
    "r": 1,
    "m": "操作成功"
})
