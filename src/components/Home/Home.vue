<template>
  <div class="home">
    <!--    <div >
          <img src="/logo.png" style="width: 137px">
          <br>
          <img :src="'https://img.shields.io/badge/views-'+views+'-brightgreen'">
          <a href="https://github.com/Jimase/Software_Engineering_Team_10"><img
              src="https://img.shields.io/github/stars/Jimase/Software_Engineering_Team_10?style=flat-square"></a>
        </div>-->
    <section class="slider">
      <div class="slide slide--current" data-content="content-1">
        <div class="slide__mover">
          <div class="zoomer flex-center">
            <img class="zoomer__image" src="/macbook.png" alt="macbook"/>
            <div class="preview">
              <div class="word-cloud" v-if="cur===0">
                <word-cloud-chart :data="option_jd.series[0].data"></word-cloud-chart>
              </div>
              <div class="word-cloud" v-else-if="cur===1">
                <word-cloud-chart :data="option_tb.series[0].data"></word-cloud-chart>
              </div>
              <div class="zoomer__area zoomer__area--size-2"></div>
            </div>
          </div>
        </div>
        <h2 class="slide__title"><span>{{titles[cur]}}</span></h2>
      </div>
    </section>
    <div>
      <md-button @click="prev" class="md-icon-button md-primary">
        <md-icon>arrow_left</md-icon>
      </md-button>
      <md-button @click="next" class="md-icon-button md-primary">
        <md-icon>arrow_right</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
// import {importWordCloud} from 'dr-vue-echarts/utils/mixins'
// eslint-disable-next-line no-unused-vars
import {WordCloudChart} from "dr-vue-echarts";

