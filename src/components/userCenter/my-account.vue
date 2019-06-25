<!--我的账户-->
<template>
  <div>
    <div class="account-list">
      <div class="title">我的资产</div>
      <div class="content">
        <div class="content-left">
          <p><span>88888.88</span><span>元</span></p>
          <p>资产总额</p>
        </div>
        <div class="content-right">
          <div class="right-list">
            <p><span>5555.55</span><span>元</span></p>
            <p><span>待回款金额</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>4444.44</span><span>元</span></p>
            <p><span>冻结金额</span></p>
          </div>
          <div class="right-list">
            <p><span>6666.66</span><span>元</span></p>
            <p><span>可用余额</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="account-list">
      <div class="title">我的收益</div>
      <div class="content">
        <div class="content-left">
          <p><span>22222.22</span><span>元</span></p>
          <p>累计收益</p>
        </div>
        <div class="content-right">
          <div class="right-list">
            <p><span>3333.33</span><span>元</span></p>
            <p><span>出借收益</span></p>
          </div>
          <div class="right-list">
            <p><span>1111.11</span><span>元</span></p>
            <p><span>邀请奖励</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>1000.00</span><span>元</span></p>
            <p><span>其他收益</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="account-list">
      <div class="title">我的出借</div>
      <div class="content">
        <div class="content-left">
          <p><span>88</span><span>笔</span></p>
          <p>累计出借</p>
        </div>
        <div class="content-right">
          <div class="right-list">
            <p><span>55</span><span>笔</span></p>
            <p><span>募集中</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>44</span><span>笔</span></p>
            <p><span>回款中</span><i class="rig-icon"></i></p>
          </div>
          <div class="right-list">
            <p><span>66</span><span>笔</span></p>
            <p><span>已完成</span><i class="rig-icon"></i></p>
          </div>
        </div>
      </div>
      <div class="ranking">
        <p>您的出借排名击败了平台<span>50.00%</span>的用户</p>
        <div class="progress-bg">
          <div class="progress-col"></div>
        </div>
        <div class="ranking-btn">
          <a href="#/userCenter/loanRanking">查看出借排行榜</a>
        </div>
      </div>
    </div>
    <div class="account-list">
      <div class="title">我的出借日历</div>

      <div class="dateOuter">
        <div class="calendarTitle">
          <div class="left-title">
            <span class="prePage" @click.stop.prevent="lastMonthClick()"></span>
            <span class="year-month">{{checkYear}} - {{checkMonth | calMonth}}</span>
            <span class="nextPage" style="" @click.stop.prevent="nextMonthClick()"></span>
          </div>
          <div class="right-text">
            <p>本月出借  1笔  共100000.00元</p>
            <p>本月待回款  1笔  共100000.00元</p>
            <p>本月已回款  1笔  共100000.00元</p>
          </div>
        </div>
        <!--表体-->
        <div class="calendarWrap">
          <div class="calendarWrap-left">
            <div class="everyWeekDay">
              <span v-for="(item,index) in weekDays" class="weekday">{{item}}</span>
            </div>
            <div class="everyDay">
              <!--空白站位-->
              <span v-for="item1 in ThisWeekDayCounrt" class="days" style="visibility: hidden">{{item1}}</span>
              <!--这个月的天数-->
              <span v-for="(item,index) in thisDayCount" class="days">
                <span @click.stop.prevent="getdate($event,item)" :class="{on: checkYear == nowYear && checkMonth == nowMonth && index+1 == nowDay}">{{index+1}}</span>
              </span>
            </div>
          </div>
          <div class="calendarWrap-right">
            <div class="left-day">{{checkDay}}</div>
            <div class="right-cont">
              <ul>
                <li>
                  <p>企业贷201808202</p>
                  <p>
                    <span>出借金额</span>
                    <span class="c-red">68888.86 元</span>
                    <a href="javascript:void(0)">查看详情</a>
                  </p>
                </li>
                <li>
                  <p>企业贷201808202</p>
                  <p>
                    <span>待回款金额</span>
                    <span class="c-red">68888.86 元</span>
                    <a href="javascript:void(0)">查看详情</a>
                  </p>
                </li>
                <li>
                  <p>企业贷201808202</p>
                  <p>
                    <span>已回款金额</span>
                    <span class="c-red">68888.86 元</span>
                    <a href="javascript:void(0)">查看详情</a>
                  </p>
                </li>
                <li>...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>




    </div>
  </div>
</template>

