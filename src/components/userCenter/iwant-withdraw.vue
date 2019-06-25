<!--我要提现-->
<template>
  <div class="account-list">
    <div class="title">我要提现</div>
    <div class="content">
      <div class="balance">
        <p><span>86668.88</span> 元</p>
        <p>可用余额</p>
      </div>
      <div class="withdrawal clearfix">
        <input type="text" class="recharge" placeholder="请输入提现金额">
        <a href="javascript:void(0)" class="recharge-btn">提现</a>
      </div>
      <div class="tips">
        <h4>【温馨提示】</h4>
        <p>1. 可提现到已绑定银行卡内 <a href="javascript:void(0)">查看提现图文指引></a></p>
        <p>2. 提现需先进行实名认证 <a href="javascript:void(0)">查看实名认证图文指引></a></p>
        <p>3. 如资金被冻结，在25-30分钟之间即可解冻，届时可再次提现</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard';

  export default {
    name: '',
    methods:{
      copyFun:function () {
        var _this = this;
        var clipboard = new Clipboard('.copy-btn');
        clipboard.on('success', function() {
          _this.$message({
            message: '已复制到剪切板',
            type: 'success'
          });
          // 释放内存
          clipboard.destroy();
        });
        clipboard.on('error', function() {
          _this.$message.error('复制失败');
          // 释放内存
          clipboard.destroy();
        });
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
      padding 30px 0 40px
      .balance
        margin-left 20px
        p
          font-size 14px
          color #999999
          margin-top 10px
          span
            font-size 18px
            color #000
      .withdrawal
        margin-top 38px
        border-top 1px solid #eeeeee
        .recharge
          width 340px
          height 36px
          background-color #ffffff
          border solid 1px #cccccc
          margin-top 40px
          margin-left 20px
          padding-left 20px
          float left
        .recharge-btn
          width 134px
          height 36px
          background-color #e02128
          border-radius 2px
          display inline-block
          line-height 36px
          text-align center
          font-size 14px
          color #ffffff
          margin-top 41px
          float left
          margin-left 40px
      .tips
        margin-top 60px
        margin-left 16px
        p
          font-size 14px
          color #666
          margin-top 10px
          margin-left 4px
          a
            margin-left 10px
            color #1278ec

</style>
