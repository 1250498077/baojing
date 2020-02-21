<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends" >
      <div class="page page-current courseInfo" style="position: relative" @click="lose_cursor">
        <!--@click="video_click"-->
        <div style="position: relative;display: flex;flex-direction: column;align-items: center;top: 0;left: 0;width: 100%;background-color: black;overflow: hidden;height: 211px" id="wrapper" v-show="video_list.length !== 0">
          <video id="video1"
                 :src="video_src"
                 x5-video-player-type="h5"
                 width="100%"
                 height="211px"
                >
          </video>
          <!--<video id="my-video"-->
                 <!--class="video-js vjs-default-skin"-->
                 <!--controls-->
                 <!--preload="auto"-->
                 <!--:poster="coverImg"-->
                 <!--x5-video-player-fullscreen="true"-->
                 <!--style="width: 100%;object-fit:fill"-->
                 <!--autoplay muted x5-video-player-type="h5"-->
                <!--&gt;-->
            <!--<source :src="video_src" type="application/x-mpegURL">-->
          <!--</video>-->
          <!--
                 autoplay="true"
                 preload="auto"
                 x-webkit-airplay="allow"
                 x5-video-player-fullscreen="true"
                 x5-video-orientation="h5"
          -->
          <!--x5-video-orientation="h5"-->
          <!--x-webkit-airplay="allow"-->
          <img :src="coverImg" alt="" style="position: absolute;top: 0;left: 0;z-index: 90;width: 100%;height: 100%;"  v-show="video_control === true">
          <img src="../../assets/video_play.png" alt="" style="position: absolute;z-index: 100;top: 48px;width: 121px;height: 121px;" v-show="video_control === true" @click="video_play">
          <!--<div style="width: 81px;height: 25px;background:rgba(0,0,0,0.5);border-radius:3px;color: white;font-size: 12px;position: absolute;text-align: center;line-height: 25px;right: 5px;top: 181px" clas="renshu">15，352</div>-->
        </div>
        <div style="height: 187px;width: 100%;display: flex;position: relative;padding: 14px;border-bottom: 1px solid #F3F3F3">
          <div style="background-color: #EFEFEF;width: 118px;height: 159px;display: flex;align-items: center;overflow: hidden;border-radius: 4px;position: relative">
            <img :src="player_data.url_avatar" alt="" style="width: 100%">
            <!--<div style="width: 68px;height: 30px;background:rgba(0,0,0,0.5);display: flex;align-items: center;justify-content: center;position: absolute;border-radius: 15px;top: 5px;right: 5px" @click="collect">-->
              <!--<img src="../../assets/shoucang.png" alt="" style="width: 20px;height: 20px;" v-show="shoucang_show">-->
              <!--<img src="../../assets/shoucang1.png" alt="" style="width: 20px;height: 20px;"  v-show="!shoucang_show">-->
              <!--<span style="color: white">收藏</span>-->
            <!--</div>-->
          </div>
          <div style="margin-left: 12px;display: flex;height: 159px;flex-direction: column;justify-content: space-around">
            <span style="color: #0096FF">{{player_data.playerName}}</span>
            <div>
              <span>排名：</span>
              <span style="color: #0096FF">第{{player_data.ranking}}名</span>
            </div>
            <div>
              <span>编号：</span>
              <span style="color: #0096FF">{{player_data.playerNum}}</span>
            </div>
            <div>
              <span>人气值：</span>
              <span style="color: #0096FF">{{player_data.popularity}}</span>
            </div>
            <div>
              <span>观看次数：</span>
              <span style="color: #0096FF">{{player_data.viewCount}}</span>
            </div>
          </div>
          <div style="position: absolute;top: 14px;right: 5px">
            <div style="width:116px;height:40px;background:rgba(0,150,255,1);border-radius:20px;line-height: 40px;text-align: center;color: white"  v-show="vote_status === 0">
              投票未开始
            </div>
            <div style="width:116px;height:40px;background:rgba(0,150,255,1);border-radius:20px;line-height: 40px;text-align: center;color: white" @click="buy_product" v-show="vote_status === 1">
              投票
            </div>
            <div style="width:116px;height:40px;background:#CACACA;border-radius:20px;line-height: 40px;text-align: center;color: white" v-show="vote_status === 2">
              投票已结束
            </div>
            <div style="width:116px;height:40px;background:rgba(0,150,255,1);border-radius:20px;line-height: 40px;text-align: center;color: white;margin-top: 8px" @click="give_product">
              分享拉票
            </div>
          </div>
        </div>
        <div style="width: 100%;height: 46px;display: flex;margin-top: 5px">
          <div style="flex: 1;line-height: 46px;text-align: center;position: relative" class="header_itemdtt header_itemdtt_blue" @click="select_showd(1)">
            个人介绍
            <div style="width: 14px;height: 2px;position: absolute;bottom: 5px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF" v-show="select_show === 1"></div>
          </div>
          <div style="flex: 1;line-height: 46px;text-align: center;position: relative" class="header_itemdtt" @click="select_showd(2)" v-show="video_list.length !== 0">
            选手视频
            <div style="width: 14px;height: 2px;position: absolute;bottom: 5px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF" v-show="select_show === 2"></div>
          </div>
          <div style="flex: 1;line-height: 46px;text-align: center;position: relative" class="header_itemdtt" @click="select_showd(3)">
            评论
            <div style="width: 14px;height: 2px;position: absolute;bottom: 5px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF" v-show="select_show === 3"></div>
          </div>
        </div>
        <!--个人介绍开始-->
        <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-bottom: 30px" v-show="select_show === 1">
          <div style="flex: 0.92;" v-html="player_data.content"></div>
        </div>
        <!--个人介绍结束-->
        <!--视频开始-->
        <div style="width: 100%;display: flex;justify-content: center;align-items: center;" v-show="select_show === 2">
          <div style="flex: 0.92;">
            <daohang2 v-for="(item, index) in video_list" :data="item" @jump_detail="jump_detail"></daohang2>
          </div>
        </div>
        <!--视频结束-->
        <!--评论开始-->
        <!--<space  v-show="select_show === 3"></space>-->
        <div class="hot_game" style="width: 100%;padding-left: 14px;padding-right: 14px"  v-show="select_show === 3">
          <!--<div class="title" style="display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #F3F3F3;height: 45px">-->
          <!--<div class="title_left" style="display: flex;align-items: center">-->
          <!--<img src="../../assets/pinglun.png" alt="" style="width: 23px">-->
          <!--<span style="margin-left: 10px">评论</span>-->
          <!--</div>-->
          <!--</div>-->
          <div class="list_item" v-show="commont_list.length !== 0">
            <pinglun v-for="(item, index) in commont_list" :data="item"></pinglun>
          </div>
          <div style="width: 100%;height: 100px;text-align: center;line-height: 100px;font-size: 20px;color: #b2b2b2" v-show="commont_list.length === 0">
            暂无评论
          </div>
        </div>
        <!--评论结束-->
        <!--广告-->
        <space v-show="advertisement"></space>
        <space v-show="advertisement"></space>
        <div style="width: 100%;display: flex;align-items: center;overflow: hidden;position: relative" v-show="advertisement">
          <!--<img src="../../assets/11.jpg" alt="">-->
          <div class="ql-container ql-snow">
            <div class="ql-editor">
              <div style="width: 100%" v-html="guanggao"></div>
            </div>
          </div>
          <img src="../../assets/cha.png" alt="" style="width: 20px;height: 20px;position: absolute;right: 20px;top: 40px" @click="advertisement_methods">
        </div>
        <div style="width: 100%;height: 100px"  v-show="select_show === 3"></div>
        <!--<div style="width: 100%;height: 90px" v-show="select_show === 2"></div>-->
      </div>
    </scroll>
    <!--返回上一页-->
    <div style="width: 65px;height: 65px;position: fixed;color: white;line-height: 25px;text-align: center;right: 0;bottom: 0;top: 0;margin: auto 0;border-top-right-radius: 10px;border-bottom-right-radius: 10px" @click="back">
      <img src="../../assets/back.png" alt="" style="width: 100%">
      <span style="position: absolute;bottom: 10px;font-size: 8px;left: 0;right: 0;margin: 0 auto;z-index: 100;color: rgba(0,150,255,1)">赛事主页</span>
    </div>
    <!--评论-->
    <div style="position: fixed;bottom: 0;width: 100%;padding-top: 20px;padding-bottom: 20px;background-color: white;"  v-show="select_show === 3">
      <div style="height: 10px;width: 100%;background: linear-gradient(to top,rgba(0,0,0,0.4),rgba(255, 255, 255, 0));position: absolute;top: -10px" v-show="select_show === 3"></div>
      <div style="width: 100%;border-radius: 23px;background-color: #F3F3F3;display: flex;padding-left: 14px;overflow: hidden;align-items: center">
        <img src="../../assets/pinglun1.png" alt="" style="flex: 1;height: 20px;">
        <input type="text" placeholder="评论一下" style="margin-left: 5px;background-color: #F3F3F3;font-size: 16px;flex: 10" v-model="comment" id="your-input-id">
        <div style="flex: 3;color: #0096FF;text-align: center;line-height: 46px;font-size: 16px" @click="submitComment">
          提交
        </div>
      </div>
    </div>
    <!--弹层提示-->
    <transition name="foldqq">
      <div class="foldqqt"
           style="" v-show="topic_show">
        {{topic_content}}
      </div>
    </transition>
    <!--分享海报弹出框-->
    <transition name="foldy">
      <div class="shopcart-listy" v-show="listShowy">
        <div class="list-contenty" style="width: 95%;height: 100%;padding: 8%;margin: 0 auto;position: relative">
          <div style="width: 20px;height: 20px;position: absolute;right: 10px;top: 10px;background-color: #4e555b" @click="chahca">
            <img src="../../assets/cha.png" alt="" style="width: 100%;height: 100%">
          </div>
          <div style="margin: 0 auto;width: 100%;height: 75%;background-color: #A7A7A7;overflow: hidden;display: flex;align-items: center;position: relative;justify-content: center">
            <img :src="player_data.poster" alt="" style="width: 100%">
            <span style="position: absolute;left: 0;right: 0;margin:0 auto;width: 100px;color: #0096FF;bottom: 1px">长按保存到相册</span>
          </div>
        </div>
      </div>
    </transition>
    <!--分享拉票-->
    <transition name="foldd">
      <div class="shopcart-listd" v-show="listShowd">
        <div class="list-contentd" style="width: 100%;">
          <div style="border-bottom: 1px solid #F3F3F3;width: 100%;height: 60px;text-align: center;line-height: 60px" @click="fenxiang_haibao">分享海报</div>
          <div style="border-bottom: 1px solid #F3F3F3;width: 100%;height: 60px;text-align: center;line-height: 60px" @click="fenxianglianjie">分享链接</div>
        </div>
      </div>
    </transition>
    <!--关注公众号-->
    <transition name="foldz">
      <div class="shopcart-listz" v-show="listShowz">
        <div class="list-contentd" style="width: 100%;height: 300px">
          <div class="foldz_title" style="width: 100%;height: 45px;background-color: #E8E8E8;line-height: 45px;text-align: center">
            关注公众号
          </div>
          <div style="width: 100%;height: 250px;display: flex;justify-content: space-between;align-items: center;">
            <div style="width: 200px;height: 200px;margin: 0 auto;display: flex;justify-content: space-between;align-items: center">
              <img src="../../assets/11.jpg" alt="" style="width: 100%">
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!--礼物弹窗-->
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div style="width: 100%;height: 48px;background-color: #EFEFEF;position: relative;text-align: center;line-height: 48px">
            支持{{player_data.playerName}}
          <div style="position: absolute;top: 17px;right: 30px" @click="close_gift">
            <img src="../../assets/black_cha.png" alt="" style="width: 13px;height: 13px;">
          </div>
        </div>
        <div style="width: 100%;height: 180px;margin-top: 34px">
          <div ref="picWrapperr" style="width: 100%;overflow: hidden;white-space: nowrap;margin: 0 auto;">
            <div ref="picListl" style="">
              <div style="width: 92px;position: relative;display: inline-block;margin-left: 17px;margin-right: 17px" @click="drop(item, index)" v-for="(item, index) in gift_list">
                <div style="width: 92px;height: 92px;border-radius:16px;border:1px solid rgba(243,243,243,1);display: flex;align-items: center;justify-content: center">
                  <img :src="item.giftImg" alt="" style="width: 85%">
                </div>
                <div style="width: 50px;text-align: center;margin: 0 auto;margin-top: 10px">
                  {{item.votes}}人气
                </div>
                <div style="width: 50px;text-align: center;margin: 0 auto;color: #A7A7A7;margin-top: 5px" v-if="item.fee !== 0">
                  {{item.fee}}元
                </div>
                <div style="width: 50px;text-align: center;margin: 0 auto;color: #A7A7A7;margin-top: 5px" v-if="item.fee === 0">
                  免费
                </div>
                <img src="../../assets/select_w.png" alt="" style="width: 100%;position: absolute;left: 0;top: 0" v-show="index === gift_index">
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;">
          <div style="width: 100px;text-align: center;margin: 0 auto;color: #A7A7A7">请选择礼物数量</div>
          <div style="width: 152px;height: 44px;display: flex;margin: 0 auto;margin-top: 8px;border:1px solid rgba(216,216,216,1)">
            <div style="flex: 0.6;background-color: #D8D8D8;text-align: center;font-size: 25px;line-height: 44px" @click="giftd(-1)">-</div>
            <div style="flex: 1;text-align: center;line-height: 44px">{{gift_num}}</div>
            <div style="flex: 0.6;background-color: #D8D8D8;text-align: center;font-size: 25px;line-height: 44px" @click="giftd(1)">+</div>
          </div>
          <div style="width: 193px;height: 38px;background-color: #0096FF;font-size: 16px;color: white;border-radius:4px;text-align: center;line-height: 38px;margin: 0 auto;margin-top: 36px" @click="save_dingdan">投人气</div>
        </div>
        <!--<div class="list-content" style="width: 100%;padding: 20px 20px 0 20px">-->
          <!--<img :src="item.giftImg" alt="" style="width: 90px;height: 60px;float: left;margin-left: 15px;margin-top: 8px" @click="drop(item)" v-for="(item, index) in gift_list">-->
        <!--</div>-->
      </div>
    </transition>
    <!--遮罩层-->
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow||listShowd||listShowz"></div>
    </transition>
    <!--右上角图片-->
    <transition name="fadef">
      <div class="list-mask-f" @click="hideList_fen" v-show="listShow_fen">
        <img src="../../assets/fenxiang.png" alt="" style="width: 100%;float: right">
      </div>
    </transition>
  </div>
