<!--风险评测-->
<template>
    <div class="container">
      <div class="main">
        <div class="header">
          <div class="title">
            <img src="@/assets/userCenter/risk-test-bg.png" alt="风险评估">
            <h2>微品金融风险承受能力评估问卷</h2>
          </div>
          <p>为满足《网络借贷信息中介机构业务活动管理暂行办法》第二十六条“网络借贷信息中介机构应当对出借人的年龄、财务状况、出借经验、
            风险偏好、风险承受能力等进行尽职评估，不得向未进行风险评估的出借人提供交易服务。”的监管要求，微品金融将启动风险评估与分级管理。
            在微品金融投标前，请您填写本问卷。 本问卷旨在了解您可承受的风险程度、以及您的出借经验，借此协助您选择合适的标的，
            以达到您的出借目标。</p>
        </div>
        <div class="main_text">
          <div class="subject">
            <p class="subject_p">Q1、您的年龄？</p>
            <label><input class="name1" type="radio" name="name1" value="5"/><i class="spot"></i>A：18-25岁</label>
            <label><input class="name1" type="radio" name="name1" value="4"/><i class="spot"></i>B：26-40岁</label>
            <label><input class="name1" type="radio" name="name1" value="3"/><i class="spot"></i>C：41-50岁</label>
            <label><input class="name1" type="radio" name="name1" value="2"/><i class="spot"></i>D：51-59岁</label>
            <label><input class="name1" type="radio" name="name1" value="1"/><i class="spot"></i>E：60岁以上</label>
          </div>
          <div class="subject">
            <p class="subject_p">Q2、您目前的家庭年收入？</p>
            <label><input class="name2" type="radio" name="name2" value="1"/><i class="spot"></i>A：5万元以下 </label>
            <label><input class="name2" type="radio" name="name2" value="2"/><i class="spot"></i>B：5万至20万元</label>
            <label><input class="name2" type="radio" name="name2" value="3"/><i class="spot"></i>C：20万至50万元</label>
            <label><input class="name2" type="radio" name="name2" value="4"/><i class="spot"></i>D：50万至100万元</label>
            <label><input class="name2" type="radio" name="name2" value="5"/><i class="spot"></i>E：100万元以上</label>
          </div>
          <div class="subject">
            <p class="subject_p">Q3、您通过P2P网贷平台出借有多长时间了？</p>
            <label><input class="name3" type="radio" name="name3" value="1"/><i class="spot"></i>A：半年以内 </label>
            <label><input class="name3" type="radio" name="name3" value="2"/><i class="spot"></i>B：半年至一年</label>
            <label><input class="name3" type="radio" name="name3" value="3"/><i class="spot"></i>C：1-2年</label>
            <label><input class="name3" type="radio" name="name3" value="4"/><i class="spot"></i>D：2-3年 </label>
            <label><input class="name3" type="radio" name="name3" value="5"/><i class="spot"></i>E：3年以上</label>
          </div>
          <div class="subject">
            <p class="subject_p">Q4、债券、股票、基金、银行出借产品，p2p出借这五类出借品种您了解几种？</p>
            <label><input class="name4" type="radio" name="name4" value="1"/><i class="spot"></i>A：全部不了解 </label>
            <label><input class="name4" type="radio" name="name4" value="2"/><i class="spot"></i>B：了解一种、两种</label>
            <label><input class="name4" type="radio" name="name4" value="3"/><i class="spot"></i>C：了解三种 </label>
            <label><input class="name4" type="radio" name="name4" value="4"/><i class="spot"></i>D：了解四种</label>
            <label><input class="name4" type="radio" name="name4" value="5"/><i class="spot"></i>E：了解五种以上</label>
          </div>
          <div class="subject">
            <p class="subject_p">Q5、以下哪项描述最符合您的出借态度？</p>
            <label><input class="name5" type="radio" name="name5" value="1"/><i class="spot"></i>A：厌恶风险，不希望本金损失，希望获得稳定回报</label>
            <label><input class="name5" type="radio" name="name5" value="2"/><i class="spot"></i>B：保守出借，不希望本金损失，愿意承担一定幅度的收益波动</label>
            <label><input class="name5" type="radio" name="name5" value="3"/><i class="spot"></i>C：寻求资金的较高收益和成长性，愿意为此承担有限本金损失</label>
            <label><input class="name5" type="radio" name="name5" value="4"/><i class="spot"></i>D：希望赚取高回报，愿意为此承担较大本金损失</label>
          </div>
          <div class="subject">
            <p class="subject_p">Q6、您的出借出现以下哪种情况时，您会出现明显的焦虑？</p>
            <label><input class="name6" type="radio" name="name6" value="3"/><i class="spot"></i>A：本金出现20-50%的损失</label>
            <label><input class="name6" type="radio" name="name6" value="4"/><i class="spot"></i>B：本金出现50-80%的损失</label>
            <label><input class="name6" type="radio" name="name6" value="5"/><i class="spot"></i>C：本金出现80%以上的损失</label>
            <label><input class="name6" type="radio" name="name6" value="2"/><i class="spot"></i>D：本金出现10%以内损失</label>
            <label><input class="name6" type="radio" name="name6" value="1"/><i class="spot"></i>E：本金无损失，但收益未达预期</label>
          </div>
          <div class="assessment">
            <button href="javascript:;" class="assessment_btn" @click="assessment">评估</button>
          </div>
        </div>
        <input type="hidden" id="userId" value="${userId}"/>
      </div>
      <!--评测结果-->
      <div class="assessment-result" hidden>
        <p class="desc"><span class="line"></span>您的风险评估级别为“<span class="result-type high-light"></span>”，<span class="result-tips"></span></p>
        <p class="desc"><span class="line"></span>建议出借要求不超过“<span class="result-type high-light"></span>”的产品；<span class="line2">单笔出借金额建议不超过 <span class="result-money high-light"></span>元。</span></p>
        <p class="desc"><span class="line"></span>
          微品金融会根据您的风险自评结果，结合您的过往出借情况调整您的风险评估级别。<br>
          如果您的年龄、财务状况、出借经验、风险偏好、风险承受能力发生了变化，请重新评测以调整您的风险自评级别，以便我们为您提供更好的服务。<br>
          由于监管要求，微品金融每年1月1日要求出借人重新进行风险评估。<br>
          如有疑问，请联系微品金融客服 <span class="blue">0755-86627551</span>，或添加微信客服咨询：小微( <span class="blue">vp_xiaowei</span>)、小金( <span class="blue">vpjrkf</span>)</p>


        <div class="result-btn">
          <button class="assess-again">完成评估</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data(){
           return {
             type:'',
             typeTips:'',
             typeMoney:'',
          }
        },
        methods:{
           assessment:function () {
             var s1 = parseInt($('.name1:checked').val());
             var s2 = parseInt($('.name2:checked').val());
             var s3 = parseInt($('.name3:checked').val());
             var s4 = parseInt($('.name4:checked').val());
             var s5 = parseInt($('.name5:checked').val());
             var s6 = parseInt($('.name6:checked').val());

             var v1 = $('.name1:checked').parents('label').text();
             var v2 = $('.name2:checked').parents('label').text();
             var v3 = $('.name3:checked').parents('label').text();
             var v4 = $('.name4:checked').parents('label').text();
             var v5 = $('.name5:checked').parents('label').text();
             var v6 = $('.name6:checked').parents('label').text();

             if(s1 && s2 && s3 && s4 && s5 && s6){
               var result = s1 + s2+ s3 + s4 + s5 + s6;
               if(result <= 8){
                 this.type = "保守型";
                 this.typeTips = "希望本金绝对安全，只能接受较小的市场波动";
                 this.typeMoney=400;
               }else if(8 < result && result<= 18){
                 this.type = "稳健型";
                 this.typeTips = "倾向于平衡的方式，偏好出借于兼具成长性及收益性的产品，能接受一定的负面波动";
                 this.typeMoney=500;
               }else if(18 < result){
                 this.type = "积极型";
                 this.typeTips = "希望出借增长并尽可能地获得最高回报，可以接受短期负面波动，愿意承担全部收益包括本金可能损失的风险";
                 this.typeMoney=600;
               }
               // $.post("/h5/help/answerFinsh",{
               //   userId:$("#userId").val(),
               //   answers:v1+";"+v2+";"+v3+";"+v4+";"+v5+";"+v6+"。",
               //   result:type,
               //   score:result
               // },function (data) {
               //   if(data.length > 0){
               //     if(type == '积极型'){
               //       $('.line2').hide();
               //     }
               //     $(".main").hide();
               //     $(".assessment-result").show();
               //     $(".result-type").text(type);
               //     $('.result-tips').text(typeTips);
               //     $(".result-money").text(data);
               //     layer.msg("测评成功", {time: 2000});
               //
               //   }else{
               //     layer.msg("测评失败", {time: 2000});
               //   }
               // })
               this.$message({message:'测评失败',type:'error', center: true});
             }else{
               this.$message({message:'请完成问卷再提交',type:'warning',center: true});
             }
           }
        }
    }
