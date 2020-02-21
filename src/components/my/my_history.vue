使用模板
<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div>
        <div style="width: 300px;display: flex;border-radius: 23px;overflow: hidden;height: 40px;margin: 0 auto;margin-top: 14px;background-color: #F3F3F3">
          <div style="flex: 1;text-align: center;line-height: 40px;" class="bangdan_button bangdan_button_blue" @click="aa">选手</div>
          <div style="flex: 1;text-align: center;line-height: 40px;" class="bangdan_button" @click="aa">视频</div>
        </div>
        <div style="margin-top: 10px">
          <div class="item" style="display: flex;height: 182px;align-items: center;border-bottom: 1px solid #f3f3f3;padding-left: 14px;padding-right: 14px" v-show="!show">
            <div class="img" style=" flex: 0 0 116px;height: 155px;display: flex;align-items: center;border-radius: 4px;overflow: hidden;position: relative;background-color: #f3f3f3">
              <img src="../../assets/11.jpg" alt="" style=" width: 100%">
            </div>
            <div class="item_con" style="flex: 1;display: flex;height: 155px;flex-direction: column;justify-content: space-between;margin-left: 20px">
              <div class="item_title" style="margin-top: 10px">郑家乐</div>
              <div class="paiming">
                <span>观看次数：</span>
                <span style="color: #0096FF">357万</span>
              </div>
              <div class="renqi" style="margin-bottom: 10px">
                <span>人气值：</span>
                <span style="color: #0096FF">2222票</span>
              </div>
              <div style="width: 116px;height: 40px;background:rgba(0,150,255,0.5);color: white;text-align: center;line-height: 40px;border-radius:4px">删除</div>
            </div>
          </div>
          <div style="padding-left: 14px;padding-right: 14px" v-show="show">
            <daohang22></daohang22>
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
        show: false
      }
    },
    methods: {
      aa() {
        this.show = !this.show
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      });

      $('.bangdan_button').click(function(e){
        $(this).addClass('bangdan_button_blue').siblings().removeClass('bangdan_button_blue');
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
    bottom: 50px
    background-color white
    p
      margin 0
    .recommend-content
      height: 100%
      overflow: hidden
</style>

<style>
  .bangdan_button_blue {
    background-color: #0096FF;
    color: white;
  }
</style>
