<!--出借排行榜-->
<template>
  <div>
    <img style="width: 100%" src="@/assets/userCenter/bananer.png" alt="出借风云榜"/>
    <div class="box-center invest-ranking">
      <div class="ranking-list top-10-ranking">
        <div class="title">
          <!--<span class="line"></span>-->
          <span class="name">出借排行榜TOP 10</span>
          <span class="line"></span>
        </div>
        <ul>
          <li class="my-ranking-info">
            <div class="ranking-num">
              <div class="avator">
                <img :src="top10.head">
              </div>
              <span class="player-name">{{top10.name}}</span>
            </div>
            <div class="user-name">
              <span class="beat"></span>
              击败了{{top10.number}}%的平台用户
            </div>
            <div class="invest-num">￥{{top10.sumTenderMoney}}</div>
          </li>
          <li class="my-ranking-info">
            <div class="ranking-num">排名</div>
            <div class="user-name">用户ID</div>
            <div class="invest-num">出借金额(￥)</div>
          </li>
          <li class="my-ranking-info" v-for="(item,index) in top10.list">
            <div class="ranking-num">
              <span class="top-three" v-if="index < 3"></span>
              {{index >= 3 ?  index+1 : ""}}
            </div>
            <div class="user-name">
              <div class="avator">
                <img :src="'https://www.vpfinance.cn:443/'+item.head">
              </div>
              <div class="player-name">{{item.userName}}</div>
            </div>
            <div class="invest-num">{{item.tenderMoney}}</div>
          </li>
          <!--<li class="my-ranking-info">-->
          <!--<div class="ranking-num">-->
          <!--<span class="top-three"></span>-->
          <!--</div>-->
          <!--<div class="user-name">-->
          <!--<div class="avator">-->
          <!--<img src="img/avator.png">-->
          <!--</div>-->
          <!--<div class="player-name">王小二</div>-->
          <!--</div>-->
          <!--<div class="invest-num">0999分</div>-->
          <!--</li>-->
        </ul>
        <p class="foot-note">注：只有微品金融出借用户才能参与排名</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data(){
            return  {
                top10 : {"level":"初学乍练V1","background":"/resources/images/medal/background_default.png","name":"139****0","list":[{"level":"神功绝世V10","userId":"802","userName":"186****9","head":"/upload/userheader/20160722231657.JPG","tenderMoney":"31312164.73"},{"level":"登峰造极V8","userId":"395660","userName":"138****4","head":"/upload/userheader/20160722231507.JPG","tenderMoney":"28004264.46"},{"level":"神功绝世V10","userId":"401343","userName":"187****4","head":"/resources/images/headimg.jpg","tenderMoney":"20744340.52"},{"level":"自成一派V7","userId":"396039","userName":"156****9","head":"/resources/images/headimg.jpg","tenderMoney":"20365612.75"},{"level":"神功绝世V10","userId":"393375","userName":"186****3","head":"/resources/images/headimg.jpg","tenderMoney":"17801083.08"},{"level":"自成一派V7","userId":"1017","userName":"133****9","head":"/resources/images/headimg.jpg","tenderMoney":"14208737.23"},{"level":"自成一派V7","userId":"1087","userName":"186****5","head":"/resources/images/headimg.jpg","tenderMoney":"14194823.75"},{"level":"略有小成V4","userId":"1436","userName":"138****1","head":"/resources/images/headimg.jpg","tenderMoney":"13248886.32"},{"level":"出神入化V9","userId":"1472","userName":"186****9","head":"/resources/images/headimg.jpg","tenderMoney":"12788333.33"},{"level":"自成一派V7","userId":"397268","userName":"130****4","head":"/resources/images/headimg.jpg","tenderMoney":"12350022.42"}],"head":"https://www.vpfinance.cn:443/upload/user/20190604170040.jpg","isTender":"2"}
            }

        }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .invest-ranking
    width 1200px
    margin 0 auto
    overflow hidden
    .ranking-list
      margin 30px 0
      padding 20px 0
      background-color #fff
      .title
        width 1100px
        height 60px
        margin 30px auto
        .name
          padding 0 20px
          background #fff
          text-align center
          color #f7331c
          display block
          width 360px
          height 50px
          line-height 50px
          font-size 40px
          z-index 10
          position relative
          margin 0 auto
        .line
          display inline-block
          border-top 1px solid #f7331c
          width 100%
          margin-top -28px
          float left

      ul
        width 1100px
        border-radius 10px
        margin 0 auto
        overflow hidden
        li
          display block
          width 1100px
          height 60px
          background #fff7d4
          overflow hidden
          color #333
          font-size 18px
          .ranking-num
            text-align center
          .user-name
            .avator
              width 40px
              height 40px
              float left
              border-radius 20px
              margin 10px
              overflow hidden
            .player-name
              float left
          img
            width 100%
            height 100%
        li:nth-child(2n)
          background #fbefba
        li:first-child
          height 90px
          background #f7331c
          color #fff
          div
            line-height 90px
            height 90px
          .ranking-num
            text-align left
            .avator
              float left
              height 60px
              width 60px
              border-radius 30px
              overflow hidden
              margin 15px 10px 15px 60px
          .beat
            float left
            display inline-block
            width 32px
            height 32px
            background url("~@/assets/userCenter/beat.png") no-repeat
            margin-top 30px
        li>div
          width 33%
          line-height 60px
          height 60px
          overflow hidden
          float left
          .top-three
            display inline-block
            width 44px
            height 44px
            margin 8px auto
        li:nth-child(3)
          .top-three
            background url("~@/assets/userCenter/top-three.png") center 0px no-repeat
        li:nth-child(4)
          .top-three
            background url("~@/assets/userCenter/top-three.png") center -58px no-repeat
        li:nth-child(5)
          .top-three
            background url("~@/assets/userCenter/top-three.png") center -118px no-repeat
      .foot-note
        margin-top 15px
        text-align center
</style>
