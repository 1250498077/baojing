<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div>
        <div style="width: 100%;display: flex;align-items: center;height: 46px;">
          <div style="width: 16px;height: 16px;margin-left: 14px"><img style="width: 100%;height: 100%;"  src="../../assets/sousuo.png" alt=""></div>
          <input type="text" placeholder="请输入赛事名称、选手名字或视频名称" style="border: none;padding-left: 13px;width: 75%;height: 25px;font-size: 14px">
          <div style="width: 13%;height: 25px;background-color: #0096FF;color: white;text-align: center;line-height: 25px;border-radius: 3px">搜索</div>
        </div>
        <space></space>
        <!--搜索页面 -->
        <div style="display: none">
          <div style="width: 100%;height: 106px;padding-left: 14px;padding-right: 14px;border-bottom: 1px solid #F3F3F3">
            <div class="title" style="line-height: 50px;height: 50px;display: flex;align-items: center">
              <div style="border-left: 2px solid #0096FF;width: 40px;text-align: end">热门</div>
            </div>
            <div style="display: flex;">
              <div style="width: 70px;height: 30px;border: 1px solid #0096FF;border-radius: 19px;line-height: 30px;text-align: center;color: #0096FF;margin-right: 10px">少儿</div>
              <div style="width: 70px;height: 30px;border: 1px solid #0096FF;border-radius: 19px;line-height: 30px;text-align: center;color: #0096FF;margin-right: 10px">少儿</div>
              <div style="width: 70px;height: 30px;border: 1px solid #0096FF;border-radius: 19px;line-height: 30px;text-align: center;color: #0096FF;margin-right: 10px">少儿</div>
            </div>
          </div>
          <div style="width: 100%;height: 106px;padding-left: 14px;padding-right: 14px;border-bottom: 1px solid #F3F3F3">
            <div class="title" style="line-height: 50px;height: 50px;display: flex;align-items: center">
              <div style="border-left: 2px solid #0096FF;width: 40px;text-align: end">热门</div>
            </div>
            <div style="display: flex;">
              <div style="width: 70px;height: 30px;border: 1px solid #0096FF;border-radius: 19px;line-height: 30px;text-align: center;color: #0096FF;margin-right: 10px">少儿</div>
              <div style="width: 70px;height: 30px;border: 1px solid #0096FF;border-radius: 19px;line-height: 30px;text-align: center;color: #0096FF;margin-right: 10px">少儿</div>
              <div style="width: 70px;height: 30px;border: 1px solid #0096FF;border-radius: 19px;line-height: 30px;text-align: center;color: #0096FF;margin-right: 10px">少儿</div>
            </div>
          </div>
        </div>
        <!--导航-->
        <div style="width: 100%;">
          <div style="width: 100%;height: 44px;border-bottom: 1px solid #F3F3F3;display: flex;justify-content: flex-start;align-items: center;padding-left: 14px;padding-right: 14px">
            <span class="sousuo_header" style="margin-right: 40px;font-size: 16px" @click="selectm(1)">全部</span>
            <span class="sousuo_header" style="margin-right: 40px;font-size: 16px" @click="selectm(2)">选手</span>
            <span class="sousuo_header" style="margin-right: 40px;font-size: 16px" @click="selectm(3)">赛事</span>
            <span class="sousuo_header" style="margin-right: 40px;font-size: 16px" @click="selectm(4)">视频</span>
          </div>
          <!--全部-->
          <div v-show="index === 1">
            <!--选手-->
            <div style="padding-left: 14px;padding-right: 14px;height: 180px;border-bottom: 1px solid #F3F3F3">
              <div class="title" style="display: flex;align-items: center;margin-top: 30px;margin-bottom: 20px">
                <span>选手</span>
                <img src="../../assets/enter.png" alt="" style="width: 14px;height: 14px;">
              </div>
              <div class="person_list" style="display: flex;justify-content: space-between">
                <div style="display: flex;align-items: center;flex-direction: column;width: 100px">
                  <div style="width: 80px;height: 80px;;border-radius: 80px;background-color: orange">

                  </div>
                  <div style="margin-top: 10px">
                    郑年乐
                  </div>
                </div>
                <div style="display: flex;align-items: center;flex-direction: column;width: 100px">
                  <div style="width: 80px;height: 80px;;border-radius: 80px;background-color: orange">

                  </div>
                  <div style="margin-top: 10px">
                    郑年乐
                  </div>
                </div>
                <div style="display: flex;align-items: center;flex-direction: column;width: 100px">
                  <div style="width: 80px;height: 80px;;border-radius: 80px;background-color: orange">

                  </div>
                  <div style="margin-top: 10px">
                    郑年乐
                  </div>
                </div>
              </div>
            </div>
            <!--赛事-->
            <div style="padding-left: 14px;padding-right: 14px;">
              <div class="title" style="display: flex;align-items: center;margin-top: 30px;">
                <span>赛事</span>
                <img src="../../assets/enter.png" alt="" style="width: 14px;height: 14px;">
              </div>
              <div>
                <daohang2></daohang2>
                <daohang2></daohang2>
              </div>
            </div>
            <!--视频-->
            <div style="padding-left: 14px;padding-right: 14px;">
              <div class="title" style="display: flex;align-items: center;margin-top: 15px;">
                <span>视频</span>
                <img src="../../assets/enter.png" alt="" style="width: 14px;height: 14px;">
              </div>
              <div>
                <daohang2></daohang2>
                <daohang2></daohang2>
              </div>
            </div>
          </div>
          <!--选手-->
          <div  v-show="index === 2" style="display: flex;justify-content: space-between;width: 100%;padding-left: 14px;padding-right: 14px;flex-wrap: wrap">
            <div style="width: 45%;display: flex;flex-direction: column;align-items: center;margin-top: 14px">
              <div style="width: 100%;height: 222px;overflow: hidden;display: flex;align-items: center;justify-content: center">
                <img src="../../assets/11.jpg" alt="">
              </div>
              <div style="margin-top: 10px">
                郑年乐
              </div>
            </div>
            <div style="width: 45%;display: flex;flex-direction: column;align-items: center;margin-top: 14px">
              <div style="width: 100%;height: 222px;overflow: hidden;display: flex;align-items: center;justify-content: center">
                <img src="../../assets/11.jpg" alt="">
              </div>
              <div style="margin-top: 10px">
                郑年乐
              </div>
            </div>
            <div style="width: 45%;display: flex;flex-direction: column;align-items: center;margin-top: 14px">
              <div style="width: 100%;height: 222px;overflow: hidden;display: flex;align-items: center;justify-content: center">
                <img src="../../assets/11.jpg" alt="">
              </div>
              <div style="margin-top: 10px">
                郑年乐
              </div>
            </div>
          </div>
          <!--赛事-->
          <div v-show="index === 3" style="display: flex;justify-content: space-between;width: 100%;padding-left: 10px;padding-right: 10px;flex-wrap: wrap">
            <daohang1 style="margin-top: 14px;"></daohang1>
            <daohang1 style="margin-top: 14px;"></daohang1>
            <daohang1 style="margin-top: 14px;"></daohang1>
          </div>
          <!--视频-->
          <div v-show="index === 4" style="display: flex;justify-content: space-between;width: 100%;padding-left: 10px;padding-right: 10px;flex-wrap: wrap">
            <daohang1 style="margin-top: 14px;"></daohang1>
            <daohang1 style="margin-top: 14px;"></daohang1>
            <daohang1 style="margin-top: 14px;"></daohang1>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../base/scroll/scroll'
  export default {
    props: {

    },
    data() {
      return {
        recommends: [],
        index: 1
      }
    },
    methods: {
      selectm(index) {
        this.index = index
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      });

      // 高亮设置
      $('.sousuo_header').click(function(e){
        $(this).addClass('sousuo_header_blue').siblings().removeClass('sousuo_header_blue');
      })
    },
    components: {
      Scroll
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin.styl"

  .recommend
    position: fixed
    width: 100%
    top: 0
    bottom 0
    background-color white
    p
      margin 0
    .recommend-content
      height: 100%
      overflow: hidden
</style>

<style scoped>
  .sousuo_header_blue {
    color: #0096FF
  }
</style>
