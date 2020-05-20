<template>
  <div class="search">
    <Header :header_address='search'>
      <span slot="search"></span>
      <span slot="login"></span>
    </Header>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
export default {
  data(){
    return {
      search:'搜索'
    }
  },
  components:{
    Header
  }
}
</script>

<style lang="css" scoped>
.search{
  width:100%;
  height:92%;
}
</style>
