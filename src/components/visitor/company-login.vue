<!--企业用户登录-->
<template>
  <div class="login">
    <div class="vp-layout">
      <div class="login-cont">
        <ul class="login-ul">
          <li class="login-regText">
            <a href="javascript:void(0)" class="login-tab">企业登录</a>
            <a href="#/visitor/companyRegister" class="reg-tab">企业注册</a>
          </li>
          <li class="login-list">
            <span class="qiye-icon"></span>
            <input type="text" placeholder="请输入企业名称/邮箱">
          </li>
          <li class="login-list">
            <span class="pass-icon"></span>
            <input type="password" placeholder="请输入登录密码">
          </li>
          <li class="login-rem-over">
            <div class="remember">
              <input type="checkbox">
              <span>记住账号</span>
            </div>
            <a href="#/visitor/companyForPass" class="overlook">忘记密码</a>
          </li>
          <li class="tips"></li>
          <li>
            <div class="login-btn" @click="loginSuc">登录</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    methods:{
      loginSuc:function () {
        window.localStorage.setItem('whetherLogin','true');
        this.$router.back(-1);
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .login
    min-width 1200px
    height 600px
    background url("~@/assets/registerLogin/login_bg.png") no-repeat center
    overflow hidden
    .login-cont
      width 400px
      height 480px
      border-radius 8px
      background-color #ffffff
      box-shadow 0 10px 20px 0 rgba(213,5,11,0.2)
      float right
      margin 60px 30px 60px 0
      .login-ul
        width 280px
        margin 0 auto
        li
          width 100%
          margin-top 20px
        .login-regText
          width 100%
          height 62px
          line-height 62px
          margin 20px 0 30px
          a
            width 100px
            text-align center
            height 60px
            line-height 60px
            color #333
          .login-tab
            border-bottom 2px solid $mainColor
            font-size 20px
            float left
            margin-left 20px
          .reg-tab
            float right
            font-size 16px
            margin-right 20px
        .login-list
          width 280px
          height 40px
          background-color #ffffff
          border-radius 2px
          border 1px solid #cccccc
          position relative
          span
            width 40px
            height 40px
            background-size auto 20px
            display inline-block
          .qiye-icon
            background url("~@/assets/registerLogin/qiye_icon.png") no-repeat center
          .user-icon
            background url("~@/assets/registerLogin/user_icon.png") no-repeat center
          .pass-icon
            background url("~@/assets/registerLogin/password_icon.png") no-repeat center
          input
            position absolute
            left 45px
            top 5px
            height 30px
            font-size 15px
            border none
            outline none
            width 220px
          input::-webkit-input-placeholder
                  color #999999
        .login-rem-over
          margin-top 25px
          color #333333
          font-size 14px
          height 22px
          .remember
            float left
            input
              float left
              margin-top 4px
              margin-right 5px
          .overlook
            float right
            color #333
        .tips
          margin-top 10px
          color $redFontColor
          height 22px
        .login-btn
          width 282px
          height 40px
          background-color $redBg
          border-radius 2px
          color #fff
          font-size 16px
          text-align center
          line-height 40px
          cursor pointer
          margin-top -10px


</style>
