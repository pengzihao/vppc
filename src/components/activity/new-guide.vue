<!--新手导航-->
<template>
  <div class="main-bg">
    <div class="new-guide">
      <div class="guide-top">
        <div class="guide-num"></div>
        <ul class="guide-status">
          <li class="status-item">
            <div class="red-bag">
              <img src="@/assets/activity/new-guide/guide-red-bag1.png"/>
            </div>
            <div class="title"></div>
            <div class="text"></div>
          </li>
          <li class="status-item">
            <div class="red-bag">
              <img src="@/assets/activity/new-guide/guide-red-bag2.png"/>
            </div>
            <div class="title"></div>
            <div class="text"></div>
          </li>
          <li class="status-item">
            <div class="red-bag">
              <img src="@/assets/activity/new-guide/guide-red-bag3.png"/>
            </div>
            <div class="title"></div>
            <div class="text"></div>
          </li>
        </ul>
      </div>
      <div class="guide-step guide1">
        <div class="step-desc">
          <img src="@/assets/activity/new-guide/guide-desc1.png" alt="注册福利">
        </div>
        <div class="guide-screenshot">
          <img src="@/assets/activity/new-guide/guide-screenshot1.png">
        </div>
        <a class="btn active to-register"></a>
        <a class="btn btn-done"></a>
      </div>
      <div class="guide-step guide2">
        <div class="step-desc">
          <img src="@/assets/activity/new-guide/guide-desc2.png" alt="绑卡福利">
        </div>
        <div class="guide-screenshot">
          <img src="@/assets/activity/new-guide/guide-screenshot2.png">
        </div>
        <a class="btn active to-bind" href="javascript:void(0)"></a>
        <a class="btn btn-done"></a>
      </div>
      <div class="guide-step guide3">
        <div class="step-desc">
          <img src="@/assets/activity/new-guide/guide-desc3.png" alt="首次出借福利">
        </div>
        <div class="guide-screenshot">
          <img src="@/assets/activity/new-guide/guide-screenshot3.png">
        </div>
        <a class="btn active to-invest" href="javascript:void(0)"></a>
        <a class="btn btn-done"></a>
      </div>
      <div class="guide-tips">
        <div class="tips-content">
          <h5 class="title">体验金使用方法</h5>
          <p class="text">（1）新用户注册即送体验金，有效期限为1个月，使用周期为7天；<br>
            （2）在体验金项目下点击出借，即可开始计算收益，出借到期后，需在7天内领取收益，否则收益自动失效。<br>
            （3）体验金出借年化收益为12%，2000元体验金，7天后净收益为4.66元；<br>
            （4）体验金出借当日开始计息，出借期限到期，用户领取收益后，利息返回至出借者的平台账户；<br>
            （5）体验金最终解释权归深圳五维微品金融信息服务有限公司所有。</p>
          <h5 class="title">代金券使用方法及说明</h5>
          <p class="text">（1）用于抵扣出借金额，最高可抵扣千分之五，已抵扣金额将返回账户可用余额中；<br>
            （2）每张券只能使用一次，不设找零；<br>
            （3）用户需自主勾选代金券，可叠加使用；<br>
            （4）代金券有效期为7天，截止至第7天24点；<br>
            （5）查看：点击【账户中心】—【活动管理】—【代金券】即可查看代金券;<br>
            （6）代金券最终解释权归深圳五维微品金融信息服务有限公司所有。</p>
          <h5 class="title">预约券的使用规则</h5>
          <p class="text">（1）产品预售期间用户持有预约券可提前预约出借，待产品正式抢标后所有预约记录自动出借；<br>
            （2）每个产品设定50%出借额为可预约额度，如果预约满额则无法再进行预约；<br>
            （3）每一张预约券只能使用1次，每次预约使用一张预约券；<br>
            （4）一旦预约成功，则同正常出借一样，预约金额会冻结在账户中，且预约的出借不可撤销<br>
            （5）预约券自发放日期算起，有效期为30天，未使用的券至到期日24点整自动失效。</p>
        </div>
      </div>
      <div class="bottom-text">本活动自发布之日即可实行，结束时间将另行通知。微品金融将保留对以上规则、条件和流程进行适当调整的权利。</div>
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

  .main-bg
    background #ffd06c
    .new-guide
      width 1080px
      margin 0 auto
      padding-bottom 20px
      font-family Arial
      Helvetica
      sans-serif "microsoft yahei"
      .guide-top
        width 100%
        padding-top 580px
        background url("~@/assets/activity/new-guide/guide-status-bg.png") no-repeat
        .guide-num
          width 560px
          height 17px
          margin 0 auto 20px
          background url("~@/assets/activity/new-guide/guide-num.png") no-repeat center
        .guide-status
          width 670px
          height 308px
          margin 0 auto
          li
            width 138px
            display inline-block
            .red-bag
              width 138px
              height 180px
              img
                width 138px
                height 180px
            .title
              width 100%
              height 15px
              margin 20px 0
            .text
              text-align center
              font-size 14px
              color #4576ff
              font-family "黑体",Arial, Helvetica, sans-serif, "microsoft yahei"
          li:nth-child(2)
            margin-left 128px
            vertical-align top
          li:nth-child(3)
            float right
          li:nth-child(1)
            .title
              background url("~@/assets/activity/new-guide/guide-status-title1.png") no-repeat center
          li:nth-child(2)
            .title
              background url("~@/assets/activity/new-guide/guide-status-title2.png") no-repeat center
          li:nth-child(3)
            .title
              background url("~@/assets/activity/new-guide/guide-status-title3.png") no-repeat center
      .guide-step
        width 1080px
        height 927px
        margin 0 auto
        background url("~@/assets/activity/new-guide/guide-step-bg.png") no-repeat
        .step-desc
          width 100%
          padding-top 124px
          text-align center
        .guide-screenshot
          width 100%
          margin-top 66px
          text-align center
        .btn
          display block
          width 254px
          height 50px
          margin 46px auto 0
        .active
          cursor pointer
        .to-register
          background url("~@/assets/activity/new-guide/guide-btn1.png") no-repeat
        .to-bind
          background url("~@/assets/activity/new-guide/guide-btn2.png") no-repeat
        .to-invest
          background url("~@/assets/activity/new-guide/guide-btn3.png") no-repeat
        .btn-done
          display none
          background url("~@/assets/activity/new-guide/guide-done.png") no-repeat
      .guide-tips
        width 958px
        height 688px
        margin 0 auto
        background #4576ff
        border-top 18px solid #2b60f1
        box-sizing border-box
        .tips-content
          padding 44px 70px
          color #fff
        .title
          font-size 20px
          line-height 54px
        .text
          font-size 14px
          line-height 26px
      .bottom-text
        font-size 14px
        color #a24c00
        text-align center
        line-height 90px
</style>
