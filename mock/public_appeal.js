import Mock from 'mockjs'
// const Random = Mock.Random
// 查询各分类工单统计
Mock.mock(/\/screen\/queryWpTypeNum/,  {
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
        },
      {
        "classWpNum": 65,
        "nodename": "门前三包区域"
      },
      {
        "classWpNum": 135,
        "nodename": "无效来电"
      },
      {
        "classWpNum": 48,
        "nodename": "交通违章"
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
                "wpAreaName": "鄂城区",
                "wpAreaNum": 576
            },
          {
            "wpAreaName": "华容区",
            "wpAreaNum": 286
          },
          {
            "wpAreaName": "梁子湖区",
            "wpAreaNum": 98
          },
          {
            "wpAreaName": "航空经济区",
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
                "wpUnitsNum": 46
            },
           {
             "wpUnitsName": "市文化局",
             "wpUnitsNum": 45
           },
           {
             "wpUnitsName": "市环保局",
             "wpUnitsNum": 46
           }
        ]
    },
    "r": 1,
    "m": "操作成功"
})
Mock.mock(/\/screen\/querySourceWpNum/,  {
  "d": {
    "sourceWpNumList": [
      {
        "nodename": "语音",
        "sourceWpNum": 1306
      },
      {
        "nodename": "微信",
        "sourceWpNum": 116
      },
      {
        "nodename": "公众号",
        "sourceWpNum": 29
      },
      {
        "nodename": "省疫情防控",
        "sourceWpNum": 0
      }
    ],
    "wpDayTotal": 1508
  },
  "r": 1,
  "m": "操作成功"
})

