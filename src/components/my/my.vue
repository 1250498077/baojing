<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content">
      <div class="my">
        <div class="my_img" style="width: 100%;background-color: #96c6ff">
          <div class="nav_img" style="width: 100%;overflow: hidden;display: flex;align-items: center;height: 130px;position: relative">
            <img src="../../assets/background.png" alt="">
            <div class="item" style="display: flex;padding-right: 10px;padding-left: 10px;margin-bottom: 20px;position: absolute;width: 100%">
              <div class="img" style="flex: 0 0 70px;height: 70px;display: flex;align-items: center;background-color: white;border-radius: 68px;overflow: hidden;justify-content: center">
                <div style="width: 66px;height: 66px;background-color: #f3f3f3;display: flex;align-items: center;border-radius: 50%;overflow: hidden">
                  <img src="../../assets/11.jpg" alt="" style="width: 100%;">
                </div>
              </div>
              <div class="item_con" style="flex: 1;margin-left: 10px">
                <div class="item_title" style="margin-top: 10px;color: white">广州青少年书画比赛</div>
                <div class="item_detail" style="display: flex;margin-top: 20px">
                  <div class="look" style="display: flex;align-items: center">
                    <p style="color: white">ID:</p>
                    <p style="margin-left: 5px;color: white">15,2323</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="list_item" style="width: 100%;padding-right: 20px;padding-left: 20px;border-top-left-radius: 12px;border-top-right-radius: 12px;position: relative;background-color: white">
            <div class="item" style="width: 100%;display: flex;align-items: center;justify-content: space-between;height: 50px" @click="jump(1)">
              <span>投票记录</span>
              <img src="../../assets/enter.png" alt="" style="width: 12px;height: 14px;">
            </div>
            <div class="item" style="width: 100%;display: flex;align-items: center;justify-content: space-between;height: 50px" @click="jump(2)">
              <span>我的收藏</span>
              <img src="../../assets/enter.png" alt="" style="width: 12px;height: 14px;">
            </div>
            <div class="item" style="width: 100%;display: flex;align-items: center;justify-content: space-between;height: 50px" @click="jump(3)">
              <span>浏览记录</span>
              <img src="../../assets/enter.png" alt="" style="width: 12px;height: 14px;">
            </div>
            <div class="item" style="width: 100%;display: flex;align-items: center;justify-content: space-between;height: 50px" @click="jump(4)">
              <span>报名记录</span>
              <img src="../../assets/enter.png" alt="" style="width: 12px;height: 14px;">
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {  },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      jump(index) {
        if (index === 1) {
          this.$router.push({
            path: 'my_vote',
          })
        } else if (index === 2) {
          this.$router.push({
            path: 'my_history',
          })
        } else if (index === 3) {
          this.$router.push({
            path: 'my_record',
          })
        } else if (index === 4) {
          this.$router.push({
            path: 'my_signUp',
          })
        }

      },
    },
    mounted: function () {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    position: fixed
    width: 100%
    top: 0
    bottom: 50px
    background-color white
    .recommend-content
      height: 100%
      overflow: hidden
</style>
