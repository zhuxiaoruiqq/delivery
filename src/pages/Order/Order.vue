<template>
  <div class="order">
    <Header :header_address='search'>
      <span slot="search"></span>
      <span slot="login"></span>
    </Header>
    <div v-if="!userInfo.id" class="noUser">
      <div class="noUserContent" @click="()=>this.$router.push('/login')">
        登录后才能查看订单呦！
        <br>
        点击我进行登录吧！
      </div>
    </div>
    <div v-else class="">
      this is you order
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '../../components/Header/Header.vue'
export default {
  data(){
    return {
      search:'订单'
    }
  },
  components:{
    Header
  },
  computed:{
    ...mapState(['userInfo'])
  }
}
</script>

<style lang="css" scoped>
.order{
  width:100%;
  height:92%;
}
.noUser{
  height:94%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.noUserContent{
  width:50%;
  border:1px solid #eee;
  text-align: center;
  border-radius: 5px;
}
</style>
