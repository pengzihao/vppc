<!--普通用户注册-->
<template>
  <div class="register">
    <div class="vp-layout">
      <div class="register-cont">
        <!--第一步获取验证码-->
        <ul class="register-ul first-step">
          <li class="login-regText">
            <a href="#/visitor/companyLogin" class="login-tab">企业登录</a>
            <a href="javascript:void(0)" class="reg-tab">企业注册</a>
          </li>
          <li class="register-list">
            <span class="email-icon"></span>
            <input type="text" placeholder="请输入邮箱">
          </li>
          <li class="register-list">
            <span class="phone-icon"></span>
            <input type="text" placeholder="请输入绑定手机号">
          </li>
          <li class="register-list">
            <span class="code-icon"></span>
            <input type="text" class="code-inout" placeholder="请输入6位验证码">
            <div class="code-Btn">获取验证码</div>
          </li>
          <li class="voice-verify">
            <span>收不到验证码？试试获取&nbsp;</span><span class="send-voice">语音验证码</span>
          </li>
          <li class="tips"></li>
          <li>
            <div class="register-btn" @click="showSecondStep">下一步</div>
          </li>
          <li class="risk-agreement">
            <div class="assent">
              <input type="checkbox">
              <span>我已阅读并同意</span>
            </div>
            <a href="javascript:void(0)" onclick="javascript:window.open('#/agreement/userAgreement','','width=1200,height=768,left=0')">《微品金融用户服务协议》</a>
          </li>
        </ul>

        <!--第二步企业信息-->
        <ul class="register-ul second-step">
          <li class="login-regText">
            <a href="#/visitor/companyLogin" class="login-tab">企业登录</a>
            <a href="javascript:void(0)" class="reg-tab">企业注册</a>
          </li>
          <li class="info-title">
            <p>完善企业信息</p>
            <p>企业信息须真实有效，否则无法通过银行存管认证</p>
          </li>
          <li class="register-list">
            <span class="qiye-icon"></span>
            <input type="text" placeholder="请输入企业名称">
          </li>
          <li class="register-list">
            <span class="credit-icon"></span>
            <input type="text" placeholder="请输入18位统一社会信用代码">
          </li>
          <li class="register-list">
            <span class="user-icon"></span>
            <input type="text" placeholder="请输入法人代表姓名">
          </li>
          <li class="register-list">
            <span class="address-icon"></span>
            <input type="text" placeholder="请输入公司地址">
          </li>
          <li class="tips"></li>
          <li>
            <div class="register-btn" @click="showThirdStep">下一步</div>
          </li>
        </ul>


        <!--第三步确认密码-->
        <ul class="register-ul third-step">
          <li class="login-regText">
            <a href="#/visitor/companyLogin" class="login-tab">企业登录</a>
            <a href="javascript:void(0)" class="reg-tab">企业注册</a>
          </li>
          <li class="pass-title">
            <p>请设置您的登录密码</p>
            <p>6-20位密码、需组合数字、字符或符号</p>
          </li>
          <li class="register-list">
            <span class="pass-icon"></span>
            <input type="password" placeholder="请设置密码">
            <!--<p class="pass-tips">密码强度: <span>一般</span></p>-->
          </li>
          <li class="register-list mar-t">
            <span class="pass-icon"></span>
            <input type="password" placeholder="请重复密码">
          </li>
          <li class="tips"></li>
          <li>
            <div class="register-btn" @click="registerSuc">完成注册</div>
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
      //显示第二步
      showSecondStep:function () {
        $(".first-step").hide();
        $(".third-step").hide();
        $(".second-step").show();
      },
      //显示第三步
      showThirdStep:function () {
        $(".first-step").hide();
        $(".second-step").hide();
        $(".third-step").show();
      },
      registerSuc:function () {
        this.$router.back(-1);
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .register
    min-width 1200px
    height 600px
    background url("~@/assets/registerLogin/register_bg.png") no-repeat center
    overflow hidden
    .register-cont
      width 400px
      height 480px
      border-radius 8px
      background-color #ffffff
      box-shadow 0 10px 20px 0 rgba(213,5,11,0.2)
      float right
      margin 60px 30px 60px 0
      .first-step
        /*display none*/
      .second-step
        display none
      .third-step
        display none
      .register-ul
        width 280px
        margin 0 auto
        li
          width 100%
          margin-top 15px
        .login-regText
          width 100%
          height 62px
          line-height 62px
          margin 20px 0 15px
          a
            width 100px
            text-align center
            height 60px
            line-height 60px
            color #333
          .login-tab
            font-size 16px
            float left
            margin-left 20px
          .reg-tab
            float right
            font-size 20px
            margin-right 20px
            border-bottom 2px solid $mainColor
        .register-list
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
          .email-icon
            background url("~@/assets/registerLogin/email_icon.png") no-repeat center
          .phone-icon
            background url("~@/assets/registerLogin/phone_icon.png") no-repeat center
          .user-icon
            background url("~@/assets/registerLogin/user_icon.png") no-repeat center
          .code-icon
            background url("~@/assets/registerLogin/code_icon.png") no-repeat center
          .pass-icon
            background url("~@/assets/registerLogin/password_icon.png") no-repeat center
          .qiye-icon
            background url("~@/assets/registerLogin/qiye_icon.png") no-repeat center
          .credit-icon
            background url("~@/assets/registerLogin/credit18_icon.png") no-repeat center
          .address-icon
            background url("~@/assets/registerLogin/address_icon.png") no-repeat center
          input
            position absolute
            left 45px
            top 5px
            height 30px
            font-size 15px
            border none
            outline none
            width 220px
          .code-inout
            width 120px
          .code-Btn
            width 100px
            height 42px
            float right
            text-align center
            line-height 42px
            color #fffdfc
            font-size 12px
            cursor pointer
            background-color $redBg
            margin -1px -1px -1px 0
          input::-webkit-input-placeholder
                  color #999999
          .pass-tips
            position absolute
            left 0
            top 45px
            color #333333
            font-size 14px
            span
              color #1278ec
        .mar-t
          margin-top 40px
        .voice-verify
          color #333
          font-size 14px
          margin-top 10px
        .send-voice
          color #1278ec
          cursor pointer
        .tips
          margin-top 15px
          color $redFontColor
          height 22px
        .register-btn
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
        .info-title
          margin-top 10px
          font-size 18px
          color #333333
          text-align center
          width 320px
          margin-left -20px
          p:last-child
            margin-top 5px
            font-size 13px
        .pass-title
          margin-top 10px
          font-size 18px
          color #333333
          text-align center
          p:last-child
            margin-top 5px
            font-size 14px
        .risk-agreement
          font-size 14px
          .assent
            color #333333
            margin-bottom 5px
            input
              float left
              margin-top 4px
              margin-right 5px
          a
            display block
            color #1278ec
            margin-left 10px


</style>
