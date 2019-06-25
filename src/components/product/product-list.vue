<!--项目列表-->
<template>
  <div class="vp-layout product-list">
    <div class="retrieval">
      <!--类型-->
      <div class="product-type">
        <span :class="{on: mainType == 0}" @click="toggleType(0)">项目专区</span>
        <span :class="{on: mainType == 1}" @click="toggleType(1)">转让专区</span>
        <div class="retrieval-input">
          <input class="search-project" type="text" placeholder="搜索产品或借款人名称"  id="loanName" value="">
          <span class="search-icon" id="searchClick" @click="getLoanList(0,4)"></span>
        </div>
      </div>
      <!--筛选-->
      <ul class="retrieval-tab">
        <!--<li class="item-zone" v-if="(mainType == 0 || mainType==3) && (type != 0 && type != 13)"><a :href="type | businessModelPage" v-if="type!= 2 && type != 8">{{typeName}}专区></a></li>-->
        <li v-if="mainType == 0 || mainType==3">
          <div class="left">产品类型：</div>
          <div class="right" name="type">
                    <span v-for="item in typeList" @click="getLoanList(item.id,1)"
                          :class="{current: type == item.id}" :value="item.id">{{item.name}}</span>
          </div>
        </li>
        <li>
          <div class="left">借款期限：</div>
          <div class="right" name="deadline">
            <span value="0" @click="getLoanList(-1,2)" :class="{current: loantype == 0}">全部</span>
            <span value="y" @click="getLoanList(0,2)"  :class="{current: loantype == 2}">天标</span>
            <span value="1" @click="getLoanList(1,2)" :class="{current: term == 1}">1个月</span>
            <span value="2" @click="getLoanList(2,2)" :class="{current: term == 2}">2个月</span>
            <span value="3" @click="getLoanList(3,2)" :class="{current: term == 3}">3个月</span>
            <span value="4" @click="getLoanList(4,2)" :class="{current: term == 4}">4-6个月</span>
            <span value="5" @click="getLoanList(5,2)" :class="{current: term == 5}">6个月以上</span>
          </div>
        </li>

      </ul>
    </div>
    <!--出借产品列表-->
    <div class="container list-info">
      <input id="backUrl" value="" type="hidden"/>
      <div class="title">
        <h1 class="c-000">{{mainType | mainTypeName}}列表</h1>

        <div class="title-info">
          <div class="title-item">
            <p class="font-14">累计成交金额</p>

            <p><span class="font-20 arial">2556132560.67</span>元</p>
          </div>
          <div class="title-item">
            <p class="font-14">累计成交笔数</p>

            <p><span class="font-20 arial">582</span>笔</p>
          </div>
        </div>
      </div>
      <div v-if="loanList<=0" class="noinfo">暂无相关产品信息</div>
      <div v-else>
        <table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
          <thead>
          <tr>
            <td class="pl-name">项目名称</td>
            <td class="pl-rate">{{mainType == 1 ? '转让利率' : '约定年利率' }}</td>
            <td class="pl-money">项目总额（元）</td>
            <td class="pl-term">期限</td>
            <td class="pl-progress">借款进度</td>
            <td class="pl-state">状态</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="loan in loanList">
            <td class="pl-name font-14 padding_left_5">
              <!--<a :href="loan.id | productInfoUrl(mainType,loan.product,loan.productType,type)" :alt="loan.loanTitle">{{loan.loanTitle}}</a>-->
              <a href="javascript:void(0)">{{loan.loanTitle}}</a>
              <span v-for="flag in loan.flag" :class="flag" v-if="flag=='zhuan'"></span>
              <!--浮动计息产品标志-->
              <span v-if="loan.graceDays > 0 " class="float"  :data-tips="loan.rate|tipsFilter(loan.term,loan.graceRate,loan.graceDays)"  onmouseover="showTips(this)"  onmouseleave="hideLayerTips()"></span>
              <span v-for="flag in loan.flag" :class="flag" v-if="flag=='bao'"></span>

            </td>
            <td style="position: relative">
              <div class="pl-rate color-000">
                <span>{{loan.rate }}%</span>
                <span class="add-rate" v-if="loan.isAddRate != 0.00" style="position: absolute;top:26px;right: 15px;">{{'+'+loan.isAddRate+'%'}}</span>
              </div>
            </td>
            <td class="pl-money">
              <span class="arial font-18">{{loan.issueLoan}}</span>元
            </td>
            <!--期限 start-->
            <td v-if="mainType == 0 || mainType == 3" class="pl-term">
              {{loan.term}}{{loan.loantype == 2 ? "天" : "个月"}}
            </td>
            <td v-if="mainType ==1" class="pl-term">  <!--转让专区-->
              {{loan.term}}{{loan.refundWay == 3 && loan.loantype == 6 ? "天" : "个月"}}
            </td>
            <td  v-if="mainType ==2" class="pl-term">
              {{loan.term}}个月
            </td>
            <!--期限 end-->

            <!--还款进度 start-->
            <td class="pl-progress"  v-if="loan.loanstate !=1">
              <div class="ui-progress">
                            <span class="ui-progressbar"
                                  :style="{ backgroundColor: loan.process > 50 ? (loan.process > 70 ? '#ff5050' : '#22cdf0') : '#ffb600', width: loan.process+'%'}"></span>
              </div>
              <em>{{loan.process}}%</em>
            </td>
            <!--还款进度 end-->
            <td v-if="loan.loanstate==1">
              <div class="time-count-down">
                <strong class="t-d">{{loan.remaining | formatTime(1)}}</strong>天
                <strong class="t-h">{{loan.remaining | formatTime(2)}}</strong>时
                <strong class="t-m">{{loan.remaining | formatTime(3)}}</strong>分
                <strong class="t-s">{{loan.remaining | formatTime(4)}}</strong>秒
              </div>
            </td>

            <td class="pl-state">
              <a href="#/product/productDetail" class="loan-btn"
                 :class="{'advance-btn': loan.loanstate==1, 'invest-btn': loan.loanstate==2, 'over-btn':loan.loanstate==3||loan.loanstate==4}"
                 :data-state="loan.loanstate">{{loan.loanstate | loanState(loan.process)}}</a>
            </td>

          </tr>
          </tbody>
        </table>
        <div class="page-bar">
          <!--<ul>-->
            <!--<li v-if="cur!=1"><a @click="btnClick(1)">首页</a></li>-->
            <!--<li v-if="cur!=1"><a @click="btnClick(&#45;&#45;cur)">上一页</a></li>-->
            <!--<li v-for="index in indexs"  :class="{ active: cur == index}">-->
              <!--<a @click="btnClick(index)">{{ index }}</a>-->
            <!--</li>-->
            <!--<li v-if="cur!=all"><a @click="btnClick(++cur)">下一页</a></li>-->
            <!--<li v-if="cur!=all"><a @click="btnClick(all)">末页</a></li>-->
            <!--<li><a>共<i>{{all}}</i>页</a></li>-->
          <!--</ul>-->
          <product-pager :pageSize="pageSize" :currentPage="currentPage" :dataUrl="dataUrl" @pagechange="pagechange"></product-pager>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import ProductPager from '@/components/common/product-pager'

  export default {
    name: '',
    data() {
      return {
        mainType: this.$route.query.mainType || 0,  //出借类型   0 出借， 1 转让
        type: this.$route.query.type || 0, //产品类型  0 全部（必传）
        typeList: [{"id":0,"name":"全部"},{"id":1,"name":"车商贷"},{"id":10,"name":"企业贷"},{"id":13,"name":"个人贷"}],
        term: 0,            //期限     0 全部  （必传）
        loantype: 0,        //标的类型  0 全部   1 普通标， 2 天标  （必传）
        loanList:[{"loantype":1,"graceDays":0,"isAddRate":"0.30","loanstate":2,"loanTitle":"企业贷201905241","productType":0,"id":1002448,"process":"4.77","product":4,"rate":"9.00","flag":["bao","zhuan"],"term":6,"issueLoan":500000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"企业贷201905231","productType":0,"id":1002456,"process":"100.00","product":4,"rate":"7.20","flag":["bao"],"term":1,"issueLoan":500000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"企业贷201905223","productType":0,"id":1002438,"process":"100.00","product":4,"rate":"8.50","flag":["bao"],"term":3,"issueLoan":500000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"车商贷201905223","productType":2,"id":1002421,"process":"100.00","product":4,"rate":"7.20","flag":["bao"],"term":1,"issueLoan":120000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"车商贷201905222","productType":2,"id":1002420,"process":"100.00","product":4,"rate":"7.20","flag":["bao"],"term":1,"issueLoan":50000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"车商贷201905221","productType":2,"id":1002416,"process":"100.00","product":4,"rate":"7.20","flag":["bao"],"term":1,"issueLoan":140000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"企业贷201905222","productType":0,"id":1002431,"process":"100.00","product":4,"rate":"8.50","flag":["bao"],"term":3,"issueLoan":500000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.30","loanstate":3,"loanTitle":"企业贷201905221","productType":0,"id":1002430,"process":"100.00","product":4,"rate":"9.00","flag":["bao","zhuan"],"term":6,"issueLoan":500000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"企业贷201905203","productType":0,"id":1002417,"process":"100.00","product":4,"rate":"7.20","flag":["bao"],"term":1,"issueLoan":500000,"graceRate":"0.00"},{"loantype":1,"graceDays":0,"isAddRate":"0.00","loanstate":3,"loanTitle":"企业贷201905202","productType":0,"id":1002390,"process":"100.00","product":4,"rate":"7.80","flag":["bao"],"term":2,"issueLoan":500000,"graceRate":"0.00"}],
        pageSize: 10,
        currentPage: 1,
        //dataUrl:'http://new.vpfinance.cn:8888/admin/loanSign/unpublishedLoanSigns'
        dataUrl:''
      }
    },
    components:{
      'product-pager': ProductPager
    },
    mounted(){
      console.log(this.mainType)
      console.log(this.type)
    },
    filters:{
      mainTypeName:function (value) {
        return value == 0 ? '项目': '转让公示'
      },
      //产品状态
      loanState: function (n, process) {
        switch (n) {
          case 1:
            return '预售中';
            break;
          case 2:
            return process == 100.00 ? '满标审核' : '我要出借';
            break;
          case 3:
            return '还款中';
            break;
          case 4:
            return '已完成';
            break;
        }
      },
    },
    methods:{
      toggleType: function (n) {  //出借选项
        this.mainType = n;
        // this.getLoanList(n, 0);
        //this.cur = 1;
      },

      getLoanList: function (data, n) {
        var _this = this;

        switch (n) {
          case 0:
            _this.mainType = data;//出借类型;
            break;
          case 1:
            _this.type = data;//产品类型;
            break;
          case 2:
            //_this.term = data;//借款期限;
            if (data == -1) {  //全部
              _this.loantype = 0;
              _this.term = 0;
            } else if (data == 0) {   //天标
              _this.loantype = 2;
              _this.term = 0;
            } else {
              _this.loantype = 1;  //普通标
              _this.term = data;
            }

            break;
          case 4:
            //_this.loanTitle = data;//搜索;
            break;
          case 5:
            _this.curentPage = data;//页数;
            break;
        }
      },
      pagechange:function(page,data){
        console.log(page)
        console.log(data)
      }
    },
    watch:{
      '$route'(){
        this.mainType = this.$route.query.mainType;
        this.type = this.$route.query.type;
      }
    }

  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .product-list
    margin 20px auto
    .retrieval
      width 1200px
      margin 20px 0
      background #fff
      overflow hidden
      .product-type
        border-bottom 1px solid #eee
        span
          display inline-block
          width 120px
          height 50px
          line-height 50px
          text-align center
          cursor pointer
      .product-type>span.on
        border-bottom 2px solid #ee3c43
      h3
        float left
        width 100%
        margin-bottom 8px
        font-weight normal
        overflow hidden
      .retrieval-tab
        float left
        font-size 14px
        margin 10px
        overflow hidden
        li
          float left
          margin 10px 20px
          overflow hidden
        li.item-zone
          float right
          margin 5px 20px
          color #ee3c43
          a
            background #57bdde
            padding 5px 15px
            line-height 24px
            display block
            border-radius 3px
            color #fff
        li
          .left
            float left
            width 80px
            height 30px
            line-height 30px
            overflow hidden
          .right
            float left
            line-height 30px
            overflow hidden
            span
              padding 0 20px
              float left
              text-align center
              margin-right 10px
              display inline
              border-radius 3px
              overflow hidden
              cursor pointer
            span:hover,.current
              background #ee3c43
              color #FFF
      .retrieval-input
        float right
        width 280px
        height 50px
        margin-right 10px
        overflow hidden
        position relative
        .search-project
          width 90%
          height 34px
          margin 8px auto
          padding 0 4%
          line-height 34px
          border-radius 3px
          border 1px solid #ccc
          font-size 14px
          color #333
          outline none
        .search-project:focus
          border: 1px solid #333
        .search-icon
          width 30px
          height 30px
          position absolute
          right 10px
          top 12px
          background url("~@/assets/product/icon-search.png") no-repeat center
          cursor pointer
    .list-info
      width 1140px
      padding 30px
      background #fff
      .title
        height 80px
        overflow hidden
        h1
          float left
          line-height 60px
          font-weight normal
          font-size 24px
      .title-info
        float right
        .title-item
          float left
          margin 10px 20px
          p:last-child
            color #333
            font-size 18px
        .title-item:first-child
          border-right 1px solid #eee
          padding-right 20px
      .oninfo
        text-align center
        font-size 18px
        line-height 60px
      table
        border-collapse collapse
        border-spacing 0
        tr
          height 80px
          line-height 80px
          text-align center
          border-bottom solid 1px #E5E7EE
          transition all ease 0.3s
          overflow hidden
        tbody
          tr:hover
            background #F8F8F8
        .pl-name
          width 280px
          padding-left 10px
          text-align left
          span
            display inline-block
            vertical-align middle
            margin 0 2px
          .zhuan
            width 55px
            height 18px
            background url("~@/assets/product/productTag/tag-zhuan.png") center no-repeat
            background-size 55px 18px
          .bao
            width 74px
            height 18px
            background url("~@/assets/product/productTag/tag-bao.png") center no-repeat
            background-size 74px 18px
          .float
            width 68px
            height 18px
            background url("~@/assets/product/productTag/tag-float.png") center no-repeat
            background-size 66px 18px
        .pl-money
          width 170px
        .pl-term
          width 90px
        .pl-state
          width 120px
        .pl-rate
          width 120px
          text-align left
          .add-rate
            width 60px
            height 24px
            line-height 24px
            border-radius 3px
            color #fff
            background #ee3c43
            display inline-block
            margin-left 10px
            position relative
          .add-rate:before
            position absolute
            top 6px
            left -8px
            content: ""
            width 0
            height 0
            border-top 6px solid transparent
            border-bottom 6px solid transparent
            border-right 8px solid #ee3c43
        .pl-progress
          width 202px
          .ui-progress
            display inline-block
            width 100px
            height 10px
            border-radius 5px
            background #eee
            overflow hidden
            margin-top 30px
            margin-left 30px
            .ui-progressbar
              display block
              width 60.2%
              height 10px
              border-radius 5px
              background #ffb600
            em
              color #000
              margin-left 10px
              margin-right 20px
        .loan-btn
          display block
          width 100px
          height 30px
          text-align center
          line-height 30px
          background #ff5050
          border-radius 5px
          color #FFF
          margin 20px auto
          overflow hidden
        .invest-btn
          background #ff5050
        .invest-btn:hover
          background #d24040
        .advance-btn
          background #ff5050
        .advance-btn:hover
          background #d24040
        .over-btn
          background #ccc
        .full-btn
          background #92E1A0
      .page-bar
        margin 40px auto
        overflow hidden
        text-align center
        li
          display inline-block
        li:first-child>a
          margin-left 0px
        a
          border 1px solid #ddd
          text-decoration none
          position relative
          float left
          padding 6px 12px
          margin-left -1px
          line-height 1.42857143
          color #337ab7
          cursor pointer
        a:hover
          background-color #eee
        .active a
          color #fff
          cursor default
          background-color #337ab7
          border-color #337ab7
        i
          font-style normal
          color #d44950
          margin 0px 4px
          font-size 12px

</style>
