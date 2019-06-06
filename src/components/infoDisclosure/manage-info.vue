<!--经营信息-->
<template>
  <!--<div class="info-content info-content2" id="businessTable">-->
    <!--<div class="content-title">- 经营信息 -</div>-->
    <!--<div class="content-box">-->
      <!--<div class="info-title">运营数据</div>-->
      <!--<div class="update-time">（截止{{createTime}}）</div>-->
      <!--<table border="0" cellspacing="0" cellpadding="0">-->
        <!--<tr><td>累计借贷金额</td><td>{{totalBorrMoney}}元</td></tr>-->
        <!--<tr><td>累计借贷笔数</td><td>{{totalBorrCount}}笔</td></tr>-->
        <!--<tr><td>借贷余额</td><td>{{cashBorrMoney}}元</td></tr>-->
        <!--<tr><td>借贷余额笔数</td><td>{{cashBorrCount}}笔</td></tr>-->
        <!--<tr><td>利息余额</td><td>{{cashPromitMoney}}元</td></tr>-->
        <!--<tr><td>累计出借人数量</td><td>{{totalTendersNum}}</td></tr>-->
        <!--<tr><td>累计借款人数量</td><td>{{totalBorroweNum}}</td></tr>-->
        <!--<tr><td>当前出借人数量</td><td>{{currentTenderSum}}</td></tr>-->
        <!--<tr><td>当前借款人数量</td><td>{{currentBorroweNum}}</td></tr>-->
        <!--<tr><td>前十大借款人待还金额占比</td><td>{{tenBorrerProp}}</td></tr>-->
        <!--<tr><td>最大单一借款人待还金额占比</td><td>{{maxBorrerProp}}</td></tr>-->
        <!--<tr><td>关联关系借款余额</td><td>{{cashRelationBorrMoney}}元</td></tr>-->
        <!--<tr><td>关联关系借款余额笔数</td><td>{{cashRelationBorrCount}}笔</td></tr>-->
        <!--<tr><td>逾期金额</td><td>{{totalOverduMoney}}元</td></tr>-->
        <!--<tr><td>逾期笔数</td><td>{{totalOverdueCount}}笔</td></tr>-->
        <!--<tr><td>逾期 90 天（不含）以上金额</td><td>{{ninetyOverdueMoney}}元</td></tr>-->
        <!--<tr><td>逾期 90 天（不含）以上笔数</td><td>{{ninetyOverdueCount }}笔</td></tr>-->
        <!--<tr><td>累计代偿金额</td><td>{{totalCompensatoryMoney}}元</td></tr>-->
        <!--<tr><td>累计代偿笔数</td><td>{{totalCompensatoryCount}}笔</td></tr>-->
        <!--<tr><td>收费标准</td><td style="padding:0;">-->
          <!--<table class="table-inner">-->
            <!--<tr><td>类型</td><td>收费名目</td><td>收费标准</td></tr>-->
            <!--<tr><td rowspan="3">出借人收费</td><td>充值费用</td><td>0</td></tr>-->
            <!--<tr><td style="background: #fff;">提现费用</td><td style="background: #fff;">0</td></tr>-->
            <!--<tr><td>债权转让手续费</td><td>转让手续费=转让金额×0.3%</td></tr>-->
            <!--<tr><td>借款人收费</td><td>居间服务费</td><td>按照年化1%~8%居间服务费率收取。居间服务费=融资金额*融资期限XX月/12*居间服务费率</td></tr>-->
          <!--</table>-->
        <!--</td></tr>-->
      <!--</table>-->
    <!--</div>-->
  <!--</div>-->
  <div class="info-content">
    <div class="content-title">- 经营信息 -</div>
    <div class="content-box">
      <div class="info-title">运营数据</div>
      <div class="update-time">（截止2019-05-05）</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr><td>累计借贷金额</td><td>2,484,363,320.00元</td></tr>
        <tr><td>累计借贷笔数</td><td>4222笔</td></tr>
        <tr><td>借贷余额</td><td>188,167,000.00元</td></tr>
        <tr><td>借贷余额笔数</td><td>381笔</td></tr>
        <tr><td>利息余额</td><td>5,835,945.00元</td></tr>
        <tr><td>累计出借人数量</td><td>4020</td></tr>
        <tr><td>累计借款人数量</td><td>354</td></tr>
        <tr><td>当前出借人数量</td><td>1087</td></tr>
        <tr><td>当前借款人数量</td><td>212</td></tr>
        <tr><td>前十大借款人待还金额占比</td><td>5.31%</td></tr>
        <tr><td>最大单一借款人待还金额占比</td><td>0.53%</td></tr>
        <tr><td>关联关系借款余额</td><td>0.00元</td></tr>
        <tr><td>关联关系借款余额笔数</td><td>0笔</td></tr>
        <tr><td>逾期金额</td><td>9500000.00元</td></tr>
        <tr><td>逾期笔数</td><td>11笔</td></tr>
        <tr><td>逾期 90 天（不含）以上金额</td><td>7000000.00元</td></tr>
        <tr><td>逾期 90 天（不含）以上笔数</td><td>8笔</td></tr>
        <tr><td>累计代偿金额</td><td>2977303.33元</td></tr>
        <tr><td>累计代偿笔数</td><td>5笔</td></tr>
        <tr><td>收费标准</td><td style="padding:0;">
          <table class="table-inner">
            <tr><td>类型</td><td>收费名目</td><td>收费标准</td></tr>
            <tr><td rowspan="3">出借人收费</td><td>充值费用</td><td>0</td></tr>
            <tr><td style="background: #fff;">提现费用</td><td style="background: #fff;">0</td></tr>
            <tr><td>债权转让手续费</td><td>转让手续费=转让金额×0.3%</td></tr>
            <tr><td>借款人收费</td><td>居间服务费</td><td>按照年化1%~8%居间服务费率收取。居间服务费=融资金额*融资期限XX月/12*居间服务费率</td></tr>
          </table>
        </td></tr>
      </table>
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
      .info-title
        height 60px
        line-height 60px
        margin-top 20px
        font-size 18px
        color #000
        font-weight bold
      table
        border 1px solid #e8ebf3
        border-spacing 0
        td
          padding 14px 46px
          line-height 28px
          border-bottom 1px solid #e8ebf3
          border-right 1px solid #e8ebf3
        tr:nth-child(odd)
          background: #f6f8fc
          td:last-child
            border-right none
        tr:nth-child(even)
          background: #fff
          td:first-child
            width 240px
          td:last-child
            width 628px
            border-right none
        tr:last-child
          td
            border-bottom none
        tr a
          color #1661ba
        .table-inner
          tr
            border-left none
            border-top none
            td
              padding 10px !important
              border-bottom 1px solid #eee !important
      .update-time
        position absolute
        top 24px
        right 40px
        font-size 12px
        color #666
</style>
