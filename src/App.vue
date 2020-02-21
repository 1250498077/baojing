<template>
  <div id="app" @touchmove.prevent>
    <!--<div style="width: 100px;height: 100px;background-color: #1e7e34;position: fixed;top: 0;left: 0;z-index: 2000" @click="topic_show = true"></div>-->
    <!--弹幕-->
    <div v-for="ball in balls">
      <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
        <div style="width: 300px;height: 50px;top: 100px;left: -300px;position: fixed" v-show="ball.show" class="danmu_m">
          <div style="display: flex;align-items: center">
            <div style="width: 100px;height: 50px;display: flex;align-items: center;justify-content: flex-end;background-color: rgba(255, 255, 255, 0)">
              <img :src="ball.giftImg" alt="" style="height: 100%">
            </div>
            <div style="display: flex;align-items: center">
              <div class="jianbian" style="display: flex;font-size: 14px;height: 38px;width: 241px;align-items: center;margin-left: -1px;background: linear-gradient(to right,rgba(255, 167, 0, 1), rgba(255, 167, 0, 1), rgba(255, 167, 0, 1),rgba(255, 167, 0, 1),rgba(255, 205, 110, 0.5));">
                <span style="color: red;">{{ball.userName}}</span>
                <span style="color: white;margin-left: 3px">送给</span>
                <span style="color: red;margin-left: 3px">{{ball.playerName}}</span>
                <span style="color: white;margin-left: 3px">{{ball.buyNum}}份</span>
                <span style="color: white;margin-left: 3px">{{ball.giftName}}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <router-view v-on:drop="drop"></router-view>

    <!--弹层提示-->
    <transition name="foldqq">
      <div class="foldqqt"
           style="" v-show="topic_show">
        {{topic_content}}
      </div>
    </transition>
    <!--<div class="static_select" style="color: #C0C0C0" v-show="home_page_show">-->
      <!--<div class="static_select_item"  @click="select($event, 1)">-->
        <!--<img src="./assets/1.png" alt="" v-show="img_show1 === true">-->
        <!--<img src="./assets/2.png" alt="" v-show="img_show1 === false">-->
        <!--<span :class="{'selectd': img_show1 === true}">热门</span>-->
      <!--</div>-->
      <!--<div class="static_select_item"  @click="select($event, 2)">-->
        <!--<img src="./assets/3.png" alt="" v-show="img_show2 === true">-->
        <!--<img src="./assets/4.png" alt="" v-show="img_show2 === false">-->
        <!--<span :class="{'selectd': img_show2 === true}">广场</span>-->
      <!--</div>-->
      <!--<div class="static_select_item"  @click="select($event, 3)">-->
        <!--<img src="./assets/5.png" alt="" v-show="img_show3 === true">-->
        <!--<img src="./assets/6.png" alt="" v-show="img_show3 === false">-->
        <!--<span :class="{'selectd': img_show3 === true}">我的</span>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {model} from './http/model'
  import {savaToLocal, loadFromlLocal} from './common/js/store'
  export default {
    name: 'App',
    data() {
      return {
        topic_content: '',
        topic_show: false,
        img_show1: true,
        img_show2: false,
        img_show3: false,
        home_page_show: true,
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
        userId: loadFromlLocal('userId')
        // this.$store.commit('keyword_edit', this.keyword)
        // this.$store.state.isLoading
      }
    },
    methods: {

      drop(item) {
        console.log(item)
        //=============================================
        let that = this
        // 动态设置高度
        // 获取到这个dom对象之后
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          // 找寻出balls这个数组里面的元素第一个为false的元素，将他置为true，触发动画，挂载传过来的dom
          if (!ball.show) {
            $('.danmu_m').eq(i).css("top",that.$utils.randomFrom(0, 100) + 'px')
            ball.show = true
            ball.data = ''
            ball.giftImg = item.data.giftImg
            ball.userName = item.data.userName
            ball.playerName = item.data.playerName
            ball.giftName = item.data.giftName
            ball.buyNum = item.data.buyNum
            // 用一个数组暂时将其存起来，目前还不知道有什么用
            this.dropBalls.push(ball)
            // 返回空
            return;
          }
        }
      },
      beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            el.style.display = '';
            el.style.webkitTransform = `translate3d(700px,0,0)`;
            el.style.transform = `translate3d(700px,0,0)`;
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
      test() {},
      select(e, index) {
        // 导航显示设置
        if (index === 1) {
          this.img_show1 = true
          this.img_show2 = false
          this.img_show3 = false
          this.$router.push({
            path: '/home_page'
          })
        } else if (index === 2) {
          this.img_show1 = false
          this.img_show2 = true
          this.img_show3 = false
          // square
          this.$router.push({
            path: '/square'
          })
          this.$utils.test()
        } else if (index === 3) {
          this.$router.push({
            path: '/my'
          })
          this.img_show1 = false
          this.img_show2 = false
          this.img_show3 = true
        }
      }
    },
    computed: {
      getUserIcons() {
        console.log('app监听获取的东西')
        return this.$store.state.giftHistId;
      }
    },
    watch:{
      topic_show: function (newval) {
        console.log('监听到变化' + newval)
        if (newval === true) {
          setTimeout(() => {
            console.log('执行延时方法')
            this.topic_show = false
          }, 4000)
        }
      },
      getUserIcons(val) {
        // 确定是不是本用户
        console.log('确定是不是本用户')
        console.log(val.data.userId)
        console.log(this.userId)
        console.log(loadFromlLocal('userId'))
        console.log(val.data.userId === parseInt(loadFromlLocal('userId')))
        if (val.data.userId === parseInt(loadFromlLocal('userId'))) {
          console.log('是本人发的弹幕')
          this.topic_content = '你给' + val.data.playerName + '增加了人气'
          this.topic_show = true
        }
        console.log('APP模块监听到弹幕变化，获取弹幕数据')
        console.log(val)
        this.drop(val)
      },
      $route(to,from){
        if (to.path === '/page_detail'||to.path === '/person_detail'||to.path === '/new_search') {
          this.home_page_show = false
        } else {
          this.home_page_show = true
          if (to.path === '/home_page') {
            this.img_show1 = true
            this.img_show2 = false
            this.img_show3 = false
          } else if (to.path === '/square') {
            this.img_show1 = false
            this.img_show2 = true
            this.img_show3 = false
          } else if (to.path === '/my') {
            this.img_show1 = false
            this.img_show2 = false
            this.img_show3 = true
          }
        }
      }
    },
    created() {
      if (this.$route.path === '/page_detail'||this.$route.path === '/person_detail'||this.$route.path === '/new_search') {
        this.home_page_show = false
      } else {
        this.home_page_show = true
        if (this.$route.path === '/home_page') {
          this.img_show1 = true
          this.img_show2 = false
          this.img_show3 = false
        } else if (this.$route.path === '/square') {
          this.img_show1 = false
          this.img_show2 = true
          this.img_show3 = false
        } else if (this.$route.path === '/my') {
          this.img_show1 = false
          this.img_show2 = false
          this.img_show3 = true
        }
      }
    },
    mounted: function () {
      window.addEventListener('focusin', () => {
        // 键盘弹出事件处理
        console.log('键盘弹出事件处理')
        console.log(document.documentElement.scrollTop)
//        document.documentElement.scrollTop = 0
      })
      window.addEventListener('focusout', () => {
        // 键盘收起事件处理
        console.log('键盘收起事件处理')
        console.log('adsasdasdasdas')
        document.documentElement.scrollTop = 0
        console.log(document.documentElement.scrollTop)
      })
      let url = window.location.href
      let user_id = this.$utils.parseQueryString(url)
      let data = {
        openId: '1',
        tvCode: ''
      }
      model.get_user(data).then((res) => {
        console.log('根据用户id返回的东西')
        console.log(res)
        this.$store.commit('local_user_information', res.data.data)
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    .foldqqt
      position: fixed
      width: 150px
      height: 50px
      background-color: rgba(0, 0, 0, 0.5)
      color: white
      text-align: center
      line-height: 50px
      z-index:  1000
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
#app {
  background-color: white;
}
.danmu_m {
  position: absolute;
  left: -100px;
  z-index: 200;
  transition: all 10s linear;
}
.static_select {
  position: fixed;
  left: 0;
  bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 50;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  background-color: #FAFAFA;
  overflow: hidden;
  border-top: 1px solid #EFEFEF;
}

.static_select_item {
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  flex: 1;
  display: flex;
  margin-top: 6px;
  flex-direction: column;
  align-items: center;
  /*border-left: 1px solid green;*/
  /*border-right: 1px solid green;*/
}
.static_select_item img {
  width: 20px;
  height: 20px;
}
  .selectd {
    color: #0096FF
  }
</style>
