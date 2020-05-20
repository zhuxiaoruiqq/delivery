<template>
<div class="shopList">
  <ul>
    <li v-for='(item,index) in shopList'>
      <img src="../../../static/wjz.jpg" alt=""/>
      <div class="shopInfo">
        <span>{{item.name}}</span>
        <span>{{item.score}}</span><br>
        <span>{{item.average}}</span><br>
        <span>{{item.description}}</span>
      </div>
    </li>
    <li v-for='(item,index) in shopList'>
      <img src="../../../static/wjz.jpg" alt=""/>
      <div class="shopInfo">
        <span>{{item.name}}</span>
        <span>{{item.score}}</span><br>
        <span>人均：￥{{item.average}}</span><br>
        <span>{{item.description}}</span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props:{
    shopList:Array
  }
}
</script>

<style lang="css" scoped>
.shopList{
  width:100%;
  padding-bottom: 10%;
  padding-top: 2%
}
ul{
  list-style:none;
  width:100%;
}
li{
  width:100%;
  padding-bottom: 2%;
  padding-top: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  border-bottom: 2px dotted #eee
}
img{
  width:20%;
  height:20%;
  border-radius: 20px;
}
.shopInfo{
  padding-left: 20px;
}
</style>
