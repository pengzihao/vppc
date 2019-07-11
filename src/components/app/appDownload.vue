<!--app下载-->
<template>
  <div id="dowebok">
    <!--第一屏 start-->
    <div class="section section1">
      <div class="app_page app_page1">
        <div class="p_imgbg p1_phone"></div>
        <div class="p_imgbg p1_logo"></div>
        <div class="p_imgbg p1_title1"></div>
        <div class="p_imgbg p1_title2"></div>
        <div class="p_imgbg p1_des"></div>
        <img class="p1_cordimg" src="@/assets/activity/app/app_code.jpg" />
        <a class="p_imgbg p1_appdown" href="http://www.vpfinance.cn/app/android/vpjr.apk"></a>
        <a class="p_imgbg p1_appdownios" href="https://itunes.apple.com/cn/app/wei-pin-jin-rong/id1050918846"></a>
      </div>
    </div>
    <!--第一屏 end-->
    <!--第二屏 start-->
    <div class="section section2">
      <div class="app_page app_page2">
        <div class="p_imgbg p2_title"></div>
        <div class="p_imgbg p2_img"></div>
        <div class="p2_txt">注册即送2000元体验金、20元代金券和1张预约券,稳稳收益拿不停</div>
      </div>
    </div>
    <!--第二屏 end-->
    <!--第三屏 start-->
    <div class="section section3">
      <div class="app_page app_page3">
        <div class="p_imgbg p3_title"></div>
        <div class="p_imgbg p3_voucher2"></div>
        <div class="p_imgbg p3_voucher1"></div>
        <div class="p_imgbg p3_phone"></div>
        <div class="p_imgbg p3_redpaper"></div>
        <div class="p_imgbg p3_coin"></div>
        <div class="p3_txt">邀请好友注册，实名绑卡后即送50元代金券；更有每月邀请现金奖励，最高可获得好友出借总额的0.5%</div>
      </div>
    </div>
    <!--第三屏 end-->
    <!--第四屏 start-->
    <div class="section section4">
      <div class="app_page app_page4">
        <div class="p_imgbg p4_title"></div>
        <div class="p_imgbg p4_phone"></div>
        <div class="p_imgbg p4_circle1"></div>
        <div class="p_imgbg p4_circle2"></div>
        <div class="p4_txt">低门槛，100元起投，约定年利率7.2%起，多种产品满足不同需求
        </div>
      </div>
    </div>
    <!--第四屏 end-->
    <!--第五屏 start-->
    <div class="section section5">
      <div class="app_page app_page5">
        <div class="p_imgbg p5_title"></div>
        <div class="p_imgbg p5_circle"></div>
        <div class="p_imgbg p5_item1"></div>
        <div class="p_imgbg p5_item2"></div>
        <div class="p_imgbg p5_item3"></div>
        <div class="p5_txt">平台信息加密，资金银行存管，项目多重风控，产品更低风险</div>
      </div>
    </div>
    <!--第五屏 end-->
    <!--第六屏 start-->
    <div class="section section6">
      <div class="app_page app_page6">
        <div class="p_imgbg p6_cordimg"></div>
        <a class="p_imgbg p6_appdown" href="http://www.vpfinance.cn/app/android/vpjr.apk"></a>
        <a class="p_imgbg p6_appdownios" href="https://itunes.apple.com/cn/app/wei-pin-jin-rong/id1050918846"></a>
      </div>
    </div>
    <!--第六屏 end-->
  </div>
</template>