export default {
  name: "Home",
  // mixins:[importWordCloud('jd-word'),importWordCloud('tb-word')],
  components: {WordCloudChart},
  data() {
    return {
      titles:['京东词频','淘宝词频'],
      cur: 0,
      star: 0,
      views: 0,
      jdChart: null,
      tbChart: null,
      option_jd: {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
          "#f05b72",
          "#ef5b9c",
          "#f47920",
          "#905a3d",
          "#fab27b",
          "#2a5caa",
          "#444693",
          "#726930",
          "#b2d235",
          "#6d8346",
          "#ac6767",
          "#1d953f",
          "#6950a1",
          "#918597"
        ],
        "series": [
          {
            "type": "wordCloud",
            "name": "\u70ed\u70b9\u5206\u6790",
            "shape": "circle",
            "rotationRange": [
              -90,
              90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
              6,
              66
            ],
            "data": [
              {
                "name": "感冒发烧",
                "value": "1000",
                "textStyle": {
                  "normal": {
                    "color": "rgb(60,64,133)"
                  }
                }
              },
              {
                "name": "流涕",
                "value": "999",
                "textStyle": {
                  "normal": {
                    "color": "rgb(131,3,75)"
                  }
                }
              },
              {
                "name": "鼻塞",
                "value": "888",
                "textStyle": {
                  "normal": {
                    "color": "rgb(83,60,45)"
                  }
                }
              },
              {
                "name": "打喷嚏",
                "value": "777",
                "textStyle": {
                  "normal": {
                    "color": "rgb(24,145,140)"
                  }
                }
              },
              {
                "name": "咽喉肿痛",
                "value": "688",
                "textStyle": {
                  "normal": {
                    "color": "rgb(111,120,7)"
                  }
                }
              },
              {
                "name": "腰痛",
                "value": "516",
                "textStyle": {
                  "normal": {
                    "color": "rgb(77,158,67)"
                  }
                }
              },
              {
                "name": "擦伤",
                "value": "515",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,67,97)"
                  }
                }
              },
              {
                "name": "腹胀",
                "value": "483",
                "textStyle": {
                  "normal": {
                    "color": "rgb(39,114,108)"
                  }
                }
              },
              {
                "name": "腹痛",
                "value": "462",
                "textStyle": {
                  "normal": {
                    "color": "rgb(96,50,122)"
                  }
                }
              },
              {
                "name": "便秘",
                "value": "449",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,113,52)"
                  }
                }
              },
              {
                "name": "肩痛",
                "value": "429",
                "textStyle": {
                  "normal": {
                    "color": "rgb(102,18,15)"
                  }
                }
              },
              {
                "name": "头痛",
                "value": "422",
                "textStyle": {
                  "normal": {
                    "color": "rgb(17,140,45)"
                  }
                }
              },
              {
                "name": "呕吐",
                "value": "407",
                "textStyle": {
                  "normal": {
                    "color": "rgb(59,91,38)"
                  }
                }
              },
              {
                "name": "恶心",
                "value": "406",
                "textStyle": {
                  "normal": {
                    "color": "rgb(110,88,149)"
                  }
                }
              },
              {
                "name": "神疲乏力",
                "value": "406",
                "textStyle": {
                  "normal": {
                    "color": "rgb(107,57,137)"
                  }
                }
              },
              {
                "name": "皮肤红肿",
                "value": "386",
                "textStyle": {
                  "normal": {
                    "color": "rgb(8,55,112)"
                  }
                }
              },
              {
                "name": "皮肤干燥",
                "value": "385",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,142,59)"
                  }
                }
              },
              {
                "name": "皮肤疼痛",
                "value": "375",
                "textStyle": {
                  "normal": {
                    "color": "rgb(54,62,59)"
                  }
                }
              },
              {
                "name": "痰黄",
                "value": "355",
                "textStyle": {
                  "normal": {
                    "color": "rgb(68,156,6)"
                  }
                }
              },
              {
                "name": "易抽筋",
                "value": "355",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,74,147)"
                  }
                }
              },
              {
                "name": "颈部酸胀",
                "value": "335",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,131,55)"
                  }
                }
              },
              {
                "name": "口干咽燥",
                "value": "324",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,91,21)"
                  }
                }
              },
              {
                "name": "体虚乏力",
                "value": "304",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,114,42)"
                  }
                }
              },
              {
                "name": "神经衰弱",
                "value": "304",
                "textStyle": {
                  "normal": {
                    "color": "rgb(159,102,56)"
                  }
                }
              },
              {
                "name": "夜频尿多",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,143,142)"
                  }
                }
              },
              {
                "name": "高血压",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(98,47,110)"
                  }
                }
              },
              {
                "name": "腹部胀满",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(125,49,143)"
                  }
                }
              },
              {
                "name": "跌打损伤",
                "value": "281",
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,6,149)"
                  }
                }
              },
              {
                "name": "痱子",
                "value": "254",
                "textStyle": {
                  "normal": {
                    "color": "rgb(113,10,46)"
                  }
                }
              },
              {
                "name": "皮肤瘙痒",
                "value": "254",
                "textStyle": {
                  "normal": {
                    "color": "rgb(135,137,30)"
                  }
                }
              },
              {
                "name": "肌肉酸痛",
                "value": "253",
                "textStyle": {
                  "normal": {
                    "color": "rgb(149,105,135)"
                  }
                }
              },
              {
                "name": "尿频",
                "value": "253",
                "textStyle": {
                  "normal": {
                    "color": "rgb(70,86,114)"
                  }
                }
              },
              {
                "name": "皮肤干燥",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(110,19,136)"
                  }
                }
              },
              {
                "name": "扁桃体炎",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(127,21,51)"
                  }
                }
              },
              {
                "name": "咳嗽少痰",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,50,151)"
                  }
                }
              },
              {
                "name": "畏寒",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(41,31,62)"
                  }
                }
              },
              {
                "name": "疲倦无力",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(142,115,69)"
                  }
                }
              },
              {
                "name": "皮肤油腻",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(71,14,78)"
                  }
                }
              },
              {
                "name": "无汗",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(159,132,119)"
                  }
                }
              },
              {
                "name": "脱发",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(6,85,102)"
                  }
                }
              },
              {
                "name": "典型皮疹",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,99,83)"
                  }
                }
              },
              {
                "name": "少量便血",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,129,32)"
                  }
                }
              },
              {
                "name": "恶心厌食",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,69,12)"
                  }
                }
              },
              {
                "name": "舌红少津",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,81,1)"
                  }
                }
              },
              {
                "name": "失眠",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(84,48,55)"
                  }
                }
              },
              {
                "name": "乏力",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(149,103,90)"
                  }
                }
              },
              {
                "name": "尿急",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(10,11,73)"
                  }
                }
              },
              {
                "name": "视线模糊",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(29,131,67)"
                  }
                }
              },
              {
                "name": "牙龈肿痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(95,107,131)"
                  }
                }
              },
              {
                "name": "头晕目眩",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(85,8,48)"
                  }
                }
              },
              {
                "name": "神经性头痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(42,21,61)"
                  }
                }
              },
              {
                "name": "感染",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(136,25,11)"
                  }
                }
              },
              {
                "name": "大便干结",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(76,114,57)"
                  }
                }
              },
              {
                "name": "肢体麻木",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(30,60,45)"
                  }
                }
              },
              {
                "name": "腰痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,27,46)"
                  }
                }
              },
              {
                "name": "发热",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(1,77,54)"
                  }
                }
              },
              {
                "name": "心慌气短",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(107,81,91)"
                  }
                }
              },
              {
                "name": "失眠健忘",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(125,156,124)"
                  }
                }
              },
              {
                "name": "口苦尿黄",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(94,101,75)"
                  }
                }
              },
              {
                "name": "脱屑",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(80,90,7)"
                  }
                }
              },
              {
                "name": "萎软",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(83,88,100)"
                  }
                }
              },
              {
                "name": "疤痕疙瘩",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,81,70)"
                  }
                }
              },
              {
                "name": "流行性腮腺炎",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(128,87,151)"
                  }
                }
              },
              {
                "name": "饮食无味",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,144,160)"
                  }
                }
              },
              {
                "name": "舌苔黄",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(88,21,10)"
                  }
                }
              },
              {
                "name": "角质化异常",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(23,10,84)"
                  }
                }
              },
              {
                "name": "烦躁易怒",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,93,3)"
                  }
                }
              },
              {
                "name": "耳鸣",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(64,111,36)"
                  }
                }
              },
              {
                "name": "结痂",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(112,54,140)"
                  }
                }
              },
              {
                "name": "气虚食减",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(59,65,22)"
                  }
                }
              },
              {
                "name": "结膜炎",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(103,5,33)"
                  }
                }
              },
              {
                "name": "大便糖稀",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,150,78)"
                  }
                }
              },
              {
                "name": "黑头",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(53,44,159)"
                  }
                }
              },
              {
                "name": "红癣",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(122,113,68)"
                  }
                }
              },
              {
                "name": "肝区疼痛",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(63,132,123)"
                  }
                }
              },
              {
                "name": "胃酸过多",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(30,139,140)"
                  }
                }
              },
              {
                "name": "月经量少",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,94,8)"
                  }
                }
              },
              {
                "name": "胸肋胀满",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(120,148,133)"
                  }
                }
              },
              {
                "name": "唇色淡",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,86,108)"
                  }
                }
              },
              {
                "name": "色斑",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(44,83,67)"
                  }
                }
              },
              {
                "name": "前列腺增生",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(150,121,49)"
                  }
                }
              },
              {
                "name": "小便频数",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(25,129,74)"
                  }
                }
              },
              {
                "name": "心动过速",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(146,81,67)"
                  }
                }
              },
              {
                "name": "男性脱发",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(61,12,127)"
                  }
                }
              },
              {
                "name": "暗疮",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(7,92,113)"
                  }
                }
              },
              {
                "name": "体弱",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(36,58,66)"
                  }
                }
              },
              {
                "name": "尿不尽",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,45,42)"
                  }
                }
              },
              {
                "name": "肛裂",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(139,137,16)"
                  }
                }
              },
              {
                "name": "肛门坠胀",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(77,88,142)"
                  }
                }
              },
              {
                "name": "食欲缺乏",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(133,150,17)"
                  }
                }
              },
              {
                "name": "面色萎黄",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(121,56,49)"
                  }
                }
              },
              {
                "name": "胃灼热",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(53,110,23)"
                  }
                }
              },
              {
                "name": "颜面色斑",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(48,117,18)"
                  }
                }
              },
              {
                "name": "尿后余沥",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(38,128,126)"
                  }
                }
              },
              {
                "name": "食欲不振",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(156,135,86)"
                  }
                }
              },
              {
                "name": "黄褐斑",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(133,144,69)"
                  }
                }
              },
              {
                "name": "肝腹水",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(48,155,48)"
                  }
                }
              },
              {
                "name": "虚寒",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,58,89)"
                  }
                }
              },
              {
                "name": "早泄",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(24,19,120)"
                  }
                }
              },
              {
                "name": "阳痿",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(27,34,127)"
                  }
                }
              },
              {
                "name": "体倦乏力",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(112,153,19)"
                  }
                }
              },
              {
                "name": "无精",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(145,85,2)"
                  }
                }
              },
              {
                "name": "气虚血瘀",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,42,122)"
                  }
                }
              },
              {
                "name": "月经不调",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(153,119,48)"
                  }
                }
              },
            ],
            "drawOutOfBound": false,
            "textStyle": {
              "emphasis": {}
            }
          }
        ],
        "legend": [
          {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
          }
        ],
        "tooltip": {
          "show": true,
          "trigger": "item",
          "triggerOn": "mousemove|click",
          "axisPointer": {
            "type": "line"
          },
          "showContent": true,
          "alwaysShowContent": false,
          "showDelay": 0,
          "hideDelay": 100,
          "textStyle": {
            "fontSize": 14
          },
          "borderWidth": 0,
          "padding": 5
        },
        "title": [
          {
            "text": "京东词频",
            "padding": 5,
            "itemGap": 10,
            "textStyle": {
              "fontSize": 23
            }
          }
        ]
      },
      option_tb: {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
          "#f05b72",
          "#ef5b9c",
          "#f47920",
          "#905a3d",
          "#fab27b",
          "#2a5caa",
          "#444693",
          "#726930",
          "#b2d235",
          "#6d8346",
          "#ac6767",
          "#1d953f",
          "#6950a1",
          "#918597"
        ],
        "series": [
          {
            "type": "wordCloud",
            "name": "\u70ed\u70b9\u5206\u6790",
            "shape": "circle",
            "rotationRange": [
              -90,
              90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
              6,
              66
            ],
            "data": [
              {
                "name": "感冒发烧",
                "value": "1000",
                "textStyle": {
                  "normal": {
                    "color": "rgb(60,64,133)"
                  }
                }
              },
              {
                "name": "打喷嚏",
                "value": "999",
                "textStyle": {
                  "normal": {
                    "color": "rgb(131,3,75)"
                  }
                }
              },
              {
                "name": "鼻塞",
                "value": "888",
                "textStyle": {
                  "normal": {
                    "color": "rgb(83,60,45)"
                  }
                }
              },
              {
                "name": "流涕",
                "value": "777",
                "textStyle": {
                  "normal": {
                    "color": "rgb(24,145,140)"
                  }
                }
              },
              {
                "name": "跌打损伤",
                "value": "688",
                "textStyle": {
                  "normal": {
                    "color": "rgb(111,120,7)"
                  }
                }
              },
              {
                "name": "腹胀",
                "value": "588",
                "textStyle": {
                  "normal": {
                    "color": "rgb(103,88,67)"
                  }
                }
              },
              {
                "name": "腰痛",
                "value": "516",
                "textStyle": {
                  "normal": {
                    "color": "rgb(77,158,67)"
                  }
                }
              },
              {
                "name": "皮肤疼痛",
                "value": "515",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,67,97)"
                  }
                }
              },
              {
                "name": "头痛",
                "value": "483",
                "textStyle": {
                  "normal": {
                    "color": "rgb(39,114,108)"
                  }
                }
              },
              {
                "name": "腹痛",
                "value": "462",
                "textStyle": {
                  "normal": {
                    "color": "rgb(96,50,122)"
                  }
                }
              },
              {
                "name": "便秘",
                "value": "449",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,113,52)"
                  }
                }
              },
              {
                "name": "肩痛",
                "value": "429",
                "textStyle": {
                  "normal": {
                    "color": "rgb(102,18,15)"
                  }
                }
              },
              {
                "name": "呕吐",
                "value": "407",
                "textStyle": {
                  "normal": {
                    "color": "rgb(59,91,38)"
                  }
                }
              },
              {
                "name": "恶心",
                "value": "406",
                "textStyle": {
                  "normal": {
                    "color": "rgb(110,88,149)"
                  }
                }
              },
              {
                "name": "神疲乏力",
                "value": "406",
                "textStyle": {
                  "normal": {
                    "color": "rgb(107,57,137)"
                  }
                }
              },
              {
                "name": "皮肤红肿",
                "value": "386",
                "textStyle": {
                  "normal": {
                    "color": "rgb(8,55,112)"
                  }
                }
              },
              {
                "name": "皮肤干燥",
                "value": "385",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,142,59)"
                  }
                }
              },
              {
                "name": "擦伤",
                "value": "375",
                "textStyle": {
                  "normal": {
                    "color": "rgb(54,62,59)"
                  }
                }
              },
              {
                "name": "痰黄",
                "value": "355",
                "textStyle": {
                  "normal": {
                    "color": "rgb(68,156,6)"
                  }
                }
              },
              {
                "name": "易抽筋",
                "value": "355",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,74,147)"
                  }
                }
              },
              {
                "name": "颈部酸胀",
                "value": "335",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,131,55)"
                  }
                }
              },
              {
                "name": "口干咽燥",
                "value": "324",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,91,21)"
                  }
                }
              },
              {
                "name": "体虚乏力",
                "value": "304",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,114,42)"
                  }
                }
              },
              {
                "name": "神经衰弱",
                "value": "304",
                "textStyle": {
                  "normal": {
                    "color": "rgb(159,102,56)"
                  }
                }
              },
              {
                "name": "夜频尿多",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,143,142)"
                  }
                }
              },
              {
                "name": "体弱",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(98,47,110)"
                  }
                }
              },
              {
                "name": "痱子",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(125,49,143)"
                  }
                }
              },
              {
                "name": "咽喉肿痛",
                "value": "281",
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,6,149)"
                  }
                }
              },
              {
                "name": "腹部胀满",
                "value": "254",
                "textStyle": {
                  "normal": {
                    "color": "rgb(113,10,46)"
                  }
                }
              },
              {
                "name": "皮肤瘙痒",
                "value": "254",
                "textStyle": {
                  "normal": {
                    "color": "rgb(135,137,30)"
                  }
                }
              },
              {
                "name": "肌肉酸痛",
                "value": "253",
                "textStyle": {
                  "normal": {
                    "color": "rgb(149,105,135)"
                  }
                }
              },
              {
                "name": "大便干结",
                "value": "253",
                "textStyle": {
                  "normal": {
                    "color": "rgb(70,86,114)"
                  }
                }
              },
              {
                "name": "皮肤干燥",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(110,19,136)"
                  }
                }
              },
              {
                "name": "扁桃体炎",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(127,21,51)"
                  }
                }
              },
              {
                "name": "咳嗽少痰",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,50,151)"
                  }
                }
              },
              {
                "name": "唇色淡",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(41,31,62)"
                  }
                }
              },
              {
                "name": "气虚食减",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(142,115,69)"
                  }
                }
              },
              {
                "name": "皮肤油腻",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(71,14,78)"
                  }
                }
              },
              {
                "name": "无汗",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(159,132,119)"
                  }
                }
              },
              {
                "name": "脱发",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(6,85,102)"
                  }
                }
              },
              {
                "name": "典型皮疹",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,99,83)"
                  }
                }
              },
              {
                "name": "少量便血",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,129,32)"
                  }
                }
              },
              {
                "name": "恶心厌食",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,69,12)"
                  }
                }
              },
              {
                "name": "舌红少津",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,81,1)"
                  }
                }
              },
              {
                "name": "失眠",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(84,48,55)"
                  }
                }
              },
              {
                "name": "乏力",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(149,103,90)"
                  }
                }
              },
              {
                "name": "尿急",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(10,11,73)"
                  }
                }
              },
              {
                "name": "月经量少",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(29,131,67)"
                  }
                }
              },
              {
                "name": "头晕目眩",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(85,8,48)"
                  }
                }
              },
              {
                "name": "神经性头痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(42,21,61)"
                  }
                }
              },
              {
                "name": "感染",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(136,25,11)"
                  }
                }
              },
              {
                "name": "尿频",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(76,114,57)"
                  }
                }
              },
              {
                "name": "肢体麻木",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(30,60,45)"
                  }
                }
              },
              {
                "name": "腰痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,27,46)"
                  }
                }
              },
              {
                "name": "发热",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(1,77,54)"
                  }
                }
              },
              {
                "name": "心慌气短",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(107,81,91)"
                  }
                }
              },
              {
                "name": "失眠健忘",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(125,156,124)"
                  }
                }
              },
              {
                "name": "口苦尿黄",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(94,101,75)"
                  }
                }
              },
              {
                "name": "脱屑",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(80,90,7)"
                  }
                }
              },
              {
                "name": "萎软",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(83,88,100)"
                  }
                }
              },
              {
                "name": "疤痕疙瘩",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,81,70)"
                  }
                }
              },
              {
                "name": "流行性腮腺炎",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(128,87,151)"
                  }
                }
              },
              {
                "name": "饮食无味",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,144,160)"
                  }
                }
              },
              {
                "name": "舌苔黄",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(88,21,10)"
                  }
                }
              },
              {
                "name": "角质化异常",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(23,10,84)"
                  }
                }
              },
              {
                "name": "烦躁易怒",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,93,3)"
                  }
                }
              },
              {
                "name": "耳鸣",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(64,111,36)"
                  }
                }
              },
              {
                "name": "结痂",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(112,54,140)"
                  }
                }
              },
              {
                "name": "疲倦无力",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(59,65,22)"
                  }
                }
              },
              {
                "name": "结膜炎",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(103,5,33)"
                  }
                }
              },
              {
                "name": "大便糖稀",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,150,78)"
                  }
                }
              },
              {
                "name": "黑头",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(53,44,159)"
                  }
                }
              },
              {
                "name": "红癣",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(122,113,68)"
                  }
                }
              },
              {
                "name": "肝区疼痛",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(63,132,123)"
                  }
                }
              },
              {
                "name": "胃酸过多",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(30,139,140)"
                  }
                }
              },
              {
                "name": "视线模糊",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,94,8)"
                  }
                }
              },
              {
                "name": "胸肋胀满",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(120,148,133)"
                  }
                }
              },
              {
                "name": "畏寒",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,86,108)"
                  }
                }
              },
              {
                "name": "色斑",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(44,83,67)"
                  }
                }
              },
              {
                "name": "前列腺增生",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(150,121,49)"
                  }
                }
              },
              {
                "name": "小便频数",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(25,129,74)"
                  }
                }
              },
              {
                "name": "心动过速",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(146,81,67)"
                  }
                }
              },
              {
                "name": "男性脱发",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(61,12,127)"
                  }
                }
              },
              {
                "name": "暗疮",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(7,92,113)"
                  }
                }
              },
              {
                "name": "高血压",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(36,58,66)"
                  }
                }
              },
              {
                "name": "牙龈肿痛",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,107,149)"
                  }
                }
              },
              {
                "name": "尿不尽",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,45,42)"
                  }
                }
              },
              {
                "name": "肛裂",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(139,137,16)"
                  }
                }
              },
              {
                "name": "肛门坠胀",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(77,88,142)"
                  }
                }
              },
              {
                "name": "食欲缺乏",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(133,150,17)"
                  }
                }
              },
              {
                "name": "面色萎黄",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(121,56,49)"
                  }
                }
              },
              {
                "name": "胃灼热",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(53,110,23)"
                  }
                }
              },
              {
                "name": "颜面色斑",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(48,117,18)"
                  }
                }
              },
              {
                "name": "尿后余沥",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(38,128,126)"
                  }
                }
              },
              {
                "name": "食欲不振",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(156,135,86)"
                  }
                }
              },
              {
                "name": "黄褐斑",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(133,144,69)"
                  }
                }
              },
              {
                "name": "肝腹水",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(48,155,48)"
                  }
                }
              },
              {
                "name": "虚寒",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,58,89)"
                  }
                }
              },
              {
                "name": "早泄",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(24,19,120)"
                  }
                }
              },
              {
                "name": "阳痿",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(27,34,127)"
                  }
                }
              },
              {
                "name": "体倦乏力",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(112,153,19)"
                  }
                }
              },
              {
                "name": "无精",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(145,85,2)"
                  }
                }
              },
              {
                "name": "气虚血瘀",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,42,122)"
                  }
                }
              },
              {
                "name": "月经不调",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(153,119,48)"
                  }
                }
              },
            ],
            "drawOutOfBound": false,
            "textStyle": {
              "emphasis": {}
            }
          }
        ],
        "legend": [
          {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
          }
        ],
        "tooltip": {
          "show": true,
          "trigger": "item",
          "triggerOn": "mousemove|click",
          "axisPointer": {
            "type": "line"
          },
          "showContent": true,
          "alwaysShowContent": false,
          "showDelay": 0,
          "hideDelay": 100,
          "textStyle": {
            "fontSize": 14
          },
          "borderWidth": 0,
          "padding": 5
        },
        "title": [
          {
            "text": "淘宝词频",
            "padding": 5,
            "itemGap": 10,
            "textStyle": {
              "fontSize": 23
            }
          }
        ]
      }
    };
  },
  created() {
    // this.option = Object.assign({}, this.option, this.createVariablepie())
    /* let script = document.createElement('script')
     script.src = require('./js/classie.js')
     document.head.appendChild(script)
     script.src = require('./js/dynamics.min.js')
     document.head.appendChild(script)
     script.src = require('./js/main.js')
     document.head.appendChild(script)
     script.src = require('./js/modernizr.custom.js')
     document.head.appendChild(script)*/
  },
  methods: {
    next() {
      this.cur = this.cur < 1 ? this.cur + 1 : 1;
    },
    prev() {
      this.cur = this.cur > 0 ? this.cur - 1 : 0
    }
    /*dealWithData() {
      let geoCoordMap = {
        海门: [121.15, 31.89],
        鄂尔多斯: [109.781327, 39.608266],
        招远: [120.38, 37.35],
        舟山: [122.207216, 29.985295],
        齐齐哈尔: [123.97, 47.33],
        盐城: [120.13, 33.38],
        赤峰: [118.87, 42.28],
        青岛: [120.33, 36.07],
        乳山: [121.52, 36.89],
        金昌: [102.188043, 38.520089],
        泉州: [118.58, 24.93],
        莱西: [120.53, 36.86],
        日照: [119.46, 35.42],
        胶南: [119.97, 35.88],
        南通: [121.05, 32.08],
        拉萨: [91.11, 29.97],
        云浮: [112.02, 22.93],
        梅州: [116.1, 24.55],
        文登: [122.05, 37.2],
        上海: [121.48, 31.22],
        攀枝花: [101.718637, 26.582347],
        威海: [122.1, 37.5],
        承德: [117.93, 40.97],
        厦门: [118.1, 24.46],
        汕尾: [115.375279, 22.786211],
        潮州: [116.63, 23.68],
        丹东: [124.37, 40.13],
        太仓: [121.1, 31.45],
        曲靖: [103.79, 25.51],
        烟台: [121.39, 37.52],
        福州: [119.3, 26.08],
        瓦房店: [121.979603, 39.627114],
        即墨: [120.45, 36.38],
        抚顺: [123.97, 41.97],
        玉溪: [102.52, 24.35],
        张家口: [114.87, 40.82],
        阳泉: [113.57, 37.85],
        莱州: [119.942327, 37.177017],
        湖州: [120.1, 30.86],
        汕头: [116.69, 23.39],
        昆山: [120.95, 31.39],
        宁波: [121.56, 29.86],
        湛江: [110.359377, 21.270708],
        揭阳: [116.35, 23.55],
        荣成: [122.41, 37.16],
        连云港: [119.16, 34.59],
        葫芦岛: [120.836932, 40.711052],
        常熟: [120.74, 31.64],
        东莞: [113.75, 23.04],
        河源: [114.68, 23.73],
        淮安: [119.15, 33.5],
        泰州: [119.9, 32.49],
        南宁: [108.33, 22.84],
        营口: [122.18, 40.65],
        惠州: [114.4, 23.09],
        江阴: [120.26, 31.91],
        蓬莱: [120.75, 37.8],
        韶关: [113.62, 24.84],
        嘉峪关: [98.289152, 39.77313],
        广州: [113.23, 23.16],
        延安: [109.47, 36.6],
        太原: [112.53, 37.87],
        清远: [113.01, 23.7],
        中山: [113.38, 22.52],
        昆明: [102.73, 25.04],
        寿光: [118.73, 36.86],
        盘锦: [122.070714, 41.119997],
        长治: [113.08, 36.18],
        深圳: [114.07, 22.62],
        珠海: [113.52, 22.3],
        宿迁: [118.3, 33.96],
        咸阳: [108.72, 34.36],
        铜川: [109.11, 35.09],
        平度: [119.97, 36.77],
        佛山: [113.11, 23.05],
        海口: [110.35, 20.02],
        江门: [113.06, 22.61],
        章丘: [117.53, 36.72],
        肇庆: [112.44, 23.05],
        大连: [121.62, 38.92],
        临汾: [111.5, 36.08],
        吴江: [120.63, 31.16],
        石嘴山: [106.39, 39.04],
        沈阳: [123.38, 41.8],
        苏州: [120.62, 31.32],
        茂名: [110.88, 21.68],
        嘉兴: [120.76, 30.77],
        长春: [125.35, 43.88],
        胶州: [120.03336, 36.264622],
        银川: [106.27, 38.47],
        张家港: [120.555821, 31.875428],
        三门峡: [111.19, 34.76],
        锦州: [121.15, 41.13],
        南昌: [115.89, 28.68],
        柳州: [109.4, 24.33],
        三亚: [109.511909, 18.252847],
        自贡: [104.778442, 29.33903],
        吉林: [126.57, 43.87],
        阳江: [111.95, 21.85],
        泸州: [105.39, 28.91],
        西宁: [101.74, 36.56],
        宜宾: [104.56, 29.77],
        呼和浩特: [111.65, 40.82],
        成都: [104.06, 30.67],
        大同: [113.3, 40.12],
        镇江: [119.44, 32.2],
        桂林: [110.28, 25.29],
        张家界: [110.479191, 29.117096],
        宜兴: [119.82, 31.36],
        北海: [109.12, 21.49],
        西安: [108.95, 34.27],
        金坛: [119.56, 31.74],
        东营: [118.49, 37.46],
        牡丹江: [129.58, 44.6],
        遵义: [106.9, 27.7],
        绍兴: [120.58, 30.01],
        扬州: [119.42, 32.39],
        常州: [119.95, 31.79],
        潍坊: [119.1, 36.62],
        重庆: [106.54, 29.59],
        台州: [121.420757, 28.656386],
        南京: [118.78, 32.04],
        滨州: [118.03, 37.36],
        贵阳: [106.71, 26.57],
        无锡: [120.29, 31.59],
        本溪: [123.73, 41.3],
        克拉玛依: [84.77, 45.59],
        渭南: [109.5, 34.52],
        马鞍山: [118.48, 31.56],
        宝鸡: [107.15, 34.38],
        焦作: [113.21, 35.24],
        句容: [119.16, 31.95],
        北京: [116.46, 39.92],
        徐州: [117.2, 34.26],
        衡水: [115.72, 37.72],
        包头: [110, 40.58],
        绵阳: [104.73, 31.48],
        乌鲁木齐: [87.68, 43.77],
        枣庄: [117.57, 34.86],
        杭州: [120.19, 30.26],
        淄博: [118.05, 36.78],
        鞍山: [122.85, 41.12],
        溧阳: [119.48, 31.43],
        库尔勒: [86.06, 41.68],
        安阳: [114.35, 36.1],
        开封: [114.35, 34.79],
        济南: [117, 36.65],
        德阳: [104.37, 31.13],
        温州: [120.65, 28.01],
        九江: [115.97, 29.71],
        邯郸: [114.47, 36.6],
        临安: [119.72, 30.23],
        兰州: [103.73, 36.03],
        沧州: [116.83, 38.33],
        临沂: [118.35, 35.05],
        南充: [106.110698, 30.837793],
        天津: [117.2, 39.13],
        富阳: [119.95, 30.07],
        泰安: [117.13, 36.18],
        诸暨: [120.23, 29.71],
        郑州: [113.65, 34.76],
        哈尔滨: [126.63, 45.75],
        聊城: [115.97, 36.45],
        芜湖: [118.38, 31.33],
        唐山: [118.02, 39.63],
        平顶山: [113.29, 33.75],
        邢台: [114.48, 37.05],
        德州: [116.29, 37.45],
        济宁: [116.59, 35.38],
        荆州: [112.239741, 30.335165],
        宜昌: [111.3, 30.7],
        义乌: [120.06, 29.32],
        丽水: [119.92, 28.45],
        洛阳: [112.44, 34.7],
        秦皇岛: [119.57, 39.95],
        株洲: [113.16, 27.83],
        石家庄: [114.48, 38.03],
        莱芜: [117.67, 36.19],
        常德: [111.69, 29.05],
        保定: [115.48, 38.85],
        湘潭: [112.91, 27.87],
        金华: [119.64, 29.12],
        岳阳: [113.09, 29.37],
        长沙: [113, 28.21],
        衢州: [118.88, 28.97],
        廊坊: [116.7, 39.53],
        菏泽: [115.480656, 35.23375],
        合肥: [117.27, 31.86],
        武汉: [114.31, 30.52],
        大庆: [125.03, 46.58]
      };
      let data = [];
      for (let key in geoCoordMap) {
        data.push({name: key, value: geoCoordMap[key]});
      }
      return data;
    },
    createVariablepie() {
      return {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
          "#f05b72",
          "#ef5b9c",
          "#f47920",
          "#905a3d",
          "#fab27b",
          "#2a5caa",
          "#444693",
          "#726930",
          "#b2d235",
          "#6d8346",
          "#ac6767",
          "#1d953f",
          "#6950a1",
          "#918597"
        ],
        "series": [
          {
            "type": "wordCloud",
            "name": "\u70ed\u70b9\u5206\u6790",
            "shape": "circle",
            "rotationRange": [
              -90,
              90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
              6,
              66
            ],
            "data": [
              {
                "name": "感冒发烧",
                "value": "1000",
                "textStyle": {
                  "normal": {
                    "color": "rgb(60,64,133)"
                  }
                }
              },
              {
                "name": "流涕",
                "value": "999",
                "textStyle": {
                  "normal": {
                    "color": "rgb(131,3,75)"
                  }
                }
              },
              {
                "name": "鼻塞",
                "value": "888",
                "textStyle": {
                  "normal": {
                    "color": "rgb(83,60,45)"
                  }
                }
              },
              {
                "name": "打喷嚏",
                "value": "777",
                "textStyle": {
                  "normal": {
                    "color": "rgb(24,145,140)"
                  }
                }
              },
              {
                "name": "咽喉肿痛",
                "value": "688",
                "textStyle": {
                  "normal": {
                    "color": "rgb(111,120,7)"
                  }
                }
              },
              {
                "name": "腰痛",
                "value": "516",
                "textStyle": {
                  "normal": {
                    "color": "rgb(77,158,67)"
                  }
                }
              },
              {
                "name": "擦伤",
                "value": "515",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,67,97)"
                  }
                }
              },
              {
                "name": "腹胀",
                "value": "483",
                "textStyle": {
                  "normal": {
                    "color": "rgb(39,114,108)"
                  }
                }
              },
              {
                "name": "腹痛",
                "value": "462",
                "textStyle": {
                  "normal": {
                    "color": "rgb(96,50,122)"
                  }
                }
              },
              {
                "name": "便秘",
                "value": "449",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,113,52)"
                  }
                }
              },
              {
                "name": "肩痛",
                "value": "429",
                "textStyle": {
                  "normal": {
                    "color": "rgb(102,18,15)"
                  }
                }
              },
              {
                "name": "头痛",
                "value": "422",
                "textStyle": {
                  "normal": {
                    "color": "rgb(17,140,45)"
                  }
                }
              },
              {
                "name": "呕吐",
                "value": "407",
                "textStyle": {
                  "normal": {
                    "color": "rgb(59,91,38)"
                  }
                }
              },
              {
                "name": "恶心",
                "value": "406",
                "textStyle": {
                  "normal": {
                    "color": "rgb(110,88,149)"
                  }
                }
              },
              {
                "name": "神疲乏力",
                "value": "406",
                "textStyle": {
                  "normal": {
                    "color": "rgb(107,57,137)"
                  }
                }
              },
              {
                "name": "皮肤红肿",
                "value": "386",
                "textStyle": {
                  "normal": {
                    "color": "rgb(8,55,112)"
                  }
                }
              },
              {
                "name": "皮肤干燥",
                "value": "385",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,142,59)"
                  }
                }
              },
              {
                "name": "皮肤疼痛",
                "value": "375",
                "textStyle": {
                  "normal": {
                    "color": "rgb(54,62,59)"
                  }
                }
              },
              {
                "name": "痰黄",
                "value": "355",
                "textStyle": {
                  "normal": {
                    "color": "rgb(68,156,6)"
                  }
                }
              },
              {
                "name": "易抽筋",
                "value": "355",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,74,147)"
                  }
                }
              },
              {
                "name": "颈部酸胀",
                "value": "335",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,131,55)"
                  }
                }
              },
              {
                "name": "口干咽燥",
                "value": "324",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,91,21)"
                  }
                }
              },
              {
                "name": "体虚乏力",
                "value": "304",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,114,42)"
                  }
                }
              },
              {
                "name": "神经衰弱",
                "value": "304",
                "textStyle": {
                  "normal": {
                    "color": "rgb(159,102,56)"
                  }
                }
              },
              {
                "name": "夜频尿多",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,143,142)"
                  }
                }
              },
              {
                "name": "高血压",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(98,47,110)"
                  }
                }
              },
              {
                "name": "腹部胀满",
                "value": "284",
                "textStyle": {
                  "normal": {
                    "color": "rgb(125,49,143)"
                  }
                }
              },
              {
                "name": "跌打损伤",
                "value": "281",
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,6,149)"
                  }
                }
              },
              {
                "name": "痱子",
                "value": "254",
                "textStyle": {
                  "normal": {
                    "color": "rgb(113,10,46)"
                  }
                }
              },
              {
                "name": "皮肤瘙痒",
                "value": "254",
                "textStyle": {
                  "normal": {
                    "color": "rgb(135,137,30)"
                  }
                }
              },
              {
                "name": "肌肉酸痛",
                "value": "253",
                "textStyle": {
                  "normal": {
                    "color": "rgb(149,105,135)"
                  }
                }
              },
              {
                "name": "尿频",
                "value": "253",
                "textStyle": {
                  "normal": {
                    "color": "rgb(70,86,114)"
                  }
                }
              },
              {
                "name": "皮肤干燥",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(110,19,136)"
                  }
                }
              },
              {
                "name": "扁桃体炎",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(127,21,51)"
                  }
                }
              },
              {
                "name": "咳嗽少痰",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,50,151)"
                  }
                }
              },
              {
                "name": "畏寒",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(41,31,62)"
                  }
                }
              },
              {
                "name": "疲倦无力",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(142,115,69)"
                  }
                }
              },
              {
                "name": "皮肤油腻",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(71,14,78)"
                  }
                }
              },
              {
                "name": "无汗",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(159,132,119)"
                  }
                }
              },
              {
                "name": "脱发",
                "value": "223",
                "textStyle": {
                  "normal": {
                    "color": "rgb(6,85,102)"
                  }
                }
              },
              {
                "name": "典型皮疹",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,99,83)"
                  }
                }
              },
              {
                "name": "少量便血",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,129,32)"
                  }
                }
              },
              {
                "name": "恶心厌食",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(148,69,12)"
                  }
                }
              },
              {
                "name": "舌红少津",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,81,1)"
                  }
                }
              },
              {
                "name": "失眠",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(84,48,55)"
                  }
                }
              },
              {
                "name": "乏力",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(149,103,90)"
                  }
                }
              },
              {
                "name": "尿急",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(10,11,73)"
                  }
                }
              },
              {
                "name": "视线模糊",
                "value": "152",
                "textStyle": {
                  "normal": {
                    "color": "rgb(29,131,67)"
                  }
                }
              },
              {
                "name": "牙龈肿痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(95,107,131)"
                  }
                }
              },
              {
                "name": "头晕目眩",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(85,8,48)"
                  }
                }
              },
              {
                "name": "神经性头痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(42,21,61)"
                  }
                }
              },
              {
                "name": "感染",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(136,25,11)"
                  }
                }
              },
              {
                "name": "大便干结",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(76,114,57)"
                  }
                }
              },
              {
                "name": "肢体麻木",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(30,60,45)"
                  }
                }
              },
              {
                "name": "腰痛",
                "value": "112",
                "textStyle": {
                  "normal": {
                    "color": "rgb(75,27,46)"
                  }
                }
              },
              {
                "name": "发热",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(1,77,54)"
                  }
                }
              },
              {
                "name": "心慌气短",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(107,81,91)"
                  }
                }
              },
              {
                "name": "失眠健忘",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(125,156,124)"
                  }
                }
              },
              {
                "name": "口苦尿黄",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(94,101,75)"
                  }
                }
              },
              {
                "name": "脱屑",
                "value": "92",
                "textStyle": {
                  "normal": {
                    "color": "rgb(80,90,7)"
                  }
                }
              },
              {
                "name": "萎软",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(83,88,100)"
                  }
                }
              },
              {
                "name": "疤痕疙瘩",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,81,70)"
                  }
                }
              },
              {
                "name": "流行性腮腺炎",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(128,87,151)"
                  }
                }
              },
              {
                "name": "饮食无味",
                "value": "72",
                "textStyle": {
                  "normal": {
                    "color": "rgb(92,144,160)"
                  }
                }
              },
              {
                "name": "舌苔黄",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(88,21,10)"
                  }
                }
              },
              {
                "name": "角质化异常",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(23,10,84)"
                  }
                }
              },
              {
                "name": "烦躁易怒",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(105,93,3)"
                  }
                }
              },
              {
                "name": "耳鸣",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(64,111,36)"
                  }
                }
              },
              {
                "name": "结痂",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(112,54,140)"
                  }
                }
              },
              {
                "name": "气虚食减",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(59,65,22)"
                  }
                }
              },
              {
                "name": "结膜炎",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(103,5,33)"
                  }
                }
              },
              {
                "name": "大便糖稀",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,150,78)"
                  }
                }
              },
              {
                "name": "黑头",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(53,44,159)"
                  }
                }
              },
              {
                "name": "红癣",
                "value": "71",
                "textStyle": {
                  "normal": {
                    "color": "rgb(122,113,68)"
                  }
                }
              },
              {
                "name": "肝区疼痛",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(63,132,123)"
                  }
                }
              },
              {
                "name": "胃酸过多",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(30,139,140)"
                  }
                }
              },
              {
                "name": "月经量少",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,94,8)"
                  }
                }
              },
              {
                "name": "胸肋胀满",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(120,148,133)"
                  }
                }
              },
              {
                "name": "唇色淡",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(12,86,108)"
                  }
                }
              },
              {
                "name": "色斑",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(44,83,67)"
                  }
                }
              },
              {
                "name": "前列腺增生",
                "value": "41",
                "textStyle": {
                  "normal": {
                    "color": "rgb(150,121,49)"
                  }
                }
              },
              {
                "name": "小便频数",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(25,129,74)"
                  }
                }
              },
              {
                "name": "心动过速",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(146,81,67)"
                  }
                }
              },
              {
                "name": "男性脱发",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(61,12,127)"
                  }
                }
              },
              {
                "name": "暗疮",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(7,92,113)"
                  }
                }
              },
              {
                "name": "体弱",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(36,58,66)"
                  }
                }
              },
              {
                "name": "尿不尽",
                "value": "21",
                "textStyle": {
                  "normal": {
                    "color": "rgb(158,45,42)"
                  }
                }
              },
              {
                "name": "肛裂",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(139,137,16)"
                  }
                }
              },
              {
                "name": "肛门坠胀",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(77,88,142)"
                  }
                }
              },
              {
                "name": "食欲缺乏",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(133,150,17)"
                  }
                }
              },
              {
                "name": "面色萎黄",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(121,56,49)"
                  }
                }
              },
              {
                "name": "胃灼热",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(53,110,23)"
                  }
                }
              },
              {
                "name": "颜面色斑",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(48,117,18)"
                  }
                }
              },
              {
                "name": "尿后余沥",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(38,128,126)"
                  }
                }
              },
              {
                "name": "食欲不振",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(156,135,86)"
                  }
                }
              },
              {
                "name": "黄褐斑",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(133,144,69)"
                  }
                }
              },
              {
                "name": "肝腹水",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(48,155,48)"
                  }
                }
              },
              {
                "name": "虚寒",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,58,89)"
                  }
                }
              },
              {
                "name": "早泄",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(24,19,120)"
                  }
                }
              },
              {
                "name": "阳痿",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(27,34,127)"
                  }
                }
              },
              {
                "name": "体倦乏力",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(112,153,19)"
                  }
                }
              },
              {
                "name": "无精",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(145,85,2)"
                  }
                }
              },
              {
                "name": "气虚血瘀",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(62,42,122)"
                  }
                }
              },
              {
                "name": "月经不调",
                "value": "11",
                "textStyle": {
                  "normal": {
                    "color": "rgb(153,119,48)"
                  }
                }
              },
            ],
            "drawOutOfBound": false,
            "textStyle": {
              "emphasis": {}
            }
          }
        ],
        "legend": [
          {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
          }
        ],
        "tooltip": {
          "show": true,
          "trigger": "item",
          "triggerOn": "mousemove|click",
          "axisPointer": {
            "type": "line"
          },
          "showContent": true,
          "alwaysShowContent": false,
          "showDelay": 0,
          "hideDelay": 100,
          "textStyle": {
            "fontSize": 14
          },
          "borderWidth": 0,
          "padding": 5
        },
        "title": [
          {
            "text": "京东词频",
            "padding": 5,
            "itemGap": 10,
            "textStyle": {
              "fontSize": 23
            }
          }
        ]
      };
    }*/
  }
};
</script>

