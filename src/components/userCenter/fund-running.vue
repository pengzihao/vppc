<!--资金流水-->
<template>
  <div class="account-list">
    <div class="title">资金流水</div>
    <div class="content">
      <div class="tab">
        <ul>
          <li :class="{on: tabType == 1}" @click="showTabCont(1)">全部</li>
          <li :class="{on: tabType == 2}" @click="showTabCont(2)">充值记录</li>
          <li :class="{on: tabType == 3}" @click="showTabCont(3)">提现记录</li>
        </ul>
      </div>
      <div class="tab-cont">
        <div class="periodTime">
          <h4>起止时间：</h4>
          <ul>
            <li class="start-end-time">
              <el-date-picker v-model="date1" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" large></el-date-picker>
              -
              <el-date-picker v-model="date2" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
            </li>
            <li @click="pitchFun" >最近7天</li>
            <li @click="pitchFun" >1个月</li>
            <li @click="pitchFun" >2个月</li>
            <li @click="pitchFun" >3个月</li>
          </ul>
        </div>
        <div class="recordType">
          <h4>类型：</h4>
          <ul>
            <li class="active" @click="pitchFun">全部</li>
            <li @click="pitchFun">本金回款</li>
            <li @click="pitchFun">利息收入</li>
            <li @click="pitchFun">投标</li>
            <li @click="pitchFun">流标退回</li>
            <li @click="pitchFun">债权转让</li>
            <li @click="pitchFun">债权转让手续费</li>
          </ul>
        </div>
        <p class="record-tips"><span>i</span>温馨提示：由于银行返回数据存在延迟，资金流水在操作两小时后正常显示。</p>

        <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
          <thead>
            <tr>
              <td width="240">时间</td>
              <td>类型</td>
              <td>支出</td>
              <td>收入</td>
              <td>即时金额</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2018-09-06 11:31:50</td>
              <td>利息收入</td>
              <td>0.00元</td>
              <td>8.88元</td>
              <td>8888.88元</td>
            </tr>
            <tr>
              <td>2018-09-06 11:31:50</td>
              <td>利息收入</td>
              <td>0.00元</td>
              <td>8.88元</td>
              <td>8888.88元</td>
            </tr>
            <tr>
              <td>2018-09-06 11:31:50</td>
              <td>利息收入</td>
              <td>0.00元</td>
              <td>8.88元</td>
              <td>8888.88元</td>
            </tr>
            <tr>
              <td>2018-09-06 11:31:50</td>
              <td>利息收入</td>
              <td>0.00元</td>
              <td>8.88元</td>
              <td>8888.88元</td>
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
    </div>
  </div>
</template>

<script>
  import AccountPager from '@/components/common/account-pager'

  export default {
    name: '',
    data() {
      return {
        tabType: 1,
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
    methods: {
      showTabCont: function (type) {
        this.tabType = type
      },
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
    .title::after
      content ""
      width 3px
      height 16px
      position absolute
      top 1px
      left 0
      background $redBg
    .content
      padding 0 0 60px
      .tab
        width 1120px
        height 48px
        background-color #f5f5f5
        li
          float left
          width 140px
          height 46px
          line-height 46px
          text-align center
          font-size 16px
          color #666
          cursor pointer
        .on
          border-bottom 1px solid $redBg
          color #333
          .el-date-editor
            width 100px
      .tab-cont
        .periodTime
          margin-top 40px
          height 32px
          line-height 32px
          h4
            float left
            font-weight normal
          ul
            li
              float left
              margin-left 10px
              cursor pointer
              color #333
            li:not(:first-child)
              padding 0 18px
              height 30px
              border 1px solid #ccc
              font-size 14px
              border-radius 20px
              margin-left 20px
              line-height 30px
            .active
              color #fff
              background-color $redBg
              border 1px solid $redBg !important
        .recordType
          margin-top 30px
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
              margin-left 38px
            .active
              color #fff
              background-color $redBg
              border 1px solid $redBg !important
        .record-tips
          font-size 12px
          color #666
          margin 40px 0
          span
            width 14px
            height 14px
            border solid 1px $redFontColor
            display inline-block
            border-radius 8px
            margin-right 10px
            text-align center
            line-height 14px
            color $redFontColor
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
