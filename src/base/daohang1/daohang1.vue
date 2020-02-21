<template>
  <div class="wai_ceng" style="">
    <div class="wai_cengd" style="">
      <img src="../../assets/11.jpg" alt="" style="">
    </div>
    <div class="wai_cenge" style="">{{data.videoTitle}}</div>
    <div class="wai_cengf" style="">
      <img src="../../assets/eye.png" alt="" style="">
      <span>{{data.videoCount}}</span>
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
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wai_ceng
  display: flex
  flex-direction: column
  align-items: center
  width: 166px
  @media only screen and (max-width: 320px)
    width: 145px
  .wai_cengd
    background-color: #EFEFEF
    width: 100%
    display flex
    align-items center
    overflow: hidden
    border-radius: 4px
    img
      width: 100%;
  .wai_cenge
    margin-top: 6px
  .wai_cengf
    display: flex;
    margin-top: 6px;
    align-items: center;
    width: 100%;
    justify-content: center;
    img
      width: 20px;
      height: 10px;
      margin-right: 5px
</style>
