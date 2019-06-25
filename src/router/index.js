/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'

//注册登录
import Login from '@/components/visitor/login'
import CompanyLogin from '@/components/visitor/company-login'
import Register from '@/components/visitor/register'
import CompanyRegister from '@/components/visitor/company-register'
import ForgetPassword from '@/components/visitor/forget-password'
import CompanyForPass from '@/components/visitor/company-forPass'
import Calculator from '@/components/visitor/calculator'

//产品
import ProductList from '@/components/product/product-list'
import ProductDetail from '@/components/product/product-detail'
import ProductModel from '@/components/product/product-model'

//帮助中心
import CustomerCenter from '@/components/helpCenter/customer-center'
import HelpCenter from '@/components/helpCenter/help-center'

//信息披露
import InfoDisclosure from '@/components/infoDisclosure/info-disclosure'

//协议,风险披露声明
import RiskDisclosure from '@/components/agreement/risk-disclosure'
import UserAgreement from '@/components/agreement/user-agreement'
import RiskForbidTips from '@/components/agreement/risk-forbidTips'
import FundsLegal from '@/components/agreement/funds-legal'

//网贷指引
import Protocol1 from '@/components/agreement/protocol1'
import Protocol2 from '@/components/agreement/protocol2'
import Protocol3 from '@/components/agreement/protocol3'
import Protocol4 from '@/components/agreement/protocol4'

//新手大礼包
import NewGuide from '@/components/activity/new-guide'
import InviteFriend from '@/components/activity/invite-friend'

//app下载
import AppDownload from '@/components/app/appDownload'

//用户中心
import UserCenter from '@/components/userCenter/user-center'
import SafetyCenter from '@/components/userCenter/safety-center'
import IwantRecharge from '@/components/userCenter/iwant-recharge'
import IwantWithdraw from '@/components/userCenter/iwant-withdraw'
import MyAccount from '@/components/userCenter/my-account'
import LoanRanking from '@/components/userCenter/loan-ranking'
import RiskReview from '@/components/userCenter/risk-review'
import FundRunning from '@/components/userCenter/fund-running'
import ReturnMoney from '@/components/userCenter/return-money'
import IwantTransfer from '@/components/userCenter/iwant-transfer'
import AutoBid from '@/components/userCenter/auto-bid'
import NoviceExp from '@/components/userCenter/novice-exp'
import InviteCourtesy from '@/components/userCenter/invite-courtesy'
import MyCoupon from '@/components/userCenter/my-coupon'


Vue.use(Router)

export default new Router({
  // mode: 'history', //(加载不到资源页面返回404,需要后台配置)
  routes: [
    { //根路径(重定向Home)
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    //注册登录
    {
      path: '/visitor/login',
      component: Login
    },
    {
      path: '/visitor/companyLogin',
      component: CompanyLogin
    },
    {
      path: '/visitor/register',
      component: Register
    },
    {
      path: '/visitor/companyRegister',
      component: CompanyRegister
    },
    {
      path: '/visitor/forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/visitor/companyForPass',
      component: CompanyForPass
    },
    {
      path: '/visitor/calculator',
      component: Calculator
    },
    //产品模式
    {
      path: '/product/productList',
      component: ProductList
    },
    {
      path: '/product/productDetail',
      component: ProductDetail
    },
    {
      path: '/product/productModel',
      component: ProductModel
    },
    //帮助中心
    {
      path: '/customerCenter',
      component: CustomerCenter
    },
    {
      path: '/helpCenter',
      component: HelpCenter
    },
    //信息披露
    {
      path: '/infoDisclosure',
      component: InfoDisclosure
    },
    //协议,风险披露声明
    {
      path: '/agreement/riskDisclosure',
      component: RiskDisclosure
    },
    {
      path: '/agreement/userAgreement',
      component: UserAgreement
    },
    {
      path: '/agreement/riskForbidTips',
      component: RiskForbidTips
    },
    {
      path: '/agreement/fundsLegal',
      component: FundsLegal
    },
    //网贷指引
    {
      path: '/agreement/protocol1',
      component: Protocol1
    },
    {
      path: '/agreement/protocol2',
      component: Protocol2
    },
    {
      path: '/agreement/protocol3',
      component: Protocol3
    },
    {
      path: '/agreement/protocol4',
      component: Protocol4
    },
    //新手大礼包
    {
      path: '/activity/newGuide',
      component: NewGuide
    },
    {
      path: '/activity/inviteFriend',
      component: InviteFriend
    },
    //app下载
    {
      path: '/app/appDownload',
      component: AppDownload
    },
    //用户中心
    {
      path: '/userCenter',
      component: UserCenter,
      children:[
        {
          path: 'safetyCenter',
          component: SafetyCenter
        },
        {
          path: 'iwantRecharge',
          component: IwantRecharge
        },
        {
          path: 'iwantWithdraw',
          component: IwantWithdraw
        },
        {
          path: 'myAccount',
          component: MyAccount
        },
        {
          path: 'riskReview',
          component: RiskReview
        },
        {
          path: 'fundRunning',
          component: FundRunning
        },
        {
          path: 'returnMoney',
          component: ReturnMoney
        },
        {
          path: 'iwantTransfer',
          component: IwantTransfer
        },
        {
          path: 'autoBid',
          component: AutoBid
        },
        {
          path: 'noviceExp',
          component: NoviceExp
        },
        {
          path: 'inviteCourtesy',
          component: InviteCourtesy
        },
        {
          path: 'myCoupon',
          component: MyCoupon
        },
      ]
    },
    {
      path: '/userCenter/loanRanking',
      component: LoanRanking
    },
  ]
})
