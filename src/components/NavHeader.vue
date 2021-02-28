<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:">登录</a>
          <a href="javascript:">注册</a>
          <a href="javascript:" class="cart">
            <span class="icon-cart">
              <MyIcon name="#cart"/>
            </span>
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href=""></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
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
    </div>
  </div>
</template>

<script lang="js">
import MyIcon from "@/components/MyIcon";

export default {
  name: "nav-header",
  components: {MyIcon},
}
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/base.scss";
@import "~@/assets/scss/mixin.scss";

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
      height: 112px;
      @include flex();

      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;

        a {
          width: 110px;
          height: 55px;

          &:before {
            content: '';
            @include bgImg(55px,55px,"/imgs/mi-home.png");
            transition: margin-left 0.5s;
          }

          &:after {
            content: '';
            @include bgImg(55px,55px,"/imgs/mi-logo.png");
          }

          &:hover:before {
            margin-left: -55px;
          }
        }
      }

      .header-menu {
        width:643px;
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
            border:1px solid #E0E0E0;
            width:264px;
            height: 50px;
            padding-left: 14px;
          }
          .searchIcon{
            height:18px;
            width: 18px;
            margin:17px;
          }
        }
      }
    }
  }
}
</style>