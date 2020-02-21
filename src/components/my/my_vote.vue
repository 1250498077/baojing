使用模板
<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div>
        <div style="width: 100%;padding-left: 14px;padding-right: 14px;height: 50px;display: flex;align-items: center;border-bottom: 1px solid #F3F3F3">
          <div style="width: 80px;height: 20px;color: #0096FF;line-height: 20px;border-left: 2px solid #0096FF;text-align: center;font-size: 14px">所有记录</div>
        </div>
        <div>
          <div style="height: 121px;border-bottom: 1px solid #F3F3F3;padding-left: 14px;padding-right: 14px;">
            <div>
              <div style="display: flex;justify-content: space-between;align-items: center;margin-top: 15px">
                <div style="display: flex;align-items: center">
                  <img src="../../assets/piaoshu1.png" alt="" style="width: 90px;height: 60px;">
                  <!--<img src="../../assets/piaoshu2.png" alt="" style="width: 90px;height: 60px;">-->
                  <!--<img src="../../assets/piaoshu3.png" alt="" style="width: 90px;height: 60px;">-->
                  <!--<img src="../../assets/piaoshu4.png" alt="" style="width: 90px;height: 60px;">-->
                  <!--<img src="../../assets/piaoshu5.png" alt="" style="width: 90px;height: 60px;">-->
                  <span style="color: #0096FF;margin-left: 20px;font-size: 20px">X1</span>
                </div>
                <div>
                  <span>送给</span>
                  <span style="color: #0096FF">郑家乐</span>
                </div>
              </div>
            </div>
            <div style="margin-top: 20px;color: #A7A7A7">
              11-12 12:35
            </div>
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
        recommends: []
      }
    },
    methods: {

    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      });
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
