<!--banner-->
<template>
  <div class="banner">
    <div class="swiper-container swiper-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="../../assets/banner/banner1.png" alt=""></a></div>
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="../../assets/banner/banner2.png" alt=""></a></div>
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="../../assets/banner/banner3.png" alt=""></a></div>
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="../../assets/banner/banner4.png" alt=""></a></div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
      <!--提示登录-->

    </div>
    <!--小微头条-->
    <div class="banner-topLine vp-layout">
      <div class="topLine-img"></div>
      <div class="swiper-container swiper-topLine">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><a href="javascript:void(0)" title="111111111111">111111111111</a></div>
          <div class="swiper-slide"><a href="javascript:void(0)" title="222222222222">222222222222</a></div>
          <div class="swiper-slide"><a href="javascript:void(0)" title="333333333333">333333333333</a></div>
          <div class="swiper-slide"><a href="javascript:void(0)" title="444444444444">444444444444</a></div>
          <div class="swiper-slide"><a href="javascript:void(0)" title="555555555555">555555555555</a></div>
          <div class="swiper-slide"><a href="javascript:void(0)" title="666666666666">666666666666</a></div>
        </div>
      </div>
      <div class="more-topLine">
        <a href="">更多 >></a>
      </div>
    </div>
    <!--优势-->
    <div class="banner-advantage">
      <div class="vp-layout">
        <div class="advantage-item">
          <div class="advantage-icon"></div>
          <div class="advantage-text">
            <h3>银行存管</h3>
            <p>资金流转银行全监控</p>
            <p>投资再上一把防护锁</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon"></div>
          <div class="advantage-text">
            <h3>透明信披</h3>
            <p>项目资料全方位披露</p>
            <p>平台数据真实可查阅</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon"></div>
          <div class="advantage-text">
            <h3>严格风控</h3>
            <p>独立严格的风控体系</p>
            <p>多方位控制项目风险</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon"></div>
          <div class="advantage-text">
            <h3>分散投资</h3>
            <p>丰富多样的产品分类</p>
            <p>满足不同的投资需求</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import '../../commom/js/swiper/swiper.3.1.2.min';

  export default {
    name: '',
    data () {
      return {
      }
    },
    mounted(){
      this.$nextTick(function () {
        new Swiper ('.swiper-banner', {
          loop:true, //形成环路
          pagination: '.swiper-pagination', //分页器
          paginationClickable:true,  // 开启分页器的点击事件
          autoplay: 5000,
          observer:true,  //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,
          effect : 'fade'//可选选项，渐变动画
        });

        new Swiper ('.swiper-topLine', {
          direction: 'vertical',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
          loop:true, //形成环路
          simulateTouch: false, //阻止拖动和点击
          autoplay: 3000,
          observer:true,  //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,
        });
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus'>
  @import '../../commom/js/swiper/swiper.3.1.2.min.css';
  .banner
    width 100%
    background-color #fff
    .swiper-banner
      width: 100%;
      height: 360px;
      .swiper-pagination
        margin-left -20px
        position absolute
        bottom 8px
        .swiper-pagination-clickable
        .swiper-pagination-bullet
          width 10px
          height 10px
          margin 0 10px
        .swiper-pagination-bullet-active
          background #000
    .banner-topLine
      height 50px
    .topLine-img
      float left
      width 110px
      height 20px
      margin 15px
      background url("../../assets/elves/index-icon.png") -247px -29px no-repeat
    .swiper-topLine
      float left
      width 695px
      height 30px
      line-height 30px
      margin-top 10px
      font-size 14px
    .more-topLine
      float left
      margin-top 16px
      a
        color #999
    .banner-advantage
      border-top 1px solid #eee
      height 116px
      .advantage-item
        width 300px
        margin-top 20px
        float left
        .advantage-icon
          width 76px
          height 76px
          float left
        .advantage-text
          float left
          margin-left 30px
          h3
            font-size 20px
            margin-top -2px
            margin-bottom 13px
            color #000
            font-weight 700
          p
            margin-top 3px
            font-size 14px
            color #999
      .advantage-item:nth-child(1)
        background url("../../assets/banner/advantage1.png") no-repeat
      .advantage-item:nth-child(2)
        background url("../../assets/banner/advantage2.png") no-repeat
      .advantage-item:nth-child(3)
        background url("../../assets/banner/advantage3.png") no-repeat
      .advantage-item:nth-child(4)
        background url("../../assets/banner/advantage4.png") no-repeat
</style>
