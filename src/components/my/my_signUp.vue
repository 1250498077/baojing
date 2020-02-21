
<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommends">
      <div>
        <div style="width: 100%;padding-left: 14px;padding-right: 14px;height: 50px;display: flex;align-items: center;border-bottom: 1px solid #F3F3F3">
          <div style="width: 80px;height: 20px;color: #0096FF;line-height: 20px;border-left: 2px solid #0096FF;text-align: center;font-size: 14px">报名记录</div>
        </div>
        <div style="width: 100%;padding-left: 14px;padding-right: 14px">
          <daohang5></daohang5>
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
