<template>
  <div>
    <router-view/>
    <service-bar/>
    <nav-footer/>
  </div>
</template>

<script>
import NavFooter from "@/components/NavFooter";
import ServiceBar from "@/components/ServiceBar";

export default {
  name: 'orderLayout',
  components: {NavFooter, ServiceBar},
  data() {
    return {}
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>