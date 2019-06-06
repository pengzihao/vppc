<!--客服中心-->
<template>
  <div class="customer">
    <div class="customer-banner">
      <div class="banner-text">
        <p>欢迎来到微品金融客服中心</p>
        <p>让客户满意是我们的最终标准&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客服热线：0755-86627551</p>
      </div>
    </div>
    <div class="serviceCenter vp-layout">
      <div class="title">客服中心</div>
      <div class="service-content">
        <ul class="contact-list">
          <li>
            <div class="contact-list1"></div>
            <p>服务热线</p><p>0755-86627551</p>
          </li>
          <li>
            <div class="contact-list2"></div>
            <p>客服QQ</p><p>2633220589</p>
          </li>
          <li>
            <div class="contact-list3"></div>
            <p>官方交流QQ群</p><p>425112647</p>
          </li>
          <li>
            <div class="contact-list4"></div>
            <p>微信客服1</p><p>小微：vp_xiaowei</p>
          </li>
          <li>
            <div class="contact-list4"></div>
            <p>微信客服2</p><p>小金：vpjrkf</p>
          </li>
          <li>
            <div class="contact-list5"></div>
            <p>Email</p><p>services@vpfinance.cn</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="question-list vp-layout">
      <div class="title">
        <div>热点疑问</div>
        <a href="javascript:void(0)" class="more">更多 ></a>
      </div>
      <div class="question-content">
        <ul>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">代金券</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">如何注册平台账户？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">微品金融账户能否注销？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">一个手机号能注册多少个账户？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">登录平台的方法？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">什么样的债权可以转让？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">债权转让收费标准？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">什么是实名验证？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">手机号码收不到验证码怎么处理？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">好友出借奖励规则？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">如何找回登录密码？</a>
          </li>
          <li>
            <i class="question_ico"></i>
            <a href="javascript:void(0)">什么是债权转让？</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~@/common/css/common.styl"
  .customer
    border-bottom 1px solid #ccc
  .customer-banner
    width 100%
    height 240px
    background url("~@/assets/helpCenter/inside_advertisement_07.jpg") no-repeat center
    .banner-text
      width 1200px
      margin 0 auto
      overflow hidden
      p:first-child
        font-size 40px
        color #fff
        margin-top 73px
      p:last-child
        font-size 14px
        margin-top 6px
        color #fff
  .serviceCenter
    margin-top 42px
    background-color #fff
    width 100%
    .title
      width 100%
      height 60px
      line-height 60px
      text-align center
      color #333
      font-size 24px
      border-bottom 2px solid #e5e5e5
    .service-content
      width 100%
      overflow hidden
      .contact-list
        margin 50px 60px
        overflow hidden
        li
          width 180px
          height 160px
          float left
          div
            width 180px
            height 100px
          .contact-list1
            background url("~@/assets/helpCenter/contact-way.png")center -200px no-repeat
            background-size 100px
          .contact-list2
            background url("~@/assets/helpCenter/contact-way.png")center -300px no-repeat
            background-size 100px
          .contact-list3
            background url("~@/assets/helpCenter/contact-way.png")center -400px no-repeat
            background-size 100px
          .contact-list4
            background url("~@/assets/helpCenter/contact-way.png")center -100px no-repeat
            background-size 100px
          .contact-list5
            background url("~@/assets/helpCenter/contact-way.png")center 0 no-repeat
            background-size 100px
          p
            width 180px
            height 30px
            line-height 30px
            text-align center
            color #666
  .question-list
    margin-top 42px
    background-color: #fff
    margin-bottom 50px
    .title
      width 100%
      height 60px
      line-height 60px
      text-align center
      color #333
      font-size 24px
      border-bottom 2px solid #e5e5e5
      position relative
      .more
        position absolute
        right 26px
        top 0
        width 60px
        height 60px
        font-size 14px
        display inline-block
    .question-content
      width 88%
      height 200px
      padding 30px 6%
      li
        width 33.3%
        height 50px
        line-height 50px
        float left
        display inline
        text-indent 20px
        position relative
        overflow hidden
        .question_ico
          width 6px
          height 6px
          background #9b9b9b
          display block
          position absolute
          top 22px
          left 0
          border-radius 50%
        a
          font-size 14px
          color #535353
</style>
