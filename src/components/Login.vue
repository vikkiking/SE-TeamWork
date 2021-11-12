<template>
<div class="login">
  <img :src="require('../assets/login.png')">
  <h2 >微信扫码登录</h2>
</div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped lang="scss">
.login{
  //background-color: rgb(2, 167, 240);
  h2{
    //color: white;
  }
}
</style>
