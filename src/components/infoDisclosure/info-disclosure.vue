<!--信息披露-->
<template>
  <div class="info-container clearfix">
    <div class="left-container">
      <h3 class="title">信息披露专栏</h3>
      <ul class="menu-list p-b-0">
        <li class="name" data-index="0" @click="getCont(0)" :class="{active: dataIndex == 0}">机构信息</li>
        <li class="name" data-index="1" @click="getCont(1)" :class="{active: dataIndex == 1}">经营信息</li>
        <li class="name" data-index="2" @click="getCont(2)" :class="{active: dataIndex == 2}">还款公告</li>
        <li class="name" data-index="3" @click="getCont(3)" :class="{active: dataIndex == 3}">运营报告</li>
        <li class="name" data-index="4" @click="getCont(4)" :class="{active: dataIndex == 4}">风险教育</li>
        <li class="name" data-index="10" @click="getCont(10)" :class="{active: dataIndex == 10}">信披声明</li>
      </ul>
      <h3 class="title">关于我们</h3>
      <ul class="menu-list">
        <li class="name" data-index="5" @click="getCont(5)" :class="{active: dataIndex == 5}">公司简介</li>
        <li class="name" data-index="6">网站公告</li>
        <li class="name" data-index="7" @click="getCont(7)" :class="{active: dataIndex == 7}">合作伙伴</li>
        <li class="name" data-index="8" @click="getCont(8)" :class="{active: dataIndex == 8}">平台优势</li>
        <li class="name" data-index="9" @click="getCont(9)" :class="{active: dataIndex == 9}">加入我们</li>
      </ul>
    </div>
    <div class="right-container">
      <!--机构信息-->
      <div class="info-content" v-if="dataIndex == 0">
        <mechanism-info></mechanism-info>
      </div>
      <!--经营信息-->
      <div class="info-content" v-else-if="dataIndex == 1">
        <manage-info></manage-info>
      </div>
      <!--还款公告-->
      <div class="info-content" v-else-if="dataIndex == 2">
        <repayment-notice></repayment-notice>
      </div>
      <!--运营报告-->
      <div class="info-content" v-else-if="dataIndex == 3">
        <operate-report></operate-report>
      </div>
      <!--风险教育-->
      <div class="info-content" v-else-if="dataIndex == 4">
        <risk-education></risk-education>
      </div>
      <!--信息披露声明-->
      <div class="info-content" v-else-if="dataIndex == 10">
        <img  class="statement-content" src="@/assets/infoDisclosure/statement.jpg" title="信息披露声明" alt="信息披露声明"/>
      </div>

      <!--公司简介-->
      <div class="info-content" v-else-if="dataIndex == 5">
        <company-profile></company-profile>
      </div>
      <!--合作伙伴-->
      <div class="info-content" v-else-if="dataIndex == 7">
        <cooperate-partner></cooperate-partner>
      </div>
      <!--平台优势-->
      <div class="info-content" v-else-if="dataIndex == 8">
        <platform-super></platform-super>
      </div>
      <!--加入我们-->
      <div class="info-content" v-else-if="dataIndex == 9">
        <join-us></join-us>
      </div>
    </div>
  </div>
</template>


<script>

  import MechanismInfo from '@/components/infoDisclosure/mechanism-info'
  import ManageInfo from '@/components/infoDisclosure/manage-info'
  import RepaymentNotice from '@/components/infoDisclosure/repayment-notice'
  import OperateReport from '@/components/infoDisclosure/operate-report'
  import RiskEducation from '@/components/infoDisclosure/risk-education'
  import CompanyProfile from '@/components/infoDisclosure/company-profile'
  import CooperatePartner from '@/components/infoDisclosure/cooperate-partner'
  import PlatformSuper from '@/components/infoDisclosure/platform-super'
  import JoinUs from '@/components/infoDisclosure/join-us'

  export default {
    name: '',
    data(){
      return {
        dataIndex: this.$route.query.menu || 0 ,
      }
    },
    components:{
      "mechanism-info": MechanismInfo,
      "manage-info": ManageInfo,
      "repayment-notice": RepaymentNotice,
      "operate-report": OperateReport,
      "risk-education": RiskEducation,
      "company-profile": CompanyProfile,
      "cooperate-partner": CooperatePartner,
      "platform-super": PlatformSuper,
      "join-us": JoinUs,
    },
    mounted: function(){
      // console.log(this.dataIndex)
    },
    methods:{
      getCont: function (type) {
        this.dataIndex = type;

        //导航切换后对应内容显示顶部
        window.scrollTo(0, 0);
      }
    },
    watch:{
      '$route' (to,form){
        this.getCont(this.$route.query.menu);
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .info-container
    width 1250px
    margin 15px auto 0
    .left-container
      width 240px
      float left
      background #fff
      .title
        height 60px
        line-height 60px
        text-align center
        color #000
        font-size 16px
        border-bottom 1px solid #e7e7e7
      .menu-list
        position relative
        padding 20px 70px 30px
        border-bottom 1px solid #e7e7e7
        li.name
          position relative
          height 50px
          line-height 50px
          text-align center
          color #333
          font-size 14px
          cursor pointer
        li.active
          color $redFontColor
        li.active:before
          content '●'
          position absolute
          left 4px
          color $redFontColor
          font-size 16px
        li:hover
          color $redFontColor
      .p-b-0
        padding-bottom 0
    .right-container
      width 1000px
      float right
      background #fff
      margin-bottom 30px
      overflow hidden
      .info-content
        width 100%
        min-height 800px
        .statement-content
          width 100%
</style>
