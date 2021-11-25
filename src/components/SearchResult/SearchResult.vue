<template>
  <div class="search-result">
    <md-steppers>
      <md-step id="search-result-left" md-label="搜索结果">
        <div>
          <md-progress-spinner v-if="loading"
                               md-mode="indeterminate"></md-progress-spinner>
          <template v-else>
            <div class="md-layout md-gutter filter">
              <div class="md-layout-item"
                   :key="i"
                   v-for="(item,i) in chips">
                <md-field>
                  <label :for="i">{{ item.name }}</label>
                  <md-select :id="i"
                             v-model="item.select"
                             :name="item.name"
                             multiple>
                    <md-option v-for="(chip,j) in item.list"
                               :key="j"
                               :value="j"
                    >{{ chip }}
                    </md-option>
                  </md-select>
                </md-field>
              </div>
              <div class=" md-layout-item">
                <md-button class="md-icon-button"
                           v-if="page.cur>1"
                           @click="page.cur=page.cur>1?(page.cur-1):1">
                  <md-icon>arrow_left</md-icon>
                </md-button>
                <md-field style="width: 5em">
                  <label>1-{{ page.maxPage }}</label>
                  <md-input v-model="inputPage"
                            style="overflow: hidden"
                            @keyup.enter="page.cur=Number(inputPage)"
                            type="number"></md-input>
                </md-field>
                <md-button class="md-icon-button"
                           v-if="page.cur<page.maxPage"
                           @click="page.cur=page.cur<page.maxPage?(Number(page.cur)+1):page.maxPage">
                  <md-icon>arrow_right</md-icon>
                </md-button>
              </div>
            </div>
            <md-content class="md-layout md-gutter md-alignment-center md-scrollbar search-panel"
                        v-if="getList.length>0">

              <template>
                <card v-for="(item, i) in getList"
                      :key="i"
                      img="/temp.jpeg"
                      :data="item"/>
              </template>

            </md-content>
            <md-empty-state v-else-if="!badnet"
                            md-icon="devices_other"
                            md-label="暂无搜索结果"></md-empty-state>
            <md-empty-state v-if="badnet"
                            md-icon="wifi_off"
                            md-label="网络开小差了~"></md-empty-state>
            <!--        <md-table-pagination
                        :md-page-size="page.size"
                        :md-update="updatePage(page.cur,page.size)"
                        :md-data.sync="search_result"/>-->
          </template>

        </div>
      </md-step>
      <md-step id="search-result-right" md-label="数据可视化">
        <div class="fullscreen-wrapper">
          <md-button v-if="!fullscreen" @click="fs">
            <md-icon>fullscreen</md-icon>
          </md-button>
          <div>
<!--            <v-chart :option.sync="option_sunburst"
                     autoresize/>
            <v-chart :option.sync="option_scatter"
                     autoresize></v-chart>-->
            <chart :option.sync="option_sunburst" chart-i-d="0"/>
            <chart :option.sync="option_scatter" chart-i-d="1"/>
            <!--            <v-chart :option="{title:'表格？'}"-->
            <!--                     autoresize></v-chart>-->
          </div>
        </div>
      </md-step>
    </md-steppers>

  </div>
</template>

<script>
import Card from "./Card";
// eslint-disable-next-line no-unused-vars
import {getData, getDrugs} from "../../api";
import {api as fullscreen} from 'vue-fullscreen'
import Chart from "./Chart";