<script>

  import '@/common/js/jquery/jquery.fullPage.min.js'
  import '@/common/js/jquery/jquery.easing.min.js'

  export default {
    name: '',
    created(){
      this.$emit('public_footer', false);
    },
    mounted(){
      this.loadFun()
    },
    methods: {
      loadFun:function () {

        var winH=$(window).height();

        $(".app_page").height(winH);
        $(".app_page1").css("margin-top",(winH-700)/2+"px");

        $('.section1').find('.p1_phone').delay(100).animate({left:'130' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_logo').delay(200).animate({left:'600' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_title1').delay(300).animate({left:'600' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_title2').delay(400).animate({left:'600' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_des').delay(500).animate({left:'600' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_cordimg').delay(600).animate({top:'384' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_appdown').delay(700).animate({left:'860' , opacity: 1}, 1000, 'easeOutExpo');
        $('.section1').find('.p1_appdownios').delay(900).animate({left:'860' , opacity: 1}, 1000, 'easeOutExpo');

        //动画开始
        $('#dowebok').fullpage({
          sectionsColor: ['#1f2642', '#fff', '#f2f2f2', '#fff', '#f2f2f2', '#1f2642'],
          'navigation': true,
          //鼠标滚动加载样式
          afterLoad: function (anchorLink, index) {
            if (index == 1) {
              $(".header").slideDown(300);
              $('.section1').find('.p1_phone').delay(100).animate({left: '130', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_logo').delay(200).animate({left: '600', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_title1').delay(300).animate({left: '600', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_title2').delay(400).animate({left: '600', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_des').delay(500).animate({left: '600', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_cordimg').delay(600).animate({top: '384', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_appdown').delay(700).animate({left: '860', opacity: 1}, 1000, 'easeOutExpo');
              $('.section1').find('.p1_appdownios').delay(900).animate({left: '860', opacity: 1}, 1000, 'easeOutExpo');

            }
            if (index == 2) {
              $(".header").slideUp(300);
              $('.section2').find('.p2_title').delay(100).animate({left: '50%', opacity: 1}, 1000, 'easeOutExpo');
              $('.section2').find('.p2_img').delay(300).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section2').find('.p2_txt').delay(500).animate({opacity: 1}, 1000, 'easeOutExpo');
            }
            if (index == 3) {
              $(".header").slideUp(300);
              $('.section3').find('.p3_title').delay(100).animate({left: '600', opacity: 1}, 1000, 'easeOutExpo');
              $('.section3').find('.p3_phone').delay(200).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section3').find('.p3_voucher1').delay(1000).animate({left: '50', opacity: 1}, 1000, 'easeOutExpo');
              $('.section3').find('.p3_voucher2').delay(1400).animate({left: '0', opacity: 1}, 1000, 'easeOutExpo');
              $('.section3').find('.p3_coin').delay(500).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section3').find('.p3_redpaper').delay(600).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section3').find('.p3_txt').delay(800).animate({opacity: 1}, 1000, 'easeOutExpo');
            }
            if (index == 4) {
              $(".header").slideUp(300);
              $('.section4').find('.p4_title').delay(100).animate({left: '80', opacity: 1}, 1000, 'easeOutExpo');
              $('.section4').find('.p4_phone').delay(200).animate({right: '60', opacity: 1}, 1000, 'easeOutExpo');
              $('.section4').find('.p4_circle1').delay(300).animate({
                right: '0',
                right: '0',
                opacity: 1
              }, 2000, 'easeOutExpo');
              $('.section4').find('.p4_circle2').delay(500).animate({right: '250', opacity: 1}, 2000, 'easeOutExpo');
              $('.section4').find('.p4_txt').delay(600).animate({left: '100', opacity: 1}, 1000, 'easeOutExpo');
            }
            if (index == 5) {
              $(".header").slideUp(300);
              $('.section5').find('.p5_title').delay(100).animate({left: '50%', opacity: 1}, 1000, 'easeOutExpo');
              $('.section5').find('.p5_circle').addClass('rotate').delay(2000).css('opacity', 1);
              $('.section5').find('.p5_item1').delay(600).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section5').find('.p5_item2').delay(1200).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section5').find('.p5_item3').delay(2000).animate({opacity: 1}, 1000, 'easeOutExpo');
              $('.section5').find('.p5_txt').delay(2400).animate({opacity: 1}, 1800, 'easeOutExpo');
            }
            if (index == 6) {
              $(".header").slideUp(300);
              $('.section6').find('.p6_cordimg').delay(100).animate({top: '323', opacity: 1}, 1000, 'easeOutExpo');
              $('.section6').find('.p6_appdown').delay(500).animate({left: '50%', opacity: 1}, 1000, 'easeOutExpo');
              $('.section6').find('.p6_appdownios').delay(1000).animate({left: '50%', opacity: 1}, 1000, 'easeOutExpo');
            }
          }
        });
      }
    },
    beforeRouteLeave: function(to, from , next){
      //离开当前页面之前恢复html，body的css属性
      $("html").removeAttr('style');
      $("body").removeAttr('style');
      $('#fp-nav').remove();
      //显示底部
      $(".header").show();
      this.$emit('public_footer', true);
      next();
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus'>
  @import '../../common/css/activity/app/appdownloadv3.css';
  .header
    z-index 999
</style>



