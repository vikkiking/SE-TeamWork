<template>
  <div class="search-result">
    <div>
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
      <md-progress-spinner v-if="loading"
                           md-mode="indeterminate"></md-progress-spinner>
      <template v-else>
        <md-content class="md-layout md-gutter md-alignment-center md-scrollbar search-panel">
          <card v-for="(item, i) in getList"
                :key="i"
                img="/temp.jpeg"
                :data="item"/>
        </md-content>
        <md-empty-state v-if="getList.length===0"
                        md-icon="devices_other"
                        md-label="暂无搜索结果"></md-empty-state>
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
      loading: true,
      chips: {
        platform: {name: '平台', list: ['全部'], select: []},
        style: {name: '药品样式', list: ['全部'], select: []},
        producers: {name: '产商', list: ['全部'], select: []}
      },
      search_result: []
    }
  },
  computed: {
    getList: function () {
      if (this.chips.platform.select.length > 0)
        return this.search_result.filter(v => this.chips.platform.select.includes(this.chips.platform.list.indexOf(v.type)))
      else return this.search_result
    }
  },
  watch: {
    $route: {
      handler: function (newV) {
        this.loading = true
        getDrugs({title: decodeURI(newV.query.q)}).then(res => {
          res = res.data.data
          this.search_result = res.drugs
          this.loading = false
        })
      },
      deep: true
    }
  },
  created() {
    // this.chips.platform.list.push(...['淘宝', '京东', '拼多多'])
    this.chips.style.list.push(...['薄片', '胶囊'])
    this.chips.producers.list.push(...['A', 'B', 'C'])
    getDrugs({title: decodeURI(this.$route.query.q)}).then(res => {
      res = res.data.data
      this.search_result = res.drugs
      this.chips.platform.list.push(...new Set(this.search_result.map(v => {
        return v.type
      })))
      this.loading = false
    })
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.search-panel {
  max-height: 72vh;
  overflow: auto;
}
.filter{
  flex-wrap: nowrap;
  .md-layout-item{
    max-width: 33%;
  }
}
</style>
