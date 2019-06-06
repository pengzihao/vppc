<!--运营报告-->
<template>
  <div class="info-content">
    <div class="content-title">- 运营报告 -</div>
    <div class="content-box">
      <ul class="report-list">
        <li class="report-item"><a href="https://www.vpfinance.cn/report/2018" target="_blank"></a></li>
        <li class="report-item"><a href="https://www.vpfinance.cn/report/anniversary3" target="_blank"></a></li>
        <li class="report-item"><a href="https://www.vpfinance.cn/report/2017" target="_blank"></a></li>
        <li class="report-item"><a href="https://www.vpfinance.cn/report/anniversary2" target="_blank"></a></li>
        <li class="report-item"><a href="https://www.vpfinance.cn/report/2016" target="_blank"></a></li>
        <li class="report-item"><a href="https://www.vpfinance.cn/activity/operationReport" target="_blank"></a></li>
      </ul>
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

  .info-content
    width 100%
    min-height 800px
    .content-title
      height 100px
      line-height 100px
      text-align center
      background #4b75cb
      font-size 20px
      color #fdfdfd
      font-weight bold
    .content-box
      position relative
      padding 0 40px 50px
      .report-list
        width 100%
        margin-top 42px
        .report-item
          display inline-block
          width 276px
          height 120px
          margin-bottom 20px
        .report-item:not(:nth-child(3))
          margin-right 16px
        .report-item
          a
            display block
            width 276px
            height 120px
            cursor pointer
        .report-item:nth-child(1)
          a
            background url("~@/assets/infoDisclosure/anniversary2018.png") no-repeat center
            background-size 276px auto
        .report-item:nth-child(2)
          a
            background url("~@/assets/infoDisclosure/anniversary3-icon.jpg") no-repeat center
            background-size 276px auto
        .report-item:nth-child(3)
          a
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -1515px -14px no-repeat
        .report-item:nth-child(4)
          a
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -594px -14px no-repeat
        .report-item:nth-child(5)
          a
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -901px -14px no-repeat
        .report-item:nth-child(6)
          a
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -1208px -14px no-repeat

</style>
