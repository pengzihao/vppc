<!--借款计算器-->
<template>
 <div class="wrapper" @click="hideTime">
   <div class="calculator">
     <div class="cal-term">
       <div class="title">借款计算器</div>
       <div class="term">
         <ul class="term-ul clearfix">
           <li class="term-li">
             <span class="firs-span">出借金额</span>
             <span class="last-span">
               <input type="number" value="10000.0">
             </span>
           </li>
           <li class="term-li">
             <span class="firs-span">借款期限</span>
             <span class="last-span time" @click="showTime">3个月</span>
             <ul class="time-ul">
               <li v-for="item in time" @click="getTime">{{item}}</li>
             </ul>
           </li>
           <li class="term-li">
             <span class="firs-span">约定年利率</span>
             <span class="last-span">
               <input type="number" value="9.0">
             </span>
           </li>
           <li class="term-li">
             <span class="firs-span">还款方式</span>
             <span class="last-span repayment" @click="showRepayment">等额本息</span>
             <ul class="repayment-ul">
               <li @click="getRepayment">等额本息</li>
               <li @click="getRepayment">按月付息，到期还本</li>
             </ul>
           </li>
         </ul>
         <div class="tips">请输入内容</div>
         <div class="startCal-Btn">开始计算</div>
       </div>
     </div>
     <div class="cal-cont">
       <div class="title">借款计算</div>
       <div class="content">
         <ul>
           <li>
             <span>本金</span>
             <span>总利息</span>
             <span>本息总额</span>
           </li>
           <li>
             <span>￥10000.00</span>
             <span>￥10000.00</span>
             <span>￥10000.00</span>
           </li>
         </ul>
         <div class="tableBox">
           <div class="table-title">偿还时间表</div>
           <table cellspacing="0" cellpadding="15">
             <tbody>
             <tr>
               <td bgcolor="#1591EC">月份</td>
               <td bgcolor="#1591EC">月收总额</td>
               <td bgcolor="#1591EC">月收本金</td>
               <td bgcolor="#1591EC">月收利息</td>
               <td bgcolor="#1591EC">待收本息</td>
             </tr>
             <tr>
               <td>1月</td>
               <td>3350.01</td>
               <td>3325.01</td>
               <td>25.00</td>
               <td>6700.03</td>
             </tr>
             <tr>
               <td>2月</td>
               <td>3350.01</td>
               <td>3333.33</td>
               <td>16.69</td>
               <td>3350.01</td>
             </tr>
             <tr>
               <td>3月</td>
               <td>3350.01</td>
               <td>3341.66</td>
               <td>8.35</td>
               <td>0.00</td>
             </tr>
             </tbody>
           </table>
         </div>
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
        time: ["1个月","2个月","3个月","4个月","5个月","6个月","7个月","8个月","9个月","10个月","11个月","12个月","13个月","14个月","15个月","16个月","17个月","18个月","19个月","20个月","21个月","22个月","23个月","24个月"]
      }
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false);
      this.$emit('public_returnTop', false);
    },
    methods: {
      showTime:function (e) {
        e.stopPropagation();
        $('.repayment-ul').hide();
        $('.time-ul').show();
      },
      getTime:function (e) {
        var timeText = e.target.innerText;
        $('.time').text(timeText);
        $('.time-ul').hide();
      },
      hideTime:function () {
        $('.time-ul').hide();
        $('.repayment-ul').hide();
      },
      showRepayment:function (e) {
        e.stopPropagation();
        $('.time-ul').hide();
        $('.repayment-ul').show();
      },
      getRepayment:function (e) {
        var repaymentText = e.target.innerText;
        $('.repayment').text(repaymentText);
        $('.repayment-ul').hide();
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .wrapper
    width 100%
    background-color #E5E7EE
    .calculator
      width 1180px
      margin 0 auto
      padding-bottom 50px
      .cal-term
        width 100%
        background #FFFFFF
        padding-bottom 40px
        .title
          width 1100px
          padding 0 40px
          height 60px
          line-height 60px
          border-bottom 1px solid #E5E7EE
          color #333333
          font-size 24px
        .term
          width 1100px
          padding 0 40px
          .term-ul
            width 100%
            margin-top 40px
            .term-li
              float left
              width 30%
              height 40px
              margin-left 15%
              margin-bottom 15px
              line-height 40px
              position relative
              .firs-span
                font-size 14px
                color #333
                float left
                width 75px
              .last-span
                width: 227px;
                height: 40px;
                background: #f4f4f4;
                padding-left 10px
                position: relative;
                float left
                input
                  display block
                  width 217px
                  height: 40px
                  line-height 40px
                  border none
                  background none
                  font-size 14px
                  color #000
              ul
                position absolute
                background-color #fff
                left 75px
                top 42px
                z-index 100
                width 235px
                border solid 1px #1388E8
                border-radius 3px
                display none
                li
                  width 215px
                  padding 0 10px
                  height 40px
                  line-height 40px
                  font-size 14px
                  cursor pointer
                  overflow hidden
                li:hover
                  background #1388E8
                  color #FFF
          .tips
            line-height 20px
            font-size 16px
            text-align center
            color #f00
            margin-top 30px
          .startCal-Btn
            background #1178D8
            color #FFF
            width 237px
            height 45px
            border-radius 3px
            cursor pointer
            font-size 18px
            margin 40px auto 0
            text-align center
            line-height 45px
      .cal-cont
        width 100%
        background-color #fff
        margin-top 40px
        .title
          width 1100px
          padding 0 40px
          height 60px
          line-height 60px
          border-bottom solid 1px #E5E7EE
          color #333333
          font-size 24px
        .content
          padding 0 40px 40px
          width 1100px
          ul
            width 100%
            padding 40px 0
            border-bottom 1px solid #E5E7EE
            li
              width 100%
              span
                 display inline-block
                 width 32%
                 text-align center
            li:first-child
              font-size 18px
              color #666
            li:last-child
              font-size 36px
              color $mainColor
              padding-top 10px
          .tableBox
            width 100%
            margin-top 40px
            .table-title
              font-size 24px
              color #333
            table
              margin-top 20px
              width 1100px
              border 0
              tr
                height 50px
                color #000
                font-size 14px
                td
                  text-align center
                  border-left 2px solid #fff
              tr:first-child
                color #fff
              tr:nth-child(odd)
                background-color #E1E4E9
              tr:nth-child(even)
                background-color #FAFBFC



</style>



