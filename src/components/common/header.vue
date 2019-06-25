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
              <img src="@/assets/common/weixin.jpg" alt="">
            </div>
          </li>
          <li class="service-li" @mouseover="showCode" @mouseout="hideCode">
            <i class="bar-app-ico"></i><a href="javascript:void(0)">手机客户端</a>
            <div class="show-code">
              <img src="@/assets/common/app-download.jpg" alt="">
            </div>
          </li>
          <li class="service-li">
            <i class="bar-app-ico"></i>
            <a href="javascript:void(0)">HTML5版本</a>
          </li>
        </ul>

        <ul class="login-bar">
          <template v-if="loginType == 1">
            <!--登录后显示-->
            <li>您好，张三！</li>
            <li class="account" @mouseover="showAccountList" @mouseout="hideAccountList">
              <div><i class="my-account"></i><a href="#/userCenter/myAccount?accountType=1">我的账户</a><i class="small-ico"></i></div>
              <ul class="account-list">
                <li><a href="#/userCenter/myAccount?accountType=1">可用余额</a>
                  <div class="moneyBox">
                    <span>10000元</span>
                    <a href="javascript:void(0)"><img src="@/assets/common/refresh.png"/></a>
                  </div>
                </li>
                <li><a href="#/userCenter/myAccount?accountType=1">账户总览</a></li>
                <li><a href="javascript:void(0)">我要充值</a></li>
                <li><a href="javascript:void(0)" title="退出" @click="retreatSafely">安全退出</a></li>
              </ul>
            </li>
            <li>
              <i class="invest-ranking"></i>
              <a href="#/userCenter/loanRanking" title="出借排行榜">出借排行榜</a>
            </li>
          </template>
          <template v-else>
            <li>您好，欢迎来到微品金融！</li>
            <li><a class="reg-login-btn regBtn-bg" href="#/visitor/register">注册</a></li>
            <li><a class="reg-login-btn logBtn-bg" href="#/visitor/login">登录</a></li>
          </template>
          <li>
            <i></i>
            <a href="javascript:void(0)" onclick="javascript:window.open('#/agreement/riskDisclosure','','width=1200,height=768,left=0');" target="_blank" title="风险提示">风险提示</a>
          </li>
          <li>
            <i class="help-center"></i>
            <a href="#/helpCenter?type=1" title="帮助中心">帮助中心</a>
          </li>
          <li>
            <a href="#/visitor/companyRegister" title="企业用户注册">企业用户注册</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="head-menu vp-layout">
      <div class="logo">
          <a href="#">
            <img src="@/assets/common/logo.png" alt="">
          </a>
      </div>
      <div class="slogan">
        <img src="@/assets/common/logo_small.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li class="on">
            <a href="#/home" title="首页">首页</a>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="javascript:void(0)">我要出借<i></i></a>

            <ul class="second-list">
              <li>
                <a href="#/product/productList?mainType=1">转让专区</a>
              </li>
              <li>
                <a href="#/product/productList?mainType=0&type=0">项目专区</a>
              </li>
            </ul>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="javascript:void(0)" @click="productModel(10)">产品模式<i></i></a>

            <ul class="second-list">
              <li>
                <a href="javascript:void(0)" @click="productModel(10)">企业贷</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="productModel(1)">车商贷</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="productModel(17)">个人贷</a>
              </li>
            </ul>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="#/infoDisclosure?menu=0">信息披露<i></i></a>

            <ul class="second-list">
              <li>
                <a href="#/infoDisclosure?menu=0">机构信息</a>
              </li>
              <li>
                <a href="#/infoDisclosure?menu=1">经营信息</a>
              </li>
              <li>
                <a href="#/infoDisclosure?menu=2">还款公告</a>
              </li>
              <li>
                <a href="#/infoDisclosure?menu=3">运营报告</a>
              </li>
              <li>
                <a href="#/infoDisclosure?menu=4">风险教育</a>
              </li>
            </ul>
          </li>
          <li class="has-second" @mouseover="showNav" @mouseout="hideNav">
            <a href="#/customerCenter" >客服中心<i></i></a>

            <ul class="second-list">
              <li>
                <a href="#/helpCenter?type=1">帮助中心</a>
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
         loginType: window.localStorage.getItem('loginType')
      };
    },
    mounted(){

    },
    methods: {
      /*显示隐藏二维码*/
      showCode:function(event){
        event.currentTarget.children[2].style.display='block';
      },
      hideCode:function(event){
        event.currentTarget.children[2].style.display='none';
      },

      /*显示隐藏个人中心列表*/
      showAccountList:function () {
        event.currentTarget.children[1].style.display='block';
      },
      hideAccountList:function () {
        event.currentTarget.children[1].style.display='none';
      },

      /*显示菜单下拉*/
      showNav:function(event){
        event.currentTarget.children[1].style.display='block';
      },
      hideNav:function(event){
        event.currentTarget.children[1].style.display='none';
      },
      /*产品模式*/
      productModel:function (productType) {
        this.$router.push({path:'/product/productModel',query:{productType:productType}});
      },
      /*安全退出*/
      retreatSafely:function () {
        window.localStorage.setItem('loginType','0');
        this.loginType = '0';
        this.$router.push('/home');
      }
    },
    watch:{
      '$route' (to,from){
        //监听路由变化后获取登录状态
        this.loginType = window.localStorage.getItem('loginType');
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"
  .header
    background-color #fdfdfd
    height 140px
    width 100%
    min-width 1200px
    position relative
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
        background url("~@/assets/elves/index-icon.png") 3px -88px no-repeat
      .service-li
        position relative
        i
          width 24px
          height 24px
          display inline-block
          vertical-align middle
        .bar-wx-ico
          background url("~@/assets/elves/index-icon.png") -20px -88px no-repeat
        .bar-app-ico
          background url("~@/assets/elves/index-icon.png") -45px -88px no-repeat
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
          background url("~@/assets/elves/index-icon.png") -143px -89px no-repeat
        .invest-ranking
          background url("~@/assets/elves/index-icon.png") -198px -89px no-repeat
        .my-account
          background url("~@/assets/elves/index-icon.png") -68px -88px no-repeat
        .small-ico
          background url("~@/assets/elves/index-icon.png") -100px -88px no-repeat
        .account-list
          display none
          position absolute
          left -1px
          border 1px solid #eee
          width 100%
          background #fff
          z-index 999
          li
            display block
            width 100%
            line-height 30px
            text-align center
            .moneyBox
              color $redFontColor
              text-align center
              img
                width 14px
                height 12px
          li:nth-child(2n)
            border-width 1px 0 1px 0
            border-style solid
            border-color #eee
      .account
        position relative
        border 1px solid #eee
        border-top 0
        width 100px
        padding-left 5px
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
            color $mainColor
        .on
          a:hover
            color $mainColor
        .has-second
          width 120px
          position relative
          box-sizing border-box
          i
            width 15px
            height 10px
            display inline-block
            background url("~@/assets/elves/index-icon.png") -175px -92px no-repeat
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
              a
                font-size 14px
            li:not(:last-child)
              border-bottom  1px solid #eee
        .has-second:hover
          border 1px solid #eee
          border-radius 5px 5px 0 0
</style>
