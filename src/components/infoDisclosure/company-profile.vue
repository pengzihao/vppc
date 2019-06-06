<!--公司简介-->
<template>
  <div class="info-content">
    <div class="company-img"></div>
    <div class="content-box">
      <div class="info-title">公司简介</div>
      <div class="company-introduction">
        <p class="description">深圳五维微品金融信息服务有限公司（简称“微品金融”）成立于 2015年3月12日，并于2015年6月上线运营，是一家以中小企业借款为主的网络借贷信息中介服务平台，致力于为有资金需求的借款人和闲散资金的出借人搭建诚信、规范、专业、透明的互联网金融平台，为双方提供安全、便捷的借贷撮合信息中介服务。</p>
        <p class="description">微品金融拥有一支精通金融风险管理、互联网技术和政策法规的专业团队，本着“专业、高效、务实”的宗旨，不断提高服务质量，赢得了良好的用户口碑，截止2018年6月，微品金融累计成交额达到21亿元，为用户赚取超9000万元收益，成为借款人和出借人值得信赖的互联网金融平台。</p>
        <p class="description">2017年，微品金融完成了银行存管系统上线、电子合同上线、网络安全设施部署等合规项目，标志着微品金融在安全和合规化建设的道路上稳健前行，并且走在行业前沿。</p>
      </div>
      <div class="info-title">我们的使命与愿景</div>
      <div class="company-desire">
        <h4 class="title">使命</h4>
        <p class="description">促进经济发展，助力产业升级，使所有人分享社会经济的发展成果</p>
        <h4 class="title">愿景</h4>
        <p class="description">成为借款人和出借人最值得信赖的互联网金融信息服务平台</p>
      </div>
      <div class="info-title">我们的优势</div>
      <ul class="company-advantage">
        <li class="advantage-item"><i></i><span>高效流程</span></li>
        <li class="advantage-item"><i></i><span>多重保护</span></li>
        <li class="advantage-item"><i></i><span>优质服务</span></li>
        <li class="advantage-item"><i></i><span>透明信息</span></li>
        <li class="advantage-item"><i></i><span>全面风控</span></li>
      </ul>
      <div class="info-title">我们的产品</div>
      <ul class="product-list">
        <li class="product-item"><i></i><span>定期出借</span><span>项目优质 风控严格</span></li>
        <li class="product-item"><i></i><span>转让专区</span><span>周转灵活 方便快捷</span></li>
        <li class="product-item"><i></i><span>个人借贷</span><span>严格审查 分散出借</span></li>
      </ul>
      <div class="info-title">我们的成长</div>
      <div class="img-box">
        <img src='@/assets/infoDisclosure/disclosure-grow-illustration.png' width=776 height=655>
      </div>
      <div class="info-title">联系我们</div>
      <ul class="contact-list">
        <li class="contact-item"><i></i>0755-86627551</li>
        <li class="contact-item"><i></i>www.vpfinance.cn</li>
        <li class="contact-item"><i></i>services@vpfinance.cn</li>
        <li class="contact-item"><i></i>深圳市南山区科技园高新南一道赋安科技大厦B座305</li>
      </ul>
      <div class="contact-way">
        <a class="way wx-way" @mouseover="showWx" @mouseout="hideWx"><div class="wx-hover"></div></a>
        <a class="way" href="http://wpa.qq.com/msgrd?v=3&uin=2793496130&site=qq&menu=yes" target="_blank" alt="客服QQ：2793496130" title="客服QQ：2793496130"></a>
        <a class="way" href="http://weibo.com/5597660135/manage" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {}
    },
    methods:{
      showWx: function () {
        $('.wx-hover').show();
      },
      hideWx: function () {
        $('.wx-hover').hide();
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .info-content
    width 100%
    min-height 800px
    .company-img
      width 950px
      height 351px
      background url("~@/assets/infoDisclosure/disclosure-company-illustration.png") no-repeat center
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
      .description
        margin-top 30px
        font-size 14px
        line-height 28px
        color #333
      .company-desire
        .title
          margin-top 26px
          line-height 40px
          font-size 16px
          color #666
        .description
          margin-top 10px
      .company-advantage
        margin-top 30px
        .advantage-item
          display inline-block
          width 100px
          height 150px
        .advantage-item:not(:first-child)
          margin-left:80px
        .advantage-item
          i
            display inline-block
            width 100px
            height 100px
          span
            display inline-block
            width 100%
            margin-top 30px
            height 20px
            line-height 20px
            font-size 18px
            color #666
            text-align center
        .advantage-item:nth-child(1)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") 0 -3px no-repeat
        .advantage-item:nth-child(2)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -112px -3px no-repeat
        .advantage-item:nth-child(3)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -224px -3px no-repeat
        .advantage-item:nth-child(4)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -336px -3px no-repeat
        .advantage-item:nth-child(5)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -448px -3px no-repeat
      .product-list
        margin-top 30px
        .product-item
          width 130px
          height 180px
          display inline-block
          margin-right 50px
        .product-item
          i
            display inline-block
            width 100px
            height 100px
            margin 0 15px
          span
            display block
            text-align center
          span:nth-child(2)
            margin-top 20px
            font-size 18px
            color #333
            font-weight bold
            line-height 20px
          span:nth-child(3)
            margin-top 10px
            font-size 14px
            color #666
            line-height 20px
        .product-item:nth-child(1)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") 0 -128px no-repeat
        .product-item:nth-child(2)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -129px -128px no-repeat
        .product-item:nth-child(3)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -250px -128px no-repeat
      .img-box
        width 100%
        text-align left
        margin-top 30px
      .contact-list
        .contact-item
          display inline-block
          height 60px
          line-height 60px
          margin-right 60px
          font-size 14px
          color #333
          i
            display inline-block
            width 28px
            height 28px
            margin-right 20px
            margin-top 16px
            vertical-align top
        .contact-item:nth-child(1)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -4px -303px no-repeat
        .contact-item:nth-child(2)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -59px -303px no-repeat
        .contact-item:nth-child(3)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -112px -303px no-repeat
        .contact-item:nth-child(4)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -166px -303px no-repeat
      .contact-way
        height 50px
        margin-top 20px
        padding-bottom 100px
       .way
         position relative
         display inline-block
         width 50px
         height 50px
         margin-right 40px
         cursor pointer
         .wx-hover
           display none
           position absolute
           left -40px
           bottom -150px
           width 150px
           height 150px
           background url("~@/assets/infoDisclosure/wechat-code.png") no-repeat
           background-size 100% auto
      .way:nth-child(1)
         background url("~@/assets/infoDisclosure/disclosure-icon.png") 1px -349px no-repeat
       .way:nth-child(2)
         background url("~@/assets/infoDisclosure/disclosure-icon.png") -87px -349px no-repeat
       .way:nth-child(3)
         background url("~@/assets/infoDisclosure/disclosure-icon.png") -175px -349px no-repeat


</style>
