<template>
  <div id="app">
    <vp-header v-if="header_show"></vp-header>
    <router-view v-on:public_header="public_header" v-on:public_footer="public_footer" v-on:public_returnTop="public_returnTop"></router-view>
    <vp-returnTop v-if="returnTop_show" ></vp-returnTop>
    <vp-footer v-if="footer_show"></vp-footer>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import ReturnTop from '@/components/common/returnTop'

export default {
  name: 'App',
  data(){
    return {
      header_show: true,
      footer_show: true,
      returnTop_show: true,
    }
  },
  components:{
    'vp-header': Header,
    'vp-footer': Footer,
    'vp-returnTop': ReturnTop,
  },
  methods:{
    //是否显示头部
    public_header: function (bool) {
      this.header_show = bool;
    },
    //是否显示底部
    public_footer: function (bool) {
      this.footer_show = bool;
    },
    //是否显示右下角返回顶部
    public_returnTop: function (bool) {
      this.returnTop_show = bool;
    }
  }

}
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus'>
  @import "~@/common/css/common.styl"
</style>
