<template>
<div class="shopDetail">
  <div class="title">
    <div>{{shopInfo.name}}</div>
    <div>{{shopInfo.score}}</div>
    <div>{{shopInfo.description}}</div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['shopInfo'])
  }
}
</script>

<style lang="css" scoped>
.shopDetail{
  width:100%;
  color:white
}
.title{
  width:100%;
  background-color: green;
}
</style>
