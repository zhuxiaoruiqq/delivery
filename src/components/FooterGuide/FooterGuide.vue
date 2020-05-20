<template>
<div class="FooterMenu" v-if=''>
  <span @click="goTo('/home')">首页</span>
  <span @click="goTo('/search')">搜索</span>
  <span @click="goTo('/order')">订单</span>
  <span @click="goTo('/profile')">我的</span>
</div>
</template>

<script>
export default {
  methods:{
    goTo(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang="css" scoped>
.FooterMenu{
  width:100%;
  height:8%;
  display: flex;
  justify-content: space-around;
  align-items:center;
  position: fixed;
  bottom:0;
  line-height: 8%;
  background-color: green;
  color:white
}
span{
  width:25%;
  height: 100%;
  display: block;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
