<template>
<div class="home">
  <Header :header_address='address'>
    <span slot='search' @click='gotoSearchDetail()'class='glyphicon glyphicon-search left' style="color: #f5f5f5">&nbsp;&nbsp;</span>
    <!-- <span slot='login' class='right' @click="toLogin('/login')">{{userInfo.id || '登录注册'}}</span> -->
    <span v-if='userInfo.id' slot='login' class='right' @click="toLogin('/userInfo')">{{userInfo.id}}</span>
    <span v-else slot='login' class='right' @click="toLogin('/login')">登录注册</span>
  </Header>
  <Category :category='category'></Category>
  <ShopList :shopList='shopList'></ShopList>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import Header from '../../components/Header/Header.vue'
import Category from '../../components/Category/Category.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  components: {
    Header,
    Category,
    ShopList
  },
  computed: {
    ...mapState(['address', 'category','shopList','userInfo'])
  },
  methods: {
    toLogin(path) {
      this.$router.push(path)
    },
    gotoSearchDetail(){
      this.$router.push('/searchdetail')
    }
  }
}
</script>

<style lang="css" scoped>
.home{
  width:100%;
  height:92%;
}
</style>
