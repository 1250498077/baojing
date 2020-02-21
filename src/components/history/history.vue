<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food" style="background-color: white">
      <div class="food-content" style="margin-bottom: 50px">
        <div class="sousuo_header" style="display: flex;align-items: center;height: 60px;">
          <div class="search_a" style="flex: 0 0 60px">
            <img src="./back.png" alt="" @click="back" style="width: 40px;height: 40px;">
          </div>
          <div class="search_a" style="flex: 1;font-size: 25px;">
            浏览历史1
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;">
          <div class="list_item" style="display: flex;justify-content: space-between;width: 100%;margin-top: 20px">
            <div class="button" style="flex: 1;height: 40px;line-height: 40px;text-align: center;background-color: #28a745;color: white;border-radius: 5px">选手</div>
            <div class="button" style="flex: 1;height: 40px;line-height: 40px;text-align: center;background-color: #28a745;color: white;border-radius: 5px;margin-left: 10px">视频</div>
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;" v-show="video_show">
          <div class="list_item">
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;"  v-show="!video_show">
          <div class="list_item">
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;"  v-show="!video_show">
          <div class="list_item">
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;"  v-show="!video_show">
          <div class="list_item">
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;margin: 0 auto;padding-left: 10px;padding-right: 10px;"  v-show="!video_show">
          <div class="list_item">
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style="display: flex;margin-top: 8px">
              <div class="img" style="flex: 0 0 100px;height: 100px;display: flex;align-items: center;background-color: #f3f3f3">
                <img src="../../assets/11.jpg" alt="" style="width: 100%;">
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 40px">
                  <div class="look" style="display: flex;align-items: center">
                    <img src="../../assets/eye.png" alt="" style="height: 12px;">
                    <p style="margin-left: 5px">15,2323</p>
                  </div>
                  <div class="time" style="display: flex;margin-left: 50px;align-items: center">
                    <img src="../../assets/time.png" alt="" style="height: 20px;">
                    <p style="margin-left: 5px">1：36:17</p>
                  </div>
                </div>
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
        showFlag: false,
        video_show: false
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
    bottom: 50px
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
