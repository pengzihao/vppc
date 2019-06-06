<!--加入我们-->
<template>
  <div class="info-content info-content10">
    <div class="content-title">- 加入我们 -</div>
    <div class="content-box">
      <ul class="job-list">
        <li class="job-item">
          <div class="job-title"><h4>中级运维工程师</h4><p>招1名</p></div>
          <div class="job-description">
            <p>岗位职责：<br>
              1.负责线上服务器的架构及部署工作,保障线上环境的稳定及热备功能；<br>
              2.数据库管理与维护，包括性能监控、调优处理和故障诊断以及数据库维护与备份计划；<br>
              3.构建一套完善的自动化运维系统, 进行统一管理所有服务器；<br>
              4.日常运维操作,负责线上服务器的发布，补丁更新，基线检查，服务器监控、问题排查及应急处理等工作，软硬件运行监控，服务器自动化脚本开发；<br>
              5.管理各种服务器和网络设备，制定公司局域网和网站的安全策略；<br>
              6. 优化开发与测试环境的持续集成实现。<br><br>
              任职要求：<br>
              1.本科学历，拥有三年以上的linux运维工作经验；<br>
              2.熟悉大部分网站的基础架构，熟悉高可用性解决方案；<br>
              3.熟悉mysql数据库，对数据库安全、优化、主从读写分离，有数据安全、灾难恢复等经验；<br>
              4.熟练基础服务(Nginx,tomcat,redis，docker，iptables等)的配置与调优工作；<br>
              5.熟练使用自动化部署和运维工具；<br>
              6.熟悉监控系统与安全系统；<br>
              7.精通Shell/python脚本，能够快速编写各类服务器维护脚本；<br>
              8.熟悉zookeeper,kafka者优先考虑。<br>
            </p>
          </div>
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
      .job-list
        .job-item
          padding 30px 0
          border-top 1px solid #ccc
          .job-title
            display inline-block
            vertical-align top
            width 120px
            padding-top 130px
            margin-right 40px
            background url("~@/assets/infoDisclosure/disclosure-icon.png") -434px -122px no-repeat
            h4
              text-align center
              font-size 16px
              color #333
              line-height 28px
            p
              text-align center
              font-size 14px
              color #333
              line-height 28px
          .job-description
            display inline-block
            width 680px
            line-height 28px
            font-size 14px
            color #333

</style>
