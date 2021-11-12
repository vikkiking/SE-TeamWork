<template>
  <md-content class=" md-layout md-gutter md-scrollbar"
              v-if="!loading">
    <thumb v-for="(item,i) in list"
           :url="item.url"
           @click.native="openChart(i)"
           class="md-layout-item"
           :title="item.title"
           :key="i"/>
    <md-dialog :md-active.sync="show"
               :md-fullscreen="false">
      <div v-show="list[cur].type!=='html'">
        <md-dialog-title>{{ list[cur].title }}</md-dialog-title>
        <v-chart id="chart" :option.sync="option"
                 autoresize/>
      </div>
      <iframe :src="html" v-show="list[cur].type==='html'"></iframe>
    </md-dialog>
  </md-content>
  <md-progress-spinner md-mode="indeterminate" v-else></md-progress-spinner>
</template>

<script>
import Thumb from "./Thumb";
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart, SunburstChart} from "echarts/charts";
import {LegendComponent, TitleComponent, TooltipComponent} from "echarts/components";
import VChart, {THEME_KEY} from "vue-echarts";
import {getExample} from "../../api";
import html2canvas from 'html2canvas'

use([
  CanvasRenderer,
  PieChart,
  SunburstChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

// eslint-disable-next-line no-unused-vars
function getRandomColor() {
  return '#' + (function temp(color) {
    return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
    && (color.length === 6) ? color : temp(color);
  })('');
}

export default {
  name: "Database",
  // eslint-disable-next-line vue/no-unused-components
  components: {Thumb, VChart},
  provide: {
    [THEME_KEY]: "dark"
  },
  data() {
    return {
      html: null,
      loading: false,
      list: [],
      show: false,
      cur: 0,
      pre:'yuneko.me/temp/',
      paths: [
        this.pre+'三九感冒灵.html',
        this.pre+'乐宁盐酸雷尼替丁胶囊150mg30粒.html',
        this.pre+'九芝堂六味地黄地丸360丸.html',
        this.pre+'云南白药气雾剂 85g+30g .html',
        this.pre+'京都念慈菴蜜炼川贝枇杷膏300ml .html',
        this.pre+'仁和 桑菊感冒片 36片.html',
        this.pre+'仁和诺氟沙星胶囊0.1g24粒.html',
        this.pre+'仁和阿莫西林胶囊0.25g40粒.html',
        this.pre+'喇叭正露丸100粒 .html',
        this.pre+'太极藿香正气液口服液正气水10支装合剂.html',
        this.pre+'康恩贝肠炎宁48片胃药急慢性肠胃炎.html',
        this.pre+'拜阿司匹灵阿司匹林肠溶片100mg.html',
        this.pre+'敬修堂跌打万花油25ml.html',
        this.pre+'杜蕾斯避孕套-1.html',
        this.pre+'毕诺曲安奈德鼻喷雾剂120.html',
        this.pre+'洛赛克 奥美拉唑镁肠溶片 20mg14片.html',
        this.pre+'珍视明滴眼液.html',
        this.pre+'白云山 小柴胡颗粒 10克10袋.html',
        this.pre+'白云山红霉素软膏.html',
        this.pre+'芬必得 布洛芬缓释胶囊 0.3g24粒.html',
      ],
      option: null,
      data: null,
      preName: ['药名', '规格', '供货价', '销售价']
    }
  },
  created() {
    this.loading = true
    new Promise((resolve => {
      for (let i = 0; i < this.paths.length; i++) {
        let ttt = this.createHtml(this.paths[i])
        ttt.onload = () => {
          html2canvas(ttt.contentWindow.document.getElementsByTagName('body')[0], {
            backgroundColor: null
          }).then(canvas => {
            document.body.removeChild(ttt)
            let url = canvas.toDataURL('image/png')
            this.list.push({
              url: url,
              title: /*'折线图' + (i + 1)*/this.paths[i].match(/(?<=\/)[^/]+(?=(.html))/g)[0],
              type: 'html',
              path: this.paths[i]
            })
            if (i + 1 === this.paths.length) resolve()
          })
        }
        document.body.appendChild(ttt)
      }
    })).then(() => {
      this.loading = false
    })
    this.list.push({
      url: /*document.getElementById('chart').getElementsByTagName('canvas')[0].toDataURL('image/png')*/'https://avatar-static.segmentfault.com/237/680/2376808203-5d89dfc407f98_huge128',
      title: '二甲双胍',
      type: 'sunburst'
    })
  },
  methods: {
    createHtml(path) {
      let iframe = document.createElement('iframe')
      iframe.src = path
      iframe.id = 'iframe-temp'
      iframe.style.visibility = 'hidden'
      return iframe
    },
    loadHtml(path) {
      this.html = path
      /* if (path && path.length > 0) {
         this.loading = true
         getHtml(path, {
           accept: 'text/html,text/plain'
         }).then(res => {
           this.loading = false
           this.html = res.data
         }).catch(() => {
           this.loading = false
           this.html = '加载失败'
         })
       }*/
    },
    clean(str) {
      str = (str.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? str.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (str.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? str.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格')).replace(/[^.*\d]/g, '')
      return str
    },
    openChart(i) {
      this.show = true;
      this.cur = i
      if (this.list[i].type === 'html') {
        this.loadHtml(this.list[i].path)
      } else {
        let temp = {}
        getExample().then(res => {
          res = res.data
          //生成旭日图，从内到外依次为药品名、规格、进货价+产商、销售价
          res.forEach(v => {
            let cr = this.clean(v.specification)
            if (!cr) cr = '其他'
            if (temp[v.title]) {
              if (temp[v.title][cr]) {
                if (temp[v.title][cr][v.supplyPrice]) {
                  if (!temp[v.title][cr][v.supplyPrice][v.retailPrice]) temp[v.title][cr][v.supplyPrice][v.retailPrice] = 1
                  else temp[v.title][cr][v.supplyPrice][v.retailPrice]++
                } else {
                  temp[v.title][cr][v.supplyPrice] = {}
                  temp[v.title][cr][v.supplyPrice][v.retailPrice] = 1
                }
              } else {
                temp[v.title][cr] = {}
                temp[v.title][cr][v.supplyPrice] = {}
                temp[v.title][cr][v.supplyPrice][v.retailPrice] = 1
              }
            } else {
              temp[v.title] = {}
              temp[v.title][cr] = {}
              temp[v.title][cr][v.supplyPrice] = {}
              temp[v.title][cr][v.supplyPrice][v.retailPrice] = 1
            }
          })
          this.data = []
          for (let item in temp) {
            this.data.push({
              name: this.preName[0] + ': ' + item,
              itemStyle: {
                color: getRandomColor()
              },
              value: 1,
              children: this.getNext(temp[item], item)
            })
          }
          this.option = this.createSunburst(this.data)
          console.log(this.option)
        })
      }
    },
    // eslint-disable-next-line no-unused-vars
    getNext(data, name, depth = 1) {
      //从内到外依次为药品名、规格、进货价+产商、销售价
      let children = []
      if (depth === 3) {
        let average = 0
        for (let v in data)//销售价
          average += Number(v)
        average /= Object.keys(data).length
        average = average.toFixed(2)
        children.push({
          name: '平均' + this.preName[depth] + average,
          // value: average,
          value: 1,
          itemStyle: {
            color: getRandomColor()
          }
        })
        return children
      } else {
        for (let v in data) {
          children.push({
            name: this.preName[depth] + v,
            // value: depth === 1 ? 1 : v,
            value: 1,
            children: this.getNext(data[v], v, depth + 1)
          })
        }
        return children
      }
    },
    createSunburst(data) {
      return {
        title: {
          text: '旭日图'
        },
        series: {
          type: 'sunburst',
          data: data,
          radius: [0, '95%'],
          sort: undefined,
          emphasis: {
            focus: 'ancestor'
          },
          levels: [
            {},
            {
              r0: '15%',
              r: '35%',
              itemStyle: {
                borderWidth: 2
              },
              label: {
                rotate: 'tangential'
              }
            },
            {
              r0: '35%',
              r: '70%',
              label: {
                align: 'right'
              }
            },
            {
              r0: '60%',
              r: '80%',
              label: {
                align: 'right'
              }
            },
            {
              r0: '80%',
              r: '90%',
              label: {
                position: 'outside',
                padding: 3,
                silent: false
              },
              itemStyle: {
                borderWidth: 3
              }
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.md-layout {
  max-height: 82vh;
  overflow: auto;
}

.md-layout-item {
  width: 200px;
  flex: auto !important;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
  }
}


@media (max-width: 600px) {
  #chart {
    height: 80vh;
  }
  .md-dialog-title {
    &:after {
      content: '(横屏体验更好)';
      font-size: xx-small;
      color: #999999;
    }
  }
}

@media (min-width: 601px) {

  .md-dialog-container {
    #chart {
      width: 80vw;
      height: 80vh;
    }
    iframe {
      width: 620px;
      height: 420px;

      body {
        background-color: transparent;
      }
    }
  }
}
</style>
