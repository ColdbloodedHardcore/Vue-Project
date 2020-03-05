<template>
  <main>
      <!-- Home -->
      <section class="home">
        <div class="home_container">
          <div class="home_background" style="background-image:url(./src/assets/images/cart/cart_header.jpg)"></div>
          <div class="home_content_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="home_content">
                    <div class="breadcrumbs">
                      <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/category">Category</router-link></li>
                        <li>Shopping Cart</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Cart Info -->
      <section class="cart_info">
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- Column Titles -->
              <div class="cart_info_columns clearfix">
                <div class="cart_info_col cart_info_col_product">Product</div>
                <div class="cart_info_col cart_info_col_price">Price</div>
                <div class="cart_info_col cart_info_col_quantity">Quantity</div>
                <div class="cart_info_col cart_info_col_total">Total</div>
              </div>
            </div>
          </div>
          <div class="row cart_items_row">
            <div class="col">

              <!-- Cart Item -->
              <div class="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start"
                        v-for="item in cart"
                        :key="item.id">
                <!-- Name -->
                <div class="cart_item_product d-flex flex-row align-items-center justify-content-start">
                        
                  <div class="cart_item_image">
                    <div><img :src="item.src" alt=""></div>
                  </div>

                  <div class="cart_item_name_container">
                    <div class="cart_item_name"><a href="#">{{ item.title }}</a></div>
                  </div>
                </div>


                <!-- Price -->
                <div class="cart_item_price">${{ item.price.toFixed(2) }}</div>
                
                <!-- Quantity -->
                <div class="cart_item_quantity">
                  <div class="product_quantity_container">
                    <div class="product_quantity clearfix">
                      <span>Qty</span>
                      <input type="text" pattern="/[0-9]*" :value="item.quantity">
                      <div class="quantity_buttons">
                        <div class="quantity_inc quantity_control"  pattern="[0-9]{3}" @click="incQty(item)"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
                        <div  class="quantity_dec quantity_control"  pattern="[0-9]{3}" @click="decQty(item)"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Total -->
                <div class="cart_item_total">{{ item.totalPrice.toFixed(2) }}</div>
                <i class="far fa-window-close" @click="removeFromCart(item)"></i>
              </div>

            </div>
          </div>
          <div class="row row_cart_buttons">
            <div class="col">
              <div class="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                <div class="button continue_shopping_button"><router-link to="/category">Continue shopping</router-link></div>
                <div class="cart_buttons_right ml-lg-auto">
                  <div class="button clear_cart_button"><a href="#" @click="clearCart()">Clear cart</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row_extra">
            <div class="col-lg-4">
              
              <!-- Delivery -->
              <div class="delivery">
                <div class="section_title">Shipping method</div>
                <div class="section_subtitle">Select the one you want</div>
                <div class="delivery_options">

                  <label class="delivery_option clearfix"
                  v-for="(ship, index) in shipping" :key="ship.id"
                  >
                    {{ ship.title }}
                    <input type="radio" name="radio" :id="index" @change="shippingPrice(ship), radio()">
                    <span class="checkmark"></span>
                    <span class="delivery_price">${{ ship.price }}</span>
                  </label>
                </div>
              </div>

              <!-- Coupon Code -->
              <div class="coupon">
                <div class="section_title">Coupon code</div>
                <div class="section_subtitle">Enter your coupon code</div>
                <div class="coupon_form_container">
                  <form action="#" id="coupon_form" class="coupon_form">
                    <input type="text" class="coupon_input" required="required">
                    <button class="button coupon_button"><span>Apply</span></button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-6 offset-lg-2">
              <div class="cart_total">
                <div class="cart_total__title d-flex justify-content-between">
                  <div class="section_title">Cart total</div>
                  <div class="section_total">{{ cartTotal.toFixed(2) }}$</div>
                </div>                

                <div class="cart_total_container">
                  <ul>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="cart_total_title">Subtotal</div>
                      <div class="cart_total_value ml-auto">${{ cartTotal.toFixed(2) }}</div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="cart_total_title">Shipping</div>
                      <div class="cart_total_value ml-auto">${{ shippingTotal }}</div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="cart_total_title">Total Order</div>
                      <div class="cart_total_value ml-auto">${{ order.toFixed(2) }}</div>
                    </li>
                  </ul>
                </div>
                <button class="button checkout_button" :disabled="disabled" @click="$router.push('check')">Proceed to checkout</button> 
              </div>
            </div>
          </div>
        </div>		
      </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      disabled: true
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal', 'shipping', 'shippingTotal', 'order']),
  },
  methods: {
    incQty(item) {
      this.$store.commit('incQty', item);
    },
    decQty(item) {
      this.$store.commit('decQty', item);
    },
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item);
    },
    clearCart() {
      this.$store.commit('clearCart');
    },
    shippingPrice(ship) {
      this.$store.commit('shippingPrice', ship);
    },
    radio() {
      let radio = document.querySelectorAll('input[type=radio]');
      
      for (let i = 0; i < radio.length; i++) {
        if(radio[i].id != '') {
          this.disabled = false;
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // Home
  .home {
    width: 100%;
    height: 362px;
    background: #FFFFFF;
    z-index: 2;
    padding-top: 130px;
    padding-left: 60px;
    padding-right: 60px;

    &_background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

    &_container{
      width: 100%;
      height: 100%;
    }

    .home_content_container {
      position: absolute;
      top: 53%;
      left: 0;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 100%;
      
      .home_content {
        width: 580px;
      
        .breadcrumbs {
          ul {
            li {
              display: inline-block;
              position: relative;
              font-size: 14px;
              font-weight: 500;
              color: #e95a5a;

              &:not(:last-child)::after {
                display: inline-block;
                content: '/';
                margin-left: 10px;
                margin-right: 6px;
                color: #FFFFFF;
              }

              a {
                font-size: 14px;
                font-weight: 500;
                color: #FFFFFF;
                -webkit-transition: all .6s ease;
                -moz-transition: all .6s ease;
                -ms-transition: all .6s ease;
                -o-transition: all .6s ease;
                transition: all .6s ease;

                &:hover {
                  color: #e95a5a;
                }
              }
            }
          }
        }
      }
    }
  }
  
  // Cart Info
  .cart_info {
    width: 100%;
    background: #FFFFFF;
    padding-top: 96px;
    z-index: 2;

    &_columns {
      width: 100%;
      border-bottom: solid 2px #e3e3e3;
      padding-bottom: 7px;
    }

    &_col {
      float: left;
      font-size: 14px;
      font-weight: 400;
      color: #1b1b1b;

      &_product {
        width: 63%;        
      }

      &_price {
        width: 10%;
      }

      &_quantity {
        width: 17%;
        text-align: center;
      }
      
      &_total {
        width: 10%;
        text-align: right;
      }
    }

    .cart_item {
      padding-top: 33px;
      padding-bottom: 33px;

      &_product {
        width: 63%;

        .cart_item_image {
          div {
            width: 183px;
            height: 163px;

            img {
              max-width: 100%;
            }
          }
        }

        .cart_item_name_container {
          padding-left: 36px;

          .cart_item_name {            
            a {
              font-size: 18px;
              font-weight: 500;
              color: #1b1b1b;
              -webkit-transition: all .6s ease;
              -moz-transition: all .6s ease;
              -ms-transition: all .6s ease;
              -o-transition: all .6s ease;
              transition: all .6s ease;

              &:hover {
                color: #e95a5a;
              }
            }
          }

          .cart_item_edit {
            margin-top: 3px; 

            a {
              font-size: 14px;
              font-weight: 500;
              color: #6c6a74;
              -webkit-transition: all .6s ease;
              -moz-transition: all .6s ease;
              -ms-transition: all .6s ease;
              -o-transition: all .6s ease;
              transition: all .6s ease;

              &:hover {
                color: #e95a5a;
              }
            }
          }
        }
      }

      &_price {
        width: 10%;

        .cart_item_price {
          font-size: 14px;
          font-weight: 400;
          color: #1b1b1b;
        }
      }

      &_quantity {
        width: 17%;
        text-align: center;

        .product_quantity {
          display: inline-block;
          width: 147px;
          height: 61px;
          border: solid 2px #d0d0d0;
          overflow: hidden;
          padding-left: 78px;
          vertical-align: middle;

          span {
            position: absolute;
            top: 50%;
            left: 23px;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 16px;
            font-weight: 600;
            color: #6c6a74;
          }

          input {
            display: block;
            width: 65px;
            height: 57px;
            border: none;
            outline: none;
            font-size: 16px;
            font-weight: 600;
            color: #1b1b1b;
            text-align: left;
            padding-left: 9px;
            line-height: 39px;
            float: left;
          }

          .quantity_buttons {
            position: absolute;
            top: 0;
            right: 1px;
            height: 100%;
            width: 29px;

            .quantity_inc, 
            .quantity_dec {
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              height: 50%;
              cursor: pointer;
            }

            .quantity_inc {
              padding-bottom: 3px;
              justify-content: flex-end;

              i {
                -webkit-transform: translateY(3px);
                -moz-transform: translateY(3px);
                -ms-transform: translateY(3px);
                -o-transform: translateY(3px);
                transform: translateY(3px);
              }
            }

            .quantity_dec {
              padding-top: 3px;
              justify-content: flex-start;
              
              i {
                -webkit-transform: translateY(-3px);
                -moz-transform: translateY(-3px);
                -ms-transform: translateY(-3px);
                -o-transform: translateY(-3px);
                transform: translateY(-3px);
              }
            }

            .quantity_control {
              &:active {
                border: solid 1px rgba(14, 140, 228, 0.2);
              }

              i {
                font-size: 10px;
                color: #232323;
                pointer-events: none;
              }
            }
          }
        }
      }

      &_total {
        width: 10%;
        text-align: right;

        .cart_item_total {
          font-size: 14px;
          font-weight: 400;
          color: #1b1b1b;
        }
      }

      .fa-window-close {
        position: absolute;
        top: 14%;
        right: 0;
        font-size: 20px;
        cursor: pointer;
        color: #aaa;
        transition: all 0.6s;

        &:hover {
          color: #000;
        }
      }
    }
    
    .row_cart_buttons {
      margin-top: 21px;

      .continue_shopping_button {
        width: 261px;

        &::after {
          background-color: #000;
        }
      }

      .clear_cart_button {
        display: inline-block;

        &::after {
          background-color: #000;
        }
      }
    }

    .row_extra {
      margin-top: 106px;
      padding-bottom: 100px;

      .section_title {
          font-size: 24px;
          font-weight: 600;
          color: #1b1b1b;
        }

        .section_subtitle {
          font-size: 14px;
          font-weight: 400;
          color: #6c6a74;
          margin-top: 3px;
        }

      .delivery {
        width: 100%;        

        .delivery_options {
          margin-bottom: 0;
          margin-top: 38px;

          .delivery_option {
            display: block;
            position: relative;
            padding-left: 36px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            font-size: 14px;
            font-weight: 400;
            color: #1b1b1b;

            &:not(:last-child) {
              margin-bottom: 27px;
            }

            input {
              position: absolute;
              opacity: 0;
              visibility: hidden;

              &:checked ~ .checkmark {
                background: #e95a5a;
                border: solid 2px #e95a5a;
              }

              &:hover ~ .checkmark {
                background: #e95a5a;
              }
            }

            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              margin-top: 4px;
              width: 11px;
              height: 11px;
              border-radius: 50%;
              border: solid 2px #9f9f9f;
              background: #FFFFFF;
              -webkit-transition: all .6s ease;
              -moz-transition: all .6s ease;
              -ms-transition: all .6s ease;
              -o-transition: all .6s ease;
              transition: all .6s ease;
            }

            .delivery_price {
              float: right;
            }
          }
        }
      }

      .coupon {
        margin-top: 83px;

        &_form_container {
          margin-top: 42px;
          width: 100%;

          .coupon_form {
            position: relative;
            width: 100%;

            .coupon_input {
              width: 100%;
              height: 52px;
              border: none;
              outline: none;
              background: #f2f4f8;
              padding-left: 15px;
            }

            .coupon_button {
              position: absolute;
              top: 0;
              right: 0;
              width: 112px;
              height: 52px;

              &::after {
                background-color: #000;
              }

              &:hover span {
                color: #FFFFFF;
              }

              span {
                display: block;
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: #1b1b1b;
                z-index: 2;
              }
            }
          }
        }
      }

      .cart_total {

        .section_total {
          font-size: 24px;
        }

        &_container {
          margin-top: 42px;
          padding-left: 45px;
          padding-top: 20px;
          padding-right: 44px;
          padding-bottom: 19px;
          background: #f2f4f8;

          ul {
            width: 100%;

            li {
              width: 100%;
              height: 48px;

              .cart_total_title {
                font-size: 14px;
                font-weight: 400;
                color: #1b1b1b;
              }
              .cart_total_value {
                font-size: 14px;
                font-weight: 400;
                color: #1b1b1b;
                float: right;
              }
            }
          }
        }

        .checkout_button {
          width: 100%;
          display: block;
          position: relative;
          font-size: 16px;
          font-weight: 600;
          line-height: 57px;
          color: #1b1b1b;
          background: none;
          -webkit-transition: all .6s ease;
          -moz-transition: all .6s ease;
          -ms-transition: all .6s ease;
          -o-transition: all .6s ease;
          transition: all .6s ease;

          &:hover {
            color: #fff;
             z-index: 1;
          }

          &::after {
            background-color: #000;
            z-index: -1;
          }
        }
      }
    }
  }

  // Respon
  @media only screen and (max-width: 1600px)
  {
    .header_social
    {
      display: none;
    }
  }


  @media only screen and (max-width: 1199px)
  {
    .header_container
    {
      padding-left: 45px;
      padding-right: 45px;
    }
    .header_container .container
    {
      max-width: 100%;
    }
    .main_nav
    {
      margin-left: 50px;
    }
    .search
    {
      margin-left: 25px;
    }
    .main_nav > ul > li:not(:last-child)
    {
      margin-right: 40px;
    }
  }


  @media only screen and (max-width: 991px)
  {
    .header_container
    {
      padding-left: 15px;
      padding-right: 15px;
    }
    .main_nav,
    .header_social
    {
      display: none;
    }
    .search
    {
      display: none;
    }
    .hamburger
    {
      display: inline-block;
    }
    .home
    {
      padding-left: 30px;
      padding-right: 30px;
    }
    .home_title
    {
      font-size: 48px;
    }
    .cart_info_columns
    {
      display: none;
    }
    .cart_items_row
    {
      margin-top: 0;
    }
    .cart_item:first-child
    {
      padding-top: 0;
    }
    .cart_item:not(:last-child)
    {
      border-bottom: solid 2px #e3e3e3;
    }
    .cart_item_product,
    .cart_item_price,
    .cart_item_quantity,
    .cart_item_total
    {
      width: 100%;
      text-align: left;
    }
    .cart_item_price,
    .cart_item_quantity,
    .cart_item_total
    {
      margin-top: 25px;
    }
    .cart_buttons_right
    {
      margin-top: 15px;
    }
    .cart_total
    {
      margin-top: 100px;
    }
    .checkout_button
    {
      margin-top: 15px;
    }
    .footer_overlay
    {
      height: 200px;
    }
    .footer_content
    {
      height: 200px;
    }
    .footer_logo,
    .copyright,
    .footer_social
    {
      text-align: center;
      width: 100%;
    }
    .copyright
    {
      margin-top: 15px;
    }
    .footer_social
    {
      margin-top: 21px;
    }
  }

  @media only screen and (max-width: 767px)
  {
    .home_content
    {
      width: 100%;
    }
    .home_title
    {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 575px)
  {
    p{font-size: 13px;}
    .menu
    {
      width: 100vw;
      right: -100vw;
    }
    .menu_container
    {
      padding-top: 80px;
    }
    .page_menu_item > a,
    .page_menu_selection li a
    {
      font-size: 13px;
      height: 40px;
      line-height: 40px;
    }
    .header_container
    {
      padding-left: 0px;
      padding-right: 0px;
    }
    .header_content
    {
      height: 70px;
    }
    .logo a,
    .header.scrolled .logo a
    {
      font-size: 18px;
    }
    .home
    {
      height: 180px;
      padding-top: 80px;
      padding-left: 0;
      padding-right: 0;
    }
    .breadcrumbs ul li a
    {
      font-size: 13px;
    }
    .button
    {
      width: 148px;
      height: 41px;
    }
    .button a
    {
      font-size: 13px;
      line-height: 37px;
    }
    .home_button
    {
      margin-top: 32px;
    }
    .coupon_input
    {
      height: 41px;
    }
    .checkout_button
    {
      width: 100%;
    }
    .copyright
    {
      font-size: 13px;
    }
    .footer_logo a
    {
      font-size: 24px;
    }
}
</style>

