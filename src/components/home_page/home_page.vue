<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div>


        <!--<div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper" style="height: 211px;">-->
          <!--<slider>-->
            <!--<div v-for="item in recommends">-->
              <!--<img class="needsclick" :src="item" style="height: 211px;">-->
            <!--</div>-->
          <!--</slider>-->
        <!--</div>-->

        <!--<div style="width: 100%;display: flex;align-items: center;height: 46px;" @click="search_jump">-->
          <!--<div style="width: 16px;height: 16px;margin-left: 14px"><img style="width: 100%;height: 100%;"  src="../../assets/sousuo.png" alt=""></div>-->
          <!--<div style="font-size: 14px;color: #6c757d;text-align: center;color:rgba(167,167,167,1);margin-left: 12px">请输入赛事名称、选手名字或视频名称</div>-->
        <!--</div>-->

        <!--<space></space>-->

        <!--<div style="width: 100%;height: 97px;display: flex;flex-direction: column;">-->
          <!--<div style="font-size: 14px;width: 100%;border-bottom: 1px solid #F3F3F3;flex: 1;display: flex;align-items: center">-->
            <!--<img src="../../assets/zhuanti.png" alt="" style="width: 16px;height: 16px;margin-left: 14px">-->
            <!--<span style="margin-left: 8px;font-size: 14px">热门专题</span>-->
          <!--</div>-->
          <!--<div class="button_arr" style="margin-top: 5px;width: 100%;display: flex;justify-content:space-between;padding-left: 14px;padding-right: 14px;flex: 1">-->
            <!--<div class="btn_item" v-for="(item, index) in hot_header_title" @click="special_topic(item)">{{item.name}}</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<space></space>-->

        <!--热门赛事-->
        <div class="hot_game" style="width: 100%;">

          <div class="title" style="display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #F3F3F3">
            <div class="title_left" style="display: flex;align-items: center">
              <img src="../../assets/jiangbei.png" alt="" style="width: 23px">
              <span style="margin-left: 10px">热门赛事</span>
            </div>
            <div class="more" style="margin-right: 14px;display: flex;align-items: center">
              <span style="margin-right: 4px;color: #A7A7A7">
                更多
              </span>
              <img src="../../assets/more.png" alt="" style="width: 16px;">
            </div>
          </div>

          <div class="list_item">
            <daohang2  @jump_detail="jump_detail" v-for="(item, index) in hot_match" :data="item" v-show="index<=2"></daohang2>
          </div>
        </div>

        <!--<space></space>-->

        <!--&lt;!&ndash;热门视频&ndash;&gt;-->
        <!--<div class="game" style="">-->
          <!--<div class="title" style="display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #F3F3F3">-->
            <!--<div class="title_left" style="display: flex;align-items: center">-->
              <!--<img src="../../assets/remen.png" alt="" style="width: 16px">-->
              <!--<span style="margin-left: 10px">热门视频</span>-->
            <!--</div>-->
            <!--<div class="more" style="margin-right: 14px;display: flex;align-items: center">-->
              <!--<span style="margin-right: 4px;color: #A7A7A7" @click="_moreVideo">-->
                <!--更多-->
              <!--</span>-->
              <!--<img src="../../assets/more.png" alt="" style="width: 16px;">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div style="display: flex;flex-wrap: wrap;justify-content: space-between;padding-bottom: 14px">-->
            <!--<daohang1 style="margin-top: 14px;" v-for="(item, index) in hot_video_list" :data="item"></daohang1>-->
          <!--</div>-->
        <!--</div>-->

        <!--<space></space>-->

        <!--<div class="game" style="">-->
          <!--<div class="title" style="display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #F3F3F3">-->
            <!--<div class="title_left" style="display: flex;align-items: center">-->
              <!--<img src="../../assets/bangdan.png" alt="" style="width: 16px">-->
              <!--<span style="margin-left: 10px">人气榜单</span>-->
            <!--</div>-->
            <!--<div class="more" style="margin-right: 14px;display: flex;align-items: center">-->
              <!--<span style="margin-right: 4px;color: #A7A7A7">-->
                <!--更多-->
              <!--</span>-->
              <!--<img src="../../assets/more.png" alt="" style="width: 16px;">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<daohang3 v-for="(item, index) in hotPlayer_list" :data="item" @player_jump="player_jump" v-show="index <= 3"></daohang3>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div style="height: 40px"></div>-->
      </div>
    </scroll>
    <search ref="search"></search>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from '../../base/slider/slider'
  import Scroll from '../../base/scroll/scroll'
  import Search from '../search/search'
  import {model} from '../../http/model'
  import {savaToLocal, loadFromlLocal} from  '../../common/js/store'

  export default {
    data() {
      return {
        recommends: [],
        discList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        // 热门专题
        hot_header_title: [],
        // 选手
        hotPlayer_list: [],
        // 热门赛事
        hot_match: [],
        // 热门视频模块
        hot_video_list: []
      }
    },
    created() {
      // 获取当前url
      if (this.$utils.ios_or_andriod() === 1) {
        console.log('安卓手机')
      } else {
        console.log('苹果手机')
      }
      // 获取当前手机屏幕宽度
      console.log('获取当前手机屏幕宽度')
      console.log(document.body.clientWidth)

      let url = window.location.href
      let user = this.$utils.parseQueryString(url)
      console.log('解析url的参数')
      console.log(JSON.stringify(user))
      if (user.status!== undefined) {
        alert('您已经被禁止登陆此平台')
      } else {
        if (user.id !== undefined) {
          console.log('存在id就到这里')
          // 存在id就到这里
          savaToLocal('token', user.token)
          savaToLocal('id', user.id)
          savaToLocal('type', user.type)
          // 微信配置
          window.$utils_wx.fenxianglianjie()
          console.log(user.id)
          if (user.type === '1') {
            model.QRCodeRecord({
              id: user.id,
              type: 1
            }).then((res) => {
              console.log(res)
            })
            // 如果进入这里就要跳转到选手详情
            this.$router.push({
              path: '/person_detail',
              query: {
                id: user.id
              }
            })
          } else if (user.type === '2') {
            model.QRCodeRecord({
              id: user.id,
              type: 2
            }).then((res) => {
              console.log(res)
            })
            // 如果进入这里就要跳转到赛事详情
            this.$router.push({
              path: '/page_detail',
              query: {
                id: user.id
              }
            })
          }

        } else if (user.token !== undefined) {
          // 注入微信配置
          console.log('只有token')
          savaToLocal('token', user.token)
          window.$utils_wx.fenxianglianjie()
          window.$utils_wx.edit_data()
          this._get_HotMatch(1)
        } else {
          // 啥也不敢干
          console.log('啥也不敢干')
        }
      }


//      this._get_homeModel()
//      this._get_HotVideo()
//      this._get_HotPlayer()
//      this._get_HotPartition()
//      this._slide_list()
//      this._get_list()
      this._get_user()
    },
    methods: {
      aaa() {
        this.$router.push({
          path: '/page_detail'
        })
      },
      _get_list() {
        model.get_list({
          page: 0
        }).then((res) => {
          console.log('获取人气选手')
          console.log(res)
          this.hotPlayer_list = res.data.data.content
        })
      },
      special_topic(item) {
        console.log(item)
        this.$router.push({
          path: 'hot_topic',
          query: {
            item: item
          }
        })
      },
      _moreVideo() {
        this.$router.push({
          path: 'hot_video'
        })
      },
      player_jump() {
        this.$router.push({
          path: '/person_detail',
          query: {
            id: 'xxxx'
          }
        })
      },
      refurbish() {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        });
      },
      _get_HotVideo() {
        model.get_HotVideo({
          page: '0',
          size: '5',
          viewType: '1'
        }).then((res) => {
          console.log('获取热门视频返回')
          console.log(res)
          this.hot_video_list = res.data.data.content
        })
      },
      _get_HotPlayer() {
        model.get_HotPlayer({
          page: '0',
          size: '5',
          viewType: '1',
          matchId: '1'
        }).then((res) => {
          console.log('获取热门选手')
          console.log(res)
        })
      },
      _get_HotPartition() {
        model.get_HotPartition({
          page: 0,
          size: 5,
          viewType: 1
        }).then((res) => {
          console.log('获取热门专题返回的东西')
          console.log(res)
          this.hot_header_title = res.data.data.content
          this.refurbish()
        })
      },
      _get_HotMatch(index) {
        model.get_HotMatch({
          page: 0,
          size: 10
        }).then((res) => {
          console.log('获取热门赛事返回的东西')
          console.log(res)
          this.hot_match = res.data.data.content
          if (index === 1) {
            this.jump_detail(this.hot_match[0])
          }
//          this.refurbish()
        })
      },
      _get_homeModel() {
        model.get_homeModel({}).then((res) => {
          console.log('首页接口返回')
          console.log(res)
        })
      },
      _slide_list() {
        model.slide_list({}).then((res) => {
          console.log('轮播图返回的东西')
          console.log(res)
          this.recommends = res.data.data.slide
        })
      },
      _get_user() {
        model.get_user({

        }).then((res) => {
          console.log('获取用户信息返回的东西')
          console.log(res)
          savaToLocal('userId', res.data.data.id)
          console.log(loadFromlLocal('userId'))
          savaToLocal('user_data', JSON.stringify(res.data.data))
        })
      },
      search_jump() {
        this.aaa()
        this.$router.push({
          path: 'new_search',
          query: {
            id: 'xxxx'
          }
        })
      },
      jump_detail(data) {
        console.log('homepage跳转到page_detail')
        console.log(data)
        console.log(data.id)
        this.$router.push({
          path: '/page_detail',
          query: {
            id: data.id
          }
        })
      }
    },
    mounted: function () {




      $('.btn_item').click(function(e){
        $(this).addClass('btn_selectd').siblings().removeClass('btn_selectd')
      })
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    components: {
      Slider,
      Scroll,
      Search
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
    bottom: 50px
    background-color white
    p
      margin 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .button_arr
        .btn_item
          font-size 14px
          line-height 47px
      .game
        width: 100%;
        margin: 0 auto;
        padding-left: 10px;
        padding-right: 10px;
        .title
          width: 100%;
          height: 40px;
          line-height: 60px;
          font-size: 20px;
          font-weight: 500
        .list_item
          display: flex
          justify-content: space-between
          width: 100%
          margin-top: 20px
      .hot_game
        width: 100%;
        margin: 0 auto;
        padding-left: 14px;
        padding-right: 14px;
        .title
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          font-weight: 500
</style>

<style scoped>
  .btn_selectd {
    color: #0096FF
  }
</style>