Mock.mock(/\/screen\/acceptanceStatistics/,  {
    "resultCode":'0',
    "d": {
        "secondMonthNum": [
            {
                "startTime": "20200703",
                "dayNum": 9729
            },
            {
                "startTime": "20200704",
                "dayNum": 7863
            },
            {
                "startTime": "20200705",
                "dayNum": 7478
            },
            {
                "startTime": "20200706",
                "dayNum": 10202
            },
            {
                "startTime": "20200707",
                "dayNum": 10542
            },
            {
                "startTime": "20200708",
                "dayNum": 10125
            },
            {
                "startTime": "20200709",
                "dayNum": 9627
            },
            {
                "startTime": "20200710",
                "dayNum": 8892
            },
            {
                "startTime": "20200711",
                "dayNum": 7459
            },
            {
                "startTime": "20200712",
                "dayNum": 6843
            },
            {
                "startTime": "20200713",
                "dayNum": 9564
            },
            {
                "startTime": "20200714",
                "dayNum": 9714
            },
            {
                "startTime": "20200715",
                "dayNum": 9794
            },
            {
                "startTime": "20200716",
                "dayNum": 9700
            },
            {
                "startTime": "20200717",
                "dayNum": 8700
            },
            {
                "startTime": "20200718",
                "dayNum": 7049
            },
            {
                "startTime": "20200719",
                "dayNum": 6822
            },
            {
                "startTime": "20200720",
                "dayNum": 9440
            },
            {
                "startTime": "20200721",
                "dayNum": 9061
            },
            {
                "startTime": "20200722",
                "dayNum": 8718
            },
            {
                "startTime": "20200723",
                "dayNum": 8890
            },
            {
                "startTime": "20200724",
                "dayNum": 8513
            },
            {
                "startTime": "20200725",
                "dayNum": 6861
            },
            {
                "startTime": "20200726",
                "dayNum": 7032
            },
            {
                "startTime": "20200727",
                "dayNum": 9243
            },
            {
                "startTime": "20200728",
                "dayNum": 9114
            },
            {
                "startTime": "20200729",
                "dayNum": 9294
            },
            {
                "startTime": "20200730",
                "dayNum": 8491
            },
            {
                "startTime": "20200731",
                "dayNum": 8879
            },
            {
                "startTime": "20200801",
                "dayNum": 7447
            },
            {
                "startTime": "20200802",
                "dayNum": 7190
            }
        ],
        "firstMonthNum": [
            {
                "startTime": "20200803",
                "dayNum": 8907
            },
            {
                "startTime": "20200804",
                "dayNum": 8603
            },
            {
                "startTime": "20200805",
                "dayNum": 8610
            },
            {
                "startTime": "20200806",
                "dayNum": 8691
            },
            {
                "startTime": "20200807",
                "dayNum": 9443
            },
            {
                "startTime": "20200808",
                "dayNum": 7156
            },
            {
                "startTime": "20200809",
                "dayNum": 6711
            },
            {
                "startTime": "20200810",
                "dayNum": 8940
            },
            {
                "startTime": "20200811",
                "dayNum": 9230
            },
            {
                "startTime": "20200812",
                "dayNum": 8379
            },
            {
                "startTime": "20200813",
                "dayNum": 8409
            },
            {
                "startTime": "20200814",
                "dayNum": 8361
            },
            {
                "startTime": "20200815",
                "dayNum": 6823
            },
            {
                "startTime": "20200816",
                "dayNum": 6951
            },
            {
                "startTime": "20200817",
                "dayNum": 8823
            },
            {
                "startTime": "20200818",
                "dayNum": 8598
            },
            {
                "startTime": "20200819",
                "dayNum": 9063
            },
            {
                "startTime": "20200820",
                "dayNum": 9101
            },
            {
                "startTime": "20200821",
                "dayNum": 8816
            },
            {
                "startTime": "20200822",
                "dayNum": 6940
            },
            {
                "startTime": "20200823",
                "dayNum": 6480
            },
            {
                "startTime": "20200824",
                "dayNum": 9164
            },
            {
                "startTime": "20200825",
                "dayNum": 8733
            },
            {
                "startTime": "20200826",
                "dayNum": 8490
            },
            {
                "startTime": "20200827",
                "dayNum": 8294
            },
            {
                "startTime": "20200828",
                "dayNum": 8519
            },
            {
                "startTime": "20200829",
                "dayNum": 6688
            },
            {
                "startTime": "20200830",
                "dayNum": 6602
            },
            {
                "startTime": "20200831",
                "dayNum": 8552
            },
            {
                "startTime": "20200901",
                "dayNum": 9093
            },
            {
                "startTime": "20200902",
                "dayNum": 8544
            }
        ],
        "lastYearFirstMonthNum": [
            {
                "startTime": "20190803",
                "dayNum": 5007
            },
            {
                "startTime": "20190804",
                "dayNum": 4377
            },
            {
                "startTime": "20190805",
                "dayNum": 8086
            },
            {
                "startTime": "20190806",
                "dayNum": 7533
            },
            {
                "startTime": "20190807",
                "dayNum": 6795
            },
            {
                "startTime": "20190808",
                "dayNum": 6966
            },
            {
                "startTime": "20190809",
                "dayNum": 6967
            },
            {
                "startTime": "20190810",
                "dayNum": 4768
            },
            {
                "startTime": "20190811",
                "dayNum": 4403
            },
            {
                "startTime": "20190812",
                "dayNum": 7596
            },
            {
                "startTime": "20190813",
                "dayNum": 7832
            },
            {
                "startTime": "20190814",
                "dayNum": 8954
            },
            {
                "startTime": "20190815",
                "dayNum": 8036
            },
            {
                "startTime": "20190816",
                "dayNum": 7265
            },
            {
                "startTime": "20190817",
                "dayNum": 5032
            },
            {
                "startTime": "20190818",
                "dayNum": 4672
            },
            {
                "startTime": "20190819",
                "dayNum": 8135
            },
            {
                "startTime": "20190820",
                "dayNum": 7550
            },
            {
                "startTime": "20190821",
                "dayNum": 7557
            },
            {
                "startTime": "20190822",
                "dayNum": 7417
            },
            {
                "startTime": "20190823",
                "dayNum": 7108
            },
            {
                "startTime": "20190824",
                "dayNum": 4942
            },
            {
                "startTime": "20190825",
                "dayNum": 4566
            },
            {
                "startTime": "20190826",
                "dayNum": 8010
            },
            {
                "startTime": "20190827",
                "dayNum": 8143
            },
            {
                "startTime": "20190828",
                "dayNum": 8371
            },
            {
                "startTime": "20190829",
                "dayNum": 6942
            },
            {
                "startTime": "20190830",
                "dayNum": 6979
            },
            {
                "startTime": "20190831",
                "dayNum": 5197
            },
            {
                "startTime": "20190901",
                "dayNum": 5194
            },
            {
                "startTime": "20190902",
                "dayNum": 7576
            }
        ]
    },
    "r": 1,
    "m": "操作成功"
})
