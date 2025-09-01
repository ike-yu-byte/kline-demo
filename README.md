# CH KLineChart Preview

KLineChart of CH.

## 国际化

```
query里面lang传对应国际化语言
┌─ar-SA  // 阿拉伯语
│─br  // 葡萄牙语
├─da  // 丹麦语
├─de  // 德语
├─el  // 希腊语
├─en  // 英文（美式）
├─es  // 西班牙语
├─fa  // 波斯语
├─fr  // 法语
├─hi  // 印地语
├─id  // 印尼语
├─it  // 意大利语
├─ja  // 日语
├─ko  // 韩语
├─ru  // 俄语
├─th  // 泰语
├─tu  // 土耳其语
├─ur  // 巴基斯坦语
├─vi  // 越南语
├─zh  // 简体中文
└─zhHK // 繁体中文
```

## Links

- [KLineChart](https://github.com/klinecharts/KLineChart)
- [Pro](https://github.com/klinecharts/pro)

## klinecharts/pro

![预览链接：](https://ike-yu-byte.github.io/kline-demo/)

## 时间段

```
[
    {
        multiplier: 1,
        timespan: "minute",
        text: "1m",
    }
]
```

## 货币数据点

```
[
    {
        exchange: "XNYS", // 交易所
        market: "stocks", // 市场分类
        name: "Alibaba Group Holding Limited American Depositary Shares, each represents eight Ordinary Shares", // 标的名
        shortName: "BABA", // 标的简短名
        ticker: "BABA", // 唯一标识
        priceCurrency: "usd", // 价格单位
        type: "ADRC", // 类型?
        logo: "data:image/png;base64,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",
    },
]
```

## 默认 styles

```
{
    "grid": {
        "show": true,
        "horizontal": {
            "show": true,
            "size": 1,
            "color": "#EDEDED",
            "style": "dashed",
            "dashedValue": [
                2,
                2
            ]
        },
        "vertical": {
            "show": true,
            "size": 1,
            "color": "#EDEDED",
            "style": "dashed",
            "dashedValue": [
                2,
                2
            ]
        }
    },
    "candle": {
        "type": "candle_solid",
        "bar": {
            "upColor": "#2DC08E",
            "downColor": "#F92855",
            "noChangeColor": "#888888",
            "upBorderColor": "#2DC08E",
            "downBorderColor": "#F92855",
            "noChangeBorderColor": "#888888",
            "upWickColor": "#2DC08E",
            "downWickColor": "#F92855",
            "noChangeWickColor": "#888888"
        },
        "area": {
            "lineSize": 2,
            "lineColor": "#1677FF",
            "smooth": false,
            "value": "close",
            "backgroundColor": [
                {
                    "offset": 0,
                    "color": "rgba(22, 119, 255, 0.01)"
                },
                {
                    "offset": 1,
                    "color": "rgba(22, 119, 255, 0.2)"
                }
            ],
            "point": {
                "show": true,
                "color": "#1677FF",
                "radius": 4,
                "rippleColor": "rgba(22, 119, 255, 0.3)",
                "rippleRadius": 8,
                "animation": true,
                "animationDuration": 1000
            }
        },
        "priceMark": {
            "show": true,
            "high": {
                "show": true,
                "color": "#76808F",
                "textOffset": 5,
                "textSize": 10,
                "textFamily": "Helvetica Neue",
                "textWeight": "normal"
            },
            "low": {
                "show": true,
                "color": "#76808F",
                "textOffset": 5,
                "textSize": 10,
                "textFamily": "Helvetica Neue",
                "textWeight": "normal"
            },
            "last": {
                "show": true,
                "upColor": "#2DC08E",
                "downColor": "#F92855",
                "noChangeColor": "#888888",
                "line": {
                    "show": true,
                    "style": "dashed",
                    "dashedValue": [
                        4,
                        4
                    ],
                    "size": 1
                },
                "text": {
                    "show": true,
                    "style": "fill",
                    "size": 12,
                    "paddingLeft": 4,
                    "paddingTop": 4,
                    "paddingRight": 4,
                    "paddingBottom": 4,
                    "borderColor": "transparent",
                    "borderStyle": "solid",
                    "borderSize": 0,
                    "borderDashedValue": [
                        2,
                        2
                    ],
                    "color": "#FFFFFF",
                    "family": "Helvetica Neue",
                    "weight": "normal",
                    "borderRadius": 2
                }
            }
        },
        "tooltip": {
            "offsetLeft": 4,
            "offsetTop": 6,
            "offsetRight": 4,
            "offsetBottom": 6,
            "showRule": "always",
            "showType": "standard",
            "custom": [
                {
                    "title": "time",
                    "value": "{time}"
                },
                {
                    "title": "open",
                    "value": "{open}"
                },
                {
                    "title": "high",
                    "value": "{high}"
                },
                {
                    "title": "low",
                    "value": "{low}"
                },
                {
                    "title": "close",
                    "value": "{close}"
                },
                {
                    "title": "volume",
                    "value": "{volume}"
                }
            ],
            "defaultValue": "n/a",
            "rect": {
                "position": "fixed",
                "paddingLeft": 4,
                "paddingRight": 4,
                "paddingTop": 4,
                "paddingBottom": 4,
                "offsetLeft": 4,
                "offsetTop": 4,
                "offsetRight": 4,
                "offsetBottom": 4,
                "borderRadius": 4,
                "borderSize": 1,
                "borderColor": "#F2F3F5",
                "color": "#FEFEFE"
            },
            "text": {
                "size": 12,
                "family": "Helvetica Neue",
                "weight": "normal",
                "color": "#76808F",
                "marginLeft": 8,
                "marginTop": 4,
                "marginRight": 8,
                "marginBottom": 4
            },
            "icons": []
        }
    },
    "indicator": {
        "ohlc": {
            "upColor": "rgba(45, 192, 142, .7)",
            "downColor": "rgba(249, 40, 85, .7)",
            "noChangeColor": "#888888"
        },
        "bars": [
            {
                "style": "fill",
                "borderStyle": "solid",
                "borderSize": 1,
                "borderDashedValue": [
                    2,
                    2
                ],
                "upColor": "rgba(45, 192, 142, .7)",
                "downColor": "rgba(249, 40, 85, .7)",
                "noChangeColor": "#888888"
            }
        ],
        "lines": [
            {
                "style": "solid",
                "smooth": false,
                "size": 1,
                "dashedValue": [
                    2,
                    2
                ],
                "color": "#FF9600"
            },
            {
                "style": "solid",
                "smooth": false,
                "size": 1,
                "dashedValue": [
                    2,
                    2
                ],
                "color": "#935EBD"
            },
            {
                "style": "solid",
                "smooth": false,
                "size": 1,
                "dashedValue": [
                    2,
                    2
                ],
                "color": "#1677FF"
            },
            {
                "style": "solid",
                "smooth": false,
                "size": 1,
                "dashedValue": [
                    2,
                    2
                ],
                "color": "#E11D74"
            },
            {
                "style": "solid",
                "smooth": false,
                "size": 1,
                "dashedValue": [
                    2,
                    2
                ],
                "color": "#01C5C4"
            }
        ],
        "circles": [
            {
                "style": "fill",
                "borderStyle": "solid",
                "borderSize": 1,
                "borderDashedValue": [
                    2,
                    2
                ],
                "upColor": "rgba(45, 192, 142, .7)",
                "downColor": "rgba(249, 40, 85, .7)",
                "noChangeColor": "#888888"
            }
        ],
        "lastValueMark": {
            "show": false,
            "text": {
                "show": false,
                "style": "fill",
                "color": "#FFFFFF",
                "size": 12,
                "family": "Helvetica Neue",
                "weight": "normal",
                "borderStyle": "solid",
                "borderColor": "transparent",
                "borderSize": 0,
                "borderDashedValue": [
                    2,
                    2
                ],
                "paddingLeft": 4,
                "paddingTop": 4,
                "paddingRight": 4,
                "paddingBottom": 4,
                "borderRadius": 2
            }
        },
        "tooltip": {
            "offsetLeft": 4,
            "offsetTop": 6,
            "offsetRight": 4,
            "offsetBottom": 6,
            "showRule": "always",
            "showType": "standard",
            "showName": true,
            "showParams": true,
            "defaultValue": "n/a",
            "text": {
                "size": 12,
                "family": "Helvetica Neue",
                "weight": "normal",
                "color": "#76808F",
                "marginLeft": 8,
                "marginTop": 4,
                "marginRight": 8,
                "marginBottom": 4
            },
            "icons": [
                {
                    "id": "visible",
                    "position": "middle",
                    "marginLeft": 8,
                    "marginTop": 7,
                    "marginRight": 0,
                    "marginBottom": 0,
                    "paddingLeft": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingBottom": 0,
                    "icon": "",
                    "fontFamily": "icomoon",
                    "size": 14,
                    "color": "#76808F",
                    "activeColor": "#76808F",
                    "backgroundColor": "transparent",
                    "activeBackgroundColor": "rgba(22, 119, 255, 0.15)"
                },
                {
                    "id": "invisible",
                    "position": "middle",
                    "marginLeft": 8,
                    "marginTop": 7,
                    "marginRight": 0,
                    "marginBottom": 0,
                    "paddingLeft": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingBottom": 0,
                    "icon": "",
                    "fontFamily": "icomoon",
                    "size": 14,
                    "color": "#76808F",
                    "activeColor": "#76808F",
                    "backgroundColor": "transparent",
                    "activeBackgroundColor": "rgba(22, 119, 255, 0.15)"
                },
                {
                    "id": "setting",
                    "position": "middle",
                    "marginLeft": 6,
                    "marginTop": 7,
                    "marginBottom": 0,
                    "marginRight": 0,
                    "paddingLeft": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingBottom": 0,
                    "icon": "",
                    "fontFamily": "icomoon",
                    "size": 14,
                    "color": "#76808F",
                    "activeColor": "#76808F",
                    "backgroundColor": "transparent",
                    "activeBackgroundColor": "rgba(22, 119, 255, 0.15)"
                },
                {
                    "id": "close",
                    "position": "middle",
                    "marginLeft": 6,
                    "marginTop": 7,
                    "marginRight": 0,
                    "marginBottom": 0,
                    "paddingLeft": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingBottom": 0,
                    "icon": "",
                    "fontFamily": "icomoon",
                    "size": 14,
                    "color": "#76808F",
                    "activeColor": "#76808F",
                    "backgroundColor": "transparent",
                    "activeBackgroundColor": "rgba(22, 119, 255, 0.15)"
                }
            ]
        }
    },
    "xAxis": {
        "show": true,
        "size": "auto",
        "axisLine": {
            "show": true,
            "color": "#DDDDDD",
            "size": 1
        },
        "tickText": {
            "show": true,
            "color": "#76808F",
            "size": 12,
            "family": "Helvetica Neue",
            "weight": "normal",
            "marginStart": 4,
            "marginEnd": 4
        },
        "tickLine": {
            "show": true,
            "size": 1,
            "length": 3,
            "color": "#DDDDDD"
        }
    },
    "yAxis": {
        "show": true,
        "size": "auto",
        "axisLine": {
            "show": true,
            "color": "#DDDDDD",
            "size": 1
        },
        "tickText": {
            "show": true,
            "color": "#76808F",
            "size": 12,
            "family": "Helvetica Neue",
            "weight": "normal",
            "marginStart": 4,
            "marginEnd": 4
        },
        "tickLine": {
            "show": true,
            "size": 1,
            "length": 3,
            "color": "#DDDDDD"
        },
        "type": "normal",
        "position": "right",
        "inside": false,
        "reverse": false
    },
    "separator": {
        "size": 1,
        "color": "#DDDDDD",
        "fill": true,
        "activeBackgroundColor": "rgba(22, 119, 255, 0.08)"
    },
    "crosshair": {
        "show": true,
        "horizontal": {
            "show": true,
            "line": {
                "show": true,
                "style": "dashed",
                "dashedValue": [
                    4,
                    2
                ],
                "size": 1,
                "color": "#76808F"
            },
            "text": {
                "show": true,
                "style": "fill",
                "color": "#FFFFFF",
                "size": 12,
                "family": "Helvetica Neue",
                "weight": "normal",
                "borderStyle": "solid",
                "borderDashedValue": [
                    2,
                    2
                ],
                "borderSize": 1,
                "borderColor": "#686D76",
                "borderRadius": 2,
                "paddingLeft": 4,
                "paddingRight": 4,
                "paddingTop": 4,
                "paddingBottom": 4,
                "backgroundColor": "#686D76"
            }
        },
        "vertical": {
            "show": true,
            "line": {
                "show": true,
                "style": "dashed",
                "dashedValue": [
                    4,
                    2
                ],
                "size": 1,
                "color": "#76808F"
            },
            "text": {
                "show": true,
                "style": "fill",
                "color": "#FFFFFF",
                "size": 12,
                "family": "Helvetica Neue",
                "weight": "normal",
                "borderStyle": "solid",
                "borderDashedValue": [
                    2,
                    2
                ],
                "borderSize": 1,
                "borderColor": "#686D76",
                "borderRadius": 2,
                "paddingLeft": 4,
                "paddingRight": 4,
                "paddingTop": 4,
                "paddingBottom": 4,
                "backgroundColor": "#686D76"
            }
        }
    },
    "overlay": {
        "point": {
            "color": "#1677FF",
            "borderColor": "rgba(22, 119, 255, 0.35)",
            "borderSize": 1,
            "radius": 5,
            "activeColor": "#1677FF",
            "activeBorderColor": "rgba(22, 119, 255, 0.35)",
            "activeBorderSize": 3,
            "activeRadius": 5
        },
        "line": {
            "style": "solid",
            "smooth": false,
            "color": "#1677FF",
            "size": 1,
            "dashedValue": [
                2,
                2
            ]
        },
        "rect": {
            "style": "fill",
            "color": "rgba(22, 119, 255, 0.25)",
            "borderColor": "#1677FF",
            "borderSize": 1,
            "borderRadius": 0,
            "borderStyle": "solid",
            "borderDashedValue": [
                2,
                2
            ]
        },
        "polygon": {
            "style": "fill",
            "color": "#1677FF",
            "borderColor": "#1677FF",
            "borderSize": 1,
            "borderStyle": "solid",
            "borderDashedValue": [
                2,
                2
            ]
        },
        "circle": {
            "style": "fill",
            "color": "rgba(22, 119, 255, 0.25)",
            "borderColor": "#1677FF",
            "borderSize": 1,
            "borderStyle": "solid",
            "borderDashedValue": [
                2,
                2
            ]
        },
        "arc": {
            "style": "solid",
            "color": "#1677FF",
            "size": 1,
            "dashedValue": [
                2,
                2
            ]
        },
        "text": {
            "style": "fill",
            "color": "#FFFFFF",
            "size": 12,
            "family": "Helvetica Neue",
            "weight": "normal",
            "borderStyle": "solid",
            "borderDashedValue": [
                2,
                2
            ],
            "borderSize": 1,
            "borderRadius": 2,
            "borderColor": "#1677FF",
            "paddingLeft": 4,
            "paddingRight": 4,
            "paddingTop": 4,
            "paddingBottom": 4,
            "backgroundColor": "#1677FF"
        },
        "rectText": {
            "style": "fill",
            "color": "#FFFFFF",
            "size": 12,
            "family": "Helvetica Neue",
            "weight": "normal",
            "borderStyle": "solid",
            "borderDashedValue": [
                2,
                2
            ],
            "borderSize": 1,
            "borderRadius": 2,
            "borderColor": "#1677FF",
            "paddingLeft": 4,
            "paddingRight": 4,
            "paddingTop": 4,
            "paddingBottom": 4,
            "backgroundColor": "#1677FF"
        }
    }
}
```
