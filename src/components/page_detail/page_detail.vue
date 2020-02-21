<template>
  <div class="recommend" ref="recommend" id="recommendg">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div class="page page-current courseInfo" style="position: relative">
        <div style="position: relative;display: flex;flex-direction: column;align-items: center;top: 0;left: 0;width: 100%;background-color: black;overflow: hidden;height: 211px" id="wrapper"  v-show="video_list.length !== 0" @click="lose_cursor">
          <video id="video2"
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
        <div style="position: relative;display: flex;justify-content: space-between;align-items: center;top: 0;left: 0;width: 100%;background-color: black;overflow: hidden;height: 211px" v-show="video_list.length === 1">
          <img :src="slide_array[0]" alt="" style="width: 100%">
        </div>
        <!--<div style="position: relative;display: flex;justify-content: space-between;align-items: center;top: 0;left: 0;width: 100%;background-color: black;overflow: hidden;height: 211px" v-show="slide_array.length > 1&&video_list.length === 0">-->
          <!--&lt;!&ndash;<img :src="slide_array[0]" alt="" style="width: 100%">&ndash;&gt;-->
          <!--<div class="slider-wrapper" ref="sliderWrapper" style="height: 211px; position: relative;width: 100%;overflow: hidden">-->
            <!--<slider>-->
              <!--<div v-for="item in slide_array">-->
                <!--<img class="needsclick" :src="item" style="height: 211px;">-->
              <!--</div>-->
            <!--</slider>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div style="position: relative;display: flex;flex-direction: column;align-items: center;top: 0;left: 0;width: 100%;background-color: black;overflow: hidden;height: 211px" id="wrapper1"></div>-->
        <!-- @click="drop"-->
        <!--<space v-show="select_showd === 550000"></space>-->
        <!--bar-->
        <div  style="width: 95%;overflow: hidden;white-space: nowrap;margin: 0 auto;" class="pic-wrapper" @click="lose_cursor" ref="picWrapperq">
          <div class="header_detail" style="display: flex;justify-content: space-between" ref="picListlw" id="picListl">
            <!--match_detail-->
            <div class="header_item" @click="selectd(1, item, index)" style="width: 85px;font-size: 18px;text-align: center;height: 50px;line-height: 50px;position: relative" v-for="(item, index) in match_bar">{{item.barName}}
              <div style="width: 14px;height: 2px;position: absolute;bottom: 10px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF;" v-show="select_showd === index"></div>
            </div>
            <div class="header_item" @click="selectd(330000, {})" style="width: 85px;font-size: 18px;text-align: center;height: 50px;line-height: 50px;position: relative">
              赛事视频
              <div style="width: 14px;height: 2px;position: absolute;bottom: 10px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF;" v-show="select_showd === 330000"></div>
            </div>
            <div class="header_item" @click="selectd(440000, {})" style="width: 85px;font-size: 18px;text-align: center;height: 50px;line-height: 50px;position: relative">
              赛事报名
              <div style="width: 14px;height: 2px;position: absolute;bottom: 10px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF;" v-show="select_showd === 440000"></div>
            </div>
            <div class="header_item header_item_blue" @click="selectd(550000, {})" style="width: 70px;font-size: 18px;text-align: center;height: 50px;line-height: 50px;position: relative" id="start_select">
              人气榜单
              <div style="width: 14px;height: 2px;position: absolute;bottom: 10px;margin: 0 auto;right: 0;left: 0;background-color: #0096FF;" v-show="select_showd === 550000"></div>
            </div>
          </div>
        </div>
        <space v-show="select_showd === 550000" @click="lose_cursor"></space>
        <div style="width: 100%;display: flex;align-items: center;height: 46px;" v-show="select_showd === 550000">
          <div style="width: 20px;height: 20px;margin-left: 14px"><img style="width: 100%;height: 100%;"  src="../../assets/sousuo.png" alt=""></div>
          <input type="text" placeholder="请输入选手名字和选手编号" style="border: none;padding-left: 13px;width: 75%;height: 25px;font-size: 16px" v-model="search_content" class="your-input-id">
          <div style="width: 13%;height: 30px;background-color: #0096FF;color: white;text-align: center;line-height: 30px;border-radius: 3px" @click="search_methods">搜索</div>
        </div>
        <!--<div class="pic-wrapper" ref="picWrapper" style="width: 100%;overflow: hidden;white-space: nowrap;background-color: #1e7e34">-->
          <!--<ul class="pic-list" ref="picList" style="background-color: aqua">-->
            <!--<li class="pic-item" style="display: inline-block;margin-right: 6px;width: 80px;font-size: 16px;text-align: center;border: 1px solid #0096FF;color: #0096FF;;border-radius: 3px;background-color: red" v-for="(item, index) in header_item">-->
              <!--{{item}}-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <div style="width: 100%;height: 1px;background-color: #F3F3F3;"></div>
        <!--活动的赛事-->
        <div style="width: 100%;display: flex;justify-content: center;align-items: center;"  @click="lose_cursor" v-show="select_show === 1">
          <div class="ql-container ql-snow">
            <div class="ql-editor">
              <div style="flex: 0.92;margin-top: 14px;margin: 0 auto;" v-html="content"></div>
            </div>
          </div>
        </div>
        <!--人气榜单-->
        <div style="width: 100%;padding-right: 14px;padding-left: 14px;" v-show="select_show === 550000" @click="lose_cursor">
          <div style="width: 300px;display: flex;border-radius: 23px;overflow: hidden;height: 48px;margin: 0 auto;margin-top: 14px;" @click="lose_cursor">
            <div style="flex: 1;text-align: center;line-height: 48px;position: relative" class="bangdan_button bangdan_button_blue" @click.stop.prevent="arrange_m(1)">
              人气
              <div style="width: 20px;height: 20px;position: absolute;top: 13px;left: 100px">
                <img src="../../assets/shang_jiantou.png" alt="" style="width: 100%" v-show="sort === 1">
                <img src="../../assets/xia_jiantou.png" alt="" style="width: 100%" v-show="sort === 2">
              </div>
            </div>
            <div style="flex: 1;text-align: center;line-height: 48px;position: relative" class="bangdan_button"  @click.stop.prevent="arrange_m(2)">
              参赛时间
              <div style="width: 20px;height: 20px;position: absolute;top: 13px;right: 20px">
                <img src="../../assets/shang_jiantou.png" alt="" style="width: 100%" v-show="sort === 3">
                <img src="../../assets/xia_jiantou.png" alt="" style="width: 100%" v-show="sort === 4">
              </div>
            </div>
          </div>
          <div style="display: flex;justify-content: space-between;height: 40px;align-items: center;margin-top: 20px">
            <div style="display: flex;flex-direction: column;align-items: center" v-show="vote_status !== 2">
              <div style="display: flex;align-items: center">
                <img src="../../assets/zhong.png" alt="" style="width: 14px;height: 14px;">
                <span style="margin-left: 5px">剩余时间</span>
              </div>
              <span style="color: #FF6E6E">{{time_exhibition.day}}天{{time_exhibition.hours}}时{{time_exhibition.min}}分{{time_exhibition.second}}秒</span>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;" v-show="vote_status === 1">
              <div>参赛选手</div>
              <div style="color: #0096FF">{{playerCount}}位</div>
            </div>
            <div style="width:83px;height:28px;background:rgba(167,167,167,1);border-radius:2px;text-align: center;line-height: 28px;color: white;border-radius:2px;" v-show="vote_status===0">
              投票未开始
            </div>
            <div style="width:83px;height:28px;background:linear-gradient(270deg,rgba(255,193,67,1) 0%,rgba(255,152,19,1) 100%);;border-radius:2px;text-align: center;line-height: 28px;color: white;border-radius:2px;" v-show="vote_status===1">
              投票中
            </div>
            <div style="width:83px;height:28px;background-color: rgba(167,167,167,1);border-radius:2px;text-align: center;line-height: 28px;color: white;border-radius:2px;" v-show="vote_status===2">
              投票结束
            </div>
          </div>
          <div style="display: flex;justify-content: space-between;flex-wrap: wrap">
            <daohang4 style="margin-top: 14px;margin-bottom: 14px" @buy_product="buy_product" v-for="(item, index) in player_list" :data="item" @match_tou="match_tou" :vote_show="vote_status"></daohang4>
          </div>
        </div>
        <!--赛事视频-->
        <div style="width: 100%;display: flex;justify-content: center;align-items: center;" v-show="select_show === 330000">
          <div style="flex: 0.92;">
            <daohang6 v-for="(item, index) in video_list" :data="item" @video_url="video_url"></daohang6>
          </div>
        </div>
        <!--赛事报名-->
        <div style="width: 100%;padding-right: 14px;padding-left: 14px;align-items: center;" @click="lose_cursor" v-show="select_show === 440000">
          <div style="display: flex;justify-content: flex-start;flex-wrap: wrap;margin-bottom: 14px">
            <div style="width: 30%;height: 100px;background-color: #F2F1F2;display: flex;justify-content: center;align-items: center;margin-top: 14px;overflow: hidden;margin-right: 5px;margin-left: 5px" id="upload" v-for="(item, index) in img_list">
              <img :src="item.showUrl" alt="" style="height: 100%">
            </div>
            <div style="width: 30%;height: 100px;background-color: #F2F1F2;display: flex;justify-content: center;align-items: center;margin-top: 14px;overflow: hidden;position: relative;" v-show="img_list.length !== 9">
              <img src="../../assets/add.png" alt="" style="width: 50%;height: 50%;">
              <input class="inputd" id="inputdd" name="file" type="file"  @change="update" style="width: 100%;height: 100px;background-color: #F2F1F2;opacity: 0;position: absolute;left: 0;top: 0;"/>
            </div>
          </div>
        </div>
        <space style="display: none" v-show="select_show === 440000" @click="lose_cursor"></space>
        <div style="padding-left: 14px;padding-right: 14px;" v-show="select_show === 440000">
          <div style="display: flex;align-items: flex-end;height: 55px;justify-content: flex-start" @click="iphonex_input(1)">
            <img src="../../assets/yonghu.png" alt="" style="width: 24px;height: 24px;">
            <div style="margin-left: 5px;font-size: 16px;width: 130px">姓名：</div>
            <input type="text" v-model="play_data.playerName" style="border-bottom: 1px solid gray;height: 30px;width: 100%" class="your-input-id" id="input_1">
          </div>
          <div style="display: flex;align-items: flex-end;height: 55px;justify-content: flex-start" @click="iphonex_input(1)">
            <img src="../../assets/dianhua.png" alt="" style="width: 24px;height: 24px;">
            <div style="margin-left: 5px;font-size: 16px;width: 130px">联系方式：</div>
            <input type="text" v-model="play_data.playerMobile" style="border-bottom: 1px solid gray;height: 30px;width: 100%" class="your-input-id" id="input_2">
          </div>
          <div style="display: flex;align-items: flex-end;height: 55px;justify-content: flex-start" @click="iphonex_input(1)">
            <img src="../../assets/jianjie.png" alt="" style="width: 24px;height: 24px;">
            <div style="margin-left: 5px;font-size: 16px;width: 130px">简介：</div>
            <input type="text" v-model="play_data.content" style="border-bottom: 1px solid gray;height: 30px;width: 100%" class="your-input-id" id="input_3">
          </div>
        </div>
        <div style="width:200px;height:50px;background:rgba(0,150,255,1);border-radius:40px;margin: 0 auto;line-height: 50px;text-align: center;color: white;margin-top: 50px;" v-show="select_show === 440000" @click="_signUp">报名</div>
        <div style="width: 95%;margin: 0 auto;display: flex;margin-top: 20px;margin-bottom: 20px"  v-show="select_show === 440000" @click="lose_cursor">
          <div style="flex: 0 0 70px;text-align: center;color: rgba(0,150,255,1)">
            提示：
          </div>
          <div style="flex: 1;color: rgb(162,161,162)">
            请必须提交选手个人头像、姓名、联系电话号码，个人简介（如来源地，学年级，特长，爱好）
          </div>
        </div>
        <div style="width: 100%;height: 30px" v-show="select_show === 440000"></div>
      </div>
    </scroll>
    <!--弹层提示-->
    <transition name="foldqq">
      <div class="foldqqt"
           style="" v-show="topic_show">
        {{topic_content}}
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
      </div>
    </transition>
    <!--遮罩层-->
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
    <input type="file" id="file1" />
    <!--<div class="" v-show="video_control === true" style="width: 100%;height: 20px;background-color: rgba(0, 0, 0, 0.5);position: relative;left: 0;top: -20px;z-index: 9999;display: flex;align-items: center;justify-content: center;flex-direction: column">-->
    <!--<div style="width: 90%;background-color: black;height: 6px;border-radius: 5px;overflow: hidden">-->
    <!--<div style="height: 100%;background-color: white;width: 5px"></div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  // now_to_new
