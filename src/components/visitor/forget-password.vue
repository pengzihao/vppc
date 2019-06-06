<!--普通用户忘记密码-->
<template>
  <div class="forget">
    <div class="vp-layout">
      <div class="forget-cont">
        <!--第一步获取验证码-->
        <ul class="forget-ul first-step">
          <li class="forget-title">
            <a href="javascript:void(0)" @click="returnToPage">返回</a>
            <span>忘记密码</span>
          </li>
          <li class="forget-list">
            <span class="user-icon"></span>
            <input type="text" placeholder="请输入手机号">
          </li>
          <li class="forget-list">
            <span class="code-icon"></span>
            <input type="text" class="code-inout" placeholder="请输入6位验证码">
            <div class="code-Btn">获取验证码</div>
          </li>
          <li class="voice-verify">
            <span>收不到验证码？试试获取&nbsp;</span><span class="send-voice">语音验证码</span>
          </li>
          <li class="tips"></li>
          <li>
            <div class="forget-btn" @click="showSecondStepSuc">下一步</div>
          </li>
        </ul>

        <!--第二步确认密码-->
        <ul class="forget-ul second-step">
          <li class="forget-title">
            <a href="javascript:void(0)" @click="showFirstStep">返回</a>
            <span>忘记密码</span>
          </li>
          <li class="pass-title">
            <p>请设置新的登录密码</p>
            <p>6-20位密码、需组合数字、字符或符号</p>
          </li>
          <li class="forget-list">
            <span class="pass-icon"></span>
            <input type="password" placeholder="请设置密码">
            <!--<p class="pass-tips">密码强度: <span>一般</span></p>-->
          </li>
          <li class="forget-list mar-t">
            <span class="pass-icon"></span>
            <input type="password" placeholder="请重复密码">
          </li>
          <li class="tips"></li>
          <li>
            <div class="forget-btn" @click="secondStepSuc">完成</div>
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
      returnToPage:function () {
        this.$router.back(-1);
      },
      showSecondStepSuc:function () {
        $(".first-step").hide();
        $(".second-step").show();
      },
      showFirstStep:function () {
        $(".first-step").show();
        $(".second-step").hide();
      },
      secondStepSuc:function () {
        this.$router.back(-1);
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .forget
    min-width 1200px
    height 600px
    background url("~@/assets/registerLogin/login_bg.png") no-repeat center
    overflow hidden
    .forget-cont
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
      .forget-ul
        width 280px
        margin 0 auto
        li
          width 100%
          margin-top 20px
        .forget-title
          width 100%
          height 62px
          line-height 62px
          margin 20px 0 30px
          text-align center
          color: #333333;
          font-size 20px
          position relative
          a
            width 60px
            height 40px
            line-height 40px
            color $redFontColor
            font-size 16px
            float left
            position absolute
            left -12px
            top 12px
        .forget-list
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
          .user-icon
            background url("~@/assets/registerLogin/user_icon.png") no-repeat center
          .code-icon
            background url("~@/assets/registerLogin/code_icon.png") no-repeat center
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
         .send-voice
           color #1278ec
        .tips
          margin-top 15px
          color $redFontColor
          height 22px
        .forget-btn
          width 282px
          height 40px
          background-color $redBg
          border-radius 2px
          color #fff
          font-size 16px
          text-align center
          line-height 40px
          cursor pointer
        .pass-title
          margin-top 10px
          font-size 18px
          color #333333
          text-align center
          p:last-child
            margin-top 5px
            font-size 14px


</style>
