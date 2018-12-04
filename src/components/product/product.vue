<template>
    <div class="cont">产品列表</div>
</template>

<script>
    export default {
        name: '',
        //隐藏公用头部和底部
        // created:function () {
        //   this.$emit('public_header', false);
        //   this.$emit('public_footer', false);
        // }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "../../commom/css/common.styl"
  .cont {
    min-height: 2500px;
    border-bottom: 1px solid #ccc;
  }

</style>
