<!--裁切图片弹框-->
<template>
  <div>
    <div class="modal">
      <div class="modal-cont">
        <div class="title">
          <div class="title-text">图片上传</div>
          <div class="close-btn" @click="hideCropper">×</div>
        </div>
        <div class="info-item">
          <label class="choice-btn" for="uploads">选择图片</label>
          <input type="file" id="uploads" :value="imgFile" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
          <input type="button" class="ope" value="+" title="放大" @click="changeScale(1)">
          <input type="button" class="ope" value="-" title="缩小" @click="changeScale(-1)">
          <input type="button" class="ope" value="↺" title="左旋转" @click="rotateLeft">
          <input type="button" class="ope" value="↻" title="右旋转" @click="rotateRight">
          <input type="button" class="ope" value="↓" title="下载" @click="down('blob')">
          <input type="button" class="upload-btn" value="保存修改" @click="finish('blob')">
          <div class="cropper-content">
            <div class="cropperBox">
              <vue-cropper
                ref="cropper"
                :img="option.img"
                :outputSize="option.size"
                :outputType="option.outputType"
                :info="true"
                :full="option.full"
                :canMove="option.canMove"
                :canMoveBox="option.canMoveBox"
                :original="option.original"
                :autoCrop="option.autoCrop"
                :autoCropWidth="option.autoCropWidth"
                :autoCropHeight="option.autoCropHeight"
                :fixedBox="option.fixedBox"
                @realTime="realTime"
                @imgLoad="imgLoad"
              ></vue-cropper>
            </div>
            <div class="preview" :style="previews.div">
              <img :src="previews.url" :style="previews.img">
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {VueCropper}  from 'vue-cropper'

  export default {
    data() {
      return {
        headImg:'',
        //剪切图片上传
        crap: false,
        previews: {},
        option: {
          img: '',
          outputSize:1, //剪切后的图片质量（0.1-1）
          full: false,//输出原图比例截图 props名full
          outputType: 'png',
          canMove: true,
          original: false,
          canMoveBox: true,
          autoCrop: true,
          autoCropWidth: 150,
          autoCropHeight: 150,
          fixedBox: true
        },
        fileName:'',  //本机文件地址
        downImg: '#',
        imgFile:'',
        uploadImgRelaPath:'', //上传后的图片的地址（不带服务器域名）
      }
    },
    components: {
      'vue-cropper':VueCropper
    },
    methods: {
      //放大/缩小
      changeScale:function(num) {
        console.log('changeScale')
        num = num || 1;
        this.$refs.cropper.changeScale(num);
      },
      //坐旋转
      rotateLeft:function() {
        console.log('rotateLeft')
        this.$refs.cropper.rotateLeft();
      },
      //右旋转
      rotateRight:function() {
        console.log('rotateRight')
        this.$refs.cropper.rotateRight();
      },
      //上传图片（点击上传按钮）
      finish:function(type) {
        console.log('finish')
        var _this = this;
        var formData = new FormData();
        // 输出
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(function(data) {
            var img = window.URL.createObjectURL(data)
            _this.model = true;
            _this.modelSrc = img;
            formData.append("file", data, _this.fileName);

            //传给后台
            // this.$http.post(Api.uploadSysHeadImg.url, formData, {contentType: false, processData: false, headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
            //   .then(function(response){
            //     var res = response.data;
            //     if(res.success == 1){
            //       $('#btn1').val('');
            //       _this.imgFile = '';
            //       _this.headImg = res.realPathList[0];  //完整路径
            //       _this.uploadImgRelaPath = res.relaPathList[0];  //非完整路径
            //       _this.$message({　　//element-ui的消息Message消息提示组件
            //         type: 'success',
            //         message: '上传成功'
            //       });
            //     }
            //   })

            //上传成功后执行
            $('#btn1').val('');
            _this.imgFile = '';
            _this.headImg = window.URL.createObjectURL(data);  //完整路径
            _this.$message({　　//element-ui的消息Message消息提示组件
              type: 'success',
              message: '修改成功'
            });

            _this.$emit('userImgUrl',_this.headImg);
            // 关闭弹框
            _this.$emit('showCropper',false);
            console.log(_this.headImg)
          })
        } else {
          this.$refs.cropper.getCropData(function(data) {
            _this.model = true;
            _this.modelSrc = data;
          })
        }
      },
      // 实时预览函数
      realTime:function(data) {
        console.log('realTime')
        this.previews = data
      },
      //下载图片
      down:function(type) {
        console.log('down')
        var _this = this;
        var aLink = document.createElement('a')
        aLink.download = 'author-img'
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(function(data) {
            _this.downImg = window.URL.createObjectURL(data)
            aLink.href = window.URL.createObjectURL(data)
            aLink.click()
          })
        } else {
          this.$refs.cropper.getCropData(function(data) {
            _this.downImg = data;
            aLink.href = data;
            aLink.click()
          })
        }
      },
      //选择本地图片
      uploadImg:function(e, num) {
        console.log('uploadImg');
        var _this = this;
        //上传图片
        var file = e.target.files[0]
        _this.fileName = file.name;
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          var data;
          if (typeof e.target.result === 'object') {
            // 把Array Buffer转化为blob 如果是base64不需要
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          }
          else {
            data = e.target.result
          }
          if (num === 1) {
            _this.option.img = data
          } else if (num === 2) {
            _this.example2.img = data
          }
        }
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob
        reader.readAsArrayBuffer(file);

      },
      imgLoad (msg) {
        console.log('imgLoad')
        console.log(msg)
      },
      // 关闭弹框
      hideCropper:function () {
        this.$emit('showCropper',false);
      }
    },

  }

</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  .modal
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    .modal-cont
      position absolute
      top 50%
      left 50%
      width 800px
      height 600px
      box-shadow 0 5px 15px rgba(0, 0, 0, .5)
      border 1px solid rgba(0, 0, 0, .2)
      border-radius 6px
      background #fff
      margin -300px 0 0 -400px
      .title
        height 50px
        line-height 50px
        border-bottom 1px solid #e5e5e5
        font-weight 700
        .title-text
          float left
          margin-left 15px
        .close-btn
          float right
          font-size 26px
          color #000
          margin-right 15px
          opacity: 0.2
          cursor pointer
      .info-item
        margin-top 30px
        text-align center
        .choice-btn
          display inline-block
          width 90px
          margin-left 30px
          height 32px
          background-color $redBg
          color #fff
          line-height 32px
          font-size 16px
          text-align center
          border-radius 5px
          cursor pointer
        .ope
          width 28px
          height 28px
          border 1px solid #ccc
          margin 5px
          background-color #fff
          border-radius 5px
          cursor pointer
        .upload-btn
          outline none
          width 90px
          height 32px
          background-color #5cb85c
          color #fff
          font-size 16px
          text-align center
          border-radius 5px
          cursor pointer
          border none
        .cropper-content
          margin-top 50px
          .cropperBox
            width 280px
            height 280px
            float left
            margin-left 220px
          .preview
            width 100px
            height 100px
            border 1px solid #cccccc
            margin-left 30px
            border-radius 50%
            float left
            overflow hidden
            img
              width 100%
              height 100%
              border-radius 50%


</style>
