import wx from 'weixin-js-sdk'
import axios from 'axios'
import {savaToLocal, loadFromlLocal} from  '../common/js/store'
import {model} from './model'
let utils_wx = {
  data: {
    id: 1,
    type: 2,
    desc: '',
    title: '',
    link: '',
    imgUrl: '',
    success: function (res) {
      console.log(res)
      console.log('成功分享信息')
      // this.link = 'http://wxtv.candytime.com.cn/weChat/a?id=37&type=2'
      console.log({
        id: this.id,
        type: this.type
      })
      model.weChatShare({
        id: this.id,
        type: this.type
      }).then((res) => {
        console.log('记录分享返回的东西')
        console.log(res)
      })
    },
    cancel: function (res) {
      console.log(res)
      console.log('取消保存分享信息')
    }
  },
  signData: {

  },
  loadWx: function () {
    console.log('loadWxloadWxloadWxloadWxloadWxloadWxloadWx')
    console.log(this.signData)
    let that = this
    this.signData = JSON.parse(that.signData)
    console.log(this.signData)
    console.log(this.signData.appId)
    console.log('结束')
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。移动端会通过弹窗来提示相关信息。如果分享信息配置不正确的话，可以开了看对应报错信息
      appId: this.signData.appId,
      timestamp: this.signData.timestamp,
      nonceStr: this.signData.nonceStr,
      signature: this.signData.signature,
      jsApiList: [//  需要使用的JS接口列表,分享默认这几个，如果有其他的功能比如图片上传之类的，需要添加对应api进来
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
      ]
    })
    this.edit_data()
  },
  // 参数传递： desc   imgUrl  title  link
  edit_data(datat) {
    console.log('edit_dataedit_dataedit_dataedit_data')
    console.log(datat)
    if(datat){
      this.data.desc = datat.desc
      this.data.imgUrl = datat.imgUrl
      this.data.title =  datat.title
      this.data.link = datat.link
    }

    if (!this.data.title) {
      this.data.title = '暴镜'
    }
    if (!this.data.desc) {
      this.data.desc = '暴镜赛事'
    }
    if (!this.data.link) {
      this.data.link = 'http://wxtv.candytime.com.cn/weChat/a?id=37&type=2'
    }
    if (!this.data.imgUrl) {
      this.data.imgUrl = 'http://60.205.216.188/logo.jpg'
    }
    console.log('保存的微信数据为')
    console.log(this.data)
    console.log(JSON.stringify(this.data))
    let that = this
    wx.onMenuShareAppMessage(that.data)//  分享给好友
    wx.onMenuShareTimeline(that.data)//  分享到朋友圈
    wx.onMenuShareQQ(that.data)//  分享给手机QQ
    wx.ready(function () {
      console.log('ready函数内部')
      console.log(that.data)
      wx.onMenuShareAppMessage(that.data)//  分享给好友
      wx.onMenuShareTimeline(that.data)//  分享到朋友圈
      wx.onMenuShareQQ(that.data)//  分享给手机QQ
    })

  },
  // 可传四个参数
  fenxianglianjie: function() {
    console.log('开始调用weixin.js')
    console.log('当前的ur地址是什么')
    console.log(location.href.split('#')[0])
    console.log('发起分享请求大白的接口')
    axios({
      url: 'http://wxtv.candytime.com.cn/api/wechat/get_config?url=' + location.href.split('#')[0],
      method: 'get',
      headers: {
        'token': loadFromlLocal('token')
      },
      data: {
        url: location.href.split('#')[0]
      }
    }).then((res) => {
      console.log('发起分享请求大白的接口')
      console.log(res.data.data)
      this.signData = res.data.data
      this.loadWx()
    })
  }
}

export {utils_wx}