//  import ChimeeMobilePlayer from 'chimee-mobile-player'
  import Slider from '../../base/slider/slider'
  import BScroll from 'better-scroll'
  import {model} from '../../http/model'
  import Scroll from '../../base/scroll/scroll'
  const a = 330000
  const b = 440000
  const c = 550000
  export default {
    data() {
      return {
        slide_array: [],
        di_time: {},
        match_bar: [],
        update_data: {
          type: 1,
          id: 1
        },
        vote_status: '',
        startStatus: 0,
        sort: 2,
        gift_index: 0,
        gift_num: 1,
        search_content: '',
        select_showd: 550000,
        header_item: ['老人', '儿童', '拉丁舞', '广场舞','广场舞','广场舞','广场舞','广场舞','广场舞'],
        gift_list: [],
        videoCount: 0,
        coverImg: '',
        topic_show: false,
        topic_content: '报名成功',
        // 定时器对象
        time_set: null,
        playerCount: 0,
        time_exhibition: {
          day: 0,
          hours: 0,
          min: 0,
          second: 0
        },
        vote_time: {
          startTime: 1,
          endTime: 1
        },
        vote_show: 0,
        video_src: '',
        content: '',
        player_list: [],
        video_list: [],
        match_detail: {},
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
        ],
        dropBalls: [],
        pgCurtime:0, //未格式化的当前播放时间
        pgTotalTime:0, //未格式化的总时间
        CurtimeText:'00:00', //格式化的当前播放时间
        TotalTimeText:'00:00',//未格式化的总时间,
        recommends: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        video_control: true,
        listShow: false,
        select_show: 550000,
        img_list: [],
        play_data: {
          avatar: '',
          content: '',
          playerMobile: '',
          playerName: '',
          matchId: '',
          playerId: ''
        },
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
        index_num: 1,
        picScrollq_index: 1,
        picScrollq_dom: {}
      }
    },
    components: {
      Scroll,
      Slider
    },
    methods: {
      votet() {
        console.log(this.startStatus)
        // 根据startStatus字段判断是不是被中断，最终判断,最终根据vote_status来判断投票状态
        if (this.startStatus === 1) {
          this.vote_status = 1
        } else if (this.startStatus === 2) {
          this.vote_status = 2
        }
        console.log('vote_status=',this.vote_status)
      },
      save_dingdan() {
        // 提交自己要送的礼物
        if (this.player_data.money === 0||this.player_data.money === '0') {
          console.log('if进入免费礼物')
          let data = {
            playerId: this.player_data.id,
            votes: this.gift_num,
            type: 1
          }
          this.listShow = false
          console.log(data)
          model.post_saveVote(data).then((res) => {
            console.log('免费投票返回的东西')
            console.log(res)
            if (res.data.code === 0) {
              this.topic_content = '免费礼物已达上线'
              this.topic_show = true
            } else if (res.data.code === 200) {
              this.topic_content = '你给' + this.player_data.playerName + '增加了礼物'
              this.topic_show = true
            }
          })
        } else {
          console.log('if进入收费礼物')
//          this.listShowd = false
          this.listShow = false
          this.save_Order()
        }
      },
      close_gift() {
        this.listShow = false
      },
      giftd(index) {
        this.gift_num = this.gift_num + (index)
        if (this.gift_num<=0) {
          this.gift_num = 1
        }
      },
      // 搜索方法
      search_methods() {
        console.log('搜索提交的数据')
        this.lose_cursor()
        console.log({
          page: 0,
          size: 30,
          matchId: this.play_data.matchId,
          type: '0',
          pinyin: '',
          title: this.search_content,
          fromType: '1'
        })
        model.searchByMatch({
          page: 0,
          size: 30,
          matchId: this.play_data.matchId,
          type: '0',
          pinyin: '',
          title: this.search_content.toString(),
          fromType: '1'
        }).then((res) => {
          this.search_content = ''
          console.log('搜索选手返回的东西')
          console.log(res)
          this.player_list = res.data.data.players
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        })
      },
      // 根据选手id获取礼物列表
      _get_listByPlayer(id) {
        model.listByPlayer({
          playerId: id
        }).then((res) => {
          console.log('根据选手id获取礼物列表')
          console.log(res)
          this.gift_list = res.data.data
          // 设置默认礼物
          this.play_data.giftId = this.gift_list[0].id
          this.player_data.giftId = this.gift_list[0].id
          this.player_data.money = this.gift_list[0].fee
          console.log(this.play_data)
          this.gift_index = 0
          this.$nextTick(() => {
            this._initPics()
          })
        })
      },
      // 点击弹出礼物框
      match_tou(data) {
        console.log('点击那个选手')
        console.log(data)
        this.player_data.playerName = data.player.playerName
        console.log(this.player_data.playerName)
        this.player_data.id = data.player.id
        this.listShow = true
        // 获取这个选手的礼物
        this._get_listByPlayer(data.player.id)
      },
      aaa() {
        console.log('触发aaa方法')
        this.$socket.send(13, 1, this)
      },
      // 初始化横向滚动条
      scrollto_end() {
        console.log('初始化横向滚动条')
        this.picScroll.scrollTo(this.picScroll.maxScrollX)
//        setTimeout((res) => {
//          console.log('执行click方法')
//          document.getElementById("start_select").click()
//        }, 3000)
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
      _initPicsz() {

        $('#picListlt').css('display','block')
        $("div").children(".header_item").css("display", "inline-block")

        let picWidth = 85
        let width = 300
        let width_f = 0
        console.log('当前页面屏幕宽度')
        console.log(document.body.clientWidth)
        width = picWidth * (this.match_bar.length + 3)
        this.$refs.picListlw.style.width = width +　'px'
        console.log(this.$refs.picListlw)
        console.log('初始化滚动条时的bar')
        console.log(picWidth)
        console.log(this.match_bar.length)
        console.log(width)
        console.log(this.$refs.picListlw.style.width)
        width_f = this.$refs.picWrapperq.style.width
        console.log('width_f', width_f)
        console.log('document.body.clientWidth', document.body.clientWidth)
        console.log(document.body.clientWidth-width-30)

        let start = 0
        if (this.$utils.ios_or_andriod() === 1) {
          start = document.body.clientWidth-width-30
        } else  if (this.$utils.ios_or_andriod() === 0) {
          start = 0
        }

        this.$nextTick(() => {
          if (!this.picScrollq) {
            console.log('初始化横向scroll')
            this.picScrollq = new BScroll(this.$refs.picWrapperq, {
              startX: start,
              scrollX: true,
              eventPassthrough: 'vertical',
              momentum: false,
              bounce: false
            })
            if (this.$utils.ios_or_andriod() === 0) {
              console.log('苹果手机的x的值100')
              console.log(this.picScrollq.x)
//              this.$nextTick(() => {
                setTimeout(() => {
                  console.log('苹果手机的x的值asdas')
                  this.picScrollq.scrollTo(document.body.clientWidth-width-30, 0, 100)
                }, 1000)
            }
            console.log('执行')
          } else {
            this.picScrollq.refresh()
          }
        })
        this.$nextTick(() => {
          $('.header_item').click(function(e){
            $(this).addClass('header_item_blue').siblings().removeClass('header_item_blue');
          })
        })
      },
      // 按照什么条件排列选手
      arrange_m(index) {
        console.log('asdasdas')
        if (index === 1) {
          console.log('外在1')
          if (this.sort === 1) {
            this.sort = 2
          } else if (this.sort === 2) {
            this.sort = 1
          } else {
            this.sort = 1
          }
          if (this.sort === 1) {
            for (let i = 0;i<this.player_list.length; i++) {
              for (let j = 0;j<this.player_list.length-1; j++) {
                if (this.player_list[j].ranking <= this.player_list[j+1].ranking) {
                  let tempOption = this.player_list[j+1]
                  this.$set(this.player_list, j+ 1, this.player_list[j])
                  this.$set(this.player_list, j, tempOption)
                }
              }
            }
          } else if (this.sort === 2) {
            for (let i = 0;i<this.player_list.length; i++) {
              for (let j = 0;j<this.player_list.length-1; j++) {
                if (this.player_list[j].ranking >= this.player_list[j+1].ranking) {
                  let tempOption = this.player_list[j+1]
                  this.$set(this.player_list, j+ 1, this.player_list[j])
                  this.$set(this.player_list, j, tempOption)
                }
              }
            }
//            this.player_list = this.player_list.reverse()
          } else {
            this.sort = 1
            for (let i = 0;i<this.player_list.length; i++) {
              for (let j = 0;j<this.player_list.length-1; j++) {
                if (this.player_list[j].ranking <= this.player_list[j+1].ranking) {
                  let tempOption = this.player_list[j+1]
                  this.$set(this.player_list, j+ 1, this.player_list[j])
                  this.$set(this.player_list, j, tempOption)
                }
              }
            }
          }
        } else if(index === 2) {
          console.log('外在2')
          console.log(this.sort)
          if (this.sort === 3) {
            this.sort = 4
          } else if (this.sort === 4) {
            this.sort = 3
          } else {
            this.sort = 3
          }
          if (this.sort === 3) {
            for (let i = 0;i<this.player_list.length; i++) {
              for (let j = 0;j<this.player_list.length-1; j++) {
                if (this.player_list[j].player.updateTime <= this.player_list[j+1].player.updateTime) {
                  let tempOption = this.player_list[j+1]
                  this.$set(this.player_list, j+ 1, this.player_list[j])
                  this.$set(this.player_list, j, tempOption)
                }
              }
            }
          } else if (this.sort === 4) {
            for (let i = 0;i<this.player_list.length; i++) {
              for (let j = 0;j<this.player_list.length-1; j++) {
                if (this.player_list[j].player.updateTime >= this.player_list[j+1].player.updateTime) {
                  let tempOption = this.player_list[j+1]
                  this.$set(this.player_list, j+ 1, this.player_list[j])
                  this.$set(this.player_list, j, tempOption)
                }
              }
            }
          } else {
            for (let i = 0;i<this.player_list.length; i++) {
              for (let j = 0;j<this.player_list.length-1; j++) {
                if (this.player_list[j].player.updateTime >= this.player_list[j+1].player.updateTime) {
                  let tempOption = this.player_list[j+1]
                  this.$set(this.player_list, j+ 1, this.player_list[j])
                  this.$set(this.player_list, j, tempOption)
                }
              }
            }
          }
        }
      },
      // 用于时间的实时展示，传递两个时间戳，长位的，然后自动倒计时
      time_count(date1, date2) {
        // date2必须大于date1
        let s1 = new Date(date1).getTime()/1000
        let s2 = new Date(date2).getTime()/1000
        let total = (s2 - s1)
        let day = parseInt(total / (24*60*60));//计算整数天数 ==
        let afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
        let hour = parseInt(afterDay/(60*60));//计算整数小时数   ===
        let afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
        let min = parseInt(afterHour/60);//计算整数分   ===
        let afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后剩余的秒数  ===
        this.time_exhibition = {
          day: day,
          hours: hour,
          min: min,
          second: afterMin
        }
      },
      // 投票未开始  正在投票  投票结束
      vote_timemethods() {
        let now_time = Date.parse(new Date())/1000
        if (now_time <= this.vote_time.startTime) {
          // 投票未开始
          this.vote_status = 0
          this.time_set = setInterval(()=> {
            let now_time = Date.parse(new Date())/1000
            if (now_time >= this.vote_time.startTime) {
              // 重新获取赛事详情,改变按钮状态
              this._get_MatchById(0)
            }
            this.time_count(now_time*1000, this.vote_time.startTime*1000)
          }, 1000)
        } else if (now_time>=this.vote_time.startTime && now_time<=this.vote_time.endTime) {
          // 正在投票
          this.vote_show = 1
          this.time_set = setInterval(()=> {
            let now_time = Date.parse(new Date())/1000
            if (now_time >= this.vote_time.endTime) {
              // 重新获取赛事详情，改变按钮状态
              this._get_MatchById(0)
            }
            this.time_count(now_time*1000, this.vote_time.endTime*1000)
          }, 1000)
          this.votet()
        } else {
          // 投票结束
          this.vote_status = 2
        }
      },
      // 更改视频地址
      video_url(data) {
        console.log('切换')
        console.log(data)
//        this.video_src = this.$utils.split_url(data.video)
        this.video_src = data.video
        this.coverImg = data.coverImg
//        this.videoCount = data.videoCount
        console.log(this.video_src)
        console.log(this.coverImg)
        this.update_data = {
          type: 4,
          id: data.id
        }
//        console.log('删除所有子节点')
//        let f = document.getElementById("wrapper1")
//        let childs = f.childNodes;
//        for(let i = 0; i < childs.length; i++) {
//          f.removeChild(childs[i]);
//        }
//        console.log(this.video_src)
//        this.chimee =  new ChimeeMobilePlayer({
//          poster: this.coverImg,
//          wrapper: '#wrapper1',  // video dom容器
//          src: this.video_src,
//          isLive: true,
//          autoplay: true,
//          controls: true,
//          playsInline: true,
//          preload: 'auto',
//          x5VideoPlayerFullscreen: true,
//          x5VideoOrientation: 'landscape|portrait',
//          xWebkitAirplay: true,
////          muted: true,
//          disableUA: ['Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36']
//        })
      },
      // 报名请求
      _signUp() {
        this.lose_cursor()
        // ||this.play_data.avatar.length===0
        let savaUrl = []
        for (let i = 0;i<this.img_list.length;i++) {
          savaUrl.push(this.img_list[i].saveUrl)
        }
        console.log('传过去的数据图片')
        console.log(savaUrl)
        if (savaUrl.length === 0) {
          this.topic_content = '请上传选手图片'
          this.topic_show = true
          return false
        }
        this.play_data.avatar = JSON.stringify(savaUrl)
        if (this.play_data.playerName===''||this.play_data.content===''||this.play_data.playerMobile==='') {
          this.topic_content = '请填写全部内容'
          this.topic_show = true
          return false
        }
        if (this.$utils.isPoneAvailable(this.play_data.playerMobile)) {
          this.topic_content = '请填写正确手机号'
          this.topic_show = true
          return false
        }
        // img_list
        console.log('报名提交的数据')
        console.log(this.play_data)
        model.savePlayer(this.play_data).then((res) => {
          console.log('报名返回的东西')
          console.log(res)
          if (res.data.code === 200) {
            this.topic_content = '报名成功'
            this.topic_show = true
            this.play_data.playerName = ''
            this.play_data.content=''
            this.play_data.playerMobile=''
            this.img_list = []
          }
          this._get_list()
          this._get_MatchById(0)
        })
      },
      // 选手详情页跳转
      search_jump() {
        this.$router.push({
          path: 'new_search',
          query: {
            id: 'xxxx'
          }
        })
      },
      // 上传图片
      update(e) {   // 上传照片
        let file = e.target.files[0]
        console.log(file)
        let param = new FormData()  // 创建form对象
        param.append('file',file);
        param.append('dir','text');
//        this.img_list.push(1)
        model.file_upload(param).then((res) => {
          console.log("上传图片")
          console.log(res)
          this.img_list.push(res.data.data)
          $("#file1").val('')
        })
      },
      // 选择什么bar就展示什么
      selectd(index, item, indexx) {
        console.log(index)
        console.log(item)
        console.log(indexx)
        if (index === a||index === b|| index === c) {
          // 展示写死的模块
          this.select_show = index
          this.select_showd = index
          console.log('select_show')
          console.log(this.select_show)
        } else {
          // 展示活动的模块，通过替换content字段替换内容
          this.select_show = index
          this.content = item.content
          this.select_showd = indexx
          console.log('select_show')
          console.log(this.select_show)
          console.log(item.content)
          model.getMatchBar({
            barId: item.extra,
            page: 0
          }).then((res) => {
            console.log('获取富文本内容')
            console.log(res)
            this.content = res.data.data.matchBar.content
            this.$nextTick(() => {
              this.$refs.scroll.refresh()
            })
          })
        }
        // 刷新滚动条
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      },
      // 跳转到选手详情
      buy_product(id) {
        this.$router.push({
          path: '/person_detail',
          query: {
            player_id: id,
            match_id: this.play_data.matchId
          }
        })
      },
      hideList() {
        this.listShow = false
      },
      // 送礼物
      drop(item, index) {
        console.log('点击了那个礼物')
        console.log(item)
        this.gift_index = index
        this.player_data.giftId = item.id
        this.player_data.money = item.fee
      },
      // 下订单
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
        console.log('赛事页面买礼物提交的数据')
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
      beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            el.style.display = '';
            el.style.webkitTransform = `translate3d(500px,0,0)`;
            el.style.transform = `translate3d(500px,0,0)`;
          }
        }
      },
      dropping(el, done) {
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done);
        });
      },
      afterDrop(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      },
      video_play(e) {
        // 组织冒泡
//        e.stopPropagation();
        this._viewCountUpdate()
        let video = document.getElementById('video2')
        video.play()
        this.video_control = false
        console.log(this.video_control)
      },
      video_click() {
        console.log('video_click')
        let video = document.getElementById('video2')
        video.pause()
        this.video_control = true
        console.log(this.video_control)
      },
      // 传0要下拉，传1不下拉
      iphonex_input(index) {
        console.log('传0要下拉，传1不下拉')
        console.log(index)
        if (this.$utils.ios_or_andriod() === 0) {
          if (index === 0) {
            window.scrollTo(0,0)
          }
        }
      },
      // 获取赛事详情
      _get_MatchById(index) {
        // 每次获取赛事详情就清空定时器
        window.clearInterval(this.time_set)
        model.get_MatchById({
          matchId: this.play_data.matchId,
          type: '1'
        }).then((res) => {
          console.log('根据赛事id获取赛事详情')
          console.log(res)
          // 获取参赛总人数
          this.playerCount = res.data.data.playerCount
          // 获取比赛详情
          this.match_detail = res.data.data.match
          document.title = res.data.data.match.title
          this.startStatus = parseInt(res.data.data.match.startStatus)
          // matchbar
          this.match_bar = res.data.data.modelJson
          if (this.match_bar.length >= 2) {
            this.$nextTick(() => {
              this._initPicsz()
            })
          }
          // 获取投票开始结束时间
          this.vote_time.startTime = JSON.parse(res.data.data.match.voteTime).startTime
          this.vote_time.endTime = JSON.parse(res.data.data.match.voteTime).endTime
          this.vote_timemethods()

          this.slide_array = this.match_detail.slide.split(',')
          console.log('轮播数组')
          console.log(this.slide_array)

          console.log('获取到赛事详情后保存微信')
          window.$utils_wx.data.id = this.play_data.matchId
          window.$utils_wx.data.type = '2'
          window.$utils_wx.edit_data({
            desc: '暴镜',
            imgUrl: res.data.data.match.coverImg,
            title: res.data.data.match.title,
            link: 'http://wxtv.candytime.com.cn/weChat/a?id='+ this.play_data.matchId +'&type=2'
          })

          this.$nextTick(() => {
            $('.header_item').click(function(e){
              $(this).addClass('header_item_blue').siblings().removeClass('header_item_blue');
            })
          })

        })
      },
      // 获取赛事视频
      _get_MatchVideoByMatchId() {
        model.get_MatchVideoByMatchId({
          page: 0,
          matchId:  this.play_data.matchId
        }).then((res) => {
          console.log('xian根据赛事id获取赛事视频')
          console.log(res)
          this.video_list = res.data.data.content
          // 默认播放第一个视频
          this.video_src = this.video_list[0].video
          this.coverImg = this.video_list[0].coverImg
          console.log(this.video_src)
          console.log(this.coverImg)
//          this.chimee =  new ChimeeMobilePlayer({
//            poster: this.coverImg,
//            wrapper: '#wrapper1',  // video dom容器
//            src: this.video_src,
//            isLive: true,
//            autoplay: true,
//            controls: true,
//            playsInline: true,
//            preload: 'auto',
//            x5VideoPlayerFullscreen: true,
//            x5VideoOrientation: 'landscape|portrait',
//            xWebkitAirplay: true,
////            muted: true,
//            disableUA: ['Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36']
//          })
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          });
        })
      },
      // 获取赛事选手
      _get_list() {
        model.get_list({
          page: 0,
          matchId: this.play_data.matchId
        }).then((res) => {
          console.log('根据赛事id获取选手')
          console.log(res)
          this.player_list = res.data.data.content
          // 刷新滚动条
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
      // 所有input失去光标
      lose_cursor() {
        if (this.$utils.ios_or_andriod() === 1) {
          let input = document.getElementsByClassName("your-input-id");
          for (let i = 0;i<input.length;i++) {
            input[i].blur()
          }
        }
//        if (this.$utils.ios_or_andriod() === 0) {
//          console.log('下拉的scrolly')
//          window.scrollTo(0,0)
//        }
      },
      uptate_scrollt() {
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
      },
      check_dom() {
        let dom1 = document.getElementById('input_1')
        let dom2 = document.getElementById('input_2')
        let dom3 = document.getElementById('input_3')
        if (dom1 != document.activeElement &&dom2 != document.activeElement &&dom3 != document.activeElement ) {
          window.scrollTo(0,0)
        }
      }
    },
    created() {

    },
    watch: {
      sort: function (newVal) {
      },
      topic_show: function (newval) {
        if (newval === true) {
          setTimeout(() => {
            this.topic_show = false
          }, 2000)
        }
      },
      img_list: function (newval) {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        });
      }
    },
    mounted: function () {



      window.input_index = 1

      window.addEventListener('focusout', () => {
        setTimeout(() =>　{
          this.check_dom()
        }, 500)
      })

      this.uptate_scrollt()

      $('.bangdan_button').click(function(e){
        $(this).addClass('bangdan_button_blue').siblings().removeClass('bangdan_button_blue');
      })

//      // 初始化滚动条
//      setInterval(() => {
//        this.$nextTick(() => {
//          this.$refs.scroll.refresh()
//        })
//      }, 300)

//      let video = document.getElementById('video2')
//      video.addEventListener('play', (e) => {
//        this.video_control = false
//      })
//
//      video.addEventListener('pause', (e) => {
//        this.video_control = true
//      })

      // 实现上传图片的代码
      $(function () {
        $("#upload").click(function () {
          let formData = new FormData()
          formData.append("myfile", document.getElementById("file1").files[0])
        })
      })

      this.play_data.matchId = this.$route.query.id
      this.player_data.matchId = this.$route.query.id

//      this.$utils_wx.edit_data({
//        desc: '暴镜',
//        imgUrl: this.coverImg,
//        title: document.title,
//        link: 'http://wxtv.candytime.com.cn/weChat/a?id='+ this.play_data.matchId +'&type=2'
//      })

      this._get_MatchById(1)
      this._get_MatchVideoByMatchId()
      this._get_list()

      let video = document.getElementById('video2')
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
</style>

<style>
  .danmu_m {
    position: absolute;
    left: -100px;
    z-index: 200;
    transition: all 10s linear;
  }
  .header_item_blue {
    color: #0096FF
  }
  .bangdan_button {
    background-color: #F3F3F3
  }
  .bangdan_button_blue {
    background-color: #0096FF;
    color: white;
  }
</style>
