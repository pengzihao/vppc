<!--风险披露声明-->
<template>
  <div class="main-cont">
    <h2 class="h2-text">风险披露声明</h2>
    <div class="div-text">
      <span class="span-text"></span>
      微品金融作为专业的金融信息中介服务平台，结合金融发展与互联网技术创新，致力于为中小企业提供低成本、高效、便捷的融资新渠道，为公众提供多样化、可靠的出借服务。
    </div>
    <div class="div-text">
      <span class="span-text"></span>
      本项简要声明并不全部披露关于P2P网贷的所有风险。鉴于有关风险，客户在开始进行此类交易之前，应该了解有关交易性质和客户所面临的风险程度。客户必须根据客户本人的出借经验、目的、财力和承受风险能力等相关情形，仔细考虑这类交易是否适合客户本人。客户应该在开户及开始交易前咨询法律及其它专业意见。
    </div>
    <p class="p-text">风险披露如下：</p>
    <p class="p-text">1、网络环境的不稳定性</p>
    <div class="div-text">
      大部分网络公开出借项目和电子交易的设施是通过以电脑为基础的系统来进行交易指令的传递、执行、匹配和交易。与所有的设施和系统一样，他们易受到临时故障的影响，包括硬体和软体的故障，系统故障可能造成客户的操作难以按照客户的指示执行或根本不能执行。
    </div>
    <p class="p-text">2、交易的条件与条款</p>
    <div class="div-text">
      客户在微品金融上交易必须接受微品金融的条件与条款，客户在开始交易前应仔细阅读相关条件与条款。
    </div>
    <p class="p-text">3、暂停或限制交易</p>
    <div class="div-text">
      市场状况或国家新出台的某些有关P2P网贷运作的法律法规和政策，可能造成任何P2P网贷暂停交易，这有可能增加客户交易的风险。
    </div>
    <p class="p-text">4、服务对象的选择性</p>
    <div class="div-text">
      本网站为客户提供专业的出借服务，需要对客户资质进行评估，并非所有的客户都可以获得所有产品和服务。是否符合享受产品和服务的条件，最终的解释权归本网站。我们保留对该网站包含的信息和资料及其显示的条款、条件和说明变更的权利。
    </div>
    <p class="p-text">5、出借收益的不确定性</p>
    <div class="div-text">
      客户在进行出借之前，应该了解本网站的具体操作规则和所面临的风险程度，客户须仔细了解和咨询在本网站上出借的操作规则和步骤，并按照相关规则和步骤进行出借操作，本网站会尽力但不能确保客户的预期出借收益。
    </div>
    <p class="p-text">6.禁止性行为</p>
    <div class="div-text">
      客户出借资金不得来自于信贷资金、非法收入等
    </div>
  </div>
</template>

<script>
    export default {
       name: '',
       //隐藏公用头部和底部
       created:function () {
         this.$emit('public_header', false);
         this.$emit('public_footer', false);
         this.$emit('public_returnTop', false);
       }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"
  .main-cont
    background-color #f6f6f6
    margin 48px 20px 20px
    .h2-text
      text-align center
      font-size 18px
      font-weight bold
      padding 10px 0 5px
      color #666
    .div-text
      padding 5px 0
      font-size 14px
      line-height 22px
      color #7c7c7c
      .span-text
        padding-left 14px
    .p-text
      font-size 16px
      color #3b3b3b
      padding 10px 0px

</style>
