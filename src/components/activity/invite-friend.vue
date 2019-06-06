<!--邀请双重礼-->
<template>
  <div class="main-bg">
    <div class="top-img">
      <img src="@/assets/activity/invite-top.png">
    </div>
    <div class="bottom-img">
      <img src="@/assets/activity/invite-bottom.jpg">
      <div class="invite-btn">
        <img src="@/assets/activity/invite-btn.png">
      </div>
      <!--<div class="invite-detail">-->
        <!--详情请点击：<a href="https://www.vpfinance.cn/to/article-1-20-687.htm">https://www.vpfinance.cn/to/article-1-20-687.htm</a>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .main-bg
    background #47337A
  .top-img
    width 100%
    vertical-align bottom
    img
      width 100%
      vertical-align bottom
  .bottom-img
    background #47337a
    text-align center
    position relative
    img
      width 74%
      vertical-align bottom
    .invite-btn
      width 20%
      position absolute
      left 50%
      margin-left: -10%
      bottom 14%
      cursor pointer
      img
        width 100%
    .invite-detail
      width 100%
      position absolute
      bottom 10%
      text-align center
      color #ffe0a8
      font-size 14px
      a
        color #ffe0a8
        text-decoration none
      a:link
        color: #ffe0a8
      a:hover
        color: #ffe0a8
</style>