<style scoped lang="scss">

.word-cloud {
  //display: none;
  border-radius: 30vh;
  //background: palegoldenrod;
  //width: 60vh;
  //width: 60vw;
  //height: 60vh;
  //width: 320px;
  //height: 200px;
}
@media (max-width: 960px) {
  .zoomer__image{
    width: 70vw;
  }
  .word-cloud{
    width: 53vw;
    height: 34vw;
  }
}
@media (min-width: 959px) {
  .zoomer__image{
    width: 60vmin;
  }
  .word-cloud{
    width: 45vmin;
    height: 29vmin;
  }
}
.word-cloud:nth-child(1) {
  //float: right;
}

.word-cloud:nth-child(2) {
}

.home {
  //background: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4b77a6132815531.61b09ee7e1f91.jpg");
  //display: flex;
  //justify-content: space-around;
  //flex-wrap: wrap;
  .text-hidden {
    position: absolute;
    top: 200%;
  }

  .button {
    font-size: 1.31em;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0 25px;
    padding: 0;
    cursor: pointer;
    color: #5c5edc;
    border: none;
    background: none;
  }

  .button:focus {
    outline: none;
  }

  .button:hover {
    color: #fff;
  }

  .slider {
    position: relative;
    z-index: 200;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 7em;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
  }

  .slide {
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100%;
    opacity: 0;
  }

  .slide--current {
    position: relative;
    z-index: 100;
    visibility: visible;
    opacity: 1;
  }

  .slide__mover {
    position: relative;
    z-index: 100;
  }

  .slide__title {
    font-size: 1.75em;
    font-weight: normal;
    margin: 0 auto;
    padding: 1em 0 0 0;
  }

  .slide__title span {
    font-size: 55%;
    font-weight: bold;
    display: block;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #35303d;
  }

  .slider__nav {
    position: absolute;
    bottom: 2em;
    width: 100%;
    text-align: center;
  }

  .zoomer {
    position: relative;
    height: 360px; /* this is needed for IE10 so that vertical flexbox centering works */
  }

  .flex-center {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .zoomer__image {
    pointer-events: none;
    display: block;
    margin: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
  }

  .zoomer__area,
  .preview {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }

  .zoomer__area:focus {
    outline: none;
  }

  .zoomer__area--size-1 {
    /* Apple Watch */
    width: 96px;
    height: 118px;
  }

  .zoomer__area--size-2 {
    /* iPhone */
    width: 112px;
    height: 198px;
  }

  .zoomer__area--size-3 {
    /* MacBook */
    width: 315px;
    height: 200px;
  }

  .zoomer__area--size-4 {
    /* iPad */
    width: 150px;
    height: 200px;
  }

  .zoomer__area--size-5 {
    /* iMac */
    width: 315px;
    height: 189px;
  }

  .preview {
    overflow: hidden;
    //background: #18191b;
    background: white;
  }

  .preview > .word-cloud {
    display: block;
    border-radius: inherit;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .zoomer--active .preview > .word-cloud {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  .zoomer {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }

  .zoomer.zoomer--notrans {
    -webkit-transition: none;
    transition: none;
  }

  .zoomer__image {
    -webkit-transition: opacity 0.3s 0.3s;
    transition: opacity 0.3s 0.3s;
  }

  .zoomer--active .zoomer__image {
    opacity: 0;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .preview > .word-cloud {
    -webkit-transition: -webkit-transform 0.6s 0.3s;
    transition: transform 0.6s 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  .zoomer--active .preview > .word-cloud {
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }
}
</style>
