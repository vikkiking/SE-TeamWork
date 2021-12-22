<template>
  <div :id="'fullscreen-chart-'+chartID">

    <v-chart :option.sync="option" :updateOptions="true"
             autoresize/>
    <md-button @click="fs">
      <md-icon v-if="!fullscreen">fullscreen</md-icon>
      <md-icon v-else>fullscreen_exit</md-icon>
    </md-button>
  </div>
</template>

<script>

export default {
  name: "Chart",
  props: {
    option: Object,
    chartID: String
  },
  data() {
    return {
      fullscreen: false,
      teleport: true,
      w: ['100vw'],
      h: ['90vh'],
      ptr: 0
    }
  },
  methods: {
    fs() {
      let chart = document.getElementById('fullscreen-chart-' + this.chartID)
      if (this.w.length === 1) {
        this.w.push(chart.clientWidth + 'px')
        this.h.push(chart.clientHeight + 'px')
      }
      chart.style.width = this.w[this.ptr]
      chart.style.height = this.h[this.ptr]
      this.ptr = Number(!this.ptr)
      this.fullscreen = !this.fullscreen
    },
  }
}
</script>

<style scoped lang="scss">
x-vue-echarts{
  display: block;
  width: 100%!important;
  height: 100%!important;
}
/*background: white !important;*/
</style>
