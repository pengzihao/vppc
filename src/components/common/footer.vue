<!--底部-->
<template>
  <div class="footer">
    <div class="vp-layout clearfix">
      <div class="footer-us">
        <div class="logo-wb clearfix">
          <div class="logo">
            <img src="@/assets/common/logo.png">
          </div>
          <a class="wb-ico" href="javascript:void(0)" title="微品金融新浪微博"></a>
        </div>
        <div class="service-telephone">
          <p>客服热线（工作时间：周一至周五 9：00-18：00）</p>
          <p>0755-86627551</p>
        </div>
      </div>
      <div class="footer-code">
        <div class="qr-code">
          <img src="@/assets/common/weixin.png">
          <p>了解更多资讯，关注公众号</p>
        </div>
        <div class="qr-code">
          <img src="@/assets/common/anzhuo.jpg">
          <p>掌上出借，轻松赚钱</p>
        </div>
      </div>
      <div class="footer-nav">
         <ul>
           <li>
             <h3><i class="about-ico"></i>关于我们</h3>
             <a href="javascript:void(0)" title="公司简介">公司简介</a>
             <a href="javascript:void(0)" title="合作伙伴">合作伙伴</a>
             <a href="javascript:void(0)" title="加入我们">加入我们</a>
           </li>
           <li>
             <h3><i class="industry-ico"></i>行业关注</h3>
             <a href="javascript:void(0)" title="平台公告">平台公告</a>
             <a href="javascript:void(0)" title="还款公告">还款公告</a>
             <a href="javascript:void(0)" title="常见问题">常见问题</a>
             <a href="javascript:void(0)" title="风险教育">风险教育</a>
           </li>
           <li>
             <h3><i class="security-ico"></i>平台优势</h3>
             <a href="javascript:void(0)" title="平台优势">平台优势</a>
             <a href="javascript:void(0)" title="运营报告">运营报告</a>
           </li>
         </ul>
      </div>
    </div>
    <div class="security-copyright vp-layout">
      <div class="security">
        <a class="security-img1" href="https://szcert.ebs.org.cn/82cff7e3-e252-4b2d-a364-7ac0e0bc1d72" title="深圳市市场监督管理局企业主体身份公示" alt="深圳市市场监督管理局企业主体身份公示" target="_blank"></a>
        <a class="security-img2" href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" title="经营性网站备案信息" target="_blank"></a>
        <a class="security-img3" href="http://www.gdga.gov.cn" title="网络110报警服务" target="_blank"></a>
      </div>
      <p class="copyright">版权所有<a href="javascript:void(0)">©粤ICP备15024107号-1|</a>深圳五维微品金融信息服务有限公司</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: '',
    }
</script>
<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"
 .footer
   background-color #fff
   padding 50px 0 5px 0
   width 100%
   min-width 1200px
   .footer-us
     float left
     width 420px
     .logo
       float left
     .wb-ico
       float left
       width 34px
       height 34px
       margin-left 50px
       background url("~@/assets/elves/index-icon.png") -120px -254px no-repeat
     .service-telephone
       line-height 50px
       margin-top 30px
       p:last-child
         font-size 24px
   .footer-code
     float left
     width 300px
     .qr-code
       float left
       width 150px
       img
         width 120px
         height 120px
         margin 0 auto
         display block
       p
         font-size 12px
         text-align center
         margin-top 5px
   .footer-nav
     float right
     width 400px
     li
       float left
       margin 0 20px
       h3
         font-size 14px
         height 30px
         line-height 30px
         font-weight normal
         i
           height 30px
           width 30px
           display inline-block
           vertical-align middle
         .about-ico
           background url("~@/assets/elves/index-icon.png") -1px -254px no-repeat
         .industry-ico
           background url("~@/assets/elves/index-icon.png") -33px -254px no-repeat
         .security-ico
           background url("~@/assets/elves/index-icon.png") -70px -254px no-repeat
       a
         display block
         padding-left 30px
         height 30px
         line-height 30px
   .security-copyright
     margin 30px auto 0
     text-align center
     width 100%
     .security
       width 340px
       height 40px
       margin 0 auto
       a
         display inline-block
       .security-img1
         display inline-block
         width 92px
         height 38px
         background url("~@/assets/common/tradeMark_icon.png") no-repeat
       .security-img2
         width 91px
         height 37px
         background url("~@/assets/common/keepOnrecord_icon.jpg") no-repeat
         background-size 100%
         margin 0 15px
       .security-img3
         width 91px
         height 37px
         background url("~@/assets/common/netPolice_icon.jpg") no-repeat
         background-size 100%
     .copyright
       height 50px
       line-height 50px
       color #999
</style>
