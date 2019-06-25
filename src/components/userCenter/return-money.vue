<!--回款查询-->
<template>
  <div class="account-list">
    <div class="title">回款查询</div>
    <div class="content clearfix">
      <div class="content-left">
        <p><span>88888.88</span><span>元</span></p>
        <p>待回款金额</p>
      </div>
      <div class="content-right">
        <div class="right-list">
          <p><span>88</span><span>笔</span></p>
          <p><span>待回款笔数</span></p>
        </div>
      </div>
    </div>

    <div class="recordType">
      <h4>回款状态：</h4>
      <ul>
        <li class="active" @click="pitchFun">待回款</li>
        <li @click="pitchFun">已回款</li>
      </ul>
    </div>
    <div class="periodTime">
      <h4>起止时间：</h4>
      <ul>
        <li class="start-end-time">
          <el-date-picker v-model="date1" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" large></el-date-picker>
          -
          <el-date-picker v-model="date2" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
        </li>
      </ul>
    </div>
    <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
      <thead>
        <tr>
          <td width="240">借款标的</td>
          <td>回款日期</td>
          <td>回款金额</td>
          <td>本金+利息</td>
          <td>查询期数/总期数</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>企业贷00000001</td>
          <td>2018-09-06</td>
          <td>0.00元</td>
          <td>7000.00 + 52.50元</td>
          <td>4/6</td>
        </tr>
        <tr>
          <td>企业贷00000001</td>
          <td>2018-09-06</td>
          <td>0.00元</td>
          <td>7000.00 + 52.50元</td>
          <td>4/6</td>
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
        date1: '',
        date2: '',
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
      pitchFun:function (e) {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass('active');
      },
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
        width 560px
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
        width 558px
        .right-list
          float left
          width 100%
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
    .recordType
      margin-top 40px
      height 32px
      h4
        float left
        font-weight normal
        margin-top 5px
      ul
        li
          float left
          padding 0 18px
          height 30px
          line-height 30px
          border 1px solid #ccc
          font-size 14px
          color #333
          border-radius 20px
          margin-left 20px
          cursor pointer
        li:first-child
          margin-left 10px
        .active
          color #fff
          background-color $redBg
          border 1px solid $redBg
    .periodTime
      margin-top 30px
      height 32px
      line-height 32px
      padding-bottom 40px
      h4
        float left
        font-weight normal
      ul
        li
          float left
          margin-left 10px
          cursor pointer
    .record-table
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

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus'>
  /*修改element日期组件默认样式*/
  .el-date-editor
    width 135px !important
    .el-input__inner
      width 132px
      height 32px
      background-color #f5f5f5
      border-radius 16px
      padding-right 10px
    .el-input__prefix
      top -4px
</style>
