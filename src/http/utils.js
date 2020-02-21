import {myvue} from '../main'
import {model} from './model'
import {savaToLocal, loadFromlLocal} from  '../common/js/store'
import wx from 'weixin-js-sdk'
import axios from 'axios'


let utils = {
  token: '',
  // 传入date对象
  mwh_date_to_str: function (fmt) {
    let o = {
      "M+" : this.getMonth() + 1, // 月份
      "d+" : this.getDate(), // 日
      "h+" : this.getHours(), // 小时
      "m+" : this.getMinutes(), // 分
      "s+" : this.getSeconds(), // 秒
      "q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
      "S" : this.getMilliseconds()
      // 毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
        .substr(4 - RegExp.$1.length));
    for ( let k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
          : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  // 保存缓存
  savaToLocal: function(id, value) {
    sessionStorage.setItem(id, value)
  },
  // 获取缓存
  loadFromlLocal: function(id) {
    return sessionStorage.getItem(id)
  },
  // 清除缓存
  clearStorage: function(){
    window.localStorage.clear();
  },
  // 将对象转换为url拼接起来
  bianli: function(data) {
    let duix = '?'
    Object.keys(data).forEach(function (key) {
      duix = duix + key + '=' + data[key] + '&'
    })
    duix = duix.substr(0, duix.length - 1)
    return duix
  },
  // 判断是不是手机号
  isPoneAvailable: function(tel) {
    let reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return !reg.test(tel);
  },
  randomFrom: function(lowerValue,upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  },
  test: function (val) {
    myvue.$store.commit('local_user_information', {
      data: '11111'
    })
  },
  parseQueryString: function (url) {
    let reg_url = /^[^\?]+\?([\w\W]+)$/,
      reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
      arr_url = reg_url.exec(url),
      ret = {};
    if (arr_url && arr_url[1]) {
      let str_para = arr_url[1], result;
      while ((result = reg_para.exec(str_para)) != null) {
        ret[result[1]] = result[2];
      }
    }
    return ret;
  },
  // 获取cookie
  getCookie: function(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  },
  // 设置cookie
  setCookie: function (c_name, value, expiredays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  },
  // 删除cookie
  delCookie: function (name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  },
  // 将时间戳转日期
  format: function(shijianchuo) {
    let time = new Date(shijianchuo)
    let y = time.getFullYear()
    let m = time.getMonth()+1
    let d = time.getDate()
    let h = time.getHours()
    let mm = time.getMinutes()
    let s = time.getSeconds()
    return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s
  },
  // 微信支付工具
  pay_weixin(data) {
    // data.signType = 'MD5'
    console.log('进入方法')
    let datad = data
    console.log(datad)
    if (typeof WeixinJSBridge == "undefined"){
      if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    }else{
      onBridgeReady()
    }
    console.log('微信支付最后提交的数据')
    console.log(datad)
    function onBridgeReady(){
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', datad,
        function(res){
          console.log(res)
          if(res.err_msg === "get_brand_wcpay_request:ok") {
            console.log('get_brand_wcpay_request:ok')
            let time_num = 0
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            let setIntervalt = setInterval(() => {
              let index = 0
              model.getPayStatus({
                orderNo: datad.orderNo
              }).then((res) => {
                // 每次请求自增1
                time_num++
                // res.data.
                console.log('循环6次的东西')
                console.log(res)
                if (res.data.data.payStatus === '1') {
                  console.log('系统保存成功')
                  clearInterval(setIntervalt)
                  savaToLocal('userId',res.data.data.userId)
                  console.log(loadFromlLocal('userId'))
                  // 系统保存成功后发送socket到服务器，在广播所有用户
                  myvue.$socket.send(res.data.data.giftHistId, res.data.data.userId, res.data.data.orderNo, myvue)
                } else if (time_num >= 5) {
                  clearInterval(setIntervalt)
                } else {
                  alert('支付失败，请联系客服')
                }
              })
            }, 1000)
          } else {
            console.log('get_brand_wcpay_request:fail')
          }
        });
    }
  },
  // 微信分享
  weixin: function (signData) {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。移动端会通过弹窗来提示相关信息。如果分享信息配置不正确的话，可以开了看对应报错信息
      appId: signData['appId'],
      timestamp: signData['timestamp'],
      nonceStr: signData['nonceStr'],
      signature: signData['signature'],
      jsApiList: [//  需要使用的JS接口列表,分享默认这几个，如果有其他的功能比如图片上传之类的，需要添加对应api进来
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
      ]
    })
  },

  weixin_ready: function (data) {
    wx.updateTimelineShareData({
      title: data.title, // 分享标题
      desc: data.desc, // 分享描述
      link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl, // 分享图标
      success: function () {
        // 设置成功
        console.log('success')
      }
    })
  },

  split_url(url) {
    let _url = url.split('/file/')[1]
    return _url
  },

  ios_or_andriod() {
    if (new Date('2016-11-11 11:11:11').getTime() > 0) {
      console.log('非ios')
      return 1
    } else {
      console.log('ios')
      return 0
    }
  }
}

export {utils}
// myvue.prototype.utils = utils

















