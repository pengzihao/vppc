<!--新手体验金-->
<template>
  <div class="account-list">
    <div class="title">新手体验金</div>
    <div class="content clearfix">
      <div class="content-left">
        <p><span>88</span><span>元</span></p>
        <p><span>每万元收益</span></p>
      </div>
      <div class="content-right">
        <div class="right-list">
          <p><span>88</span><span>%</span></p>
          <p><span>年利率</span></p>
        </div>
        <div class="right-list">
          <p><span>88</span><span>天</span></p>
          <p><span>期限</span></p>
        </div>
      </div>
    </div>
    <div class="content clearfix">
      <div class="content-left">
        <p><span>8888</span><span>元</span></p>
        <p>体验金额</p>
      </div>
      <div class="content-right">
        <div class="right-list">
          <p><span>88</span><span>%</span></p>
          <p><span>约定年利率</span></p>
        </div>
        <div class="right-list">
          <div class="income">收益已领取</div>
        </div>
      </div>
    </div>
    <div class="title">加入记录</div>
    <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
      <thead>
      <tr>
        <td>出借人</td>
        <td>出借金额</td>
        <td>出借时间</td>
        <td>收益</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>188****1</td>
        <td>0.00元</td>
        <td>2018-09-06 00:00:00</td>
        <td>7000.00</td>
      </tr>
      <tr>
        <td>188****1</td>
        <td>0.00元</td>
        <td>2018-09-06 00:00:00</td>
        <td>7000.00</td>
      </tr>
      </tbody>
    </table>
    <div class="page-bar">
      <div class="down-box">
        <a href="javascript:void(0)"><i class="down-icon"></i>下载查询结果</a>
      </div>
      <div>
        <account-pager :pageSize="pageSize" :currentPage="currentPage" :dataUrl="dataUrl" @pagechange="pagechange"></account-pager>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountPager from '@/components/common/account-pager'

  export default {
    name: '',
    data(){
      return {
        pageSize: 10,
        currentPage: 1,
        // dataUrl:'http://new.vpfinance.cn:8888/admin/loanSign/unpublishedLoanSigns',
        dataUrl:''
      }
    },
    components: {
      'account-pager': AccountPager
    },
    methods:{
      pagechange:function(page,data){
        console.log(page)
        console.log(data)
      }
    }
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
      height 16px
      position absolute
      top 1px
      left 0
      background $redBg
    .content
      padding 30px 0
      border-bottom 1px solid #eeeeee
      .content-left
        float left
        height 68px
        width 370px
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
        width 650px
        .right-list
          float left
          width 50%
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
          .income
            text-align center
            height 68px
            line-height 68px
            font-size 14px
            color $redFontColor
    .record-table
      margin-top 40px
      thead
        tr
          height 60px
          text-align center
          background #f5f5f5
          font-size 14px
          color #666
      tbody
        tr
          height 60px
          text-align center
          font-size 14px
          color #333
        tr:nth-child(2n+2)
          background #f5f5f5
      tbody
        tr:hover
          background #f8f8f8
    .page-bar
      height 36px
      margin-top 80px
      padding-bottom 60px
      .down-box
        float left
        height 36px
        line-height 36px
        .down-icon
          width 19px
          height 19px
          display inline-block
          background url("~@/assets/userCenter/download.png") no-repeat
          float left
          margin-top 8px
          margin-right 10px
</style>
