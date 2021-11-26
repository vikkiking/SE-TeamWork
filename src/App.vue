<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-large md-dense md-primary">
        <!--        <div class="md-toolbar-row">-->
        <div class="md-toolbar-section-start">
          <img src="logo.png" height="32" width="32"
               style="margin:0 30px">

        </div>
        <div class="md-toolbar-section-end">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-home" md-label="首页" to="/" exact></md-tab>
            <md-tab id="tab-samples" md-label="历史价格" to="/sample" exact></md-tab>
            <md-tab id="tab-about" md-label="关于" href="//yuneko.me/about"></md-tab>
            <md-tab id="tab-joinus" md-label="加入我们" to="/joinus"></md-tab>
          </md-tabs>
        </div>

      </md-app-toolbar>

      <md-app-content>
        <md-snackbar md-position="center"
                     :md-duration="duration"
                     :md-active.sync="active"
                     md-persistent>请输入关键词！
        </md-snackbar>
        <div class="md-toolbar-row search">
          <md-field md-inline md-clearable >
            <label>搜索...</label>
            <md-input v-model="selectedWord"
                      @keyup.enter="search(selectedWord)"></md-input>
          </md-field>
          <!--            </div>-->
          <md-button class="md-icon-button"
                     @click="search(selectedWord)">
            <md-icon>search</md-icon>
          </md-button>
        </div>
        <router-view></router-view>
      </md-app-content>

    </md-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      load: false,
      duration: 2000,
      showSidepanel: false,
      selectedWord: null,
      keywords: [],
      active: false
    }
  },
  watch: {
    $route: {
      handler: function (newV) {
        if (newV.query.q)
          this.selectedWord = decodeURI(newV.query.q)
        else this.selectedWord = ''
      },
      deep: true
    }
  },
  created() {
    window.onload = () => {
      this.load = true
    }
    this.keywords = JSON.parse(localStorage.getItem('search-history'))
    if (this.$route.query.q)
      this.selectedWord = decodeURI(this.$route.query.q)
    else this.selectedWord = ''
  },
  methods: {
    temp() {
      console.log('autocomplete')
    },
    search(q) {
      if (q) {
        // this.keywords.push(q)
        // this.keywords = [...new Set(this.keywords)]
        // localStorage.setItem('search-history', JSON.stringify(this.keywords))
        this.$router.push({
          path: '/search',
          query: {
            q: encodeURI(q),
            page: 1
          }
        })
      } else
        this.active = true
    },
    login() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
@import "./assets/index.css";

body {
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.md-app {
  //background-color: #f8f9fa;

  height: 100vh;
  border: 1px solid rgba(#000, .12);

  @media (max-width: 600px) {
    .md-tabs-navigation > a {
      min-width: fit-content;
    }
  }

  .md-app-toolbar {

  }

  .md-toolbar {
    min-height: fit-content !important;
    padding: 10px 0 !important;
  }

  .search {
    max-width: 60%;
    //margin-top: 10px;
    //margin-bottom: 10px;
    margin-left: 20%;
    //padding-left: 20px !important;
  }

  .md-right {
    width: fit-content;
  }
}
</style>
