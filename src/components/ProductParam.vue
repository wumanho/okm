<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <h3 class="pro-title">
        {{ title }}
      </h3>
      <div class="pro-param">
        <a href="">概述</a><span>|</span>
        <a href="">参数</a><span>|</span>
        <a href="">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isFixed: false
    }
  },
  props: {
    title: String
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight)
  },
  methods: {
    initHeight() {
      //获取当前高度偏移量
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/config.scss";

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 2px solid $colorH;
  z-index: 10;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $colorG;
    box-shadow: 0 1px 5px $colorE;
  }

  .container {
    @include flex();

    .pro-title {
      font-size: $fontH;
    }

    .pro-param {
      font-size: $fontJ;

      a {
        margin: 0 10px;
      }

      color: $colorC;
    }
  }


}
</style>