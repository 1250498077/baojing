<template>
  <div class="item" style="" @click="player_jump">
    <div class="img" style="">
      <img src="../../assets/11.jpg" alt="" style="">
    </div>
    <div class="item_con" style="">
      <div class="item_title" style="">{{data.player.content}}</div>
      <div class="name">
        <span>姓名：</span>
        <span>{{data.player.playerName}}</span>
      </div>
      <div class="paiming">
        <span>排名：</span>
        <span>{{data.ranking}}名</span>
      </div>
      <div class="renqi" style="margin-bottom: 10px">
        <span>人气值：</span>
        <span style="color: #0096FF">{{data.player.popularity}}票</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        player: {}
      }
    },
    data() {
      return {

      }
    },
    methods: {
      player_jump() {
        this.$emit('player_jump')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    display: flex;
    height: 182px
    align-items center
    border-bottom 1px solid #f3f3f3
    .img
      flex: 0 0 116px;
      height: 155px;
      display: flex;
      align-items: center;
      border-radius 4px
      overflow hidden
      position relative
      background-color: #f3f3f3
      img
        width: 100%
    .item_con
      flex: 1;
      display flex
      height: 155px;
      flex-direction column
      justify-content space-between
      margin-left: 20px
      .item_title
        margin-top: 10px
</style>
