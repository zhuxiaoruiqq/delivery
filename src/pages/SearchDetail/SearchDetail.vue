<template>
<div class="searchDetailContainer">
  <div class="searchDetail">
    <el-input class='inputCss' placeholder="点个外卖吧" v-model="searchName" autofocus="autofocus"></el-input>
    <span @click='backToHome()'>取消</span>
  </div>
  <div class='searchItem'>
    <div class='itemCss' v-for='(item,index) in searchItem' @click='goToShop(item.name)'>{{item.name}}</div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      searchName: ''
    }
  },
  methods:{
    backToHome(){
      this.$router.replace('/home')
    },
    goToShop(shopId){
      this.$router.push('/shopdetail')
      this.$store.dispatch('getShopInfo','meituan')
    }
  },
  watch:{
    searchName(){
      this.$store.dispatch('getSearchItem','meituan')
    }
  },
  computed:{
    ...mapState(['searchItem'])
  }
}
</script>

<style lang="css" scoped>
.searchDetail{
  width:100%;
  height:30px;
  padding:10% 5% 5% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputCss{
  width:80%;
}
.searchDetailContainer{
  width:100%
}
.searchItem{
  width:100%;
  height:30px;
}
.itemCss{
  height:45px;
  width:100%;
  border-bottom:1px solid #eee;
  line-height: 45px;
  padding-left:20px;
}
</style>
