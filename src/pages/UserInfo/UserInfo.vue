<template>
  <div class="userInfo">
    <button v-if="userInfo.id ? true : false" class="loginOut" @click='loginOut()'>退出登录</button>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  methods:{
    loginOut(){
      this.$store.dispatch('recordUserInfo',{})
      this.$router.replace('/home')
    }
  }
}
</script>

<style lang="css" scoped>
.userInfo{
  width:100%;
  height:100%;
}
.loginOut{
  width:100%;
  height:5%;
  position: fixed;
  bottom:5%;
  background-color: red;
  color:white;
  border-radius: 20px;
}
</style>