export default {
  name: "SearchResult",
  components: {Chart, Card},
  data() {
    return {
      fullscreen: false,
      teleport: true,
      inputPage: 1,
      option_sunburst: {},
      option_scatter: {},
      badnet: false,
      page: {
        cur: 1,
        size: 30,
        maxPage: null
      },
      loading: true,
      chips: {
        platform: {name: '平台', list: [], select: []},
        style: {name: '样式', list: [], select: []},
        producers: {name: '产商', list: [], select: []}
      },
      search_result: {
        size: null,
        page: null,
        data: []
      }
    }
  },
  computed: {
    getList: function () {
      if (this.chips.platform.select.length > 0)
        return this.search_result.data.filter(v => this.chips.platform.select.includes(this.chips.platform.list.indexOf(v.type)))
      else return this.search_result.data
    }
  },
  watch: {
    $route: {
      handler: function (newV) {
        this.loading = true
        this.page.cur = newV.query.page
        this.badnet = false
        getDrugs(this.page.cur, this.page.size, {title: decodeURI(newV.query.q)}).then(res => {
          res = res.data.data
          this.search_result.data = res.drugs
          this.search_result.data = this.search_result.data.map(v => {
            v.specification = v.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? v.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (v.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? v.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格')
            return v
          })
          this.page.maxPage = res.pages
          this.inputPage = this.page.cur
          this.loading = false
          this.inputPage = this.page.cur
        })
        this.openChart()
      },
      deep: true
    },
    page: {
      handler: function (newV) {
        this.$router.push({
          path: '/search',
          query: {
            q: this.$route.query.q,
            page: newV.cur
          }
        })
        /* this.$route.query.page = newV.cur
         this.loading = true
         getDrugs(newV.cur, newV.size, {title: decodeURI(this.$route.query.q)}).then(res => {
           res = res.data.data
           this.search_result.data = res.drugs
           this.loading = false
           this.inputPage = this.page.cur
         })*/
      },
      deep: true
    },
  },
  created() {
    // this.chips.platform.list.push(...['淘宝', '京东', '拼多多'])
    this.chips.style.list.push(...['薄片', '胶囊'])
    this.chips.producers.list.push(...['A', 'B', 'C'])
    this.badnet = false
    this.page.cur = this.$route.query.page
    getDrugs(this.page.cur, this.page.size, {title: decodeURI(this.$route.query.q)}).then(res => {
      res = res.data.data
      this.search_result.data = res.drugs
      this.search_result.data = this.search_result.data.map(v => {
        v.specification = v.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? v.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (v.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? v.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格')
        return v
      })
      this.page.maxPage = res.pages
      this.inputPage = this.page.cur
      this.chips.platform.list.push(...new Set(this.search_result.data.map(v => {
        return v.type
      })))
      this.loading = false
    }).catch(() => {
      this.loading = false
      this.badnet = true
    })
    this.openChart()
  },
  methods: {
    async fs() {
      await fullscreen.toggle(this.$el.querySelector('.fullscreen-wrapper'), {
        teleport: this.teleport,
        callback: (isFullscreen) => {
          this.fullscreen = isFullscreen
        }
      })
      // this.fullscreen = fullscreen.isFullscreen
    },
    updatePage(page, pageSize) {
      this.loading = true
      this.badnet = false
      getDrugs(page, pageSize, {title: decodeURI(this.$route.query.q)}).then(res => {
        res = res.data.data
        this.search_result.data = res.drugs
        this.search_result.data = this.search_result.data.map(v => {
          v.specification = v.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? v.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (v.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? v.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格')
          return v
        })
        this.loading = false
        this.inputPage = this.page.cur
      })
    },
    clean(str) {
      str = (str.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? str.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (str.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? str.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格')).replace(/[^.*\d]/g, '')
      return str
    },
    openChart() {
      this.option_sunburst = {
        title: {
          text: '加载中...'
        }
      }
      this.option_scatter = {
        title: {
          text: '加载中...'
        }
      }
      getData({name: decodeURI(this.$route.query.q)}).then(res => {
        res = res.data.data.drugs
        if (res.length > 0) {
          this.option_sunburst = Object.assign({}, this.option_sunburst, this.createSunburst(res))
          this.option_scatter = Object.assign({}, this.option_scatter, this.createScatter(res))
        } else {
          this.option_sunburst = {
            title: {
              text: '暂无' + decodeURI(this.$route.query.q) + '价格信息'
            }
          }
          this.option_scatter = {
            title: {
              text: '暂无' + decodeURI(this.$route.query.q) + '价格信息'
            }
          }
        }
      })
    },
    // eslint-disable-next-line no-unused-vars
    getNext(data, name, depth = 1) {
      //从内到外依次为药品名、规格、进货价+产商、销售价
      let children = []
      if (depth === 1) {
        for (let v in data)
          children.push({
            name: v + '倍',
            value: data[v]
          })
        return children
      } else {
        for (let v in data) {
          children.push({
            name: /*this.preName[depth] + */depth === 1 ? '规格' + v : v,
            children: this.getNext(data[v], v, depth + 1)
          })
        }
        return children
      }
    },
    createSunburst(res) {
      let temp = {}, data = []
      res.forEach(v => {
        let cr = this.clean(v.specification)
        if (!cr) cr = '其他'
        let times = Math.round(v.retailPrice / v.supplyPrice)
        if (v.type === '无' || v.type === '—') v.type = '其他'
        if (temp[v.type]) {
          if (temp[v.type][times])
            temp[v.type][times]++
          else temp[v.type][times] = 1
        } else {
          temp[v.type] = {}
          temp[v.type][times] = 1
        }
      })
      for (let item in temp) {
        data.push({
          name: /*this.preName[0] + ': ' +*/ item,
          children: this.getNext(temp[item], item)
        })
      }
      return {
        title: {
          text: decodeURI(this.$route.query.q) + '指导价与供货价比值分布（倍数四舍五入）',
          left: 'center',
          top: 'bottom',
          textStyle: {
            overflow: 'breakAll',
          },
        },
        // color: ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'],
        series: {
          type: 'sunburst',
          data: data,
          radius: [0, '95%'],
          sort: function (a, b) {
            if (a.depth === 0) return a.dataIndex - b.dataIndex
            else return b.getValue() - a.getValue()
          },
          emphasis: {
            focus: 'descendant'
          },
          label: {
            rotate: 'radial',
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
          },
          levels: [
            {},
            {
              r0: '0%',
              r: '40%',
            },
            {
              r0: '40%',
              r: '60%',
              label: {
                position: 'outside'
              }
            },
          ]
        }
      }
    },
    createScatter(res) {
      let data = [], types = [], temp = {}
      /*getDosageForm({name: this.$route.query.q}).then(r => {
        types = r.data.data.dosage_form
        types.forEach(type => {
          temp[type] = []
        })
        res.forEach(v => {
          temp[v.type].push([
            v.supplyPrice,
            v.retailPrice,
            v.title,
            v.type,
            v.specification,
            v.manufactures
          ])
        })
        for (let type in types)
          data.push(temp[type])
        console.log(data)
      })*/
      types = [...new Set(res.map(v => {
        return v.type
      }))]
      types.forEach(type => {
        temp[type] = []
      })
      res.forEach(v => {
        temp[v.type].push([
          v.supplyPrice,
          v.retailPrice,
          v.title,
          v.type,
          v.specification,
          v.manufactures
        ])
      })
      types.forEach(type => {
        data.push(temp[type])
      })
      let option = {
        // color: ['#dd4444', '#fec42c', '#80F1BE'],
        title: {
          text: decodeURI(this.$route.query.q) + '散点图',
          left: 'center',
          top: 'bottom'
        },
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.7)',
          formatter: function (param) {
            return '<div style="text-align: left">'+'药名&nbsp;&nbsp;&nbsp;&nbsp;：' + param.data[2] + '<br>' +
                '产商&nbsp;&nbsp;&nbsp;&nbsp;：' + param.data[5] + '<br>' +
                '剂型&nbsp;&nbsp;&nbsp;&nbsp;：' + param.data[3] + '<br>' +
                '规格&nbsp;&nbsp;&nbsp;&nbsp;：' + param.data[4] + '<br>' +
                '供货价：¥' + param.data[0] + '<br>' +
                '指导价：¥' + param.data[1]+'</div>'
          },
        },
        legend: {
          right: '3%',
          // top: '0%',
          data: types
        },
        /* grid: {
           left: '8%',
           top: '10%'
         },*/
        xAxis: {
          name:'供货价',
           splitLine: {
             show:false
           }
        },
        yAxis: {
          name:'指导价',
          splitLine: {
            show:false
          }
        },
        series: []
      }
      for(let i=0;i<types.length;i++) {
        option.series.push({
          name: types[i],
          data: data[i],
          type: 'scatter',
          /*          symbolSize: function (data) {
                      return Math.sqrt(data[2])
                    },*/
          symbolSize: 20,
        })
      }
      return option
    }
  }
}
</script>

<style scoped lang="scss">
.fullscreen-wrapper {
  padding: 20px;
  background: white !important;
  position: relative;

  .md-button {
    width: fit-content;
    position: absolute;
    right: 0;
    top: 0;
  }

  > div {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 600px) {
      >div {
        width: 100%;
        height: 60vh;
      }
    }
    @media (min-width: 601px) {
      >div:nth-child(1), >div:nth-child(2) {
        width: 45%;
        height: 40vmax;
        border-radius: 16px;
      }

      >div:nth-child(3) {
        width: 95%;
        height: 40vh;
        border-radius: 16px;
      }
    }

    >div {
      /*width: 45%;
      height: 40vh;
      background: #f2f5fa !important;
      border-radius: 16px;*/
      margin-bottom: 5%;
      background: #f2f5fa;
    }

    >div > div:nth-child(1) {
      width: 100%;
      height: 100%;
    }

    >div > div:nth-child(2) {
      height: fit-content !important;
    }
  }

}

.search-result {
  //display: inline-flex;
  //flex-wrap: nowrap;
  width: 100%;
  /*&-left {
    flex: 1;
  }

  &-right {
    width: 300px;
  }*/
  .search-panel {
    max-height: 69vh;
    overflow: auto;
    //overflow-x: hidden;
  }

  .filter {
    flex-wrap: nowrap;
    width: 100%;


    @media (max-width: 600px) {
      .md-layout-item:nth-child(1), .md-layout-item:nth-child(2), .md-layout-item:nth-child(3) {
        max-width: 20%;
        flex: 1;
      }
    }
    @media(min-width: 601px) {
      .md-layout-item:nth-child(1), .md-layout-item:nth-child(2), .md-layout-item:nth-child(3) {
        //max-width: 29%;
        flex: 1;
      }
    }

    .md-layout-item:last-child {
      width: fit-content !important;
      display: inline-flex;
      flex: 0 !important;
      align-items: center;
    }
  }


}


</style>
