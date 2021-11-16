<template>
  <div class="search-result">
    <div>
      <md-progress-spinner v-if="loading"
                           md-mode="indeterminate"></md-progress-spinner>
      <template v-else>
        <md-content class="md-layout md-gutter md-alignment-center md-scrollbar search-panel" v-if="getList.length>0">
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

  </div>
</template>

<script>
import Card from "./Card";
import {getDrugs} from "../../api";

export default {
  name: "SearchResult",
  components: {Card},
  data() {
    return {
      inputPage: 1,
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
    }
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
  },
  methods: {
    updatePage(page, pageSize) {
      console.log(page, pageSize)
      this.loading = true
      this.badnet = false
      getDrugs(page, pageSize, {title: decodeURI(this.$route.query.q)}).then(res => {
        res = res.data.data
        this.search_result.data = res.drugs
        this.loading = false
        this.inputPage = this.page.cur
      })
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
