<template>
  <div class="wai_ceng" style="">
    <div class="wai_cengd" style="position: relative"  @click="buy_product">
      <div style="height:25px;background:rgba(0,0,0,0.5);border-radius:2px;color: white;position: absolute;text-align: center;line-height: 25px;padding-left: 6px;padding-right: 6px;bottom: 5px;right: 5px">
        编号：{{data.player.playerNum}}
      </div>
      <img :src="data.player.avatar" alt="" style="">
      <!--<img src="../../assets/11.jpg" alt="" style="">-->
      <img src="../../assets/jin.png" alt="" style="position: absolute;width: 56px;height: 67px;top: 0;right: 0" v-show="data.ranking === 1">
      <img src="../../assets/yin.png" alt="" style="position: absolute;width: 56px;height: 67px;top: 0;right: 0;display: none" v-show="data.ranking === 2">
      <img src="../../assets/tong.png" alt="" style="position: absolute;width: 56px;height: 67px;top: 0;right: 0;display: none" v-show="data.ranking === 3">
      <div style="padding-left: 5px;padding-right: 5px;height:28px;background-color: #0096FF;border-radius:2px;text-align: center;line-height: 28px;color: white;border-radius:2px;position: absolute;left: 6px;top: 6px;">
        第{{data.ranking}}名
      </div>
    </div>
    <div class="wai_cenge" style="display: flex;justify-content: space-between;width: 100%;margin-top: 10px"  @click="buy_product">
      <div class="name"  v-show="vote_show === 1">
        {{data.player.playerName}}
      </div>
      <div>
        <span style="color: #0096FF">
          {{data.player.popularity}}
        </span>
        <span>人气</span>
      </div>
    </div>
    <!--vote_show-->
    <div style="width: 100%;height: 40px;background-color: #0096FF;color: white;text-align: center;line-height: 40px;border-radius: 3px;margin-top: 5px" @click="match_tou" v-show="vote_show === 1">投票</div>
    <div style="width: 100%;height: 40px;background-color: #0096FF;color: white;text-align: center;line-height: 40px;border-radius: 3px;margin-top: 5px" v-show="vote_show === 2" @click="buy_product">{{data.player.playerName}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {},
      vote_show: 1
    },
    data() {
      return {
        id: 1
      }
    },
    methods: {
      match_tou() {
        this.$emit('match_tou', this.data)
      },
      buy_product() {
        console.log('传过去的选手id是', this.data.player.id)
        this.$emit('buy_product', this.data.player.id)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wai_ceng
    display: flex
    flex-direction: column
    align-items: center
    width: 166px
    @media only screen and (max-width: 430px)
      width: 185px
    @media only screen and (min-width: 320px) and  (max-width: 400px)
      width: 166px
    @media only screen and (max-width: 320px)
      width: 138px
    .wai_cengd
      background-color: #EFEFEF
      width: 100%
      height 222px
      display flex
      align-items center
      overflow: hidden
      border-radius: 4px
      img
        width: 100%;
</style>
