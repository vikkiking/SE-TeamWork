<template>
  <md-card class="search-card">
    <md-card-area md-inset>
      <md-card-media>
        <img :src="data.cover" :alt="data.drugTitle">
      </md-card-media>
      <md-card-header>
        <div class="md-subhead">
          {{ data.drugTitle }}
        </div>
      </md-card-header>
      <md-card-content>
        <div> &nbsp;&nbsp;规格： <span>{{ data.specification }}</span>
          <span> &nbsp;&nbsp;¥{{ data.price }}</span>
        </div>
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
  }
}
</script>

<style scoped lang="scss">
@media(min-width: 601px) {
  .search-card {
    max-width: 300px;
height:283px;
    :hover {
      cursor: pointer;
    }

    .md-subhead {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      //width: 100%;
      width: auto;
      max-height: 150px;
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
      color: black !important;
    }

    img {
      width: 100%;
      height: auto;
    }

    margin-bottom: 20px;
  }

}

.md-subhead {
  color: black;
  font-weight: bold;
}

.md-card-header {
  border-bottom: dotted 1px #cecece;
}

.md-card-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-top: 1em !important;
  padding-bottom: 1em !important;

  > div {
    color: #888888;
  }

  > div > span {
    color: #47b383;
  }
}
</style>
