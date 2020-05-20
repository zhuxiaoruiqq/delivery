<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <ul>
        <li v-for="(item,index) in category">
          <img src="../../../static/icon.jpg" alt="图片">
          <br /><br />
          <span>{{item}}</span>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in category">
          <img src="../../../static/icon.jpg" alt="图片">
          <br /><br />
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="swiper-slide">
      <ul>
        <li v-for="(item,index) in category">
          <img src="../../../static/icon.jpg" alt="图片">
          <br /><br />
          <span>{{item}}</span>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in category">
          <img src="../../../static/icon.jpg" alt="图片">
          <br /><br />
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- 如果需要分页器 -->
  <div class="swiper-pagination">1</div>
  <div class="swiper-pagination">2</div>
</div>
</template>

<script>
import swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  props: {
    category: Array
  },
  mounted() {
    new swiper('.swiper-container', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
}
</script>

<style lang="css" scoped>
.swiper-container {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    border-bottom: 1px solid green;
}
ul{
  list-style: none;
  margin:0;
  padding:0;
  width:100%;
  height:100px;
  display: flex;
  justify-content: space-around;
  align-items:center;
}
li{
  height:100px;
  text-align: center;
}
img{
  width:30px;
  height: 30px;
}
span{
  width:30px;
  height: 30px;
}
</style>
