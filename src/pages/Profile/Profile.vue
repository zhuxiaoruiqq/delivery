<template>
<div class="myProfile">
  <div class="userId">
    <router-link :to="userInfo.id ? '/userInfo' : '/login'">{{userInfo.id || '登录注册'}}</router-link>
  </div>
  <div class="userInfo">
    this is user info
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style lang="css" scoped>
.myProfile{
  width:100%;
  height:90%;
}
.userId{
  width:100%;
  height:20%;
}
.userInfo{
  width:100%;
  height:65%;
}
.loginOut{
  width:100%;
  height:5%;
  position:fixed;
  bottom:20%;
  background-color: red;
  color:white;
  border-radius: 10px;
}
</style>
