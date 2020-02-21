<template>
  <div class="item" style="">
    <div class="img" style="">
      <img :src="data.userId.avatar" alt="" style="">
    </div>
    <div class="item_con" style="">
      <div class="name" style="margin-top: 14px">
        <span style="font-size: 16px">{{data.userId.nickname}}</span>
      </div>
      <div class="paiming">
        <span style="font-size: 14px">{{data.content}}</span>
      </div>
      <div class="renqi" style="margin-bottom: 12px">
        <span style="font-size: 12px;color: #A7A7A7">{{data.createdTime | capitalize}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {}
    },
    data() {
      return {

      }
    },
    methods: {},
    filters: {
      capitalize: function (value) {
        console.log(value)
        let time = new Date(value)
        console.log('时间戳转date')
        console.log(time)
        let y = time.getFullYear()
        let m = time.getMonth()+1
        let d = time.getDate()
        let h = time.getHours()
        let mm = time.getMinutes()
        let s = time.getSeconds()
        return y + '-' + m + '-' + d + ' /  ' + h + ':' + mm + ':' + s
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    display: flex;
    height: 105px
    border-bottom 1px solid #f3f3f3
    .img
      flex: 0 0 34px;
      height: 34px;
      display: flex;
      margin-top 14px
      align-items: center;
      border-radius 50%
      overflow hidden
      position relative
      background-color: #D8D8D8
      img
        width: 100%
    .item_con
      flex: 1;
      display flex
      height: 105px;
      flex-direction column
      justify-content space-between
      margin-left: 20px
      .item_title
        margin-top: 10px
</style>
