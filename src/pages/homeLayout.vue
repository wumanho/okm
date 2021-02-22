<template>
  <div>
    home
    <nav-header/>
    <router-view/>
    <nav-footer/>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
export default {
  name: "homeLayout",
  components: {NavFooter, NavHeader},
}
</script>