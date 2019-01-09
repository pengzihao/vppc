<!--主页-->
<template>
  <div>
    <!--banner部分-->
    <vp-banner></vp-banner>
    <!--产品展示图-->
    <div class="home-product">
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </div>
    <div class="cont">
      <a href="#/home/product">主体内容</a>
    </div>
    <div class="cont2">
      <a href="#/home/product">主体内容2</a>
    </div>
    <div class="cont3">
      <a href="#/home/product">主体内容3</a>
    </div>
  </div>
</template>

<script>
  import Banner from './banner'

  export default {
    name: 'inspiration',
    data () {
      return {

      }
    },
    components:{
      'vp-banner': Banner
    },
    //显示公用头部和底部
    created:function () {
      this.$emit('public_header', true);
      this.$emit('public_footer', true);
    },
    mounted: function () {
      console.log(1);
    }
    //隐藏公用头部和底部
    // created:function () {
    //   this.$emit('public_header', false);
    //   this.$emit('public_footer', false);
    // }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>

  .cont
    min-height: 100px;
    border-bottom: 1px solid #ccc;
    text-align center
  .cont2
    min-height: 200px;
    border-bottom: 1px solid #ccc;
    text-align center
  .cont3
    min-height: 300px;
    text-align center
</style>
