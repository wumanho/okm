<template>
  <div>
    <order-header/>
    <router-view/>
    <nav-footer/>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
export default {
  name: 'orderLayout',
  components: {NavFooter, OrderHeader}
}
</script>

<style lang="scss" scoped>

</style>