<template>
  <div class="item" style="" @click="jump_detail">
    <div class="img" style="">
      <img src="../../assets/11.jpg" alt="" style="">
      <div class="type">投票</div>
    </div>
    <div class="item_con" style="">
      <div class="item_title" style="">广州青少年书画比赛</div>
      <div class="item_detail" style="">
        <div class="look" style="">
          <img src="../../assets/eye.png" alt="" style="">
          <p style="">15,2323</p>
        </div>
      </div>
      <div style="width: 116px;height: 40px;background:rgba(0,150,255,0.5);color: white;text-align: center;line-height: 40px;border-radius:4px;margin-bottom: 14px">删除</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      jump_detail() {
        this.$emit('jump_detail')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    display: flex;
    height: 121px
    align-items center
    border-bottom 1px solid #f3f3f3
    .img
      flex: 0 0 166px;
      height: 93px;
      display: flex;
      align-items: center;
      border-radius 4px
      overflow hidden
      position relative
      background-color: #f3f3f3
      img
        width: 100%
      .type
        position absolute
        width: 50px
        height: 25px
        top: 6px
        left 6px
        border-radius:2px
        background-color #0096FF
        color: white
        line-height 25px
        text-align center
    .item_con
      flex: 1;
      display flex
      height: 121px
      flex-direction column
      justify-content space-between
      margin-left: 20px
      .item_title
        margin-top: 20px
      .item_detail
        display: flex;
        justify-content space-between
        align-items center
        .look
          display: flex;
          align-items: center
          img
            height: 12px;
          p
            margin-left: 5px
</style>
