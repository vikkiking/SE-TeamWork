<template>
  <md-card class="thumb">
    <md-card-media>
      <img :alt="title" v-lazy="url">
    </md-card-media>
    <md-card-header>
      <div class="md-subhead">{{ title }}</div>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: "Thumb",
  props: {
    url: String,
    title: String
  },
}
</script>

<style scoped lang="scss">
.thumb:hover {
  cursor: pointer;
  width: 100%;
}

img{
  display: block;
  width: 100% !important;
  height: 176px !important;
  object-fit: cover;
}
</style>
