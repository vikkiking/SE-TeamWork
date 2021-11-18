<template>
  <div class="search-result">
    <md-steppers>
      <md-step id="search-result-left" md-label="搜索结果">
        <div>
          <md-progress-spinner v-if="loading"
                               md-mode="indeterminate"></md-progress-spinner>
          <template v-else>
            <md-content class="md-layout md-gutter md-alignment-center md-scrollbar search-panel"
                        v-if="getList.length>0">
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
              </div>
              <template>
                <card v-for="(item, i) in getList"
                      :key="i"
                      img="/temp.jpeg"
                      :data="item"/>
              </template>
              <div class="md-toolbar-row">
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
        <v-chart :option.sync="option"
                 autoresize/>
      </md-step>
    </md-steppers>

  </div>
</template>

<script>
import Card from "./Card";
import {getData, getDrugs} from "../../api";

export default {
  name: "SearchResult",
  components: {Card},
  data() {
    return {
      inputPage: 1,
      option: {},
      badnet: false,
      page: {
        cur: 1,
        size: 30,
        maxPage: null
      },
      loading: true,
      chips: {
        platform: {name: '平台', list: [], select: []},
        // style: {name: '药品样式', list: ['全部'], select: []},
        // producers: {name: '产商', list: ['全部'], select: []}
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
    // this.chips.style.list.push(...['薄片', '胶囊'])
    // this.chips.producers.list.push(...['A', 'B', 'C'])
    this.badnet = false
    getDrugs(this.page.cur, this.page.size, {title: decodeURI(this.$route.query.q)}).then(res => {
      res = res.data.data
      this.search_result.data = res.drugs
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
    updatePage(page, pageSize) {
      this.loading = true
      this.badnet = false
      getDrugs(page, pageSize, {title: decodeURI(this.$route.query.q)}).then(res => {
        res = res.data.data
        this.search_result.data = res.drugs
        this.loading = false
        this.inputPage = this.page.cur
      })
    },
    clean(str) {
      str = (str.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? str.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (str.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? str.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格')).replace(/[^.*\d]/g, '')
      return str
    },
    openChart() {
      let temp = {}
      this.option = {
        title: {
          text: '加载中...'
        }
      }
      getData({name: decodeURI(this.$route.query.q)}).then(res => {
        res = res.data.data.drugs
        if (res.length > 0)
            //生成旭日图，从内到外依次为药品名、规格、进货价+产商、销售价
        {
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
          this.data = []
          for (let item in temp) {
            this.data.push({
              name: /*this.preName[0] + ': ' +*/ item,
              children: this.getNext(temp[item], item)
            })
          }
          this.option = Object.assign({}, this.option, this.createSunburst(this.data))
        } else {
          this.option = {
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
    createSunburst(data) {
      return {
        title: {
          text: decodeURI(this.$route.query.q) + '市场价与供货价比值分布'
        },
        color: ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'],
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
              r0: '15%',
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
    }
  }
}
</script>

<style scoped lang="scss">
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
  }

  .filter {
    flex-wrap: nowrap;

    .md-layout-item {
      //max-width: 33%;
    }
  }


  .echarts {
    width: 100vw;
    height: 80vw;
  }

  .echarts > div {
    width: 100%;
    height: 100%;
  }
}


</style>
