<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//import storage from "@/storage/index.js"
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res = {}) => {
        this.$store.dispatch("saveUsername", res.username)
      })
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res)
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
@import "~@/assets/scss/base.scss";
</style>
