<!--邀请有礼-->
<template>
  <div class="account-list">
    <div class="title">邀请有礼</div>
    <div class="content clearfix">
      <div class="content-right">
        <div class="right-list">
          <p><span>88</span>人<span></span></p>
          <p><span>累计邀请好友</span></p>
        </div>
        <div class="right-list">
          <p><span>88.88</span><span>元</span></p>
          <p><span>累计代金券金额</span></p>
        </div>
        <div class="right-list">
          <p><span>88.88</span><span>元</span></p>
          <p><span>累计邀请奖励</span></p>
        </div>
      </div>
    </div>
    <div class="copyBox">
      <div class="copy-title">复制并发送邀请内容给好友</div>
      <div class="copy-cont">
        <p>我在用微品金融，安全可靠，收益可达9%以上，100元即可起投。加入还可获赠20元代金券赶快行动吧！<span class="copy-btn" @click="copyFun" data-clipboard-text="https://www.vpfinance.cn">复制连接</span></p>
        <p>https://www.vpfinance.cn</p>
      </div>
    </div>
    <div class="tabBox">
      <div class="tab-item" @click="showTabCont(1)" :class="{on: tabType == 1}">邀请好友记录</div>
      <div class="tab-item" @click="showTabCont(2)" :class="{on: tabType == 2}">邀请出借奖励</div>
    </div>
    <div v-if="tabType == 1">
      <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
        <thead>
        <tr>
          <td>邀请好友</td>
          <td>邀请时间</td>
          <td>代金券奖励</td>
          <td>获益周期</td>
          <td>获益状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>188****1</td>
          <td>2018-09-06 00:00:00</td>
          <td>未实名或绑卡</td>
          <td>12个月</td>
          <td>有效</td>
        </tr>
        <tr>
          <td>188****1</td>
          <td>2018-09-06 00:00:00</td>
          <td>未实名或绑卡</td>
          <td>12个月</td>
          <td>有效</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="tabType == 2">
      <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
        <thead>
        <tr>
          <td>邀请好友</td>
          <td>邀请时间</td>
          <td>代金券奖励</td>
          <td>获益周期</td>
          <td>获益状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>188****1</td>
          <td>2018-09-06 00:00:00</td>
          <td>未实名或绑卡</td>
          <td>12个月</td>
          <td>有效</td>
        </tr>
        <!--<tr>-->
          <!--<td>188****1</td>-->
          <!--<td>2018-09-06 00:00:00</td>-->
          <!--<td>未实名或绑卡</td>-->
          <!--<td>12个月</td>-->
          <!--<td>有效</td>-->
        <!--</tr>-->
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
  import Clipboard from 'clipboard';
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
      copyFun:function () {
        var _this = this;
        var clipboard = new Clipboard('.copy-btn');
        clipboard.on('success', function() {
          _this.$message({
            message: '已复制到剪切板',
            type: 'success'
          });
          // 释放内存
          clipboard.destroy()
        });
        clipboard.on('error', function() {
          _this.$message.error('复制失败');
          // 释放内存
          clipboard.destroy()
        });
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
      padding 30px 0
      border-bottom 1px solid #eeeeee
      .content-right
        float right
        width 1120px
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
    .copyBox
      margin-top 40px
      .copy-title
        font-size 14px
        color $redFontColor
      .copy-cont
        overflow hidden
        margin-top 20px
        height 82px
        width 100%
        background-color #f5f5f5
        border-radius 4px
        p
          margin-left 20px
          color #333333
          margin-top 18px
          .copy-btn
            float right
            font-size 14px
            color #1278ec
            cursor pointer
            margin-right 40px
        p:last-child
          margin-top 8px
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
