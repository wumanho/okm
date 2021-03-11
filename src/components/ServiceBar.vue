<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span><MyIcon name="#fixing"/></span>预约维修服务</li>
        <li><span><MyIcon name="#7days"/></span>7天无理由退货</li>
        <li><span><MyIcon name="#15days"/></span>15天免费换货</li>
        <li><span><MyIcon name="#freeshipping"/></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyIcon from "@/components/MyIcon";
export default {
  name: 'service-bar',
  components: {MyIcon}
};
</script>

<style lang="scss" scoped>
  .service{
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    li{
      display: inline-block;
      width:24.9%;
      text-align: center;
      border-right: 1px solid #e5e5e5;
      span{
        width:20px;
        height:20px;
      }
    }
  }
</style>