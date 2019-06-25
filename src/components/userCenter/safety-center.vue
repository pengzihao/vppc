<!--安全中心-->
<template>
    <div>
      <div class="account-list">
        <div class="title">安全中心</div>
        <div class="content">
          <div class="user-head">
            <div class="left-img" @click="showCropper(true)">
              <img src="@/assets/userCenter/mine_icon.png" v-if="userImg == ''" alt="">
              <img :src="userImg" v-else alt="">
              <i></i>
            </div>
            <div class="right-text">
              <p class="name">李华</p>
              <p class="grade">
                <span>安全等级：</span>
                <span>中级</span>
              </p>
            </div>
            <!--选择图片弹框-->
            <cropper-img v-if="cropperType" @showCropper="showCropper" @userImgUrl="userImgUrl"></cropper-img>
          </div>
          <div class="userInfo">
            <div class="list-title">微品账户</div>
            <ul>
              <li>
                <span>用户名</span>
                <span>李华</span>
                <a href="javascript:void(0)">修改</a>
              </li>
              <li>
                <span>个性签名</span>
                <span>已设置</span>
                <a href="javascript:void(0)">修改</a>
              </li>
              <li>
                <span>手机绑定</span>
                <span>12345678911</span>
                <a href="javascript:void(0)">修改</a>
              </li>
              <li>
                <span>登录密码</span>
                <span>强度：一般</span>
                <a href="javascript:void(0)">修改</a>
              </li>
              <li>
                <span>实名认证</span>
                <span>*华</span>
                <a href="javascript:void(0)">查看</a>
              </li>
              <li>
                <span>邮箱绑定</span>
                <span>未绑定</span>
                <a href="javascript:void(0)">绑定</a>
              </li>
              <li>
                <span>风险评估</span>
                <span>未评估</span>
                <a href="#/userCenter/riskReview">评估</a>
              </li>
              <li>
                <span>注销账户</span>
                <span>查看操作</span>
                <a href="javascript:void(0)">操作</a>
              </li>
            </ul>
            <div class="list-title">银行存管账户</div>
            <ul>
              <li>
                <span>绑卡激活</span>
                <span>未激活</span>
                <a href="javascript:void(0)">激活</a>
              </li>
              <li>
                <span>存管账户设置</span>
                <span>已开通</span>
                <a href="javascript:void(0)">设置</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import CropperImg from '@/components/userCenter/cropper-img'

    export default {
        name: '',
        data(){
          return {
            cropperType: false,
            userImg: ''
          }
        },
        components:{
          'cropper-img' : CropperImg
        },
        methods:{
           showCropper:function (type) {
             this.cropperType = type;
           },
           userImgUrl: function (url) {
             console.log(url)
             this.userImg = url
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
    .content
      .user-head
        padding 40px 0
        height 100px
        .left-img
          width 100px
          height 100px
          border-radius 50%
          float left
          position relative
          cursor pointer
          img
            width 100%
            height 100%
            border-radius 50%
          i
            width 30px
            height 30px
            position absolute
            right 0
            bottom 0
            background url("~@/assets/userCenter/change.png") no-repeat
            background-size 100% 100%
        .right-text
          float left
          margin-left 20px
          margin-top 10px
          p
            margin-top 10px
          .name
            font-size 18px
            color #333
          .grade
            font-size 14px
            span:frist-child
              color #999
            span:last-child
              color #ffa628
      .userInfo
        .list-title
          width 1100px
          height 48px
          background-color #f5f5f5
          color #333333
          font-size 16px
          padding-left 20px
          line-height 48px
        ul
          li
            height 60px
            line-height 60px
            border-bottom 1px solid #eee
            padding-left 20px
            font-size 14px
            color #333
            span:nth-child(1)
              float left
              width 510px
            span:nth-child(2)
              float left
              color #999
            a
              float right
              margin-right 20px
              color #1278ec
          li:last-child
            border-bottom none


</style>
