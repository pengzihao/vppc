<!--首页-->
<template>
  <div>
    <!--banner部分-->
    <home-banner></home-banner>
    <!--产品展示-->
    <home-product></home-product>

    <!--<div class="cont vp-layout">-->
      <!--<a href="#/product">主体内容</a>-->
    <!--</div>-->
    <!--<div class="cont2 vp-layout">-->
      <!--<a href="#/product">主体内容2</a>-->
    <!--</div>-->
    <!--<div class="cont3 vp-layout">-->
      <!--<a href="#/product">主体内容3</a>-->
    <!--</div>-->
    <!--公告信息-->
    <home-notice></home-notice>
  </div>
</template>

<script>
  import Banner from '@/components/home/home-banner'
  import Product from '@/components/product/home-product'
  import Notice from '@/components/home/home-notice'

  export default {
    name: 'inspiration',
    data () {
      return {

      }
    },
    components:{
      'home-banner': Banner,
      'home-product': Product,
      'home-notice': Notice
    },
    //显示公用头部和底部
    created:function(){
      this.$emit('public_header', true);
      this.$emit('public_footer', true);
    },
    mounted: function(){
      //this.getDate();
    },
    methods:{
      getDate:function(){
        $.ajax({
          type:'post',
          url:'/api/single/scanCount',
          data:{
            id : 1
          },
          success:function(){

          }
        });
      }
    }
    //隐藏公用头部和底部
    // created:function () {
    //   this.$emit('public_header', false);
    //   this.$emit('public_footer', false);
    // }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"
  .cont
    min-height: 100px;
    border-bottom: 1px solid #ccc;
    text-align center
  .cont2
    min-height: 100px;
    border-bottom: 1px solid #ccc;
    text-align center
  .cont3
    min-height: 100px;
    text-align center
</style>
