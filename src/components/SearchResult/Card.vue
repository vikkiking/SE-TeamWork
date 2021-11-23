<template>
  <md-card class="search-card" @click.native="checkDetail(data.id)">
    <md-card-area md-inset>
      <md-card-media>
        <img :src="data.cover" :alt="data.drugTitle" >
      </md-card-media>
      <md-card-header>
        <div class="md-subhead">
          {{ data.drugTitle }}
        </div>
      </md-card-header>
      <md-card-content>
        <div>¥{{ data.price }}</div>
        <div>{{ data.specification }}</div>
        <!--        <div>{{ data.type }}</div>-->
      </md-card-content>
    </md-card-area>
  </md-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    img: String,
    data: Object
  },
  created() {

  },
  methods: {
    checkDetail(id) {
      this.$router.push({
        path: '/detail', query: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@media(min-width: 601px) {
  .search-card {
    width: 150px;

    .md-subhead {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
img{
  width: 100%;
  height: 150px;
}
    margin-bottom: 20px;
  }
}
@media(max-width: 600px) {
  .search-card {
    width: 80%;

    .md-subhead {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
img{
  width: 100%;
  height: auto;
}
    margin-bottom: 20px;
  }

}
</style>
