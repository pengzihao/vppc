<!--合作伙伴-->
<template>
  <div class="info-content info-content8">
    <div class="content-title">- 合作伙伴 -</div>
    <ul class="content-menu">
      <li :class="{'active': status}" @click="showPartner(true)">战略合作伙伴</li>
      <li :class="{'active': !status}" @click="showPartner(false)">业务合作伙伴</li>
    </ul>
    <div class="content-box" v-if="status">
      <ul class="partner-list">
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-15.png" alt="深圳科技工业园"/></a></li>
        <li><a href="http://www.vpclub.cn/" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-20.png" alt="中兴微品"/></a></li>
        <li><a href="http://www.ccb.com/cn/home/index.html" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-22.png" alt="中国建设银行"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-28.jpg" alt="ft创业咖啡"/></a></li>
        <li><a href="https://www.fadada.com/"><img src="@/assets/infoDisclosure/partner/parter-30.jpg" alt="法大大"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-08.png" alt="慧连"/></a></li>
        <li><a href="https://www.aliyun.com" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-31.jpg" alt="阿里云"/></a></li>
        <li><a href="https://www.geotrust.com/" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-32.jpg" alt="GeoTrust"/></a></li>
        <li><a href="http://www.wasec.com.cn/" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-33.jpg" alt="网安检测"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-34.jpg" alt="农科集团"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-35.jpg" alt="CUSC"/></a></li>
      </ul>
    </div>
    <div class="content-box" v-if="!status">
      <ul class="partner-list">
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-06.png" alt="乾润金融科技产业园"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-01.png" alt="南通金融科技城"/></a></li>
        <li><a href="http://www.funtel.com.cn" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-05.png" alt="欢旅"/></a></li>
        <li><a href="http://www.xingyatrip.com" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-04.png" alt="星雅假日"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-14.png" alt="捷融车贷"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-16.png" alt="万紫千红生态农庄"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/infoDisclosure/partner/parter-20.png" alt="肉鲜惠"/></a></li>
        <li><a href="http://www.ejiayou.com/inc/" target="_blank"><img src="@/assets/infoDisclosure/partner/parter-17.png" alt="易加油"/></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data(){
          return {
            status : true
          }
        },
        methods:{
          showPartner:function (bool) {
            this.status = bool;
          }
        }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .info-content
    width 100%
    min-height 800px
    .content-title
      height 100px
      line-height 100px
      text-align center
      background #4b75cb
      font-size 20px
      color #fdfdfd
      font-weight bold
    .content-menu
      height 58px
      line-height 58px
      padding 0 20px
      border-bottom 1px solid #e8ebf3
      li
        display inline-block
        padding 0 18px
        margin-right 10px
        color #000
        font-size 14px
        box-sizing border-box
        cursor pointer
      .active
        color #4b75cb
        border-bottom 2px solid #4b75cb
      li:hover
        color #4b75cb
    .content-box
      position relative
      padding 0 40px 50px
      .partner-list
        padding 20px 0 30px 0
        li
          display inline-block
          width 185px
          height 185px
          margin-top 30px
          margin-right 35px
          border 1px solid #eee
          text-align center
          cursor pointer
          line-height 250px
          img
            width:185px
         li:nth-child(4n)
           margin-right 0


</style>
