<!--我的账户-->
<template>
  <div>
    <div class="account-list">
      <div class="title">我的资产</div>
      <div class="content">
        <div class="content-left">
          <p><span>88888.88</span><span>元</span></p>
          <p>资产总额</p>
        </div>
        <div class="content-right">
          <div class="right-list">
            <p><span>5555.55</span><span>元</span></p>
            <p><span>待回款金额</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>4444.44</span><span>元</span></p>
            <p><span>冻结金额</span></p>
          </div>
          <div class="right-list">
            <p><span>6666.66</span><span>元</span></p>
            <p><span>可用余额</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="account-list">
      <div class="title">我的收益</div>
      <div class="content">
        <div class="content-left">
          <p><span>22222.22</span><span>元</span></p>
          <p>累计收益</p>
        </div>
        <div class="content-right">
          <div class="right-list">
            <p><span>3333.33</span><span>元</span></p>
            <p><span>出借收益</span></p>
          </div>
          <div class="right-list">
            <p><span>1111.11</span><span>元</span></p>
            <p><span>邀请奖励</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>1000.00</span><span>元</span></p>
            <p><span>其他收益</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="account-list">
      <div class="title">我的出借</div>
      <div class="content">
        <div class="content-left">
          <p><span>88</span><span>笔</span></p>
          <p>累计出借</p>
        </div>
        <div class="content-right">
          <div class="right-list">
            <p><span>55</span><span>笔</span></p>
            <p><span>募集中</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>44</span><span>笔</span></p>
            <p><span>回款中</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>66</span><span>笔</span></p>
            <p><span>已完成</span><i class="rig-icon"></i></p>
          </div>
        </div>
      </div>
      <div class="ranking">
        <p>您的出借排名击败了平台<span>50.00%</span>的用户</p>
        <div class="progress-bg">
          <div class="progress-col"></div>
        </div>
        <div class="ranking-btn">
          <a href="javascript:void(0)">查看出借排行榜</a>
        </div>
      </div>
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

  .account-list
    background-color #fff
    padding 0 40px
    margin-bottom 20px
    overflow hidden
    .title
      margin-top 38px
      height 17px
      line-height 17px
      position relative
      padding-left 8px
      color #333333
      font-size 16px
      padding-bottom 15px
      border-bottom 1px solid #eeeeee
    .title::after
      content ""
      width 3px
      height 15px
      position absolute
      top 1px
      left 0
      background $redBg
    .content
      padding 30px 0
      height 68px
      .content-left
        float left
        height 68px
        width 348px
        border-right 1px solid #eeeeee
        p
          text-align center
          font-size 14px
          color #999
          margin-top 2px
        p:first-child
          span:first-child
            font-size 28px
            color $redFontColor
            margin-right 5px
      .content-right
        float right
        width 770px
        .right-list
          float left
          width 33%
          p
            color #999
            font-size 14px
            text-align center
            margin-top 8px
          p:first-child
            span:first-child
              color #010101
              font-size 18px
              margin-right 5px
      .rig-icon
        width 18px
        height 18px
        display inline-block
        background url("~@/assets/userCenter/rig_icon.png") no-repeat
        vertical-align middle
        margin-left 6px
    .ranking
      margin-bottom 34px
      height 36px
      p
        color #333333
        font-size 14px
      .progress-bg
        float left
        width 918px
        height 6px
        background-color #f6e9ea
        border-radius 3px
        margin-top 8px
        position relative
        .progress-col
          position absolute
          left 0
          top 0
          height 6px
          border-radius 3px
          background-color $redBg
          width 50%
      .ranking-btn
        float right
        margin-top -20px
        a
          width 170px
          height 36px
          border-radius 4px
          border solid 1px $redFontColor
          line-height 36px
          text-align center
          font-size 14px
          color $redFontColor
          display inline-block



</style>
