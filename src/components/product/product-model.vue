<!--产品模式-->
<template>
 <div class="model">
   <div class="banner">
     <img :src="typeInfo.banner" alt="">
   </div>
   <div class="column what">
     <div class="product-content">
       <div class="title">
         <div class="line"></div>
         <h2>什么是{{typeInfo.name}}</h2>
         <div class="line"></div>
       </div>
       <div class="content-details clearfix">
         <img :src="typeInfo.illustration" alt="">
         <div class="intro">
           <h4>定义</h4>
           <p>{{typeInfo.introduce}}</p>
           <h4>风险控制</h4>
           <p>{{typeInfo.riskControl}}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="column trade">
     <div class="product-content">
       <div class="title">
         <div class="line"></div>
         <h2>交易模式图</h2>
         <div class="line"></div>
       </div>
       <img :src="typeInfo.tradePatterns" alt="">
     </div>
   </div>
   <div class="link-product"><a href="javascript:void(0)">查看{{typeInfo.name}}产品</a></div>
 </div>
</template>

<script>
    //产品数据
    import getModelData from '@/common/js/productModel/productModel'

    export default {
      name: 'product-model',
      data(){
        return {
          typeInfo: {},
          productType: this.$route.query.productType || 10,
          modelData:getModelData
        }
      },
      mounted:function(){
        this.showPage();
      },
      methods:{
        showPage:function () {
          var list = this.modelData.list;
          for(var i=0; list.length; i++){
            if(this.productType == list[i].type){
              this.typeInfo = list[i];
              return;
            }
          }
        }
      },
      //监听路由参数发生变化后页面内容对应刷新
      watch:{
        '$route' (to,from){
          this.productType = this.$route.query.productType;
          this.showPage();
        }
      }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .model
    background-color #fff
    .banner
      width 100%
      img
        width 100%
    .column
      width 100%
    .what,.trade
      padding-bottom 20px
      .product-content
        width 1056px
        margin 0 auto
        .title
          width 380px
          height 50px
          line-height 50px
          margin 50px auto
          .line
            width 73px
            height 10px
            margin-top 20px
          .line:first-child
            float left
            background url("~@/assets/product/productModel/kit2.png") no-repeat
          .line:last-child
            float right
            background url("~@/assets/product/productModel/kit1.png") no-repeat
          h2
            display inline-block
            width 234px
            font-size 28px
            text-align center
            color #333
        .content-details
          width 100%
          img
            width 363px
            height 290px
            float left
          .intro
            float right
            width 618px
            h4
              font-size 20px
              color #666
              margin-bottom 18px
              line-height 30px
            p
              font-size 16px
              line-height 26px
              margin-bottom 20px
              color #333
    .trade
      img
        margin 70px auto
        display block
    .link-product
      width 100%
      height 100px
      background url("~@/assets/product/productModel/button-bg.png") no-repeat
      overflow hidden
      a
        width 258px
        height 60px
        text-align center
        line-height 60px
        font-size 20px
        color #fff
        border-radius 86px
        display block
        margin 20px auto
        background $mainColor
</style>
