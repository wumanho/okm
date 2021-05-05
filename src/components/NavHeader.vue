<template>
  <div class="header">
    <nav class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:" v-if="username">{{ username }}</a>
          <a href="javascript:" v-if="!username" @click="login">登录</a>
          <a href="javascript:" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:" class="cart" @click="goToCart">
            <span class="icon-cart">
              <MyIcon name="#cart"/>
            </span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </nav>
    <header class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href=""></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in tempPhoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img
                          :src="item.mainImage"
                          :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                          src="imgs/nav-img/nav-3-1.jpg"
                          alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                          src="imgs/nav-img/nav-3-2.jpg"
                          alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                          src="imgs/nav-img/nav-3-3.png"
                          alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">699</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                          src="imgs/nav-img/nav-3-4.jpg"
                          alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                          src="imgs/nav-img/nav-3-5.jpg"
                          alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                          src="imgs/nav-img/nav-3-6.png"
                          alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <label>
              <input type="text" name="keyword">
            </label>
            <MyIcon name="#search" class="searchIcon"></MyIcon>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="js">
import MyIcon from "@/components/MyIcon";
import {mapState} from 'vuex'
export default {
  name: "nav-header",
  components: {MyIcon},
  computed: {
    tempPhoneList() {
      return this.phoneList.map((item) => {
        if (!item.price) item.price =  "0.00"
        item.price = "￥" + item.price.toFixed(2) + "元"
        return item
      })
    },
    ...mapState(["username","cartCount"])
    // username(){
    //   return this.$store.state.username
    // },
    // cartCount(){
    //   return this.$store.state.cartCount
    // }
  },
  data() {
    return {
      phoneList: []
    }
  },
  mounted() {
    this.getProductList()
    let params = this.$route.params
    if(params && params.from === "login"){
      this.getCartCount()
    }
  },
  methods: {
    login(){
      this.$router.push("/login")
    },
    logout(){
      this.axios.post("/user/logout").then(()=>{
        this.$message.success("退出成功")
        this.$cookie.set("userId","",{expires:"-1"})
        this.$store.dispatch("saveUsername","")
        this.$store.dispatch("saveCartCount",0)
      })
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res=0) => {
        this.$store.dispatch("saveCartCount", res)
      })
    },
    getProductList() {
      this.axios.get("/products", {
        params: {
          categoryId: "100012",
          pageSize: 6
        }
      }).then((res) => {
        this.phoneList = res.list
      })
    },
    goToCart(){
      this.$router.push("/cart")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    color: #B0B0B0;

    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      @include flex();

      .cart {
        width: 110px;
        margin-right: 0;
        background: #FF6600;
        text-align: center;
        color: #ffffff;

        .icon-cart {
          margin-right: 4px;
        }
      }

      a {
        margin-right: 17px;
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();

      .header-menu {
        width: 643px;

        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }

          &:hover {
            color: $colorA;

            .children {
              height: 220px;
              opacity: 1;
            }
          }

          .children {
            position: absolute;
            background-color: #ffffff;
            left: 0;
            top: 112px;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: height 0.5s;

            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;

              &:before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }

              &:last-child:before {
                display: none;
              }

              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }

              .pro-img {
                height: 137px;
              }

              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }

              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;

        .wrapper {
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;

          input {
            border: 1px solid #E0E0E0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }

          .searchIcon {
            height: 18px;
            width: 18px;
            margin: 17px;
          }
        }
      }
    }
  }
}
</style>