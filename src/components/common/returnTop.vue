<!--右下角返回顶部-->
<template>
  <div class="serviceTips">
    <div>
      <a class="app-down" href="javascript:void(0)" @mouseover="showCode" @mouseout="hideCode"></a>
      <div class="app-img">
        <img src="../../assets/common/app-download.png">
      </div>
    </div>
    <div>
      <a class="counter" href="javascript:void(0)"></a>
    </div>
    <div>
      <a class="wx-service" href="javascript:void(0)" @mouseover="showCode" @mouseout="hideCode"></a>
      <div class="wx-img">
        <img src="../../assets/common/wechat-code.png">
      </div>
    </div>
    <div>
      <a class="qq-service" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2633220589&amp;site=qq&amp;menu=yes" @mouseover="showQQ" @mouseout="hideQQ" target="_blank">
        <div class="qq-chat-bg">
          <img class="qq-ico" src="../../assets/common/return-top-hover-icon3.png" title="点击咨询">
          <span class="qq-chat">QQ交谈</span>
        </div>
      </a>
    </div>
    <div>
      <a class="returnTopBtn" @click="returnTop" href="javascript:void(0)"></a>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
        };
      },
      mounted:function(){
        this.$nextTick(function () {
          window.addEventListener('scroll',this.getScrollTop)
        });
      },
      methods:{
        showCode:function (e) {
          let ele = e.currentTarget.nextElementSibling;
          $(ele).fadeIn(300);
        },
        hideCode:function (e) {
          let ele =e.currentTarget.nextElementSibling;
          $(ele).fadeOut(0);
        },
        showQQ:function (e) {
          e.currentTarget.children[0].style.display='block';
        },
        hideQQ:function (e) {
          e.currentTarget.children[0].style.display='none';
        },
        getScrollTop:function () {
          let returnBtn = document.getElementsByClassName('returnTopBtn')[0];
          let scrollTopNum = document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTopNum > '100'){
            returnBtn.style.display = 'block';
          }else {
            returnBtn.style.display = 'none';
          }
        },
        returnTop:function (e) {
          e.preventDefault();
          let topTimer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            if(osTop == 0){
              clearInterval(topTimer);
            }
          },30);
        }
      }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "../../commom/css/common.styl"
  .serviceTips
    position fixed
    right 50px
    bottom 100px
    z-index 99
    a
      width 58px
      height 58px
      display block
      margin-top 5px
      background url("../../assets/elves/pngicon.png") no-repeat
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    .app-down
      background-position -932px -143px
    .app-down:hover
      background-position -990px -143px
    .counter
      background-position -932px -202px
    .counter:hover
      background-position -990px -202px
    .wx-service
      background-position -932px -262px
    .wx-service:hover
      background-position -990px -262px
    .qq-service
      background-position -932px -322px
    .qq-service:hover
      background-position -990px -322px
    .returnTopBtn
      display none
      background-position -932px -382px
    .returnTopBtn:hover
      background-position -990px -382px
    .app-img
      display none
      position absolute
      top -10px
      left -175px
    .wx-img
      display none
      position absolute
      top 115px
      left -175px
    .qq-chat-bg
      width 152px
      height 58px
      line-height 58px
      position absolute
      top 182px
      left -172px
      padding 12px 0 0 20px
      display none
      background url("../../assets/common/return-top-hover-icon4.png") no-repeat
      .qq-ico
        vertical-align middle
        margin 0 0 0 16px
      .qq-chat
        border 1px solid #dadada
        width 64px
        height 26px
        display inline-block
        color #3d3d3d
        line-height 26px
        border-radius 5px
        font-size 12px
        text-align center
        margin-left 8px
</style>
