<template>
  <transition name="slide">
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>{{ title }}</span>
        <a href="javascript:" @click="$emit('update:show-modal',showModal = false)">
          <MyIcon name="#close" class="icon-close"></MyIcon>
        </a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <button class="btn" v-if="btnType === '1'" @click="$emit('submit')">{{ confirmText }}</button>
        <div class="btn-group" v-if="btnType === '2'">
          <button class="btn" @click="$emit('submit')">{{ confirmText }}</button>
          <button class="btn btn-default" @click="$emit('update:show-modal',showModal = false)">{{ cancelText }}</button>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>

import MyIcon from "@/components/MyIcon";
export default {
  name: 'modal',
  components: {MyIcon},
  props:{
    //弹框类型：小、中、大、表单
    modalType:{
      type:String,
      default:'form'
    },
    //弹框标题
    title:String,
    //按钮类型: 1：确定按钮，2：取消按钮 3：确定取消
    btnType:String,
    confirmText:{
      type:String,
      default:"确定"
    },
    cancelText:{
      type:String,
      default:"取消"
    },
    showModal:Boolean
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/config.scss";
.modal{
  z-index: 10;
  transition: all .5s;
  @include position(fixed);
  .mask{
  @include position(fixed);
    background-color: #000000;
    opacity: 0.5;
  }
  &.slide-enter-active{
    top:0;
  }
  &.slide-leave-active{
    top:-100%;
  }
  &.slide-enter{
    top:-100%;
  }
  .modal-dialog{
    @include position(absolute,40%,50%,660px,auto);
    background-color: $colorG;
    transform: translate(-50%,-50%);
    .modal-header{
      height: 60px;
      line-height: 60px;
      background-color: $colorJ;
      padding: 0 25px;
      font-size: $fontI;
      .icon-close{
        position: absolute;
        top:21px;
        right: 25px;
        height: 20px;
        width: 20px;
        transition: transform 0.3s;
        &:hover{
          transform: scale(1.5);
        }
      }
    }
    .modal-body{
      padding: 42px 40px 54px;
      font-size: 14px;
    }
    .modal-footer{
      height: 82px;
      line-height: 82px;
      text-align: center;
      background-color: $colorJ;
    }
  }
}
</style>