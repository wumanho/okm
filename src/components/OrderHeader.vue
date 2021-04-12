<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href=""></a>
      </div>
      <h2 class="title">{{ title }}<slot name="tip"/></h2>
      <div class="username">
        <a href="">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  props:{
    title:String
  },
  computed:{
    username(){
      return this.$store.state.username
    }
  }
}
</script>

<style lang="scss" scoped>
  .order-header{
    padding: 30px 0;
    border-bottom: 2px solid #FF6600;
    h2{
      span{
        font-weight: 300;
      }
    }
    .header-logo{
      float: left;
    }
    .title,.username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title{
      font-size: 28px;
      float: left;
      margin-left: 54px;
      span{
        font-size: 14px;
        color: #999999;
        margin-left: 17px;
      }
    }
    .username{
      float:right;
      a{
        color:#666666;
        font-size: 16px;
      }
    }
  }
</style>