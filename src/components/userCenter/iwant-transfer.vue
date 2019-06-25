<!--我要转让-->
<template>
  <div class="account-list">
    <div class="title">我要转让</div>
    <div class="periodTime">
      <h4>起止时间：</h4>
      <ul>
        <li class="start-end-time">
          <el-date-picker v-model="date1" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" large></el-date-picker>
          -
          <el-date-picker v-model="date2" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
        </li>
        <li @click="pitchFun" >最近7天</li>
        <li @click="pitchFun" >1个月</li>
        <li @click="pitchFun" >2个月</li>
        <li @click="pitchFun" >3个月</li>
      </ul>
    </div>
    <div class="recordType">
      <h4>转让状态：</h4>
      <ul>
        <li class="active" @click="pitchFun">可转让</li>
        <li @click="pitchFun">转让中</li>
        <li @click="pitchFun">转让完成</li>
      </ul>
    </div>
    <table border="0" cellspacing="0" cellpadding="0" width="1120" class="record-table">
      <thead>
        <tr>
          <td>项目名称</td>
          <td>出借金额</td>
          <td>约定年利率</td>
          <td>剩余期限</td>
          <td>可转让本金</td>
          <td>出借时间</td>
          <td>项目类型</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>企业贷00000001</td>
          <td>1000000.00元</td>
          <td>8.5%</td>
          <td>3个月</td>
          <td>100000.00元</td>
          <td>2019-09-09</td>
          <td>债权转让</td>
          <td>
            <a href="javascript:void(0)">查看详情</a>
            <a href="javascript:void(0)">申请转让</a>
          </td>
        </tr>
        <tr>
          <td>企业贷00000001</td>
          <td>1000000.00元</td>
          <td>8.5%</td>
          <td>3个月</td>
          <td>100000.00元</td>
          <td>2019-09-09</td>
          <td>债权转让</td>
          <td>
            <a href="javascript:void(0)">查看详情</a>
            <a href="javascript:void(0)">申请转让</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="page-bar">
      <div class="down-box">
        <a href="javascript:void(0)"><i class="down-icon"></i>下载查询结果</a>
      </div>
      <div>
        <account-pager :pageSize="pageSize" :currentPage="currentPage" :dataUrl="dataUrl" @pagechange="pagechange"></account-pager>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountPager from '@/components/common/account-pager'

  export default {
    name: '',
    data(){
      return {
        date1: '',
        date2: '',
        pageSize: 10,
        currentPage: 1,
        // dataUrl:'http://new.vpfinance.cn:8888/admin/loanSign/unpublishedLoanSigns',
        dataUrl:''
      }
    },
    components: {
      'account-pager': AccountPager
    },
    methods:{
      pitchFun:function (e) {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass('active');
      },
      pagechange:function(page,data){
        console.log(page)
        console.log(data)
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
      border-bottom 1px solid #eeeeee
    .title::after
      content ""
      width 3px
      height 16px
      position absolute
      top 1px
      left 0
      background $redBg
    .periodTime
      margin-top 40px
      height 32px
      line-height 32px
      h4
        float left
        font-weight normal
      ul
        li
          float left
          margin-left 10px
          cursor pointer
          color #333
        li:not(:first-child)
          padding 0 18px
          height 30px
          border 1px solid #ccc
          font-size 14px
          border-radius 20px
          margin-left 20px
          line-height 30px
        .active
          color #fff
          background-color $redBg
          border 1px solid $redBg !important
    .recordType
      margin-top 30px
      height 32px
      padding-bottom 40px
      h4
        float left
        font-weight normal
        margin-top 5px
      ul
        li
          float left
          padding 0 18px
          height 30px
          line-height 30px
          border 1px solid #ccc
          font-size 14px
          color #333
          border-radius 20px
          margin-left 20px
          cursor pointer
        li:first-child
          margin-left 10px
        .active
          color #fff
          background-color $redBg
          border 1px solid $redBg
    .record-table
      thead
        tr
          height 60px
          text-align center
          background #f5f5f5
          font-size 14px
          color #666
      tbody
        tr
          height 60px
          text-align center
          font-size 14px
          color #333
          td:last-child
            a
              color #1278ec
              margin 0 10px
            a:hover
              color $redFontColor
        tr:nth-child(2n+2)
          background #f5f5f5
      tbody
        tr:hover
          background #f8f8f8
    .page-bar
      height 36px
      margin-top 80px
      padding-bottom 60px
      .down-box
        float left
        height 36px
        line-height 36px
        .down-icon
          width 19px
          height 19px
          display inline-block
          background url("~@/assets/userCenter/download.png") no-repeat
          float left
          margin-top 8px
          margin-right 10px


</style>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus'>
  /*修改element日期组件默认样式*/
  .el-date-editor
    width 135px !important
    .el-input__inner
      width 132px
      height 32px
      background-color #f5f5f5
      border-radius 16px
      padding-right 10px
    .el-input__prefix
      top -4px
</style>
