<!--自动投标-->
<template>
  <div class="account-list">
    <div class="title">自动投标</div>
    <div class="content">
      <div class="auto-bid">
        <ul class="auto-bid-list">
          <li>
            <div class="auto-left">自动投标状态</div>
            <div class="auto-right">
              <div class="auto-switch">
                <input id="check-1" type="checkbox" class="switch" :checked="isAutoPlank" @change="autoSwitch()"/>
                <label for="check-1"></label>
              </div>
              <span class="auto-state">开</span>
            </div>
          </li>
          <li v-show="isAutoPlank == 1">
            <div class="auto-left">存管标授权状态</div>
            <div v-if="isHXAutoPlank == 1 && autoPlankState == 1 " class="auto-right">
              <span>已授权</span><span class="highlight" @click="autoCancel()">撤销授权</span>
            </div>
            <div v-if="isHXAutoPlank == 0 || isHXAutoPlank == null" class="auto-right">
              <span class="highlight" @click="toAuth()">去授权</span>
            </div>
            <div v-if="autoPlankState == 2 " class="auto-right">
              <span>已超额</span>
              <span class="highlight" @click="window.location.href='/member/autoReset?accountType=1'">重新授权</span>
            </div>
            <div v-if="autoPlankState == 3 " class="auto-right">
              <span>已过期</span>
              <span class="highlight" @click="toAuth()">重新授权</span>
            </div>
          </li>
          <li v-show="isAutoPlank">
            <div class="auto-left">账户保留金额</div>
            <div class="auto-right"><input class="auto-in" placeholder="请输入账户保留余额" v-model="userRemainingMoney"></div>
          </li>
          <li v-show="isAutoPlank">
            <div class="auto-left">最大出借金额</div>
            <div class="auto-right"><input class="auto-in" placeholder="请输入最大出借金额" v-model="userMaxLoanMoney"></div>
          </li>
          <li class="product-type" v-show="isAutoPlank">
            <div class="auto-left">投标种类</div>
            <div class="auto-right">
              <span class="select-span select-all" onclick="selectAll(this)">不限</span>
              <span class="select-span selectLi" v-for="item in loanTypeOptions" :data-key="item.key" @click="selectSwitch($event)">{{item.value}}</span>
            </div>
          </li>
          <li class="return-way" v-show="isAutoPlank">
            <div class="auto-left">还款方式</div>
            <div class="auto-right">
              <span class="select-span select-all" onclick="selectAll(this)">不限</span>
              <span class="select-span selectLi" v-for="item in refundWayOptions" :data-key="item.key"  @click="selectSwitch($event)">{{item.value}}</span>
            </div>
          </li>
          <li class="loan-term" v-show="isAutoPlank">
            <div class="auto-left">借款期限</div>
            <div class="auto-right">
              <span class="select-span select-all" @click="selectSelf($event,'loan-term')">不限</span>
              <select class="" v-model="loanPeriodBegin" @change="cancelAll($event)">
                <option>1个月</option><option>2个月</option><option>3个月</option><option>4个月</option><option>5个月</option><option>6个月</option>
                <option>7个月</option><option>8个月</option><option>9个月</option><option>10个月</option><option>11个月</option><option>12个月</option>
                <option>13个月</option><option>14个月</option><option>15个月</option><option>16个月</option><option>17个月</option><option>18个月</option>
                <option>19个月</option><option>20个月</option><option>21个月</option><option>22个月</option><option>23个月</option><option>24个月</option>
              </select>
              &nbsp;&nbsp;到&nbsp;&nbsp;
              <select class="" v-model="loanPeriodEnd" @change="cancelAll($event)">
                <option>1个月</option><option>2个月</option><option>3个月</option><option>4个月</option><option>5个月</option><option>6个月</option>
                <option>7个月</option><option>8个月</option><option>9个月</option><option>10个月</option><option>11个月</option><option>12个月</option>
                <option>13个月</option><option>14个月</option><option>15个月</option><option>16个月</option><option>17个月</option><option>18个月</option>
                <option>19个月</option><option>20个月</option><option>21个月</option><option>22个月</option><option>23个月</option><option>24个月</option>
              </select>
            </div>
          </li>
          <li class="profit-rate" v-show="isAutoPlank">
            <div class="auto-left">预期年化收益</div>
            <div class="auto-right">
              <span class="select-span select-all"  @click="selectSelf($event,'profit-rate')">不限</span>
              <select class=""v-model="rateBegin" @change="cancelAll($event)">
                <option>1%</option><option>2%</option><option>3%</option><option>4%</option><option>5%</option><option>6%</option>
                <option>7%</option><option>8%</option><option>9%</option><option>10%</option><option>11%</option><option>12%</option>
              </select>
              &nbsp;&nbsp;到&nbsp;&nbsp;
              <select class="" v-model="rateEnd" @change="cancelAll($event)">
                <option>1%</option><option>2%</option><option>3%</option><option>4%</option><option>5%</option><option>6%</option>
                <option>7%</option><option>8%</option><option>9%</option><option>10%</option><option>11%</option><option>12%</option>
              </select>
            </div>
          </li>
          <li class="risk-level" v-show="isAutoPlank">
            <div class="auto-left">风险等级</div>
            <div class="auto-right">
              <span class="select-span selectLi" v-for="item in securityLevelOptions" :data-key="item.key" @click="selectSwitch($event)">{{item.value}}</span>
            </div>
          </li>
          <li class="select-coupon" v-show="isAutoPlank">
            <div class="auto-left">优惠券</div>
            <div class="auto-right ">
              <span class="select-span select-all" onclick="selectAll(this)">不限</span>
              <span class="select-span selectLi" v-for="item in couponsOptions" :data-key="item.key" @click="selectSwitch($event)">{{item.value}}</span>
            </div>
          </li>
        </ul>
        <div class="auto-save">
          <button class="save"@click="toSave()">保存设置</button>
        </div>
        <div class="auto-explain">
          <p>【温馨提示】</p>
          <p>1.目前自动投标不支持天标跟债权转让的购买。</p>
          <p>2.起投金额大于等于100，若（用户账户余额-账户保留余额）小于100，则自动投标无法生效。</p>
          <p>3.账户保留金额为留在账户中不去做出借的金额，设置为0表示账户中不保留金额，全部可以出借。</p>
          <p>4.最大出借金额为单个标的用户允许出借的最大金额。</p>
          <p>5.“排名”以开启自动投标的时间先后顺序为准，开启时间早的排名靠前。</p>
          <p>6.如果发布标的与用户设定规则不匹配，则保留用户在队伍中的位置。</p>
          <p>7.关闭再开启自动投标或者修改设置会重新排名。</p>
          <p>8.平台会对每个标的设置可自动投标额度，最大50%，如果排队资金已经满额，该项目无法自动投标。</p>
          <p>9.自动投标出借金额为用户在“自动投标”设置的最大金额、账户余额-账户保留余额二者中取最小值。</p>
          <p>10.自动投标会自动计算最合适的优惠券使用方式，有加息券的情况下优先使用加息券。</p>
          <p>11.自动投银行存管标需要先开启授权。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data(){
          return {
            isAutoPlank: 1,
            isHXAutoPlank: 1,
            autoPlankState: 1,
            loanTypeOptions: [{value:'企业贷'},{value:'车商贷'},{value:'个人贷'}],
            refundWayOptions: [{value:'按月等额本息'},{value:'按月付息到期还本'},{value:'到期一次性还本息'}],
            loanPeriodBegin:'1个月',
            loanPeriodEnd: '24个月',
            rateBegin: '1%',
            rateEnd: '12%',
            securityLevelOptions: [{value:'低'},{value:'中'},{value:'高'}]
          }
        }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .account-list
    background-color #fff
    padding 0 40px
    margin-bottom 20px
    overflow hidden
    .title
      margin-top 38px
      height 17px
      line-height 17px
      position relative
      padding-left 8px
      color #333333
      font-size 16px
      padding-bottom 15px
      border-bottom 1px solid #eee
    .title::after
      content ""
      width 3px
      height 16px
      position absolute
      top 1px
      left 0
      background $redBg
    .content
      padding 0 0 20px
      .auto-bid
        margin 20px auto
        .auto-bid-list
          width 100%
          li
            width 100%
            height 50px
            line-height 50px
            color #666
            overflow hidden
            .auto-left
              width 120px
              float left
              text-align left
              font-size 14px
            .auto-right
              float left
              span
                margin-right 20px
              .highlight
                cursor pointer
                color #4985ff
              .go-set
                color #027cfb
                cursor pointer
              .select-span
                border 1px solid #ccc
                border-radius: 4px
                padding 4px 10px
                cursor pointer
                font-size 12px
              .active
                border 1px solid #e02128
                color #e02128
                background url("~@/assets/userCenter/auto-select-iocn.png")no-repeat top right
              .auto-in
                width 360px
                height 34px
                line-height 34px
                padding-left 10px
                border 1px solid #ccc
              .auto-state
                display inline-block
                vertical-align top
                width 20px
                text-align center
                font-size 12px
                margin-right 0
              select
                padding 4px 17px
                border-radius 4px
        .auto-save
          width 100%
          text-align center
          margin-top 50px
          padding-bottom 50px
          border-bottom 1px solid #eee
          .save
            width 280px
            height 42px
            color #fff
            text-align center
            line-height 42px
            background $redBg
            border 0
            border-radius 4px
            font-size 14px
        .auto-explain
          width 100%
          margin 30px 0
          font-size 12px
          line-height 30px
          p:nth-child(1)
            color #666
          p:not(:first-child)
            color #999
      .switch
        display none
      .auto-switch
        width 60px
        height 22px
        margin-top 15px
        label
          position relative
          display block
          padding 1px
          border-radius 24px
          height 22px
          margin-bottom 15px
          background-color $redBg
          cursor pointer
          vertical-align top
          -webkit-user-select none
        label:before
          content ''
          display block
          border-radius 24px
          height 22px
          background-color #fff
          -webkit-transform scale(1, 1)
          -webkit-transition all 0.3s ease
        label:after
          content ''
          position absolute
          top 50%
          left 50%
          margin-top -11px
          margin-left -4px
          width 22px
          height 22px
          border-radius 22px
          background-color $redBg
          box-shadow 1px 1px 1px 1px rgba(0,0,0,0.08)
          -webkit-transform translateX(-23px)
          -webkit-transition all 0.3s ease
      .switch:checked~label:after
        -webkit-transform translateX(9px)
      .switch:checked~label:before
        background-color: #fff
      .auto-save{width:100%;text-align: center;margin-top:50px;margin-bottom:50px;}
      .save{width:280px;height:42px;color:#fff;text-align: center;line-height: 42px;background: $redBg;border:0;border-radius: 4px; font-size 14px;}
      .auto-explain{width:100%;margin:30px 0;font-size: 12px;line-height: 30px;}
      .auto-explain p:nth-child(1){color:#666;}
      .auto-explain p:not(:first-child){color:#999;}
</style>
