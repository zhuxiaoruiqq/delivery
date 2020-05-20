<template>
  <div class="header">
    <slot name="search"></slot>
    <span>{{header_address}}</span>
    <slot name="login"></slot>
  </div>
</template>

<script>
export default {
  props:{
    header_address:String
  }
}
</script>

<style lang="css" scoped>
.header{
  width:100%;
  height:6%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background-color: green;
  color:white
}
span,slot{
  display: block;
}
.header_address{
  width:70%;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
}
slot{
  width:15%
}
</style>