</template>

<script>
//  import ChimeeMobilePlayer from 'chimee-mobile-player'
//  import ChimeeKernelHls from 'chimee-kernel-hls'
  import videojs from 'video.js'
  import 'videojs-contrib-hls'
  import BScroll from 'better-scroll';
  import axios from 'axios'
//  import * as API from "@/api/affirm";
  import Scroll from '../../base/scroll/scroll'
  import {model} from  '../../http/model'
  import {savaToLocal, loadFromlLocal} from  '../../common/js/store'
  export default {
    data() {
      return {
        update_data: {
          type: 1,
          id: 1
        },
        guanggao: '',
        phone: 1,
        gift_index: 0,
        chimee: {},
        gift_num: 1,
        myPlayer: {},
        coverImg: '',
        listShow_fen: false,
        fenxiang_data: {
          title: '暴镜',
          link: '',
          imgUrl: ''
        },
        erweima_img: '',
        token: loadFromlLocal('token'),
        id: loadFromlLocal('id'),
        type: loadFromlLocal('type'),
        advertisement: true,
        video_src: 'http://boomvod.candytime.com.cn/video/20190219/4185f709a6384c1782bae81075f96dc2/cloudv-transfer/555555553po52qr75556416591958o85_e18a81db40bc4d8bb91a8ff1aafb31a6_1_4.m3u8',
        commont_list: [],
        topic_show: false,
        topic_content: '内容为空',
        comment: '',
        video_list: [],
        gift_list: [],
        player_data: {
          id: '',
          playerName: '',
          ranking: 0,
          popularity: 0,
          viewCount: 0,
          avatar_img: '',
          content: '',
          matchId: '',
          giftId: '',
          url_avatar: '',
          match_id: '',
          buyNum: 1,
          money: 0
        },
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        pgCurtime:0, //未格式化的当前播放时间
        pgTotalTime:0, //未格式化的总时间
        CurtimeText:'00:00', //格式化的当前播放时间
        TotalTimeText:'00:00',//未格式化的总时间,
        recommends: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        video_control: true,
        listShow: false,
        listShowd: false,
        listShowz: false,
        shoucang_show: true,
        listShowy: false,
        select_show: 1,
        index_num: 1,
        vote_index: 1,
        match_detail: {},
        vote_status: 0
      }
    },
    components: {
      Scroll
    },
    methods: {
      close_gift() {
        this.listShowd = false
        this.listShow = false
      },
      save_dingdan() {
        if (this.player_data.money === 0||this.player_data.money === '0') {
          console.log('免费礼物')
          let data = {
            playerId: this.player_data.id,
            votes: this.gift_num,
            type: 1
          }
          console.log(data)
          model.post_saveVote(data).then((res) => {
            console.log('免费投票返回的东西')
            console.log(res)
            this.listShowd = false
            this.listShow = false
            if (res.data.code === 0) {
              this.topic_content = '免费礼物已达上线'
              this.topic_show = true
            } else if (res.data.code === 200) {
              this.topic_content = '你给' + this.player_data.playerName + '增加了礼物'
              this.topic_show = true
            }
            console.log(this.topic_content)
            console.log(this.topic_show)
          })
        } else {
          this.listShowd = false
          this.listShow = false
          this.save_Order()
        }
      },
      giftd(index) {
        this.gift_num = this.gift_num + (index)
        if (this.gift_num<=0) {
          this.gift_num = 1
        }
      },
      _initPics() {

        let picWidth = 126
        let width = 0
        console.log('当前页面屏幕宽度')
        console.log(document.body.clientWidth)

        if (document.body.clientWidth >= 410) {
          width = picWidth * 5 - 300
        } else if (document.body.clientWidth <= 410&&document.body.clientWidth >= 390) {
          width = picWidth * 5 - 260
        } else if (document.body.clientWidth <= 390&&document.body.clientWidth >= 380) {
          width = picWidth * 5 - 240
        } else if (document.body.clientWidth <= 380&&document.body.clientWidth >= 360) {
          width = picWidth * 5 - 200
        }

        this.$refs.picListl.style.width = 500 +　'px'

        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapperr, {
              scrollX: true,
              eventPassthrough: 'vertical',
              momentum: false,
              bounce: false
            })
            console.log('执行')
//            this.scrollto_end()
          } else {
            this.picScroll.refresh()
          }
        })
      },
      hideList_fen() {
        this.listShow_fen = false
      },
      back() {
        console.log('从选手页面返回上一次跳转到赛事页面')
        console.log(this.player_data.matchId)
        this.$router.push({
          path: '/page_detail',
          query: {
            id: this.player_data.matchId
          }
        })
      },
      fenxianglianjie() {
        this.listShow_fen = true
        window.$utils_wx.edit_data({
          desc: '暴镜官方赛事',
          imgUrl: this.player_data.url_avatar,
          title: this.player_data.playerName,
          link: 'http://wxtv.candytime.com.cn/weChat/a?id='+ this.player_data.id +'&type=1'
        })
        window.$utils_wx.data.id = this.player_data.id
        window.$utils_wx.data.type = '1'

        this.listShowy = false
        this.listShowd = false
        this.listShow = false
      },
      _get_QRCode() {
        model.QRCode({
          id: this.player_data.id,
          type: '1',
        }).then((res) => {
          console.log('图片二维码返回的东西')
          console.log(res)
//          this.erweima_img = 'data:image/jpeg;base64,' + res.data
          console.log(this.erweima_img)
        })
      },
      save_Order() {
        let data = {
          openid: this.$store.state.openId,
          buyNum: this.gift_num,
          userId: 1,
          giftId: this.player_data.giftId,
          type: 1,
          matchId: this.player_data.matchId,
          playerId: this.player_data.id
        }
        console.log('提交的数据')
        console.log(data)
        model.saveOrder(data).then((res) => {
          console.log('测试支付接口')
          console.log(res)
          let data = res.data.data
          data.appId = res.data.data.appid
          data.signType = 'MD5'
          data.package ="prepay_id=" + res.data.data.prepayId
          data.orderNo = res.data.data.orderNo
          this.$utils.pay_weixin(data)
        })
      },
      lose_cursor() {
        if (this.$utils.ios_or_andriod() === 1) {
          let input = document.getElementsByClassName("your-input-id")
          for (let i = 0;i<input.length;i++) {
            input[i].blur()
          }
        }
      },
      chahca() {
        this.listShowy = false
      },
      advertisement_methods() {
        this.advertisement = false
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      },
      // 切换src地址
      jump_detail(data) {
        console.log('删除所有子节点')
        console.log('切换')
        console.log(data)
        this.update_data = {
          type: 4,
          id: data.id
        }
        // 更新video的src和封面的src
        this.video_src = this.$utils.split_url(data.video)
        this.coverImg = data.coverImg
        console.log(this.video_src)
        console.log(this.coverImg)
      },
      submitComment() {
        if (this.comment === '') {
          this.topic_content = '内容为空'
          this.topic_show = true
        }
        this._comment_save()
      },
      collect() {
        this.shoucang_show = !this.shoucang_show
      },
      // 微信支付
      onBridgeReadyd() {
        if (typeof WeixinJSBridge == "undefined"){
          if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
        }else{
          onBridgeReady();
        }
        function onBridgeReady(){
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
              "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入
              "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数
              "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
              "package":"prepay_id=u802345jgfjsdfgsdg888",
              "signType":"MD5",         //微信签名方式：
              "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
            },
            function(res){
              if(res.err_msg == "get_brand_wcpay_request:ok" ){
                // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              }
            });
        }
      },
      select_showd(index) {
        console.log(index)
        this.select_show = index
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      },
      fenxiang_haibao() {
        console.log('fenxiang_haibao')
        this.listShowy = true
      },
      give_product() {
        this.listShowd = true
      },
      buy_product() {
        console.log('点击')
        this.listShow = true
      },
      hideList() {
        this.listShowy = false
        this.listShowd = false
        this.listShow = false
        this.listShowz = false
      },
      // 点击礼物
      drop(item, index) {
        console.log('点击的礼物是')
        console.log(item)
        this.gift_index = index
        this.player_data.giftId = item.id
        this.player_data.money = item.fee
      },
