<template>
  <md-card class="thumb">
    <md-card-media>
      <img :src="url" :alt="title">
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
  created() {
    console.log(this.url)
  }
}
</script>

<style scoped>
.thumb{
}
</style>
