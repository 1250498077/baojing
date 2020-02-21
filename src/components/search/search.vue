<template>
  <div v-show="showFlag" class="food" ref="food">

  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  export default {
    props: {  },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      back() {
        this.showFlag = false
      },
      show() {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
    },
    mounted() {
//      this.$nextTick(() => {
//        this._initScroll()
//      });
    },
    components: {

    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 0
    z-index: 30
    width: 100%
    background: white
    transform: translate3d(0, 0, 0)
    .sousuo_header
      display flex
      width 100%
      align-items center
      padding-right 10px
      .header
        flex 1
        align-items center
        justify-content center
        display flex
        position relative
        left 8px
      .search_a
        flex 0 0 40px
        display flex
        img
          margin-left 10px
          margin-top 5px
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .aa_content
      margin-top 20px
      .top_button
        .title
          font-size 16px
          font-weight 500
          line-height 50px
          width: 100%
          height: 50px
        .content
          display flex
          height: 50px
          width 100%
          .item
            height 25px
            margin-right 10px
            border-radius 2px
            line-height 25px
            text-align center
            border 1px solid #6c757d
            padding-left 5px
            padding-right 5px
</style>
