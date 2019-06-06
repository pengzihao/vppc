<!--风险教育-->
<template>
  <div class="info-content">
    <div class="content-title">- 风险教育 -</div>
    <ul class="content-menu">
      <li :class="{active: tabType == 1}" @click="getTabCont(1)">知识普及</li>
      <li :class="{active: tabType == 2}" @click="getTabCont(2)">行业知识</li>
      <li :class="{active: tabType == 3}" @click="getTabCont(3)">法律法规</li>
    </ul>
    <div class="tab-content">
      <div class="content-box" v-if="tabType == 1">
        <ul class="notice-list notice-classroom">小金课堂</ul>
      </div>
      <div class="content-box" v-else-if="tabType == 2">
        <ul class="notice-list notice-knowledge">暂无内容</ul>
      </div>
      <div class="content-box" v-else-if="tabType == 3" style="padding:0 20px 50px;">
        <div class="info-title">网络借贷信息中介机构业务活动管理暂行办法</div>
        <div class="law-about">
          <p>为加强对网络借贷信息中介机构业务活动的监督管理，促进网络借贷行业健康发展，依据《中华人民共和国民法通则》、《中华人民共和国公司法》、《中华人民共和国合同法》等法律法规，中国银监会、工业和信息化部、公安部、国家互联网信息办公室制定了《网络借贷信息中介机构业务活动管理暂行办法》。经国务院批准，现予公布，自公布之日起施行。</p>
          <p>中国银行业监督管理委员会主席：尚福林</p>
          <p>中华人民共和国工业和信息化部部长：苗圩</p>
          <p>中华人民共和国公安部部长：郭声琨</p>
          <p>国家互联网信息办公室主任：徐麟</p>
          <p>2016年8月17日……</p><br>
          <a class="show-more" href="#/agreement/protocol1" target="_blank">更多</a>
        </div>
        <ul class="law-list">
          <li class="law-item">
            <h4 class="title">《网络借贷信息中介机构备案登记管理指引》</h4>
            <div class="figure"></div>
            <p>中国银监会办公厅、工业和信息化部办公厅、工商总局办公厅关于印发网络借贷 信息中介机构备案登记管理指引的通知<br><br>
              各省、自治区、直辖市人民政府金融监管部门、通信管理局、工商局，各计划单 列市人民政府金融监管部门、通信管理局、工商局：为建立健全网络借贷信息中介机构备案登记管理制度，加强网络借贷信息中介机 构事中事后监管，现将网络借贷信息中介机构备案登记指引发布如下……</p>
            <a class="show-more" href="#/agreement/protocol2" target="_blank">更多</a>
          </li>
          <li class="law-item">
            <h4 class="title">《网络借贷资金存管业务指引》</h4>
            <div class="figure"></div>
            <p>中国银监会办公厅关于<br>印发网络借贷资金存管业务指引的通知<br>银监办发〔2017〕21号<br><br>
              各银监局，各省、自治区、直辖市人民政府金融办（局），各大型银行、股份制银行，邮储银行，外资银行：为贯彻落实人民银行等十部门《关于促进互联网金融健康发展的指导意见》和中国银监会等四部门《网络借贷信息中介机构业务活动管理暂行办法》……</p>
            <a class="show-more" href="#/agreement/protocol3" target="_blank">更多</a>
          </li>
          <li class="law-item">
            <h4 class="title">《网络借贷信息中介机构业务活动信息披露指引》</h4>
            <div class="figure"></div>
            <p>网络借贷信息中介机构业务活动信息披露指引<br><br>
              第一章 总则 <br>
              第一条 为规范网络借贷信息中介机构业务活动信息披露行为，维护参与网络借贷信息中介机构业务活动主体的合法权益，建立客观、公平、透明的网络借贷信息中介业务活动环境，促进网络借贷行业健康发展，依据《中华人民共和国民法通则》《关于促进互联网金融健康……</p>
            <a class="show-more" href="#/agreement/protocol4" target="_blank">更多</a>
          </li>
        </ul>
      </div>
    </div>
    <!--<div class="notice-content"><div class="to-list">返回列表</div><div class="notice-details"></div></div>-->
  </div>
</template>

<script>
    export default {
        name: '',
        data(){
          return {
            tabType: this.$route.query.tabType || 3
          }
        },
        methods:{
          getTabCont:function(tabType){
            this.tabType = tabType;
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
      li.active
        color #4b75cb
        border-bottom 2px solid #4b75cb
      li:hover
        color #4b75cb
    .content-box
      position relative
      padding 0 40px 50px
      .info-title
        height 60px
        line-height 60px
        margin-top 20px
        font-size 18px
        color #000
        font-weight bold
      /*法律法规*/
      .law-about
        position relative
        line-height 28px
      .law-list
        padding 20px 0
        .law-item
          position relative
          display inline-block
          float left
          vertical-align top
          width 310px
          line-height 28px
          padding-bottom 50px
        .law-item:not(:first-child)
          margin-left 12px
        .law-item
          .title
            font-size 14px
            color #000
            text-align left
          .figure
            width 276px
            height 120px
            margin-top 16px
          p
            margin-top 16px
        .law-item:nth-child(1)
          .figure
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -594px -162px no-repeat
        .law-item:nth-child(2)
          .figure
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -901px -162px no-repeat
        .law-item:nth-child(3)
          .figure
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -1208px -162px no-repeat
      .show-more
        position absolute
        display block
        right 0
        bottom 0
        font-size 14px
        color #4b75cb
        cursor pointer
      .law-item
        .show-more
          bottom:50px
</style>
