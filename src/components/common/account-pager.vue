<!--产品分页-->
<template>
  <div class="contBox">
    <ul class="pagination">
      <li class="mg-r30"><a href="javascript:;"> 共 <span>{{total}}</span>条 <span>{{page}}</span> 页 </a></li>
      <li class="mg-r60"><a href="javascript:;"> 当前第{{current}}页</a></li>
      <li class="mg-r30" :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>
      <li class="mg-r30" :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> 上一页 </a></li>
      <li class="mg-r30" :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> 下一页 </a></li>
      <li class="mg-r40" :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>
      <li class="mg-r20" :class="{'disabled': current == page}"><input type="text" class="jump-input" v-model="jumpPage"></li>
      <li :class="{'disabled': jumpPage > page}"><a href="javascript:;" @click="setCurrent(jumpPage)" class="jump-btn"> 跳转 </a></li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        current: this.currentPage, //当前页码
        total: 100,  // 数据总条数
        dataInfo: '',
        jumpPage: 1, //跳转页码
      }
    },
    props: {
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pageSize: {// 每页显示条数
        type: Number,
        default: 10
      },
      dataUrl: {// 每页显示条数
        type: String,
        default: null
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    mounted: function () {
      this.getInfo(this.current);
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.pageSize);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          };
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        };
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        console.log(idx)
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.getInfo(idx);
        }

      },
      getInfo:function(page){
        var _this =this
        $.ajax({
          url: this.dataUrl+'?page='+page+'&limit='+this.pageSize,
          type: 'GET',
          dataType: 'json',
          headers: {
            'uid': '8a8080c4667ae2a40166863712ae00ec',
            'access-token': '6b87ff09-6166-4292-8b39-c2ce04ab7808'
          },
          success:function (res) {
            console.log(res)
            _this.dataInfo = res;
            _this.total = res.responseObject.totalCount
            _this.$emit('pagechange', _this.current,_this.dataInfo);
          }
        })
        // _this.$emit('pagechange', 10,{'list':['1','2','3']});
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"
  .pagination
    overflow hidden
    display table
    margin 0 auto
    height 36px
    line-height 36px
    float right
    li
      float left
      a
        display block
        text-align center
        text-decoration none
        color #666
        font-size 14px
      a:hover
        color $redFontColor
      .jump-input
        width 80px
        height 36px
        border solid 1px #eeeeee
        text-align center
      .jump-btn
        width 60px
        height 36px
        background-color $redBg
        border-radius 2px
        color #fff
      .jump-btn:hover
        color #fff
    .mg-r20
      margin-right 20px
    .mg-r30
      margin-right 30px
    .mg-r40
      margin-right 40px
    .mg-r60
      margin-right 60px


</style>
