<!--还款公告-->
<template>
  <div class="info-content">
    <div class="content-title">- 还款公告 -</div>
    <div class="content-box">
      <ul class="notice-list">
        <li class="notice-item" v-for="item in dataInfo.list">
          <div class="notice-text">
            <a class="title" href="javascript:void(0)" @click="showDetail(noticeId)">{{item.loanTitle}}</a>
            <p class="time">2020-20-20 20:20:20</p>
          </div>
        </li>
      </ul>
      <product-pager :pageSize="pageSize" :currentPage="currentPage" :dataUrl="dataUrl" @pagechange="pagechange"></product-pager>
    </div>

    <div class="notice-content">
      <div class="to-list" @click="returnList">返回列表</div>
      <div class="notice-details">
        <h1 class="title">【20190513】还款公告</h1>
        <div class="main-text">
          <p>尊敬的微宝：</p>
          <p>今日以下产品已回款：</p>
          <p>“企业贷201902113”的本金和利息；</p>
          <p>“企业贷201904103”的第一期利息；</p>
          <p>“企业贷201904111”的第一期利息；</p>
          <p>“企业贷201903113”的第二期利息；</p>
          <p>“企业贷201903121”的第二期利息； </p>
          <p>“企业贷201902114”的第三期利息； </p>
          <p>“企业贷201901114”的第四期利息； </p>
          <p>“企业贷201812102”的第五期利息；</p>
          <p>“企业贷201811083”的第六期利息；</p>
          <p>“企业贷201810101”的第七期利息；</p>
          <p></p>
          <p>原定于5月14日归还的“企业贷201904131”的本金和利息，“企业贷201811101”的本金和利息均已提前归还。</p>
          <p></p>
          <p></p>
          <p>微宝可在网页登录个人账户，点击“我的账户”—“回款查询”查看回款的状态；使用APP的微宝则直接在“我的账户”点击“回款日历”查看。对以上还款信息如有疑问，可致电客服热线0755-86627551或微信咨询客服小微（微信号：vp_xiaowei）。</p>
          <p>温馨提示：放假期间，银行存管平台的提现申请单笔不可超过5万，均由银行受理，一般当日可到账，具体时间以银行入账时间为准。</p>
          <p></p>
          <p>微品金融感谢您的支持与信赖！</p>
          <p></p>
          <p>深圳五维微品金融信息服务有限公司</p>
          <p>2019年5月13日</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import ProductPager from '@/components/common/product-pager'

  export default {
    data() {
      return {
        currentPage: 1, //当前页码
        pageSize: 10, //每页显示条数
        dataUrl: 'http://new.vpfinance.cn:8888/admin/loanSign/unpublishedLoanSigns', //数据请求地址url
        dataInfo:'', //返回数据信息
        noticeId: this.$route.query.noticeId,
      }
    },
    mounted:function () {

      if(this.noticeId == '' || this.noticeId == undefined || this.noticeId == null){
        $('.content-box').show();
        $('.notice-content').hide();
      }else{
        this.showDetail(this.noticeId)
      }
    },
    methods: {
      pagechange:function(currentPage,data){
        //当前页码
        console.log(currentPage);
        //返回数据
        console.log(data);
        this.dataInfo = data.responseObject
      },
      showDetail:function (id) {
        $('.content-box').hide();
        $('.notice-content').show();
      },
      returnList:function () {
        $('.notice-content').hide();
        $('.content-box').show();
      }
    },
    components:{
      'product-pager': ProductPager
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
    .content-box
      position relative
      padding 0 40px 50px
      height 580px
      .notice-list
        width 100%
        margin-bottom 60px
        .notice-item
          height 55px
          line-height 55px
          border-bottom 1px solid #e8ebf3
          cursor pointer
          .notice-text
            height 55px
            line-height 55px
            p
              float right
              color #ccc
              font-size 14px
    .notice-content
      padding 30px
      display none
      .to-list
        width 100%
        height 30px
        line-height 30px
        color #1661ba
        font-size 16px
        cursor pointer
        text-align left
      .notice-details
        padding 20px 0
        .title
          padding 30px 0
          line-height 40px
          font-size 28px
        .main-text
          p
            font-size 14px
            line-height 28px
            color #333
            text-indent 2em
            min-height 28px
        .main-text
          p:nth-child(1)
            text-indent 0
          p:nth-last-child(2)
            text-align right
          p:last-child
            text-align right



</style>
