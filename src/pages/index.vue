<template>
  <div class="index">
    <div class="container">
      <div class="swiper-wrapper">
        <nav class="nav-menu">
          <ul class="menu-wrapper">
            <li class="menu-item">
              <a href="javascript:">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub?'/#/product/' + sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{ sub ? sub.name : '小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">生活 箱包</a>
            </li>
          </ul>
        </nav>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img" alt=""/></a>
          </swiper-slide>
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="ads-wrapper">
        <a :href="'/#/product/' + item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <span :class="{'new-pro':j%2 === 0}">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}元</p>
                  <p class="price">
                    {{ item.price }}
                    <MyIcon class="cart" name="#cart" @click.native="addCart(item.id)"/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar/>
    <modal title="提示"
           confirm-text="查看购物车"
           btn-type="2"
           modal-type="middle"
           :show-modal.sync=showModal
           @submit="goToCart">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar";
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import MyIcon from "@/components/MyIcon";
import Modal from "@/components/Modal";

export default {
  name: 'index',
  components: {MyIcon, ServiceBar, swiper, swiperSlide, Modal},
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: '30',
            img: '/imgs/item-box-1.png',
            name: '小米cc9'
          },
          {
            id: '31',
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: '32',
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: '33',
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [],
      showModal: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        console.log(res)
        res.list = res.list.slice(6, 14)
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart(id) {
      this.axios.post("/carts", {
        productId: id,
        selected: true
      }).then((res) => {
        this.showModal = true
        this.$store.dispatch("saveCartCount", res.cartTotalQuantity)
      }).catch(() => {
        this.showModal = true
      })
    },
    goToCart() {
      this.$router.push("/cart")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/config.scss";

.index {
  .swiper-wrapper {
    height: 451px;

    .nav-menu {
      position: absolute;
      width: 264px;
      left: 0;
      top: 0;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a73;

      .menu-wrapper {
        .menu-item {
          height: 50px;
          line-height: 50px;

          a {
            display: block;
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;

            &:after {
              content: "";
              position: absolute;
              right: 30px;
              top: 17.5px;
              display: inline-block;
              width: 0.9rem;
              height: 0.9rem;
              line-height: 0.9rem;
              border: 2px solid #ffffff;
              transform: rotate(45deg);
              border-left: none;
              border-bottom: none;
            }
          }

          &:hover {
            background-color: #FF6600;

            .children {
              display: block;
            }
          }

          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;

            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }

              a {
                color: #333333;
                font-size: 14px;
              }

              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }

    .swiper-container {
      height: 451px;

      .swiper-button-prev {
        left: 274px;
      }

      .swiper-pagination {
        left: 274px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-wrapper {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;

    a {
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-bottom: 50px;
  }

  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;

    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }

    .wrapper {
      display: flex;

      .banner-left {
        margin-right: 16px;

        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;

          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;

            span {
              display: inline-block;
              color: $colorG;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;

              &.new-pro {
                background-color: #7ECF68;
              }

              &.kill-pro {
                background-color: #E82626;
              }
            }

            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }

            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: 14px;
                font-weight: bold;
              }

              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }

              .price {
                color: #F20A0A;
                font-size: $fontJ;
                font-weight: bold;

                .cart {
                  cursor: pointer;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>