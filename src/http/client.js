
import {myvue} from '../main'
import {savaToLocal, loadFromlLocal} from  '../common/js/store'

const now_to_new = {
  socket: null,
  // wxtv.candytime.com.cn
  url: 'ws://116.199.2.36:11111/ws',
  data: {
    "userId": loadFromlLocal('userId'),
    "tcpType": "giftPush",
    "giftHistId": 1
  },
  init: function () {

    this.socket = new WebSocket(this.url);

    this.socket.onopen = function () {
      console.log('websocket连接成功')
    }

    this.socket.onmessage = function (evt) {
      console.log('监听返回的数据')
      console.log(evt)
      console.log('监听返回的数据')
      myvue.$store.commit('edit_giftHistId', {
        data:  JSON.parse(evt.data).data
      })
    }

    setInterval(() => {
      console.log('心跳检测')
      this.send(10000, 10000)
    }, 30000)

  },
  send: function (index, userId, orderNo) {
    if (index === 10000) {
      return false
    }
    this.data["giftHistId"] = index
    this.data['userId'] = userId
    this.data['orderNo'] = orderNo
    console.log('发送数据,数据格式为')
    console.log(this.data)
    this.socket.send(JSON.stringify(this.data))
  }
}

export { now_to_new }


