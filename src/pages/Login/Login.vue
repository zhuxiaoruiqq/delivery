<template>
<div class="loginContent">
  <div class="header">

  </div>
  <mt-navbar v-model="selected" class='tabMenu'>
    <mt-tab-item id="1">手机登录</mt-tab-item>
    <mt-tab-item id="2">密码登录</mt-tab-item>
  </mt-navbar>
  <br>
  <br>
  <!-- tab-container -->
  <mt-tab-container v-model="selected" class='tabContent'>
    <mt-tab-container-item id="1">
      <div id='phoneError'>请输入正确的手机号</div>
      <mt-field placeholder="请输入手机号" id='phone' v-model='phone'><span @click="startSetInterval()">{{timeTips}}</span></mt-field>
      <mt-field placeholder="请输入验证码" id='yzm' v-model='yzm' style="border:1px solid #ddd"></mt-field>
      <div id="yzmError">手机号或者验证码错误</div>
      <br>
      <mt-button type="primary" id="loginWithPhone" @click="loginWithPhone()">登录</mt-button>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <mt-field placeholder="请输入用户名" v-model='account'></mt-field>
      <mt-field placeholder="请输入密码" type="password" v-model='password'></mt-field>
      <mt-field placeholder="请输入验证码" style="border:1px solid #ddd" v-model='txyzm'></mt-field>
      <div id='txyzmError'>账号或者验证码错误</div>
      <br>
      <mt-button type="primary" id="loginWithAccount" @click="loginWithAccount()">登录</mt-button>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
      timeTips: '获取验证码',
      myVar: 0,
      phone: '',
      yzm: '',
      account:'',
      password:'',
      txyzm:''
    }
  },
  methods: {
    deTimeTips() {
      this.timeTips--
      if (this.timeTips <= 0) {
        this.timeTips = '获取验证码'
        this.stopTimeTips()
      }
    },
    stopTimeTips() {
      clearInterval(this.myVar)
    },
    startSetInterval() {
      if (this.timeTips === "获取验证码") {
        if (this.phone.match(/^1[3-9]\d{9}$/) == null) {
          $('#phoneError').show()
        } else {
          $('#phoneError').hide()
          this.timeTips = 60
          this.myVar = setInterval(this.deTimeTips, 1000)
        }
      }
    },
    loginWithPhone() {
      //手机号+校验验证码
      if (this.phone === "13231175812" && this.yzm === 'aaaa') {
        $('#yzmError').hide()
        //设置userInfo
        const user={
          id:this.phone
        }
        //数据存入state
        this.$store.dispatch('recordUserInfo',user)
        this.$router.replace('/profile')
      } else {
        $('#yzmError').show()
      }
    },
    loginWithAccount(){
      if(this.account === 'admin' && this.password === '1111' && this.txyzm === 'aaaa'){
        $('#txyzmError').hide()
        //设置userInfo
        const user={
          id:this.account
        }
        this.$store.dispatch('recordUserInfo',user)
        this.$router.replace('/profile')
      }else{
        $('#txyzmError').show()
      }
    }
  }
}
</script>

<style lang="css" scoped>
.loginContent{
  width:100%;
  height:100%;
}
.header{
  height:10%;
  width:100%;
}
.tabMenu{
  width:100%;
}
#loginWithPhone{
  width:100%;
}
#loginWithAccount{
  width:100%
}
#phoneError{
  color:red;
  display: none;
}
#yzmError{
  color:red;
  display: none;
}
#txyzmError{
  color:red;
  display: none;
}
</style>
