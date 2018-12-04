<!--头部-->
<template>
  <div class="header">
    <div class="wrap-top-bg">
      <div class="wrap-top vp-layout clearfix">
        <ul class="service-bar">
          <li class="hotline c-333">
            <i></i>客服热线：<a href="tel:075586627551">0755-86627551</a>
          </li>
          <li class="service-li" @mouseover="showCode" @mouseout="hideCode">
            <i class="bar-wx-ico"></i><a href="javascript:void(0)">微信</a>
            <div class="show-code">
              <img src="../../assets/common/weixin.jpg" alt="">
            </div>
          </li>
          <li class="service-li" @mouseover="showCode" @mouseout="hideCode">
            <i class="bar-app-ico"></i><a href="javascript:void(0)">手机客户端</a>
            <div class="show-code">
              <img src="../../assets/common/app-download.jpg" alt="">
            </div>
          </li>
          <li class="service-li">
            <i class="bar-app-ico"></i>
            <a href="javascript:void(0)">HTML5版本</a>
          </li>
        </ul>

        <ul class="login-bar">
          <li>您好，欢迎来到微品金融！</li>
          <li>
            <a class="reg-login-btn regBtn-bg" href="javascript:void(0)">注册</a>
          </li>
          <li>
            <a class="reg-login-btn logBtn-bg" href="javascript:void(0)">登录</a>
          </li>
          <li>
            <i></i>
            <a href="javascript:void(0)" title="风险提示">风险提示</a>
          </li>
          <li>
            <i class="help-center"></i>
            <a href="javascript:void(0)" title="帮助中心">帮助中心</a>
          </li>
          <li>
            <a href="javascript:void(0)" title="企业用户注册">企业用户注册</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="head-menu vp-layout">
      <div class="logo">
          <a href="#">
            <img src="../../assets/common/logo.png" alt="">
          </a>
      </div>
      <div class="slogan">
        <img src="../../assets/common/logo_small.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li class="on">
            <a href="javascript:void(0)" title="首页">首页</a>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="javascript:void(0)">我要出借<i></i></a>

            <ul class="second-list">
              <li>
                <a href="javascript:void(0)">转让专区</a>
              </li>
              <li>
                <a href="javascript:void(0)">项目专区</a>
              </li>
            </ul>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="javascript:void(0)">产品模式<i></i></a>

            <ul class="second-list">
              <li>
                <a href="javascript:void(0)">企业贷</a>
              </li>
              <li>
                <a href="javascript:void(0)">车商贷</a>
              </li>
              <li>
                <a href="javascript:void(0)">个人贷</a>
              </li>
            </ul>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="javascript:void(0)">信息披露<i></i></a>

            <ul class="second-list">
              <li>
                <a href="javascript:void(0)">机构信息</a>
              </li>
              <li>
                <a href="javascript:void(0)">经营信息</a>
              </li>
              <li>
                <a href="javascript:void(0)">还款公告</a>
              </li>
              <li>
                <a href="javascript:void(0)">运营报告</a>
              </li>
              <li>
                <a href="javascript:void(0)">风险教育</a>
              </li>
            </ul>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="javascript:void(0)">客服中心<i></i></a>

            <ul class="second-list">
              <li>
                <a href="javascript:void(0)">帮助中心</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      /*显示隐藏二维码*/
      showCode:function(event){
        event.currentTarget.children[2].style.display='block';
      },
      hideCode:function(event){
        event.currentTarget.children[2].style.display='none';
      },

      /*显示菜单下拉*/
      showNav:function(event){
        event.currentTarget.children[1].style.display='block';
      },
      hideNav:function(event){
        event.currentTarget.children[1].style.display='none';
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "../../commom/css/common.styl"
  .header
    background-color #fdfdfd
    height 140px
    width 100%
  .wrap-top-bg
    background-color #f5f5f5
    height 40px
    font-size 12px
    border-bottom 1px solid #eee
    line-height 40px
    width 100%
    /*position fixed*/
    /*left 0*/
    /*top 0*/
    .service-bar
      float left
      .hotline>i
        width 22px
        height 22px
        display inline-block
        vertical-align middle
        background url("../../assets/elves/index-icon.png") 3px -88px no-repeat
      .service-li
        position relative
        i
          width 24px
          height 24px
          display inline-block
          vertical-align middle
        .bar-wx-ico
          background url("../../assets/elves/index-icon.png") -20px -88px no-repeat
        .bar-app-ico
          background url("../../assets/elves/index-icon.png") -45px -88px no-repeat
        .show-code
          display none
          position absolute
          left -50px
          width 120px
          height 120px
          background-color #fff
          padding 10px
          border-radius 10px
          color #f5f5f5
          z-index 99
        .show-code:after
          content ''
          position absolute
          left 40%
          bottom 100%
          width 0
          height 0
          border 10px solid
          border-bottom-color #fff
          border-top-width 0
          img
            width 100%
            height 100%
    .login-bar
      float right
      li
        .reg-login-btn
          height 20px
          width 50px
          display block
          line-height 20px
          text-align center
          color #fff
          border-radius 2px
        .regBtn-bg
          background-color $blueBg
        .logBtn-bg
          background-color $redBg
        i
          display inline-block
          width 20px
          height 20px
          vertical-align middle
        .help-center
          background url("../../assets/elves/index-icon.png") -143px -88px no-repeat
    .wrap-top>ul>li
      display inline-block
      margin-right 10px
  .head-menu
    .logo
      margin 28px 0 0 8px
      float left
    .slogan
      float left
      border-left 1px solid #ccc
      margin 27px 0 0 30px
      height 42px
      width 200px
      padding-left 15px
    .nav
      float right
      margin-top 34px
      ul
        li
          float left
          z-index 99
          a
            height 36px
            width 120px
            display inline-block
            font-size 18px
            line-height 36px
            text-align center
          a:hover
            color #ee3c43
        .on
          a:hover
            color #ee3c43
        .has-second
          width 120px
          position relative
          box-sizing border-box
          i
            width 15px
            height 10px
            display inline-block
            background url("../../assets/elves/index-icon.png") -175px -92px no-repeat
            margin-left 10px
          .second-list
            display none
            position absolute
            left -1px
            top 36px
            width 120px
            background-color #fff
            border 1px solid #eee
            box-sizing border-box
            border-radius 0 0 6px 6px
            li
              border-bottom  1px solid #eee
              a
                font-size 14px
        .has-second:hover
          border 1px solid #eee
          border-radius 5px 5px 0 0
</style>
