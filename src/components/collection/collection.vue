<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food" style="">
      <div class="food-content">
        <div class="sousuo_header" style="display: flex;align-items: center;height: 60px;">
          <div class="search_a" style="flex: 0 0 60px">
            <img src="./back.png" alt="" @click="back" style="width: 40px;height: 40px;">
          </div>
          <div class="search_a" style="flex: 1;font-size: 25px;position: relative;">
            投票记录
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;">
          <div class="list_item" style="display: flex;justify-content: space-between;width: 100%;margin-top: 20px">
            <div class="button" style="height: 40px;flex: 1;line-height: 40px;text-align: center;background-color: #28a745;color: white;border-radius: 5px">全部</div>
            <div class="button" style="height: 40px;flex: 1;margin-left: 5px;line-height: 40px;text-align: center;background-color: #28a745;color: white;border-radius: 5px">免费票</div>
            <div class="button" style="height: 40px;flex: 1;margin-left: 5px;line-height: 40px;text-align: center;background-color: #28a745;color: white;border-radius: 5px">付费票</div>
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;">
          <div class="list_item">
            <div class="item" style="display: flex;margin-top: 8px;align-items: center;padding-bottom: 10px;border-bottom: 1px solid darkgray">
              <div class="liwu_time" style="width: 50px;display: flex;flex-direction: column">
                <p style="margin-bottom: 15px">12-12</p>
                <p>12:12</p>
              </div>
              <div class="img" style="flex: 0 0 50px;height: 50px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/liwu.png" alt="" style="width: 100%;">
              </div>
              <div class="img" style="width: 20px;height: 20px;display: flex;align-items: center;margin-left: 15px">

              </div>
              <div class="num" style="margin-left: 10px;font-size: 30px">1</div>
              <div class="item_con" style="flex: 1;margin-left: 10px;display: flex;align-items: center">
                <div style="font-size: 20px">送给</div>
                <div class="name" style="margin-left: 8px;font-size: 20px">xxxxxx</div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px;align-items: center;padding-bottom: 10px;border-bottom: 1px solid darkgray">
              <div class="liwu_time" style="width: 50px;display: flex;flex-direction: column">
                <p style="margin-bottom: 15px">12-12</p>
                <p>12:12</p>
              </div>
              <div class="img" style="flex: 0 0 50px;height: 50px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/liwu.png" alt="" style="width: 100%;">
              </div>
              <div class="img" style="width: 20px;height: 20px;display: flex;align-items: center;margin-left: 15px">

              </div>
              <div class="num" style="margin-left: 10px;font-size: 30px">1</div>
              <div class="item_con" style="flex: 1;margin-left: 10px;display: flex;align-items: center">
                <div style="font-size: 20px">送给</div>
                <div class="name" style="margin-left: 8px;font-size: 20px">xxxxxx</div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px;align-items: center;padding-bottom: 10px;border-bottom: 1px solid darkgray">
              <div class="liwu_time" style="width: 50px;display: flex;flex-direction: column">
                <p style="margin-bottom: 15px">12-12</p>
                <p>12:12</p>
              </div>
              <div class="img" style="flex: 0 0 50px;height: 50px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/liwu.png" alt="" style="width: 100%;">
              </div>
              <div class="img" style="width: 20px;height: 20px;display: flex;align-items: center;margin-left: 15px">

              </div>
              <div class="num" style="margin-left: 10px;font-size: 30px">1</div>
              <div class="item_con" style="flex: 1;margin-left: 10px;display: flex;align-items: center">
                <div style="font-size: 20px">送给</div>
                <div class="name" style="margin-left: 8px;font-size: 20px">xxxxxx</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  export default {
    props: {  },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      back() {
        this.showFlag = false
      },
      show() {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
    },
    mounted() {
//      this.$nextTick(() => {
//        this._initScroll()
//      });
    },
    components: {

    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 0
    z-index: 30
    width: 100%
    background: white
    transform: translate3d(0, 0, 0)
    .sousuo_header
      display flex
      width 100%
      align-items center
      padding-right 10px
      .header
        flex 1
        align-items center
        justify-content center
        display flex
        position relative
        left 8px
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .aa_content
      margin-top 20px
      .top_button
        .title
          font-size 16px
          font-weight 500
          line-height 50px
          width: 100%
          height: 50px
        .content
          display flex
          height: 50px
          width 100%
          .item
            height 25px
            margin-right 10px
            border-radius 2px
            line-height 25px
            text-align center
            border 1px solid #6c757d
            padding-left 5px
            padding-right 5px
</style>
