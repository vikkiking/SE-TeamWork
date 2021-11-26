<template>
  <md-content class="samples  md-scrollbar">
    <thumb v-for="(item,i) in list"
           :url.sync="item.url"
           v-show="list[i]"
           @click.native="openChart(i)"
           :title.sync="item.title"
           :key="i"/>
    <md-dialog :md-active.sync="show"
               :md-fullscreen="false">
      <template v-if="list[cur].type!=='html'">
        <md-dialog-title>{{ list[cur].title }}</md-dialog-title>
        <v-chart id="chart" :option.sync="option"
                 autoresize/>
      </template>
      <iframe :src="html" v-else></iframe>
    </md-dialog>

  </md-content>
</template>

<script>
import Thumb from "./Thumb";
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart, SunburstChart} from "echarts/charts";
import {LegendComponent, TitleComponent, TooltipComponent} from "echarts/components";
import VChart, {THEME_KEY} from "vue-echarts";
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

let pre = 'http://yuneko.me/temp/'
// let pre = '/temp/'
export default {
  name: "Sample",
  // eslint-disable-next-line vue/no-unused-components
  components: {Thumb, VChart},
  provide: {
    [THEME_KEY]: "dark"
  },
  data() {
    return {
      html: null,
      list: [],
      show: false,
      cur: 0,
      // pre:'http://yuneko.me/temp/',
      paths: [
        pre + '三九感冒灵.html',
        pre + '乐宁盐酸雷尼替丁胶囊150mg30粒.html',
        pre + '九芝堂六味地黄地丸360丸.html',
        pre + '云南白药气雾剂 85g+30g .html',
        pre + '京都念慈菴蜜炼川贝枇杷膏300ml .html',
        pre + '仁和 桑菊感冒片 36片.html',
        pre + '仁和诺氟沙星胶囊0.1g24粒.html',
        pre + '仁和阿莫西林胶囊0.25g40粒.html',
        pre + '喇叭正露丸100粒 .html',
        pre + '太极藿香正气液口服液正气水10支装合剂.html',
        pre + '康恩贝肠炎宁48片胃药急慢性肠胃炎.html',
        pre + '拜阿司匹灵阿司匹林肠溶片100mg.html',
        pre + '敬修堂跌打万花油25ml.html',
        pre + '杜蕾斯避孕套-1.html',
        pre + '毕诺曲安奈德鼻喷雾剂120.html',
        pre + '洛赛克 奥美拉唑镁肠溶片 20mg14片.html',
        pre + '珍视明滴眼液.html',
        pre + '白云山 小柴胡颗粒 10克10袋.html',
        pre + '白云山红霉素软膏.html',
        pre + '芬必得 布洛芬缓释胶囊 0.3g24粒.html',
        pre + '京东二甲双胍缓释片.html',
        pre + '京东奥美拉唑肠溶片.html',
        pre + '京东拜阿司匹林.html',
        pre + '京东阿莫西林胶囊.html',
        pre + '京东雷尼替丁胶囊.html',
        pre + '天猫二甲双胍缓释片.html',
        pre + '天猫奥美拉唑肠溶片.html',
        pre + '天猫拜阿司匹林.html',
        pre + '天猫阿莫西林胶囊.html',
        pre + '天猫雷尼替丁胶囊.html',
        pre + '两公司药品的成本与售价对比.html'
      ],
      option: {},
      data: null,
      preName: ['药名', '规格', '供货价', '销售价']
    }
  },
  created() {
    for (let i = 0; i < this.paths.length; i++) {
      this.list.push({
        title: /*'折线图' + (i + 1)*/this.paths[i].match(/(?<=\/)[^/]+(?=(.html))/g)[0],
        type: 'html',
        path: this.paths[i]
      })
    }
    for (let i = 0; i < this.paths.length; i++) {
      let ttt = this.createHtml(this.paths[i])
      ttt.onload = () => {
        setTimeout(() => {
          html2canvas(ttt.contentWindow.document.getElementsByTagName('body')[0], {
            backgroundColor: null
          }).then(canvas => {
            document.body.removeChild(ttt)
            let url = canvas.toDataURL('image/png')
            this.$set(this.list[i], 'url', url)
          })
        }, 2000)
      }
      document.body.appendChild(ttt)
    }
    /*this.list.push({
      url: /!*document.getElementById('chart').getElementsByTagName('canvas')[0].toDataURL('image/png')*!/'https://cdn.glitch.com/d7f4f279-e13b-4330-8422-00b2d9211424%2FGlitch-Error-Rainbow-Mug-hires.png?v=1595481653593',
      title: '二甲双胍市场价与供货价比值分布',
      type: 'sunburst'
    })*/

  },
  methods: {
    createHtml(path) {
      let iframe = document.createElement('iframe')
      iframe.src = path
      iframe.id = 'iframe-temp' + path
      iframe.style.visibility = 'hidden'
      // iframe.style.display = 'none'
      return iframe
    },
    loadHtml(path) {
      this.html = path
    },
    openChart(i) {
      this.show = true;
      this.cur = i
      this.loadHtml(this.list[i].path)
    },
    // eslint-disable-next-line no-unused-vars
  }
}
</script>

<style scoped lang="scss">
.samples {
  max-height: 82vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;

  .thumb {
    width: 180px;
    flex: auto !important;
    margin-bottom: 20px;

    :hover {
      cursor: pointer;
    }
  }
}

.md-dialog-title {
  &:after {
    content: '从内到外分别为剂型、市场售价与供货价的比值（四舍五入）';
    font-size: xx-small;
    color: #999999;
  }
}

@media (max-width: 600px) {
  /* #chart {
     height: 80vh;
     width: auto;
   }*/
  .md-dialog-title {
    &:after {
      content: '(横屏体验更好)';
      font-size: xx-small;
      color: #999999;
    }
  }
}

@media (min-width: 601px) {
  /* #chart {
     width: 80vw;
     height: 80vh;
   }*/
  .echarts {
    width: 80vw;
    height: 80vh;
  }
  .echarts > div {
    width: 80vw;
    height: 80vh;
  }
  .md-dialog-container {
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
