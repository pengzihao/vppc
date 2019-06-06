<!--帮助中心-->
<template>
  <div class="main-bg">
    <div class="help-banner"></div>
    <div class="vp-layout">
      <div class="help-center">
        <div class="help-center-left">
          <ul>
            <li><a><em></em>帮助中心</a></li>
            <li><a href="javascript:void(0)" @click="getProblem(1)"><em></em>账户管理</a></li>
            <li><a href="javascript:void(0)" @click="getProblem(2)"><em></em>出借</a></li>
            <li><a href="javascript:void(0)"><em></em>体验金</a></li>
            <li><a href="javascript:void(0)"><em></em>邀请好友与奖励</a></li>
            <li><a href="javascript:void(0)"><em></em>债权转让</a></li>
            <li><a href="javascript:void(0)"><em></em>安全保障</a></li>
            <li><a href="javascript:void(0)"><em></em>联系客服</a></li>
            <li><a href="javascript:void(0)"><em></em>名词解释</a></li>
            <li><a href="javascript:void(0)"><em></em>优惠券</a></li>
            <div class="hx-help-guide">银行存管指引</div>
            <li><a href="javascript:void(0)"><em></em>安全保障</a></li>
            <li><a href="javascript:void(0)"><em></em>联系客服</a></li>
            <li><a href="javascript:void(0)"><em></em>名词解释</a></li>
            <li><a href="javascript:void(0)"><em></em>优惠券</a></li>
          </ul>
        </div>
        <div class="help-center-right">
          <!--平台标志解释 状态为30显示-->
          <div class="icon-explain" style="display: none">
            <div class="title font-20">平台标志解释</div>
            <ul class="icon-list">
              <li><div class="top-icon top-icon1"></div><div class="bottom-text">债权可转让</div></li>
              <li><div class="top-icon top-icon2"></div><div class="bottom-text">浮动计息</div></li>
              <li><div class="top-icon top-icon3"></div><div class="bottom-text">第三方担保</div></li>
              <li><div class="top-icon top-icon4"></div><div class="bottom-text">加息奖励</div></li>
            </ul>
          </div>
          <div class="title titleCont">账户管理</div>
          <div class="content">
            <ul class="expmenu">
              <li v-for="item in problemList">
                <div class="header" @click="problemFun">
                  <input type="hidden" value="">
                  <span class="arrow up"></span>
                  <span class="label">{{item.problemTitle}}</span>
                </div>
                <div class="menu" v-html="item.problemCont"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import problemData from '@/common/js/problem/problem'

    export default {
        name: '',
        data(){
           return {
             problemData: problemData,
             problemList: [],
             type: this.$route.query.type || 1

           }
        },
        mounted:function () {
           this.getProblem(this.type);
        },
        methods:{
           problemFun:function(e){
              var ele = e.currentTarget;
              var arrow = $(ele).find("span.arrow");
              if(arrow.hasClass("up")){
                 arrow.removeClass("up");
                 arrow.addClass("down");
              }else{
                arrow.removeClass("down");
                arrow.addClass("up");
              }

              $(ele).parent().find("div.menu").slideToggle();
           },
           getProblem:function (type) {
              this.type = type;
              var centerList = this.problemData.centerList;
              for(var i=0; i<centerList.length; i++){
                 if(this.type == centerList[i].type){
                    this.problemList = centerList[i].problemList;
                    $('.titleCont').text(centerList[i].title)
                 }
              }
           }
        }
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~@/common/css/common.styl"
  .main-bg
    background-color #E5E7EE
    padding-bottom 50px
  .help-banner
    width 100%
    height 240px
    background url("~@/assets/helpCenter/inside_advertisement.png") no-repeat center
  .help-center
    width 100%
    background-color #fff
    margin 50px 0 0
    overflow hidden
    .help-center-left
      ul
        width 260px
        float left
        border-right 1px solid #E5E7EE
        cursor pointer
        li
          a
            height 50px
            line-height 50px
            width 260px
            border-bottom 1px solid #f2f2f2
            color #666
            display block
            em
              float left
              display inline-block
              width 22px
              height 22px
              margin 14px 10px 0 30px
        .hx-help-guide
          width 90%
          height 50px
          padding-left 10%
          line-height 50px
          font-size 16px
          color #333
          border-bottom 1px solid #f2f2f2
        li:not(:first-child):hover
          border-left 2px solid #FFB600
        li:nth-child(1)
          background-color $redBg
          a
            height 60px
            line-height 60px
            color #fff
            font-size 18px
            em
              width 24px
              height 24px
              background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -240px
              margin 18px 10px 0 30px
        li:nth-child(2)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -297px
        li:nth-child(3)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -347px
        li:nth-child(4)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -397px
        li:nth-child(5)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -447px
        li:nth-child(6)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -497px
        li:nth-child(7)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -19px -647px
        li:nth-child(8)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -547px
        li:nth-child(9)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -597px
        li:nth-child(10)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -690px
        li:nth-child(11)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -18px -735px
        li:nth-child(12)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -114px -346px
        li:nth-child(13)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -114px -397px
        li:nth-child(14)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -114px -447px
        li:nth-child(15)
          em
            background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -114px -496px
    .help-center-right
      width 839px
      float left
      min-height 800px
      padding 0 40px
      overflow hidden
      .title
        float left
        width 839px
        height 60px
        line-height 60px
        color #ee3c43
        border-bottom solid 1px #eee
        overflow hidden
        font-size 20px
      .icon-list
        width 100%
        li
          width 118px
          height 100px
          float left
          .top-icon
            width 100px
            height 40px
            margin 15px auto
            background-size 972px
          .bottom-text
            width 100%
            height 30px
            line-height 30px
            text-align center
            font-size 12px
            color:#333
          .top-icon1
            background url("~@/assets/helpCenter/tag-zhuan22.png") center no-repeat
            background-size auto 22px
          .top-icon2
            background url("~@/assets/helpCenter/tag-float22.png") center no-repeat
            background-size auto 22px
          .top-icon3
            background url("~@/assets/helpCenter/tag-bao22.png") center no-repeat
            background-size auto 22px
          .top-icon4
            background url("~@/assets/helpCenter/help-icon-explain.png") no-repeat -768px 0
            background-size 850px auto
        li:last-child
          width 180px
          height 100px
          float left
      .content
        width 839px
        padding 0 0 50px 0
        overflow hidden
        .expmenu
          width 839px
          .header
            width 839px
            height 17px
            line-height 17px
            margin-top 30px
            .arrow
              float left
              width 16px
              height 6px
              margin-top 6px
              overflow hidden
            .up
              background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -120px -276px
            .down
              background url("~@/assets/helpCenter/security-assurance-icon.png") no-repeat -120px -240px
            .label
              float left
              width 810px
              padding-left 12px
              height 17px
              cursor pointer
              font-size 14px
              color #000
              overflow hidden
          .menu
            position relative
            width 770px
            background #F3F3F3
            padding 10px 20px
            margin 20px 0px 0px 29px
            display none
          .menu:before
            content ""
            position absolute
            width 0
            height 0
            top -10px
            left 15px
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #f3f3f3

</style>