</script>

<style lang="stylus" type="text/stylus" rel='stylesheet/stylus' scoped>
  @import "~@/common/css/common.styl"

  /*主体*/
  .container {background: #fff; margin-bottom:38px}
  .main {}
  .main .header {width: 100%;}
  .main .header .title{position: relative; height 160px; overflow:hidden;}
  .main .header .title img{width: 100%;vertical-align: top; margin-top: -30px;}
  .main .header .title h2 {position:absolute;top:50%;left:0;margin-top:-20px;width:100%;height:40px;line-height:40px;font-size:18px;color:#fff;text-align: center;}
  .main .header p {width: 730px; margin 30px auto 0; font-size:13px;color:#666;line-height: 20px;}
  .main .main_text {margin: 0 auto; width 730px;}
  .main_text .subject .subject_p{  font-size: 16px;color: #333;  padding-top: 20px;  text-align: left;line-height: 24px; }
  .main_text .subject label{position: relative; display: block; font-size:13px;color:#333; margin-top: 10px;  margin-left: 30px; line-height: 20px;}
  .main_text .subject label input{width:16px;height:16px;margin-right:10px;opacity: 0}
  .main_text .subject label .spot{display:inline-block;  position: absolute;  top:2px;  left:0; z-index:5;width:16px;height:16px;background:url("~@/assets/userCenter/risk-radio-none.png") no-repeat;background-size:16px;}
  .main_text .subject label input:checked + .spot{
    background:url("~@/assets/userCenter/risk-radio-checked.png") no-repeat;background-size:16px;}
  .assessment-result{padding:30px 16px 0;}

  .assessment-result .desc{position:relative;padding-left:10px;font-size:13px;color: #333;line-height: 22px;margin-top:10px;}

  .assessment-result .desc .line{position:absolute;top:5px;left:0;width:2px;height:12px;background: #e02128;}
  .assessment-result .desc .high-light{color:#e02128}
  .assessment-result .desc .blue{color:#1278ec}

  .main .assessment {  width: 200px; padding-bottom: 30px;  margin: 30px auto;  }
  .main .assessment .assessment_btn{ width: 100%;  background-color: #FF0000;  height: 40px;  color: #fff;text-align: center;font-size: 18px;line-height: 40px;border:0;border-radius: 10px;}


  .assessment-result .tips{font-size: 12px;text-align: center;}*/
  .assessment-result .result-btn{width:250px;height:40px;margin:50px auto 0;}
  .assessment-result .result-btn button{ width: 100%;  background-color: #FF0000;  height: 40px;  color: #fff;text-align: center;font-size: 18px;line-height: 40px;border:0;border-radius: 10px;}

</style>
