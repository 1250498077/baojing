// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

let VConsole = require('../node_modules/vconsole/dist/vconsole.min')
//路径根据自己的来改动，可能每个人的不一样
let vConsole = new VConsole()
//初始化

 Vue.use(vConsole);//设为全局

// 导入工具对象
import {utils} from './http/utils.js';
Vue.prototype.$utils = utils

import {utils_wx} from './http/weixin_http.js';
window.$utils_wx = utils_wx

// 使用vues
import vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(vuex)
let store = new vuex.Store({
  state: {
    userId: 1,
    show: false,
    states: 'turn-on',
    giftHistId: 1,
    openId: '',
    token: ''
  },
  mutations: {
    local_user_information(state, user_information) {
      state.user_information = user_information
    },
    setTransition(state, states) {
      state.states = states
    },
    edit_giftHistId(state, giftHistId) {
      state.giftHistId = giftHistId
    },
    edit_openId(state, openId) {
      state.openId = openId
    },
    edit_token(state, token) {
      state.token = token
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})

import Mint from 'mint-ui';
// import './common/stylus/index.styl'

// 绑定jquery
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

// 导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(Mint)

// 定义全部组件
import input_f from './base/input_f/input_f'
Vue.component('input_f',input_f)
import input_g from './base/input_f/input_g'
Vue.component('input_g',input_g)
import scroll from './base/scroll/scroll'
Vue.component('scroll',scroll)
import space from './base/space/space'
Vue.component('space',space)
import daohang1 from './base/daohang1/daohang1'
Vue.component('daohang1',daohang1)
import daohang2 from './base/daohang2/daohang2'
Vue.component('daohang2',daohang2)
import daohang22 from './base/daohang22/daohang22'
Vue.component('daohang22',daohang22)
import daohang3 from './base/daohang3/daohang3'
Vue.component('daohang3',daohang3)
import daohang4 from './base/daohang4/daohang4'
Vue.component('daohang4',daohang4)
import daohang5 from './base/daohang5/daohang5'
Vue.component('daohang5',daohang5)
import daohang6 from './base/daohang6/daohang6'
Vue.component('daohang6',daohang6)
import pinglun from './base/pinglun/pinglun'
Vue.component('pinglun',pinglun)

import 'video.js/dist/video-js.css'

// 定义全局websocket
import {now_to_new} from './http/client'
Vue.prototype.$socket = now_to_new
Vue.prototype.$socket.init()

Vue.config.productionTip = false

// import Cube from 'cube-ui' // 一般直接放在这个位置
// Vue.use(Cube)

/* eslint-disable no-new */
let myvue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export {myvue}
