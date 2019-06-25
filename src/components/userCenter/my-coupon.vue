<!--我的优惠券-->
<template>
  <div class="account-list">
    <div class="title">我的优惠券</div>
    <div class="content clearfix">
      <div class="coupon-list">
        <div class="coupon-title">代金券</div>
        <div class="coupon-money">
          <p>未使用 <span>88.88</span> 元</p>
          <p>已使用 <span>88.88</span> 元</p>
          <p>已过期 <span>88.88</span> 元</p>
        </div>
      </div>
      <div class="coupon-list">
        <div class="coupon-title">满减券</div>
        <div class="coupon-money">
          <p>未使用 <span>88.88</span> 元</p>
          <p>已使用 <span>88.88</span> 元</p>
          <p>已过期 <span>88.88</span> 元</p>
        </div>
      </div>
      <div class="coupon-list">
        <div class="coupon-title">预约券</div>
        <div class="coupon-money">
          <p>未使用 <span>88.88</span> 张</p>
          <p>已使用 <span>88.88</span> 张</p>
          <p>已过期 <span>88.88</span> 张</p>
        </div>
      </div>
    </div>
    <div class="convert">
      <input type="text" class="convert-input" placeholder="请输入兑换码">
      <a href="javascript:;" class="convert-btn">兑换</a>
    </div>
    <div class="tabBox">
      <div class="tab-item" @click="showTabCont(1)" :class="{on: tabType == 1}">代金券</div>
      <div class="tab-item" @click="showTabCont(2)" :class="{on: tabType == 2}">满减券</div>
      <div class="tab-item" @click="showTabCont(3)" :class="{on: tabType == 3}">预约券</div>
    </div>
    <div class="recordType">
      <h4>使用状态：</h4>
      <ul>
        <li class="active" @click="pitchFun">可使用</li>
        <li @click="pitchFun">已使用</li>
        <li @click="pitchFun">已过期</li>
      </ul>
    </div>
    <div v-if="tabType == 1">
      <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
        <thead>
        <tr>
          <td>面值</td>
          <td>发放日期</td>
          <td>过期时间</td>
          <td>使用规则</td>
          <td>状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>88 元</td>
          <td>2018-09-06</td>
          <td>2018-09-06</td>
          <td>12个月</td>
          <td>可使用</td>
        </tr>
        <tr>
          <td>88 元</td>
          <td>2018-09-06</td>
          <td>2018-09-06</td>
          <td>12个月</td>
          <td>可使用</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="tabType == 2">
      <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
        <thead>
        <tr>
          <td>面值</td>
          <td>发放日期</td>
          <td>过期时间</td>
          <td>使用规则</td>
          <td>状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>88 元</td>
          <td>2018-09-06</td>
          <td>2018-09-06</td>
          <td>12个月</td>
          <td>可使用</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="tabType == 3">
      <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
        <thead>
        <tr>
          <td>面值</td>
          <td>发放日期</td>
          <td>过期时间</td>
          <td>使用规则</td>
          <td>状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>88 元</td>
          <td>2018-09-06</td>
          <td>2018-09-06</td>
          <td>12个月</td>
          <td>可使用</td>
        </tr>
        <tr>
          <td>88 元</td>
          <td>2018-09-06</td>
          <td>2018-09-06</td>
          <td>12个月</td>
          <td>可使用</td>
        </tr>
        <tr>
          <td>88 元</td>
          <td>2018-09-06</td>
          <td>2018-09-06</td>
          <td>12个月</td>
          <td>可使用</td>
        </tr>
        </tbody>
      </table>
    </div>
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
        dataUrl:'',
        tabType: 1
      }
    },
    components: {
      'account-pager': AccountPager
    },
    methods:{
      showTabCont:function (type) {
        this.tabType = type;
      },
      pitchFun:function (e) {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass('active');
      },
      pagechange:function(page,data){
        console.log(page)
        console.log(data)
      },
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
      padding 40px 0
      .coupon-list
        width 318px
        height 166px
        border 1px solid $redFontColor
        float left
        .coupon-title
          width 100px
          height 106px
          border-right 1px solid $redFontColor
          text-align center
          margin-top 30px
          line-height 100px
          font-size 14px
          color $redFontColor
          float left
        .coupon-money
          float left
          margin-top 30px
          margin-left 24px
          padding-left 12px
          p
            color #333333
            font-size 14px
            position relative
            span
              color $redFontColor
          p::after
            content ''
            position absolute
            left -15px
            top 7px
            background-color $redFontColor
            width 6px
            height 6px
            border-radius 50%
          p:not(:first-child)
            margin-top 24px
      .coupon-list:not(:first-child)
        margin-left 80px
    .convert
      margin-bottom 40px
      .convert-input
        width 340px
        height 36px
        background-color #ffffff
        border solid 1px #cccccc
        margin-top -2px
        padding-left 20px
      .convert-btn
        width 134px
        height 38px
        background-color $redFontColor
        border-radius 2px
        display inline-block
        line-height 38px
        text-align center
        font-size 14px
        color #fff
        margin-left 40px
    .tabBox
      height 48px
      margin-top 40px
      background-color #f5f5f5
      .tab-item
        float left
        width 140px
        text-align center
        height 47px
        line-height 47px
        color #666666
        font-size 16px
        cursor pointer
      .on
        color #333
        border-bottom 1px solid $redBg
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
    .record-table
      margin 40px 0
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
