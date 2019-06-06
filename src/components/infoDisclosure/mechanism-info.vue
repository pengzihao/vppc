<!--机构信息-->
<template>
  <div class="info-content">
    <div class="content-title">- 机构信息 -</div>
    <ul class="content-menu">
      <li :class="{active: menuType == 0}" @click="showInfo(0)">组织信息</li>
      <li :class="{active: menuType == 1}" @click="showInfo(1)">治理信息</li>
      <li :class="{active: menuType == 2}" @click="showInfo(2)">备案与审核信息</li>
    </ul>
    <!--组织信息-->
    <div class="content-box" v-if="menuType == 0">
      <div class="info-title">工商信息</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td>公司全称</td><td>深圳五维微品金融信息服务有限公司</td>
        </tr>
        <tr><td>公司简称</td><td>微品金融</td></tr>
        <tr><td>统一社会信用代码</td><td>9144030032666259XM</td></tr>
        <tr><td>公司注册资本</td><td>人民币1000万元</td></tr>
        <tr><td>实缴注册资本</td><td>人民币1000万元</td></tr>
        <tr><td>公司注册地址</td><td>深圳市前海深港合作区前湾一路1号A栋201室（入驻深圳市前海商务秘书有限公司）</td></tr>
        <tr><td>公司经营地址</td><td>深圳市南山区高新南一道赋安科技大厦B座305</td></tr>
        <tr><td>公司成立时间</td><td>2015 年 03 月 12日</td></tr>
        <tr><td>公司经营期限</td><td>永续经营</td></tr>
        <tr><td>公司经营状态</td><td>开业在营</td></tr>
        <tr><td>公司法定代表人</td><td>赵伟</td></tr>
        <tr><td>公司经营范围</td><td>金融信息咨询，提供金融中介服务，接受金融机构委托从事金融外包服务（根据法律、行政法规、国务院决定等规定需要审批的，依法取得相关审批文件后方可经营）；受托资产管理，出借管理，资本管理，财富管理（不得从事信托、金融资产管理、证券资产管理等业务）；出借兴办实业（具体项目另行申报）；出借咨询，出借顾问（不含限制项目）；商务信息咨询，企业管理咨询，经济信息咨询（以上均不含限制项目）。依托互联网等技术手段，提供金融中介服务（根据国家规定需要审批的，获得审批后方可经营）</td></tr>
        <tr><td>分支机构</td><td>无</td></tr>
      </table>
      <div class="info-title">平台信息</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td>网站域名</td><td><a href="https://www.vpfinance.cn/" target="_blank">https://www.vpfinance.cn/</a></td>
        </tr>
        <tr><td>平台上线运营时间</td><td>2015年 05月14日</td></tr>
        <tr><td>咨询、投诉、举报联系电话</td><td>0755-86627551</td></tr>
        <tr><td>电子邮箱</td><td>services@vpfinance.cn</td></tr>
        <tr><td>通讯地址</td><td>深圳市南山区高新南一道赋安科技大厦B座305</td></tr>
        <tr><td>注册协议模板</td><td><a href="/registration/useragreement" target="_blank">《微品金融用户服务协议》</a></td></tr>
        <tr><td>平台 APP 应用</td><td>微品金融</td></tr>
        <tr><td>公众号或服务号</td><td>微信服务号“五维微品金融” &nbsp;&nbsp;&nbsp;&nbsp; 微信订阅号“5W微品金融”</td></tr>
        <tr><td>微博</td><td><a href="https://weibo.com/vpfinance/" target="_blank">https://weibo.com/vpfinance/</a></td></tr>
      </table>
      <div class="info-title">合作第三方</div>
      <div class="info-box" style="border:1px solid #e8ebf3">
        <ul class="cooperation-list">
          <li class="cooperation-item" style="display: none"><span class="icon"></span>华兴银行：资金存管</li>
          <li class="cooperation-item"><span class="icon"></span>法大大：电子签章</li>
          <li class="cooperation-item"><span class="icon"></span>创蓝短信：短信</li>
          <li class="cooperation-item"><span class="icon"></span>阿里云：云服务器及网络安全</li>
          <li class="cooperation-item"><span class="icon"></span>GeoTrust(全球信)：第三方数字认证</li>
          <li class="cooperation-item"><span class="icon"></span>未来无线：短信</li>
          <li class="cooperation-item"><span class="icon"></span>深圳网安检测：系统安全测评</li>
        </ul>
      </div>
      <div class="info-title">重大事项</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr><td style="width:70%">公司减资、合并、分立、解散或申请破产</td><td style="width:30%">无</td></tr>
        <tr><td>破产程序</td><td>无</td></tr>
        <tr><td>停业、整顿、关闭</td><td>无</td></tr>
        <tr><td>公司涉及重大诉讼、仲裁，或刑事处罚、重大行政处罚</td><td>无</td></tr>
        <tr><td>公司法定代表人、持股5%以上的股东、实际控制人、主要负责人、董事、监事、高级管理人员的变更信息</td><td>无</td></tr>
        <tr><td>公司法定代表人、持股5%以上的股东、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁</td><td>无</td></tr>
        <tr><td>公司主要或者全部业务陷入停顿</td><td>无</td></tr>
        <tr><td>存在欺诈、损害出借人利益等等其它的重大事项</td><td>无</td></tr>
      </table>
    </div>

    <!--治理信息-->
    <div class="content-box" v-else-if="menuType == 1">
      <div class="info-title">股东信息</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr><td>股东名称</td><td>占股比例</td></tr>
        <tr><td>赵伟</td><td>90%</td></tr>
        <tr><td>李悦彤</td><td>10%</td></tr>
      </table>
      <div class="info-title">组织架构</div>
      <div class="img-box">
        <img src='@/assets/infoDisclosure/disclosure-person-illustration.png' width=871 height=216>
      </div>
      <div class="info-title">人员概况（2018-07-31）</div>
      <div class="staff-sum"><span>微品金融员工总人数</span><span>34</span></div>
      <div class="staff-chart">
        <img src="@/assets/infoDisclosure/number.png" width="843" height="184"/>
      </div>
      <div class="info-title">主要人员介绍</div>
      <ul class="staff-list">
        <li class="staff-item">
          <div class="avatar"></div>
          <div class="details">
            <h3 class="name">赵伟</h3>
            <h4 class="job">执行董事、总经理</h4>
            <p class="description">毕业于浙江大学，历任香港亿利达工业集团市场部总经理、集团总经理助理，中兴通讯高级财务经理、财务体系人力资源总监；在通信、金融领域具有超过13年的行业经验和企业管理经验。</p>
          </div>
        </li>
        <li class="staff-item">
          <div class="avatar"></div>
          <div class="details">
            <h3 class="name">黄绍清</h3>
            <h4 class="job">监事</h4>
            <p class="description">从事软件开发工作十余年，并拥有多年的金融行业软件开发经验，曾任爱立信、华胜天成集团、拓词互联网金融公司技术部经理，精通并擅长电信业及互联网金融系统开发，系统整体架构设计，组织团队进行技术攻关，对互联网金融有独立深刻的理解。</p>
          </div>
        </li>
        <li class="staff-item">
          <div class="avatar"></div>
          <div class="details">
            <h3 class="name">廖素怡</h3>
            <h4 class="job">风控总监</h4>
            <p class="description">毕业于深圳大学，从事金融风险工作十余年。历任深圳发展银行信贷管理部经理、盈华租赁金融市场部负责人。曾负责多个金融业务板块的布局和拓展，积累了丰富的金融领域专业经验。具有敏锐的风险识别判断，对互联网金融业务风险控制有深刻理解。</p>
          </div>
        </li>
        <li class="staff-item">
          <div class="avatar"></div>
          <div class="details">
            <h3 class="name">岑静</h3>
            <h4 class="job">技术总监</h4>
            <p class="description">从事软件研发工作十余年，曾担任深圳航空M&E平台研发主管，立达信云平台项目经理，有多年系统架构设计和规划经验，负责组织并推进软件项目开发，对互联网平台软件架构设计有独立深刻的理解。</p>
          </div>
        </li>
      </ul>
    </div>

    <!--备案与审核信息-->
    <div class="content-box" v-else-if="menuType == 2">
      <div class="info-title">备案信息</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr><td>备案登记地方金融监管部门</td><td>备案完成后披露</td></tr>
        <tr><td>备案登记时间</td><td>备案完成后披露</td></tr>
        <tr><td>备案登记编号</td><td>备案完成后披露</td></tr>
        <tr><td>电信业务经营许可信息</td><td>备案后依规申请</td></tr>
        <tr><td>资金存管信息</td><td>资金存管业务上线时间：2017年10月31日</td></tr>
        <tr><td>网站备案图标及编号</td><td>备案完成后披露</td></tr>
        <tr><td>信息安全测评认证信息</td>
          <td>
            <div class="info-imgBox" v-viewer>
              <img src="@/assets/infoDisclosure/WA/1.jpg" alt="网络安全等级咨询报告">
              <img src="@/assets/infoDisclosure/WA/2.jpg" alt="网络安全等级咨询报告">
              <img src="@/assets/infoDisclosure/WA/3.jpg" alt="网络安全等级咨询报告">
              <img src="@/assets/infoDisclosure/WA/4.jpg" alt="网络安全等级咨询报告">
            </div>
            <span class="img-title">网络安全等级咨询报告</span>
          </td>
        </tr>
      </table>
      <div class="info-title">审核信息</div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td>财务审计报告</td>
          <td>
            <div class="info-imgBox" v-viewer>
              <img src="@/assets/infoDisclosure/2017report/1.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/2.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/3.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/4.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/5.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/6.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/7.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/8.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/9.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/10.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/11.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/12.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/13.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/14.jpg" alt="微品金融2017年审计报告">
              <img src="@/assets/infoDisclosure/2017report/15.jpg" alt="微品金融2017年审计报告">
            </div>
            <span class="img-title">微品金融2017年审计报告</span>
          </td>
        </tr>
        <tr><td>重点环节审计结果</td><td>最终审计中</td></tr>
        <tr>
          <td>合规性审查报告</td>
          <td>
            <div class="info-imgBox" v-viewer>
              <img src="@/assets/infoDisclosure/2018HG/0.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/1.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/2.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/3.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/4.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/5.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/6.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/7.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/8.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/9.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/10.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/11.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/12.jpg" alt="微品金融2018年合规性审查报告">
              <img src="@/assets/infoDisclosure/2018HG/13.jpg" alt="微品金融2018年合规性审查报告">
            </div>
            <span class="img-title">微品金融2018年合规性审查报告</span>
          </td>
        </tr>
      </table>

      <div class="info-title">风险管理信息</div>
      <div class="img-box">
        <div class="img-list">
          <p>风险管理架构</p>
          <img src="@/assets/infoDisclosure/disclosure-risk-manage-illustration.png"/>
        </div>
        <div class="img-list">
          <p>风险评估流程</p>
          <img src="@/assets/infoDisclosure/disclosure-risk-manage2-illustration.png"/>
        </div>
        <div class="img-list">
          <p>风险预警管理</p>
          <img src="@/assets/infoDisclosure/disclosure-risk-manage3-illustration.png"/>
        </div>
      </div>
      <div class="collection-way">
        <p>催收方式</p>
        <p>电话催收，短信催收，第三方合作（律所等）、现场催收</p>
      </div>
    </div>
  </div>
