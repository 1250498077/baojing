<template>
  <div class="search bar1">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      class="input_f"
      placeholder="请输入内容"
    >
    <div class="button">
      <img src="./sousuo.png" alt="" style="width: 30px;height: 30px;">
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: '',
      disabled: 0
    },
    filters: {
      disabled_f: function (value) {
        console.log('执行了过滤器')
        if (value === 1) {
          console.log('1')
          return 'disabled'
        } else {
          console.log('0')
          return 'value'
        }
      }
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
    width 100%
    margin-top 0
    justify-content center
    align-items center
    .button
      top: 0
      right: 0
      height 55px
      margin-left 5px
      background: white
      display flex
      flex 0 0 55px
      align-items center
      justify-content center
      border-radius: 5px
    input
      flex 1
      height: 40px
      font-size 16px
      border: 1px solid #949494
      border-radius: 5px
      background: white
      color: #9E9C9C
      padding-left 10px
</style>
