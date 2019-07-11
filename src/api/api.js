/*jquery.ajax二次封装*/

import $ from 'jquery'

var version = '4.0';

var ipUrl = process.env.API_ROOT; //请求地址

var request = {
  http(params,callback){
    /**
     * params {url string ：请求地址，data object：请求参数，isHeader：请求头部   0-不带头部，  1-带token请求   2-刷新token }
     * **/
    var _this = this;
    var uid = window.localStorage.getItem('userId');
    var accessToken = window.localStorage.getItem('atoken');
    var refreshToken = window.localStorage.getItem('rtoken');
    var headerParams;
    switch(parseInt(params.isHeader)){
      case 0:
        headerParams = {
          'version':version
        };
        break;
      case 1:
        headerParams = {
          'uid':uid,
          'access-token':accessToken
        };
        break;
      case 2:
        headerParams = {
          'uid':uid,
          'access-token':accessToken,
          'refresh-token':refreshToken
        };
        break;
      default:
        headerParams = {};
    }

    var loading = _this.$loading({ lock: false, text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)'});

    $.ajax({
      type : params.type,
      url : ipUrl+params.url,
      dataType : 'json',
      data : params.data,
      headers:headerParams,
      /*beforeSend:function(xhr){
        xhr.setRequestHeader("Content-type","text/html");
      },*/
      success: function(res) {
        loading.close();
        callback(res);
      },
      error: function(err){
        loading.close();
        if(err.status === 200){
          callback(err);
        }else{
          console.log(err);
        }
      }
    })
  },
};

export default request;
