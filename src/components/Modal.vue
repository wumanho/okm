<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="" class="icon-close">

        </a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="" class="btn">确定</a>
        <a href="" class="btn">取消</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'modal',
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
.modal{
  @include position(fixed);
  .mask{
  @include position(fixed);
    background-color: #000000;
    opacity: 0.5;
  }
  .modal-dialog{

  }
}
</style>