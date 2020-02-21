<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div>
        <div style="width: 100%">
          <div style="width: 100%;display: flex;padding-left: 14px;padding-right: 14px;height: 50px;align-items: center" v-show="!s_show">
            <div class="s_title" style=" font-size: 16px;margin-right: 14px;width: 80px;" @click="saiqu_select">
              广东赛区
            </div>
            <div class="s_title" style="font-size: 16px;margin-right: 14px;width: 80px;">
              西南赛区
            </div>
          </div>
          <div style="width: 100%;display: flex;padding-left: 14px;padding-right: 14px;height: 50px;align-items: center" v-show="s_show">
            <!--<div style="font-size: 16px;margin-right: 14px;color: #0096FF;width: 90px">-->
              <!--广东赛区-->
            <!--</div>-->
            <div class="pic-wrapper" ref="picWrapper" style="width: 100%;overflow: hidden;white-space: nowrap;background-color: #1e7e34">
              <ul class="pic-list" ref="picList" style="background-color: aqua">
                <li class="pic-item" style="display: inline-block;margin-right: 6px;width: 80px;font-size: 16px;text-align: center;border: 1px solid #0096FF;color: #0096FF;;border-radius: 3px;background-color: red" v-for="(item, index) in header_item">
                  {{item}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style="padding-left: 14px;padding-right: 14px">
          <daohang2></daohang2>
          <daohang2></daohang2>
          <daohang2></daohang2>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../base/scroll/scroll'
  import BScroll from 'better-scroll';
  export default {
    props: {

    },
    data() {
      return {
        recommends: [],
        s_show: false,
        header_item: ['老人', '儿童', '拉丁舞', '广场舞','广场舞','广场舞'],
        picScroll: ''
      }
    },
    methods: {
      saiqu_select() {
        this.s_show = !this.s_show
      },
      // 横向滚动条相关
      _initPics() {
        // 初始化滚动条
        let picWidth = 80;
        let width = picWidth * this.header_item.length-190;
        this.$refs.picList.style.width = width + 'px';
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
            this.picScroll.refresh();
          }
        });
      }
    },
    mounted() {
      $('.s_title').click(function(e){
        $(this).addClass('s_title_selectd').siblings().removeClass('s_title_selectd');
      })
      $('.pic-item').click(function(e){
        $(this).addClass('pic-item_selectd').siblings().removeClass('pic-item_selectd');
      })


      this.$nextTick(() => {
        this._initPics()
        this.$refs.scroll.refresh()
      })

    },
    components: {
      Scroll
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

<style scoped>
  .s_title_selectd {
    color: #0096FF
  }
  .pic-item_selectd {
    color: #0096FF
  }
</style>
