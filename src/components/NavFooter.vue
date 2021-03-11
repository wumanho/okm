<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://wumanho.cn/" target="_blank">我的主页</a><span>|</span>
      <a href="https://wumanho.cn/" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="">React全家桶</a><span>|</span>
      <a href="https://wumanho.cn/" target="_blank">微信专项课程</a>
      <a href="https://wumanho.cn/" target="_blank">配套课程：Java通用型支付+电商平台双系统实战</a>
    </div>
    <div class="copyright">Copyright ©2020 mi.futurefe.com All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
}
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
    margin-bottom: 10px;
  }
}
</style>