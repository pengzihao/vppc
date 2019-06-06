<!--项目详情-->
<template>
  <div class="wrapper vp-layout">
    <div class="breadCrumbs">
      <table border="0" cellspacing="0" cellpadding="0" width="1180" class="font-14">
        <tr>
          <td>
            <table border="0" cellspacing="0" cellpadding="0">
              <tr v-if="mainType == 0">
                <td><a href="javascript:void(0)" title="我要出借" class="a_666">我要出借</a></td>
                <td>></td>
                <td><a href="#/product/productList" title="项目列表" class="a_666">项目列表</a></td>
                <td>></td>
                <td class="c-000">借款详情</td>
              </tr>

              <tr v-else-if="mainType == 1">
                <td><a href="javascript:void(0)" title="我要出借" class="a_666">我要出借</a></td>
                <td>></td>
                <td><a href="#/product/productList?mainType=1" title="债权转让列表" class="a_666">债权转让列表</a></td>
                <td>></td>
                <td class="padding_left_10 c-000">债权转让详情</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <div class="detailsPage">
      <div class="loan-title">
        <span class="title-text">车商贷201905263</span>
        <span class="bao"></span>
        <!--<span class="float"></span>-->
        <!--<span class="zhuan"></span>-->
      </div>
      <div class="content clearfix">
        <div class="cont-left">
          <div class="left-top">
            <table border="0" cellspacing="0" cellpadding="0" width="100%" height="80">
              <tbody>
              <tr>
                <td>约定年利率</td>
                <td>标的总额（元）</td>
                <td>还款期限（月 )
                </td>
              </tr>
              <tr>
                <td class="font-36 c-red">7.20%</td>
                <td class="font-36 c-000">￥160000.00</td>
                <td class="font-36 c-000">1<span class="font-14 margin-l-5">个月</span></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="left-bot">
            <div class="repayment-box clearfix">
              <ul>
                <li>
                  <span>保障方式：</span>
                  <span class="c-000">第三方担保</span>
                </li>
                <li>
                  <span>起息日：</span>
                  <span class="c-000">2019-05-27</span>
                </li>
                <li>
                  <span>还款方式：</span>
                  <span class="c-000">一次性还本付息</span>
                  <span></span>
                </li>
                <li>
                  <span>投标结束时间：</span>
                  <span class="c-000">2019-05-26 20:24:24</span>
                </li>
              </ul>
            </div>

            <div class="progress">
              <ul>
                <li>募集进度</li>
                <li class="progress-li">
                  <span class="progress-span" style="width: 80%"></span>
                </li>
                <li class="percentage">80%</li>
                <li class="time">离预定时间：已结束</li>
              </ul>
            </div>
          </div>
          <div class="loan-state-img">
            <img src="@/assets/product/huankuanzhong.png" alt="">
          </div>
        </div>
        <div class="cont-right">
          <ul>
            <li class="balance">
              <span>剩余金额（元）：</span>
              <span>0.00</span>
            </li>
            <li class="account-money">
              <span>账户余额：</span>
              <span v-if="loginType != 1">
                <a href="#/login">登录</a>
                后可见
              </span>
              <span v-else>0.00元</span>
            </li>
            <li class="lending">
              <div class="invest-all">
                <a href="javascript:void(0)" title="登录">全投</a>
              </div>
              <input name="" type="text" class="lending-input" placeholder="输入出借金额，须大于100元">
            </li>
            <li>
              <input type="button" class="bidding-btn" value="投标">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="markSwitch">
      <div class="switch">
        <div class="tab_1 p_tabtit tab_2" id="switch_t_1" data-divshow="0">产品详情</div>
        <div class="tab_1 p_tabtit" id="switch_t_2" data-divshow="1">项目介绍</div>
        <div class="tab_1 p_tabtit" id="switch_t_4" data-divshow="2">资质资料</div>
        <div class="tab_1 p_tabtit" id="switch_t_8" data-divshow="3">出借记录</div>
        <div class="tab_1 p_tabtit" id="switch_t_5" data-divshow="4">借款人信息</div>
        <div class="tab_1 p_tabtit" id="switch_t_6" data-divshow="5">借款记录</div>
      </div>
      <div class="switch_content">
        <div class="login-tips" v-if="loginType != 1">请<a class="fastLogin" href="#/login">登录</a>后查看</div>
      </div>
      <a class="risk_a" onclick="javascript:window.open('/registration/riskAgreement','',1024,720);" title="风险提示"><i></i>出借有风险，决策需谨慎</a>
    </div>
    <!--弹框-->
    <div class="popup">
      <div class="pop-cont">
         登录
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        mainType: 0,  //出借类型   0 出借， 1 转让
        loginType: window.localStorage.getItem('loginType')
      }
    },
    mounted(){

    },
    methods:{
      //登录弹框
      showPopup:function () {
        $('.popup').show();
        $("body").css("overflow", "hidden");
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .wrapper
    .breadCrumbs
      width: 100%;
      height: 50px;
      line-height: 50px;
      .a_666
        color #666
      td:not(:first-child)
        padding-left 10px
    .detailsPage
      width 1180px
      background #FFF
      border-top 3px solid #ee3c43
      .loan-title
        width 1100px
        height 80px
        padding 0 40px
        overflow hidden
        line-height 80px
        border-bottom 1px solid #E5E7EE
        span
          display inline-block
        .title-text
          font-size 24px
          padding 0 10px
          color #000
        .bao
          width 86px
          height 22px
          background url("~@/assets/product/productTag/tag-bao22.png") center no-repeat
          background-size 86px 22px
        .zhuan
          width 62px
          height 22px
          background url("~@/assets/product/productTag/tag-zhuan22.png") center no-repeat
          background-size 62px 22px
        .float
          width 78px
          height 22px
          background url("~@/assets/product/productTag/tag-float22.png") center no-repeat
          background-size 78px 22px
      .content
        width 1100px
        padding 40px
        .cont-left
          width 720px
          float left
          padding-right 40px
          position relative
          .left-top
            width 100%
            height 80px
            padding-bottom 20px
            border-bottom solid 1px #E5E7EE
            table
              border-collapse collapse
              border-spacing 0
              td
                color #666
                font-size 18px
                padding 0 44px
              td:not(:first-child)
                border-left 1px solid #e5e7ee
              td:first-child
                padding-left 0
                padding-right 100px
          .left-bot
            width 100%
            padding-top 30px
            .repayment-box
              ul
                width 100%
                li
                  float left
                  width 360px
                  height 30px
            .progress
              width 100%
              height 24px
              margin-top 26px
              overflow hidden
              ul
                width 100%
                li
                  float left
                  color #000
                .progress-li
                  width 430px
                  height 12px
                  background #E5E7EE
                  border-radius: 10px
                  margin 5px 10px
                  overflow hidden
                  position relative
                  .progress-span
                    background-color #92E1A0
                    height 12px
                    position absolute
                    left 0
                    top 0
                .percentage
                  width 60px
                  height 24px
                  line-height 24px
                  text-align center
                  padding-left 4px
                  color #FFF
                  background url("~@/assets/elves/pngicon.png") no-repeat 8px -769px
                  font-size 12px
                  overflow hidden
                .time
                  font-size 15px
                  margin-left 10px
                  color #666
                  margin-top 2px
          .loan-state-img
            width 115px
            height 110px
            position absolute
            top 50px
            right 20px
            img
              width 100%
              height 100%
        .cont-right
          float right
          width 300px
          padding-left 38px
          border-left 1px solid #e5e7ee
          li
            width 300px
            height 40px
            margin-bottom 10px
            color #000
          .balance
            span:first-child
              float left
              font-size 18px
            span:last-child
              float right
              color $mainColor
              font-size 22px
          .account-money
            span:first-child
              float left
              font-size 14px
            span:last-child
              float right
              font-size 14px
              a
                color #0E63BD
                margin-right 2px
          .lending
            position relative
            .invest-all
              position absolute
              width 60px
              height 20px
              border-left 1px solid #eee
              text-align center
              line-height 20px
              right 0
              top 10px
              cursor pointer
              font-size 14px
              a
                color #0E63BD
            .lending-input
              width 290px
              height 40px
              line-height 40px
              padding-left 10px
              border 1px solid #ccc
              border-radius 5px
              overflow hidden
            input::-webkit-input-placeholder
              color #666
          .bidding-btn
            width 300px
            height 40px
            border none
            cursor pointer
            border-radius 3px
            text-align center
            line-height 40px
            overflow hidden
            background-color $redBg
            font-size 18px
            color #fff
    .markSwitch
      width 1180px
      background #FFF
      margin 40px 0 50px 0
      overflow hidden
      .switch
        width 100%
        height 50px
        line-height 50px
        overflow hidden
        border-bottom 1px solid #e5e7ee
        .tab_1
          float left
          width 130px
          height 50px
          text-align center
          cursor pointer
          font-size 16px
          color #000
          overflow hidden
          box-sizing border-box
        .tab_1:not(:last-child)
          border-right 1px solid #e5e7ee
        .tab_2
          border-bottom 3px solid #ff5050
      .switch_content
        width 1180px
        overflow hidden
        .login-tips
          line-height 80px
          text-align center
          color #333
          font-size 18px
          a
            color #4985FF
            font-size 20px
            cursor pointer
            padding 0 10px

      .risk_a
        display block
        width 100%
        height 30px
        color #666
        font-size 12px
        text-align center
        line-height 30px
        cursor pointer
    .popup
      width 100%
      height 100%
      position fixed
      top 0
      left 0
      z-index 999
      background rgba(0,0,0,0.3)
      display none
      .pop-cont
        width 400px
        height 400px
        text-align center
        line-height 400px
        background-color #fff
        position absolute
        left 50%
        top 50%
        margin-left -200px
        margin-top -200px

</style>
