<template>
  <md-card class="detail md-primary">
    <md-card-content class="content">
      <img :src.sync="detail.cover">
      <md-table md-card>
        <md-table-toolbar>
          <h1 class="md-title">药品详情</h1>
        </md-table-toolbar>

        <md-table-row v-for="(item,i) in getInfo2Show"
                      :key="i">
          <md-table-cell>{{ i }}</md-table-cell>
          <md-table-cell v-if="i!=='链接'">{{ item }}</md-table-cell>
          <md-table-cell v-else><a :href="item" target="_blank">商品原链接</a></md-table-cell>
        </md-table-row>
      </md-table>
    </md-card-content>
  </md-card>
</template>

<script>
import {getDetailByID} from "../api";

export default {
  name: "Detail",
  props: {id: String},
  data() {
    return {
      detail: undefined
    }
  },
  computed: {
    getInfo2Show() {
      return {
        // id: this.detail.id,
        /* '药名': this.detail.drugTitle.match(/(?<=】).+?(?=\d)/g) !== null ? this.detail.drugTitle.match(/(?<=】).+?(?=\d)/g)[0] : (this.detail.drugTitle.match(/.+?(?=\d)/g) !== null ? this.detail.drugTitle.match(/.+?(?=\d)/g)[0] : this.detail.drugTitle),
         '价格': '¥' + this.detail.price,
         '规格': this.detail.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? this.detail.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (this.detail.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? this.detail.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格'),
         '来源': this.detail.type,
         '链接': this.detail.originUrl*/
        '药名': this.detail.drugTitle.replace(/.*】(.+?)\d+.*/g, '$1') !== '' ? this.detail.drugTitle.replace(/.*】(.+?)\d+.*/g, '$1') : (this.detail.drugTitle.match(/(.+?)\d/g) !== null ? this.detail.drugTitle.match(/(.+?)\d/g)[0] : this.detail.drugTitle),

        '价格': '¥' + this.detail.price,
        '规格': this.detail.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g) !== null ? this.detail.drugTitle.match(/[0-9.]+(\D+\*\d+.|.)\/./g).pop() : (this.detail.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g) ? this.detail.drugTitle.match(/[0-9.]+[a-zA-Z]+\*\d+\D/g).pop() : '暂无规格'),
        '来源': this.detail.type,
        '链接': this.detail.originUrl
      }
    }
  },
  created() {
    /*if (this.id === 123) {
      this.detail = {
        id: 123,
        drugTitle: '甲巯咪唑',
        price: 56.12,
        specification: '12g*50',
        seller: 'https://tb.com',
        cover: '/logo.png',
        type: '淘宝',
        originUrl: 'https://tb.com'
      }
    } else*/
    getDetailByID(this.id).then(res => {
      res = res.data.data
      this.detail = res.drug
    })
  },
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .content{
    //align-items: center;
    align-content: space-around;
  }
  .md-table{
    width: 80%;
  }
}
@media (min-width: 601px) {
  .content{
    align-items: center;
    justify-content: space-around;
  }
  .md-table{
    max-width: 60%;
  }
}
.detail {
  //border-radius: 16px;
  background-color: rgba(68, 138, 255, .95);
  //min-height: 50vh;
  //max-height: 80vh;
  display: flex;
  width: 80vw;
padding: 20px;
  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
height: fit-content;
    img {
      max-width: 200px;
      max-height: 200px;
    }

    .md-table {
      //flex: 1;
      min-width: 50%;
      border-radius: 16px;


      .md-table-content, md-table-toolbar {
        //width: fit-content;
        width: 100%;
      }
    }
  }
}
</style>