//      beforeDrop(el) {
//        let count = this.balls.length;
//        while (count--) {
//          let ball = this.balls[count];
//          if (ball.show) {
//            el.style.display = '';
//            el.style.webkitTransform = `translate3d(700px,0,0)`;
//            el.style.transform = `translate3d(700px,0,0)`;
//          }
//        }
//      },
//      dropping(el, done) {
//        let rf = el.offsetHeight;
//        this.$nextTick(() => {
//          el.style.webkitTransform = 'translate3d(0,0,0)';
//          el.style.transform = 'translate3d(0,0,0)';
//          el.addEventListener('transitionend', done);
//        });
//      },
//      afterDrop(el) {
//        let ball = this.dropBalls.shift();
//        if (ball) {
//          ball.show = false;
//          el.style.display = 'none';
//        }
//      },
      video_play() {
        this._viewCountUpdate()
        let video = document.getElementById('video1')
        video.src = this.video_src
        video.play()
        this.video_control = false
      },
      video_click() {
        console.log('video_click')
        let video = document.getElementById('video1')
        video.pause()
        this.video_control = true
      },
      // 根据选手id获取礼物列表
      _get_listByPlayer() {
        model.listByPlayer({
          playerId: this.player_data.id
        }).then((res) => {
          console.log('根据选手id获取礼物列表')
          console.log(res)
          this.gift_list = res.data.data
          this.player_data.giftId = this.gift_list[0].id
          this.player_data.money = this.gift_list[0].fee
          console.log(this.player_data.giftId)
          this.$nextTick(() => {
            this._initPics()
          })
        })
      },
      // 根据选手id获取选手详情
      _get_detailPlayer() {
        model.get_detailPlayer({
          playId: this.player_data.id
        }).then((res) => {
          console.log('根据选手id获取选手详情')
          console.log(res)
          this.player_data.content = res.data.data.player.content
          this.player_data.avatar = res.data.data.player.avatar
          this.player_data.poster = res.data.data.player.poster
          this.player_data.viewCount = res.data.data.player.viewCount
          this.player_data.popularity = res.data.data.player.popularity
          this.player_data.ranking = res.data.data.ranking
          this.player_data.playerName = res.data.data.player.playerName
          document.title = this.player_data.playerName
          this.player_data.matchId = res.data.data.player.matchId.id
          this.player_data.url_avatar = res.data.data.player.avatar
          this.match_detail = res.data.data.player.matchId
          this.startStatus = this.match_detail.startStatus
          console.log('赛事详情')
          console.log(this.match_detail)
          console.log(this.startStatus)
          this.vote_timemethods()
          // console.log(this.player_data.matchId)
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        })
      },
      // 投票未开始  正在投票  投票结束
      vote_timemethods() {
        console.log('vote_timemethods')

        this.vote_time = JSON.parse(this.match_detail.voteTime)
        console.log(this.vote_time)
        let now_time = Date.parse(new Date())/1000
        console.log(now_time)
        console.log(now_time <= this.vote_time.startTime)
        console.log(now_time>=this.vote_time.startTime && now_time<=this.vote_time.endTime)
        if (now_time <= this.vote_time.startTime) {
          // 投票未开始
          this.vote_status = 0
        } else if (now_time>=this.vote_time.startTime && now_time<=this.vote_time.endTime) {
          // 正在投票
          this.votet()
        } else {
          // 投票结束
          this.vote_status = 2
        }
      },
      votet() {
        console.log('votetvotetvotetvotet')
        console.log(this.startStatus)
        // 根据startStatus字段判断是不是被中断，最终判断,最终根据vote_status来判断投票状态
        console.log(this.startStatus === 1)
        console.log(this.startStatus === '1')
        if (this.startStatus === '1') {
          this.vote_status = 1
        } else if (this.startStatus === '2') {
          this.vote_status = 2
        }
        console.log('vote_status=',this.vote_status)
      },
      // 根据选手id获取广告
      _getByPlayerId() {
        model.getByPlayerId({
          playerId: this.player_data.id
        }).then((res) => {
          console.log('广告获取的东西')
          console.log(res)
          this.guanggao = res.data.data.content
        })
      },
      // 根据选手id获取选手视频
      _get_PlayerVideo() {
        model.get_PlayerVideo({
          playId: this.player_data.id,
          page: 0
        }).then((res) => {
          console.log('根据选手id获取选手视频789')
          console.log(res)
          this.video_list = res.data.data.content
          this.video_src = res.data.data.content[0].video
          console.log(this.video_src)
          // this.video_src = this.$utils.split_url(this.video_src)
          console.log('更改后的src地址')
          this.video_src = this.$utils.split_url(this.video_src)
          this.coverImg = res.data.data.content[0].coverImg
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        })
      },
      // 评论
      _comment_save() {
        console.log('提交的数据')
        let data = {
          userId: 1,
          playerId: this.player_data.id,
          content: this.comment
        }
        console.log(data)
        model.comment_save(data).then((res) => {

          console.log('评论返回的东西')
          console.log(res)
          console.log(this.commont_list)
          console.log('评论数组')
          console.log(this.commont_list)
          console.log(res.data.code)
          console.log(res.data.code === 200)
          if (res.data.code === 200) {
            console.log('进来200')
            this.commont_list.push({
              userId: {
                avatar: JSON.parse(loadFromlLocal('user_data')).avatar,
                nickname: JSON.parse(loadFromlLocal('user_data')).nickname
              },
              content: this.comment,
              createdTime: new Date().getTime()
            })
            this.comment = ''
            console.log('变化数组')
            console.log(this.commont_list)
            this.topic_content = '提交成功'
            this.topic_show = true
            // this._get_comment_listByPlayer()
          } else if(res.data.code == 0) {
            this.topic_content = '评论不能重复提交'
            this.topic_show = true
          } else {
            this.topic_content = '失败'
            this.topic_show = true
          }
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        })
      },
      // 根据选手id获取评论
      _get_comment_listByPlayer() {
        model.get_listByPlayer({
          playerId: this.player_data.id,
          page: 0,
          size: 30
        }).then((res) => {
          console.log('根据选手id获取评论')
          console.log(res)
          this.commont_list = res.data.data.content
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        })
      },
      _viewCountUpdate() {
        console.log('播放量提交的东西')
        console.log(this.update_data)
        model.viewCountUpdate(this.update_data).then((res) => {
          console.log('播放量返回的东西')
          console.log(res)
        })
      },
      chimee_video() {
        // 重新加载
        if (this.phone === 0) {
          let f = document.getElementById("wrapper")
          let childs = f.childNodes;
          for(let i = 0; i < childs.length; i++) {
            f.removeChild(childs[i]);
          }
//          this.chimee =  new ChimeeMobilePlayer({
//            poster: this.coverImg,
//            wrapper: '#wrapper',  // video dom容器
//            src: this,video_src,
//            isLive: true,
//            autoplay: true,
//            controls: true,
//            playsInline: true,
//            preload: 'auto',
//            x5VideoPlayerFullscreen: true,
//            x5VideoOrientation: 'landscape|portrait',
//            xWebkitAirplay: true,
//            disableUA: ['Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36']
//          })
        }
      },
      video_js() {
        if (this.phone === 1) {
          this.phone = 2
          this.myPlayer =  videojs('my-video', {
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            controlBar: true,
            width: $(window).width(),
            height: 211,
            isFullscreen: true,
            // 是否循环播放
            loop: true
          }, function () {
            this.play()
          })
        }
      }
    },
    watch: {
      topic_show: function (newval) {
        if (newval === true) {
          setTimeout(() => {
            this.topic_show = false
          }, 4000)
        }
      }
    },
    created() {
    },
    mounted: function () {

//      $('input').on('blur', this, (ev) => {
//        console.log('jquery的scroll刷新')
//        window.scrollTo(0,0)
//      })
//
//      $('input').on('focus', this, (ev) => {
//        console.log('jquery的scroll刷新')
//        window.scrollTo(0,0)
//      })

      let that = this
      // window.this_scroll = this
      window.addEventListener('focusin', () => {
//        window.scrollTo(0,0)
      })

      window.addEventListener('focusout', () => {
//        window.scrollTo(0,0)
//        this.lose_cursor()
      })

      this.set_time = setInterval(() => {
        console.log('5秒后刷新')
        this.index_num ++
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
        if (this.index_num === 5) {
          console.log('清除定时器')
          clearInterval(this.set_time)
        }
      }, 300)

      let url = window.location.href
      let user = this.$utils.parseQueryString(url)

//      this.player_data.id = user.id
      this.player_data.match_id = this.$route.query.match_id
      console.log(user)
      if (user.id !== undefined) {
        // 存在id就到这里
        console.log('通过二维码进来')
        this.listShowz = true
        this.player_data.id = user.id
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      } else {
        // 啥也不敢干
        console.log('点击按钮正常进来')
        this.player_data.id = this.$route.query.player_id
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
      console.log('当前选手id是', this.player_data.id)
      this._get_listByPlayer()
      this._get_detailPlayer()
      this._get_PlayerVideo()
      this._get_comment_listByPlayer()
      this._get_QRCode()
      this._getByPlayerId()
      this.update_data = {
        id: this.player_data.id,
        type: 1
      }
      this._viewCountUpdate()
      $('.header_itemdtt').click(function(e){
        $(this).addClass('header_itemdtt_blue').siblings().removeClass('header_itemdtt_blue')
      })

      $('.bangdan_button').click(function(e){
        $(this).addClass('bangdan_button_blue').siblings().removeClass('bangdan_button_blue')
      })

      // 初始化滚动条
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })

      let video = document.getElementById('video1')
      video.addEventListener('play', (e) => {
        this.video_control = false
      })

      video.addEventListener('pause', (e) => {
        this.video_control = true
      })



    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin.styl"

  .recommend
    position: fixed
    width: 100%
    top: 0
    bottom: 0
    background-color white
    .recommend-content
      height: 100%
      overflow: hidden
    .list-mask
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 200
      backdrop-filter: blur(10px)
      opacity: 1
      background: rgba(7, 17, 27, 0.6)
      &.fade-enter-active, &.fade-leave-active
        transition: all 0.5s
      &.fade-enter, &.fade-leave-active
        opacity: 0
        background: rgba(7, 17, 27, 0)
    .shopcart-list
      position: fixed
      left: 0
      bottom: 0
      z-index: 300
      height: 480px
      width: 100%
      border-top-right-radius 10px
      border-top-left-radius 10px
      background-color white
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.5s
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 480px, 0)
    .shopcart-listd
      position: fixed
      left: 0
      bottom: 0
      z-index: 300
      height: 120px
      width: 100%
      border-top-right-radius 10px
      border-top-left-radius 10px
      background-color white
      &.foldd-enter-active, &.foldd-leave-active
        transition: all 0.5s
      &.foldd-enter, &.foldd-leave-active
        transform: translate3d(0, 120px, 0)
    .shopcart-listz
      position: fixed
      left: 0
      bottom: 0
      z-index: 300
      height: 300px
      width: 100%
      background-color white
      &.foldz-enter-active, &.foldz-leave-active
        transition: all 0.5s
      &.foldz-enter, &.foldz-leave-active
        transform: translate3d(0, 300px, 0)
    .shopcart-listy
      position: fixed
      left: 0
      right: 0
      margin:auto auto
      bottom: 0
      top: 0px
      z-index: 300
      height: 95%
      width: 95%
      border-radius 10px
      background-color white
      &.foldy-enter-active, &.foldy-leave-active
        transition: all 0.5s
      &.foldy-enter, &.foldy-leave-active
        transform: translate3d(0, 1000px, 0)
    .foldqqt
      position: fixed
      width: 150px
      height: 50px
      background-color: rgba(0, 0, 0, 0.5)
      color: white
      text-align: center
      line-height: 50px
      z-index:  300
      left: 0
      right: 0
      margin:0 auto
      top: 300px
      border-radius: 5px
      &.foldqq-enter-active, &.foldqq-leave-active
        transition: all 0.5s
      &.foldqq-enter, &.foldqq-leave-active
        opacity 0
    .list-mask-f
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 300
      backdrop-filter: blur(10px)
      opacity: 1
      background: rgba(7, 17, 27, 0.6)
      &fadef-enter-active, &fadef-leave-active
        transition: all 0.5s
      &fadef-enter, &fadef-leave-active
        opacity: 0
        background: rgba(7, 17, 27, 0)
</style>

<style scoped>
  .danmu_m {
    position: absolute;
    left: -100px;
    z-index: 200;
    transition: all 10s linear;
  }
  .header_itemdtt_blue {
    color: #0096FF
  }
  .bangdan_button {
    background-color: #F3F3F3
  }
  .bangdan_button_blue {
    color: white;
  }
  .jianbian {

  }
</style>