<script>

    export default {
      name: '',
      data:function() {
        return {
          date : new Date(),
          nowYear : new Date().getFullYear(),
          nowMonth : new Date().getMonth() + 1,
          nowDay : new Date().getDate(),
          weekDays : new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六"),
          lastDays : new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
          checkYear : '',
          checkMonth : '',
          checkDay: new Date().getDate(), //选中的日期默认当天
          thisDayCount:'',//这个月有几天
          ThisWeekDayCounrt:"",//这个周有多少天
        }
      },
      mounted(){
      },
      computed:{

      },
      created: function() {
        var _this=this;
        _this.checkYear=_this.nowYear;
        _this.checkMonth=_this.nowMonth;

        setTimeout(function(){
          //初始调用服务请求
          _this.getThisMonthDay(_this.checkYear,_this.checkMonth);
          _this.getThisWeekDay(_this.checkYear,_this.checkMonth,1)
        },1000)

      },
      filters:{
        calMonth:function (val) {
          if(val < 10){
            return '0'+val
          }else {
            return val
          }
        }
      },
      methods: {
        getdate:function(e,item){//点击天根据数据渲染右侧的内容
          console.log(item);
          $(e.target).addClass('active');
          $(e.target).parent().siblings().find('span').removeClass('active');
          this.checkDay = item;
        },
        lastMonthClick:function () {//切换上一个月
          if (this.checkMonth == 1) {
            this.checkYear = this.checkYear - 1;
            this.checkMonth = 12;
          } else {
            this.checkMonth = this.checkMonth - 1;
          }

          //请求数据 this.http;
          this.requreData();

        },
        nextMonthClick:function () {//切换下一个月
          if (this.checkMonth == 12) {
            this.checkYear = this.checkYear + 1;
            this.checkMonth = 1;
          } else {
            this.checkMonth = this.checkMonth + 1;
          }

          //请求数据 this.http;
          this.requreData();
        },
        requreData:function(){
          //请求数据 this.http;
          this.getThisMonthDay(this.checkYear,this.checkMonth);
          this.getThisWeekDay(this.checkYear,this.checkMonth,1);
          $('.active').removeClass('active');
        },
        isLeapYear:function (year){
          var isLeap=false;
          if(0==year%4&&((year%100!=0)||(year%400==0))){
            isLeap=true;
          }
          return isLeap;
        },
        getThisMonthDay:function (year, month) {
          var thisDayCount = this.lastDays[month - 1];
          if ((month == 2) && this.isLeapYear(year)) {
            thisDayCount++;
          }
          this.thisDayCount=thisDayCount;
        },
        getThisWeekDay:function (year, month, date) {
          var thisDate = new Date(year, month - 1, date);
          this.ThisWeekDayCounrt=thisDate.getDay();
        },
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
      border-bottom 1px solid #eeeeee
    .title::after
      content ""
      width 3px
      height 16px
      position absolute
      top 1px
      left 0
      background $redBg
    .content
      padding 30px 0
      height 68px
      .content-left
        float left
        height 68px
        width 348px
        border-right 1px solid #eeeeee
        p
          text-align center
          font-size 14px
          color #999
          margin-top 2px
        p:first-child
          span:first-child
            font-size 28px
            color $redFontColor
            margin-right 5px
      .content-right
        float right
        width 770px
        .right-list
          float left
          width 33%
          p
            color #999
            font-size 14px
            text-align center
            margin-top 8px
          p:first-child
            span:first-child
              color #010101
              font-size 18px
              margin-right 5px
      .rig-icon
        width 18px
        height 18px
        display inline-block
        background url("~@/assets/userCenter/rig_icon.png") no-repeat
        vertical-align middle
        margin-left 6px
    .ranking
      margin-bottom 34px
      height 36px
      p
        color #333333
        font-size 14px
      .progress-bg
        float left
        width 918px
        height 6px
        background-color #f6e9ea
        border-radius 3px
        margin-top 8px
        position relative
        .progress-col
          position absolute
          left 0
          top 0
          height 6px
          border-radius 3px
          background-color $redBg
          width 50%
      .ranking-btn
        float right
        margin-top -20px
        a
          width 170px
          height 36px
          border-radius 4px
          border solid 1px $redFontColor
          line-height 36px
          text-align center
          font-size 14px
          color $redFontColor
          display inline-block
    /*日历样式*/
    .dateOuter
      .calendarTitle
        height 108px
        width 1120px
        background-color #f5f5f5
        border-radius 4px
        margin-top 20px
        .left-title
          float left
          margin-top 28px
          margin-left 80px
          width 400px
          .prePage
            margin-right 36px
            width 24px
            height 24px
            display inline-block
            cursor pointer
            background url("~@/assets/userCenter/previous.png") no-repeat
            background-size 100% 100%
          .nextPage
            margin-left 36px
            width 24px
            height 24px
            display inline-block
            cursor pointer
            background url("~@/assets/userCenter/next.png") no-repeat
            background-size 100% 100%
          .year-month
            font-size 30px
            letter-spacing 1px
            color #333333
        .right-text
          float left
          height 70px
          margin-top 18px
          border-left 2px solid $redBg
          padding-left 20px
          p
            font-size 16px
            color $redFontColor
          p:not(:first-child)
            margin-top 4px
      .calendarWrap
        .calendarWrap-left
          width 460px
          margin-top 35px
          margin-bottom 20px
          float left
          .everyWeekDay
            .weekday
              display inline-block
              text-align center
              width 13.6%
              font-size 16px
              color #999
          .everyDay
            margin-top 10px
            .days
              display inline-block
              text-align center
              line-height 40px
              height 40px
              width 40px
              padding 5px 11px
              cursor pointer
              color #333
              font-size 16px
              span
                width 40px
                height 40px
                display inline-block
                border-radius 50%
              span:hover
                background-color $mainColor
                color #FFFFFF
              .active
                background-color $redFontColor
                color #FFFFFF
              .on
                background-color $redFontColor
                color #FFFFFF
        .calendarWrap-right
          float right
          width 640px
          height 270px
          border 1px solid $redBg
          margin-top 40px
          text-align center
          .left-day
            float left
            font-size 60px
            color $redFontColor
            height 210px
            width 190px
            line-height 210px
            border-right 1px solid $redFontColor
            margin-top 30px
          .right-cont
            float left
            width 445px
            height 210px
            margin-top 30px
            text-align left
            ul
              li
                font-size 14px
                margin-left 50px
                position relative
                padding-left 8px
                color #333
                p
                  a
                    float right
                    color #1278ec
                    margin-right 50px
                p:not(:first-child)
                  margin-top 4px
              li:not(:first-child)
                margin-top 20px
              li:not(:last-child)::before
                content ''
                width 4px
                height 4px
                position absolute
                top 8px
                left -8px
                background-color $redBg
              li:last-child
                color $redBg
                font-size 30px
                margin-top 0
                margin-left 35px
</style>

