<template>
  <div class="detail">
    <!--    <md-button class="md-icon-button back"
                   @click="back()">
          <md-icon>arrow_back</md-icon>
        </md-button>-->
    <md-content class="content">
      <img :src="detail.cover">
      <md-table md-card>
        <md-table-toolbar>
          <h1 class="md-title">药品详情</h1>
        </md-table-toolbar>

        <md-table-row v-for="(item,i) in getInfo2Show"
                      :key="i">
          <md-table-cell>{{ i }}</md-table-cell>
          <md-table-cell v-if="i!=='链接'">{{ item }}</md-table-cell>
          <md-table-cell v-else><a :href="item">商品原链接</a> </md-table-cell>
        </md-table-row>
      </md-table>
    </md-content>
  </div>
</template>

<script>
import {getDetailByID} from "../api";

export default {
  name: "Detail",
  data() {
    return {
      detail: undefined
    }
  },
  computed: {
    getInfo2Show() {
      return {
        // id: this.detail.id,
        '药名': this.detail.drugTitle.match(/(?<=】).+?(?=\d)/g) !== null ? this.detail.drugTitle.match(/(?<=】).+?(?=\d)/g)[0] : (this.detail.drugTitle.match(/.+?(?=\d)/g) !== null ? this.detail.drugTitle.match(/.+?(?=\d)/g)[0] : this.detail.drugTitle),
        '价格': '¥' + this.detail.price,
        '规格': this.detail.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? this.detail.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (this.detail.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? this.detail.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格'),
        '来源': this.detail.type,
        '链接': this.detail.originUrl
      }
    }
  },
  created() {
    getDetailByID(this.$route.query.id).then(res => {
      res = res.data.data
      this.detail = res.drug
      console.log(this.detail.drugTitle)
    })
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.back {
  position: absolute;
  left: 20px;
}

.detail {
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    img {
      max-width: 200px;
      max-height: 200px;
    }

    .md-table {
      //flex: 1;
      min-width: 50%;
      max-width: 60vw;

      .md-table-content, md-table-toolbar {
        //width: fit-content;
        width: 100%;
      }
    }
  }

}
</style>
