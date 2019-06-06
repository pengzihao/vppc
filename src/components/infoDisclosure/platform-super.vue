<!--平台优势-->
<template>
  <div class="info-content">
    <div class="content-title">- 平台优势 -</div>
    <div class="content-box">
      <div class="info-title">四大极致透明</div>
      <ul class="safety-list">
        <li class="safety-item"><i></i><div class="text"><h4>平台信息</h4><p>经营场所清晰透明，办公室随时向出借人开放。</p></div></li>
        <li class="safety-item"><i></i><div class="text"><h4>借款人信息</h4><p>借款人资料齐全，披露完整，所有信息均真实有效，且可在工商信息网查询真伪。</p></div></li>
        <li class="safety-item"><i></i><div class="text"><h4>担保人信息</h4><p>担保人资料齐全，披露完整，担保手续合法合规，担保责任明确。</p></div></li>
        <li class="safety-item"><i></i><div class="text"><h4>资金流向</h4><p>存管银行资金流水清晰，与投融资信息完全保持一致，每笔支付信息均可查验。</p></div></li>
      </ul>
      <div class="info-title">六大保护措施</div>
      <ul class="guarantee-list">
        <li class="guarantee-item">
          <div class="number">01</div><div class="title">严控资产来源<br>从源头把控风险</div>
          <p class="text">资产来源把控严格，只接受国有或上市公司关联企业，以及优质行业龙头企业的融资申请。所有项目均为平台业务部门直接与借款人对接，杜绝市场上从担保公司、小贷公司或资产交易所等渠道获取的劣质或辗转多手的资产。</p>
        </li>
        <li class="guarantee-item">
          <div class="number">02</div><div class="title">银行级风控流程<br>全方位尽职调查</div>
          <p class="text">由风控团队对合作机构开展全方位调查，前期对包括借款人历史背景、管理团队、组织架构、财务状况、经营状况、业务模式及上下游客户等信息的深入调查，出具专业调查分析报告，确保其良好的偿付能力；合作期间实时监控借款人经营动态，确保其稳定经营；后期确保还本付息及时，保证出借者的出借收益。</p>
        </li>
        <li class="guarantee-item">
          <div class="number">03</div><div class="title">银行存管<br>平台不触碰资金</div>
          <p class="text">用户在存管银行有专门的独立存管子帐户，由存管银行对资金进行管理与监督，资金交易均由用户授权银行操作执行，平台无法触碰用户资金。</p>
        </li>
        <li class="guarantee-item">
          <div class="number">04</div><div class="title">严格风控<br>优先保障出借人的利益</div>
          <p class="text">多维度控制风险<br>★&nbsp;&nbsp;融资方控股股东连带责任保证<br>★&nbsp;&nbsp;融资方资产抵押或质押<br>★&nbsp;&nbsp;第三方企业担保</p>
        </li>
        <li class="guarantee-item">
          <div class="number">05</div><div class="title">律师事务所<br>提供专业法律意见</div>
          <p class="text">引进律师事务所，从服务合规性、政策走向等多方面提供法律意见，保障融资方式、平台和项目的合法性。</p>
        </li>
        <li class="guarantee-item">
          <div class="number">06</div><div class="title">资深技术团队<br>为账户信息保驾护航</div>
          <p class="text">微品金融拥有行业资深技术资深团队，并采用业界先进的加密技术， 对用户注册信息 、账户收支信息进行高强度加密处理。同时，公司制定了严格的信息保密及信息隔离政策，确保每一个用户的信息均能得到妥善的保护。未经用户同意，不向任何第三方公司、组织和个人披露用户个人信息、账户信息以及交易信息（法律法规另有规定的除外）。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: ''
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
      .info-title
        height 60px
        line-height 60px
        margin-top 20px
        font-size 18px
        color #000
        font-weight bold
      .safety-list
        margin-top 20px
        .safety-item
          display inline-block
          vertical-align top
          width 190px
          height 320px
          background #f6f8fc
          .text
            padding 20px
            h4
              font-size 16px
              color #333
              line-height 28px
              text-align center
            p
              margin-top 20px
              font-size 14px
              color #666
              line-height 20px
        .safety-item:not(:first-child)
          margin-left 30px
        .safety-item i
          display block
          width 190px
          height 120px
        .safety-item:nth-child(1)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -5px -420px no-repeat
        .safety-item:nth-child(2)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -223px -420px no-repeat
        .safety-item:nth-child(3)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -443px -420px no-repeat
        .safety-item:nth-child(4)
          i
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -663px -420px no-repeat
      .guarantee-list
        .guarantee-item
          display inline-block
          vertical-align top
          position relative
          width 376px
          height 264px
          padding 20px
          background #f6f8fc
          margin-top 36px
          .number
            position absolute
            top 30px
            right 30px
            font-size 53px
            color #dedce4
            font-weight bold
          .title
            font-size 16px
            color #333
            font-weight bold
            line-height 30px
          .text
            margin-top 20px
            font-size 14px
            color #666
            line-height 28px
        .guarantee-item:nth-child(2n)
          margin-left 30px

</style>
