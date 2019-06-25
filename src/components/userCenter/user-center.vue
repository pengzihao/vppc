<!--用户中心-->
<template>
 <div class="user-center">
   <div class="vp-layout">
      <div class="user-info">
        <div class="left-box">
          <div class="user-photo">
            <img src="@/assets/userCenter/mine_icon.png" alt="">
          </div>
          <div class="name-sign">
            <p><span class="user-name">张三</span><span class="segment">青铜</span></p>
            <p class="user-sign">这是我的非常个性的个性签名。。。</p>
          </div>
        </div>
        <div class="right-box">
          <div class="overBox">
            <p>8888.88</p>
            <p>可用余额 (元)</p>
          </div>
          <div class="btnBox">
            <a href="javascript:void(0)">出借</a>
            <a href="javascript:void(0)">充值</a>
          </div>
        </div>
      </div>
      <div class="nav">
        <ul class="first-ul">
          <li class="first-li" :class="{on: navType >=0 && navType <= 10}" @mouseover="showChildNavList" @mouseout="hideChildNavList">
            <a href="javascript:void(0)" class="first-a">账户管理</a>
            <ul class="second-ul">
              <li @click="setNavType($event,1)"><router-link to="/userCenter/myAccount?accountType=1">我的账户</router-link></li>
              <li @click="setNavType($event,2)"><router-link to="/userCenter/safetyCenter?accountType=2">安全中心</router-link></li>
              <li @click="setNavType($event,3)"><router-link to="/userCenter/iwantRecharge?accountType=3">我要充值</router-link></li>
              <li @click="setNavType($event,4)"><router-link to="/userCenter/iwantWithdraw?accountType=4">我要提现</router-link></li>
              <li @click="setNavType($event,5)"><router-link to="/userCenter/fundRunning?accountType=5">资金流水</router-link></li>
            </ul>
          </li>
          <li class="first-li" :class="{on: navType >= 11 && navType <= 20}" @mouseover="showChildNavList" @mouseout="hideChildNavList">
            <a href="javascript:void(0)" class="first-a">出借管理</a>
            <ul class="second-ul">
              <li><router-link to="">专项出借</router-link></li>
              <li @click="setNavType($event,11)"><router-link to="/userCenter/returnMoney?accountType=11">回款查询</router-link></li>
              <li @click="setNavType($event,11)"><router-link to="/userCenter/iwantTransfer?accountType=12">我要转让</router-link></li>
              <li><router-link to="">购买的债权</router-link></li>
              <li @click="setNavType($event,13)"><router-link to="/userCenter/autoBid?accountType=13">自动投标</router-link></li>
            </ul>
          </li>
          <li class="first-li" :class="{on: navType >= 21 && navType <= 30}" @mouseover="showChildNavList" @mouseout="hideChildNavList">
            <a href="javascript:void(0)" class="first-a">活动管理</a>
            <ul class="second-ul">
              <li @click="setNavType($event,21)"><router-link to="/userCenter/noviceExp?accountType=21">新手体验金</router-link></li>
              <li @click="setNavType($event,22)"><router-link to="/userCenter/myCoupon?accountType=22">我的优惠券</router-link></li>
              <li @click="setNavType($event,23)"><router-link to="/userCenter/inviteCourtesy?accountType=23">邀请有礼</router-link></li>
              <li @click="setNavType($event,24)"><router-link to="/userCenter/riskReview?accountType=24">风险评测</router-link></li>
            </ul>
          </li>
          <li class="first-li" :class="{on: navType >= 31 && navType <= 40}" @mouseover="showChildNavList" @mouseout="hideChildNavList">
            <a href="javascript:void(0)" class="first-a">借还款管理</a>
            <ul class="second-ul">
              <li><router-link to="">我要借款</router-link></li>
              <li><router-link to="">借款记录</router-link></li>
              <li><router-link to="">还款管理</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <router-view></router-view>
      </div>
   </div>
 </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
         navType: this.$route.query.accountType || 0
      }
    },
    mounted: function () {

    },
    methods: {
      showChildNavList:function (e) {
        e.currentTarget.children[1].style.display='block';
      },
      hideChildNavList:function (e) {
        e.currentTarget.children[1].style.display='none';
      },
      setNavType:function (e,type) {
        this.navType = type;
        e.currentTarget.parentElement.style.display='none';
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .user-center
    width 100%
    background-color #f5f5f5
    .user-info
      height 92px
      width 1100px
      background-color #fff
      padding 33px 50px
      margin 20px 0 10px 0
      .left-box
        float left
        width 50%
        .user-photo
          width 74px
          height 74px
          margin-top 9px
          float left
        .name-sign
          float left
          margin-left 20px
          margin-top 10px
          p
            margin-top 8px
            color #999999
          .user-name
            color #333333
            font-size 20px
            letter-spacing 1px
          .segment
            font-size 12px
            color #ffffff
            background-color #ffc919
            border-radius 9px
            padding 2px 10px
            margin-left 12px
      .right-box
        float right
        .overBox
          float left
          text-align center
          margin-top 10px
          margin-right 80px
          p:first-child
            font-size 36px
            color $redFontColor
          p:last-child
            letter-spacing 1px
            color #999999
            font-size 14px
        .btnBox
          float left
          a
            width 134px
            height 36px
            border-radius 2px
            display block
            letter-spacing 1px
            font-size 14px
            text-align center
            line-height 36px
          a:first-child
            background-color $redBg
            color #ffffff
          a:last-child
            width 132px
            height 34px
            background-color #fff
            color $redBg
            border 1px solid $redBg
            margin-top 20px
    .nav
      height 56px
      background-color #fff
      border-bottom 1px solid #ededed
      .first-ul
        .first-li
          float left
          width 178px
          height 56px
          cursor pointer
          text-align center
          position relative
          .first-a
            width 178px
            height 32px
            line-height 32px
            border-right 1px solid #ededed
            margin 12px 0
            display block
            color #333333
            font-size 16px
        .on
          border-bottom 1px solid $redFontColor
          .first-a
            color $redFontColor
          .first-a:after
            border-left 5px solid transparent
            border-right 5px solid transparent
            border-top 5px solid $redFontColor
            content ""
            position relative
            top 15px
            right -5px
            width 0
        .first-li:hover
          border-bottom 1px solid $redFontColor
          .first-a
            color $redFontColor
          .first-a:after
            border-left 5px solid transparent
            border-right 5px solid transparent
            border-top 5px solid $redFontColor
            content ""
            position relative
            top 15px
            right -5px
            width 0
        .second-ul
          display none
          background-color #fff
          z-index 999
          position absolute
          left 0
          top 57px
          border 1px solid #ededed
          border-top none
          border-bottom none
          li
            width 178px
            height 50px
            text-align center
            line-height 50px
            border-bottom 1px solid #ededed
            font-size 15px
            a
              height 50px
              width 178px
              display inline-block
            a:hover
              color $redFontColor
              background-color #f5f5f5

</style>
