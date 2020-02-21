<template>
  <div class="search bar1">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      class="input_f"
      placeholder="请输入内容"
    >
    <!--<button type="submit"></button>-->
    <div class="button">
      <img src="./sousuo.png" alt="" style="width: 30px;height: 30px;">
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: ''
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bar1
    display flex
    margin-top 0
    justify-content center
    align-items center
    .button
      top: 0
      right: 0
      width 55px
      height 55px
      margin-left 5px
      background: white
      display flex
      align-items center
      justify-content center
      border-radius: 5px
    input
      height: 40px
      width: 100%
      font-size 16px
      border: 2px solid #949494
      border-radius: 5px
      background: white
      color: #9E9C9C
      padding-left 10px
</style>
