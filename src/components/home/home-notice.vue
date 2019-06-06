<!--首页公告信息-->
<template>
  <div class="vp-layout">
    <!--出借三部曲-->
    <div class="trilogy">
      <div class="trilogy-title">
        <h3>新手出借三部曲</h3>
      </div>
      <div class="trilogy-img">
        <img src="@/assets/home/flow-diagram.jpg" alt="">
      </div>
    </div>

    <!--公告信息-->
    <div class="notice">
      <!--平台公告-->
      <div class="notice-item">
        <div class="title">
          <img src="@/assets/home/pingtaigonggao.png" alt="">
          <h3>平台公告</h3>
          <a href="javascript:void(0)">更多 >></a>
        </div>
        <ul>
          <li><a href="javascript:void(0)">微品金融2月运营报告</a></li>
          <li><a href="javascript:void(0)">微品金融3月运营报告</a></li>
          <li><a href="javascript:void(0)">微品金融4月运营报告</a></li>
          <li><a href="javascript:void(0)">微品金融5月运营报告</a></li>
          <li><a href="javascript:void(0)">微品金融6月运营报告</a></li>
        </ul>
      </div>

      <!--还款公告-->
      <div class="notice-item">
        <div class="title">
          <img src="@/assets/home/hangyezixun.png" alt="">
          <h3>还款公告</h3>
          <a href="javascript:void(0)">更多 >></a>
        </div>
        <ul>
          <li><a href="javascript:void(0)">【20190312】还款公告</a></li>
          <li><a href="javascript:void(0)">【20190313】还款公告</a></li>
          <li><a href="javascript:void(0)">【20190314】还款公告</a></li>
          <li><a href="javascript:void(0)">【20190315】还款公告</a></li>
          <li><a href="javascript:void(0)">【20190316】还款公告</a></li>
        </ul>
      </div>

      <!--行业资讯-->
      <div class="notice-item">
        <div class="title">
          <img src="@/assets/home/huankuan.png" alt="">
          <h3>行业资讯</h3>
          <a href="javascript:void(0)">更多 >></a>
        </div>
        <ul>
          <li><a href="javascript:void(0)">财政部：金融机构小微企业贷款利息收款利息收款利息</a></li>
          <li><a href="javascript:void(0)">【微品周报】广东在运营P2P将全部接款利息收款利息</a></li>
          <li><a href="javascript:void(0)">财政部：金融机构小微企业贷款利息收款利息收款利息</a></li>
          <li><a href="javascript:void(0)">【微品周报】广东在运营P2P将全部接款利息收款利息</a></li>
          <li><a href="javascript:void(0)">财政部：金融机构小微企业贷款利息收款利息收款利息</a></li>
        </ul>
      </div>

      <!--常见问题-->
      <div class="notice-item">
        <div class="title">
          <img src="@/assets/home/FAQ.png" alt="">
          <h3>常见问题</h3>
          <a href="javascript:void(0)">更多 >></a>
        </div>
        <ul>
          <li><a href="javascript:void(0)">代金券使用方法及说明？</a></li>
          <li><a href="javascript:void(0)">为什么充值会失败？</a></li>
          <li><a href="javascript:void(0)">好友出借奖励规则？</a></li>
          <li><a href="javascript:void(0)">代金券使用方法及说明？</a></li>
          <li><a href="javascript:void(0)">代金券使用方法及说明？</a></li>
        </ul>
      </div>
    </div>
    <div class="partner">
      <div class="brand">
        <span class="brand-group" :class="{'on': onStatus}" @click="showPartner(true)">战略合作伙伴</span>
        <span class="brand-group" :class="{'on': !onStatus}" @click="showPartner(false)">业务合作伙伴</span>
      </div>
      <div class="partner-content">
      <ul v-if="onStatus">
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/business/partner-06.png" alt="乾润金融科技产业园"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/business/partner-01.png" alt="南通金融科技城"/></a></li>
        <li><a href="http://www.funtel.com.cn" target="_blank"><img src="@/assets/home/partner/business/partner-05.png" alt="欢旅"/></a></li>
        <li><a href="http://www.xingyatrip.com" target="_blank"><img src="@/assets/home/partner/business/partner-04.png" alt="星雅假日"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/business/partner-14.jpg" alt="捷融车贷"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/business/partner-16.jpg" alt="万紫千红生态农庄"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/business/partner-20.jpg" alt="肉鲜惠"/></a></li>
        <li><a href="http://www.ejiayou.com/inc/" target="_blank"><img src="@/assets/home/partner/business/partner-17.jpg" alt="易加油"/></a></li>
      </ul>
      <ul v-if="!onStatus">
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/strategy/partner-15.png" alt="深圳科技工业园"/></a></li>
        <li><a href="http://www.vpclub.cn/" target="_blank"><img src="@/assets/home/partner/strategy/partner-20.png" alt="中兴微品"/></a></li>
        <li><a href="http://www.ccb.com/cn/home/index.html" target="_blank"><img src="@/assets/home/partner/strategy/partner-22.png" alt="中国建设银行"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/strategy/partner-28.jpg" alt="ft创业咖啡"/></a></li>
        <li><a href="https://www.fadada.com/"><img src="@/assets/home/partner/strategy/partner-30.jpg" alt="法大大"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/business/partner-08.png" alt="慧连"/></a></li>
        <li><a href="https://www.aliyun.com" target="_blank"><img src="@/assets/home/partner/strategy/partner-31.jpg" alt="阿里云"/></a></li>
        <li><a href="https://www.geotrust.com/" target="_blank"><img src="@/assets/home/partner/strategy/partner-32.jpg" alt="GeoTrust"/></a></li>
        <li><a href="http://www.wasec.com.cn/" target="_blank"><img src="@/assets/home/partner/strategy/partner-33.jpg" alt="网安检测"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/strategy/partner-34.jpg" alt="农科集团"/></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/home/partner/strategy/partner-35.jpg" alt="CUSC"/></a></li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        onStatus: true
      }
    },
    methods:{
      showPartner(bool){
        this.onStatus = bool
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~@/common/css/common.styl"

  .trilogy-title
    height 30px
    line-height 30px
    margin 10px
    padding 0 5px
    border-left 2px solid #00e1dd
  .trilogy-img
    width 96%
    height 90px
    padding 20px 2%
    background-color #fff
  .notice
    margin 30px auto
    padding 25px 0
    background-color #fff
    .notice-item
      width 240px
      height 210px
      padding 0 28px
      display inline-block
      overflow hidden
      .title
        border-bottom 1px solid #ececec
        margin-bottom 10px
        h3
          display inline-block
          line-height 30px
        a
          float right
          color #ccc
          line-height 30px
        a:hover
          color #0056A1
      ul
        li
          height 30px
          line-height 30px
          font-size 12px
          color #999
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          list-style-type disc
          list-style-position inside
          a
            color #999
    .notice-item:not(:last-child)
      border-right 1px solid #eee
  .partner
    margin 40px auto
    background-color #fff
    overflow hidden
    .brand
      width 1150px
      height 50px
      margin 20px auto
      overflow hidden
      border-bottom 1px solid #ececec
      .brand-group
        height 50px
        line-height 50px
        margin-right 30px
        font-size 18px
        text-align center
        display inline-block
        cursor pointer
        overflow hidden
      .on
        border-bottom 1px solid $mainColor
        margin-top -1px
    .partner-content
      ul
        width 1150px
        margin 0 auto
        overflow hidden
        display none
        li
          width 200px
          height 60px
          margin 15px
          overflow hidden
          float left
          a
            width 200px
            height 60px
            box-sizing border-box
            border 1px solid #e5e7ee
            display block
            overflow hidden
            img
              width 100%
              height 100%
      ul:last-child
         display block
</style>
