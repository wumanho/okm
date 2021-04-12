<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view/>
    <service-bar/>
    <nav-footer/>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
import ServiceBar from "@/components/ServiceBar";

export default {
  name: 'orderLayout',
  components: {NavFooter, OrderHeader, ServiceBar},
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  mounted() {
    let path = this.$route.path
    switch (path) {
      case "/order/confirm":
        this.title = "订单确认"
        this.tip = "注意：收货地址是必填项"
        break;
      case "/order/list":
        this.title = "订单列表"
        this.tip = "请谨防钓鱼链接或诈骗电话，了解更多>"
        break;
      case "/order/pay":
        this.title = "订单支付"
        this.tip = "请谨防钓鱼链接或诈骗电话，了解更多>"
        break;
    }

  }
}
</script>

<style lang="scss" scoped>

</style>