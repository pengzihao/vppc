<!--我要充值-->
<template>
  <div class="account-list">
    <div class="title">我要充值</div>
    <div class="content">
      <div class="balance">
        <p><span>86668.88</span> 元</p>
        <p>可用余额</p>
      </div>
      <div class="means-title">
        <span>方法一：银行卡转账（<span class="c-red">实时到账</span>）</span>
        <span class="rec">推荐</span>
        <a href="javascript:void(0)">图文指引></a>
      </div>
      <div class="means-cont">
        <div class="cont-left">
          <p>户名：深圳五维微品金融信息服务有限公司<span class="copy-btn" @click="copyFun" data-clipboard-text="深圳五维微品金融信息服务有限公司">复制</span>
          </p>
          <p>平台监管账户：805880100033126   <span class="copy-btn" @click="copyFun" data-clipboard-text="805880100033126">复制</span></p>
          <p>开户银行：城市商业银行 - 广东华兴银行股份有限公司后海支行</p>
        </div>
        <div class="cont-right">
          <p>第一步</p>
          <p>本人银行卡转账到华兴银行存管账户账号 <span>?</span> </p>
          <p>第二步</p>
          <p>登录微品金融查看到账情况</p>
        </div>
      </div>

      <div class="means-title">
        <span>方法二：银行卡转账（<span class="c-red">T+1到账</span>）</span>
        <a href="javascript:void(0)">图文指引></a>
      </div>
      <div class="means-cont">
        <div class="cont-left">
          <input type="text" class="recharge" placeholder="请输入充值金额">
          <a href="javascript:void(0)" class="recharge-btn">充值</a>
        </div>
        <div class="cont-right">
          <p>第一步</p>
          <p>输入需要充值的金额，点击充值<span>?</span> </p>
          <p>第二步</p>
          <p>选择支付渠道进行充值</p>
        </div>
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
              clipboard.destroy()
            });
            clipboard.on('error', function() {
              _this.$message.error('复制失败');
              // 释放内存
              clipboard.destroy()
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
      .means-title
        padding 0 20px
        height 48px
        line-height 48px
        background-color #f5f5f5
        margin-top 40px
        color #333
        font-size 16px
        .rec
          font-size 12px
          border-radius 10px
          padding 2px 8px
          background-color #ffc919
          color #fff
        a
          float right
          font-size 14px
          color #1278ec
      .means-cont
        padding 40px 0 0
        height 154px
        .cont-left
          float left
          margin-left 80px
          p
            color #333
            font-size 16px
            margin-top 20px
            .copy-btn
              margin-left 20px
              color #1278ec
              cursor pointer
          .recharge
            width 340px
            height 36px
            background-color #ffffff
            border solid 1px #cccccc
            margin-top 20px
            padding-left 20px
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
            margin-top 21px
            float right
            margin-left 40px
        .cont-right
          float right
          width 400px
          height 154px
          background-color #f5f5f5
          p
            margin-top 5px
            color #666666
            font-size 14px
            margin-left 20px
          p:nth-child(1)
            margin-top 20px
          p:nth-child(2)
            span
              width 14px
              height 14px
              border-radius 10px
              font-size 12px
              border 1px solid $redBg
              display inline-block
              text-align center
              color $redBg
              line-height 15px
              margin-left 5px
          p:nth-child(3)
            margin-top 20px
</style>
