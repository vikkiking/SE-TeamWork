<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <img src="/logo.png" height="52" width="52">
          </div>
          <md-autocomplete :md-options="employees"
                           v-model="selectedEmployee"
                           md-layout="box"
                           class="search">
            <label>搜索</label>
          </md-autocomplete>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>refresh</md-icon>
            </md-button>
            <md-button class="md-icon-button"
                       @click="showSidepanel = true">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-home" md-label="首页" to="/" exact></md-tab>
            <md-tab id="tab-consult" md-label="咨询" to="/consult"></md-tab>
            <md-tab id="tab-about" md-label="关于" to="/about"></md-tab>
            <md-tab id="tab-joinus" md-label="加入我们" to="/joinus"></md-tab>
          </md-tabs>
        </div>

      </md-app-toolbar>

      <!--      <md-app-drawer :md-active.sync="menuVisible">
              <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

              <md-list>
                <md-list-item>
                  <md-icon>move_to_inbox</md-icon>
                  <span class="md-list-item-text">Inbox</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>send</md-icon>
                  <span class="md-list-item-text">Sent Mail</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>delete</md-icon>
                  <span class="md-list-item-text">Trash</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>error</md-icon>
                  <span class="md-list-item-text">Spam</span>
                </md-list-item>
              </md-list>
            </md-app-drawer>-->
      <md-app-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">我的</span>
        </md-toolbar>

        <md-list md-sync-route>
          <md-list-item>
            <md-button class="md-list-action" to="/login">微信登录</md-button>
          </md-list-item>
          <md-list-item>
            <md-button class="md-list-action">设置</md-button>
          </md-list-item>
          <md-list-item>
            <md-button class="md-list-action">退出</md-button>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
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
      showSidepanel: false,
      selectedEmployee: null,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.md-app {
  //max-height: 400px;
  height: 100vh;
  border: 1px solid rgba(#000, .12);
  .search{
    max-width: 80%;
  }
}

// Demo purposes only
.md-drawer {
  //width: 230px;
  //max-width: calc(100vw - 125px);
}
</style>