</template>

<script>
  // 图片预览插件
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  Viewer.setDefaults({
    'inline':false,
    'button':true, //右上角按钮
    "navbar": false, //底部缩略图
    "title": true, //当前图片标题
    "toolbar": true, //底部工具栏
    "tooltip": true, //显示缩放百分比
    "movable": true, //是否可以移动
    "zoomable": true, //是否可以缩放
    "rotatable": true, //是否可旋转
    "scalable": true, //是否可翻转
    "transition": true, //使用 CSS3 过度
    "fullscreen": false, //播放时是否全屏
    "keyboard": false, //是否支持键盘
    "url": "data-source",
  });

  export default {
      name: '',
      data(){
        return {
          menuType: 0
        }
      },
      methods:{
        showInfo: function (type) {
          this.menuType = type
        }
      },
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
    .content-menu
      height 58px
      line-height 58px
      padding 0 20px
      border-bottom 1px solid #e8ebf3
      li
        display inline-block
        padding 0 18px
        margin-right 10px
        color #000
        font-size 14px
        box-sizing border-box
        cursor pointer
      .active
        color #4b75cb
        border-bottom 2px solid #4b75cb
      li:hover
        color #4b75cb
    .content-box
      position relative
      padding 0 40px 50px
      .info-title
        height 60px
        line-height 60px
        margin-top 20px
        font-size 18px
        color #000
        font-weight bold
      .img-box
        width 100%
        text-align center
      table
        border 1px solid #e8ebf3
        td
          padding 14px 46px
          line-height 28px
          border-bottom 1px solid #e8ebf3
          border-right 1px solid #e8ebf3
        tr:nth-child(odd)
          background #f6f8fc
        tr:nth-child(even)
          background #fff
        tr
          td:first-child
            width 240px
          td:last-child
            width 628px
            border-right none
        tr:last-child td
          border-bottom none
        tr
          a
            color #1661ba
      /*组织信息*/
      .info-box
        padding 20px 46px
        .cooperation-list
          .cooperation-item
            display inline-block
            width 300px
            height 44px
            line-height 44px
            overflow hidden
            color #333
            font-size 14px
            .icon
              display inline-block
              vertical-align top
              width 60px
              height 44px
          .cooperation-item:nth-child(3n)
            width:180px
          .cooperation-item:nth-child(1)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") 6px -251px no-repeat
          .cooperation-item:nth-child(2)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -44px -251px no-repeat
          .cooperation-item:nth-child(3)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -100px -250px no-repeat
          .cooperation-item:nth-child(6)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -310px -250px no-repeat
          .cooperation-item:nth-child(4)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -151px -251px no-repeat
          .cooperation-item:nth-child(5)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -205px -251px no-repeat
          .cooperation-item:nth-child(7)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -256px -251px no-repeat
          .cooperation-item:nth-child(8)
            .icon
              background url("~@/assets/infoDisclosure/disclosure-icon.png") -364px -251px no-repeat
      /*治理信息*/
      .staff-sum
        width 290px
        height 55px
        line-height 55px
        border 1px solid #e8ebf3
        span
          display inline-block
          text-align center
          font-size 14px
          color #333
          box-sizing border-box
        span:nth-child(1)
          width 200px
        span:nth-child(2)
          width 90px
          border-left 1px solid #e8ebf3
      .staff-chart
        width 100%
        height 200px
        overflow hidden
        padding 20px 0
      .staff-list
        width 100%
        margin-top 20px
        .staff-item
          height 244px
          overflow hidden
          .avatar
            display inline-block
            vertical-align top
            width 203px
            height 244px
          .details
            display inline-block
            width 602px
            margin-left 32px
            .name
              font-size 20px
              line-height 28px
              color #333
              font-weight bold
            .job
              margin-top 18px
              font-size 16px
              line-height 28px
              color #333 font-weight bold
            .description
              margin-top 30px
              font-size 14px
              line-height 28px
              color #333
        .staff-item:not(:first-child)
          margin-top 32px
        .staff-item:nth-child(1)
          .avatar
            background url("~@/assets/infoDisclosure/avatar-1.png")#1c242e no-repeat center;background-size: 203px 244px
        .staff-item:nth-child(2)
          .avatar
            background url("~@/assets/infoDisclosure/avatar-2.jpg")#1c242e no-repeat center;background-size: 203px 244px
        .staff-item:nth-child(3)
          .avatar
            background url("~@/assets/infoDisclosure/avatar-4.jpg")#1c242e no-repeat center;background-size: 203px 244px
        .staff-item:nth-child(4)
          .avatar
            background url("~@/assets/infoDisclosure/avatar-5.png")#1c242e no-repeat center;background-size: 203px 244px
      /*备案与审核信息*/
      .audit-report
        li
          display inline-block
          width 120px
          height 80px
          text-align center
          img
            width 50px
            height 60px
          span
            display block
            width 100%
            height 20px
            line-height 20px
      .info-imgBox
        width 120px
        img
          width 50px
          height 60px
          margin-left 35px
        img:not(:first-child)
          display none
      .img-title
        width 120px
        line-height  20px
        display block
        color #1661ba
        text-align center
      .img-box
        width 100%
        text-align center
        .img-list
          padding 20px 0 42px 0
        .img-list:not(:last-child)
          border-bottom 1px dashed #e8ebf3
        p
          height 18px
          margin 20px 0 36px
          font-size 16px
          line-height 18px
          color #333
          text-align left
          border-left 3px solid #c8cef0
          text-indent 16px
      .collection-way
        width 100%
        height 55px
        line-height 55px
        border 1px solid #e8ebf3
        p
          display inline-block
          font-size 14px
          padding-left 46px
        p:first-child
          width 200px
          border-right 1px solid #e8ebf3
</style>
