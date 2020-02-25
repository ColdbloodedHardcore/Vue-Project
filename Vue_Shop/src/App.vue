<template>
  <div id="shop">   
    <site-header/>  

    <main>    

      <transition name="fade" mode="out-in">   

        <router-view  :posts="posts"
                      :slides="slides"
                      :icons="icons"
                      :images="images"
                      :hero="hero"
                      :single="single"
                      :products="products"
        ></router-view>
        
      </transition>

    </main>

    <site-footer />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slides: [
          {
            slide_image: require ('./assets/images/home/home_slider_1.jpg'),
            title: 'A new Online Shop experience.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.'
          },
          {
            slide_image: require ('./assets/images/home/home_slider_1.jpg'),
            title: 'A new Online Shop experience.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.'
          },
          {
            slide_image: require ('./assets/images/home/home_slider_1.jpg'),
            title: 'A new Online Shop experience.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.'
          }
        ],
        posts: [
          {
            src: require ('./assets/images/products/product_1.jpg'),
            title: 'SmartPhone',            
            price: 670
          },
          {
            src: require ('./assets/images/products/product_2.jpg'),
            title: 'Speakers',            
            price: 520
          },
          {
            src: require ('./assets/images/products/product_3.jpg'),
            title: 'Accessories',            
            price: 710
          },
          {
            src: require ('./assets/images/products/product_4.jpg'),
            title: 'Laptop',            
            price: 330
          },
          {
            src: require ('./assets/images/products/product_5.jpg'),
            title: 'Headphones',            
            price: 170
          },
          {
            src: require ('./assets/images/products/product_6.jpg'),
            title: 'Tablet',            
            price: 240
          },
          {
            src: require ('./assets/images/products/product_7.jpg'),
            title: 'SmartPhone',            
            price: 70
          },
          {
            src: require ('./assets/images/products/product_8.jpg'),
            title: 'Keyboard',            
            price: 490
          },
          {
            src: require ('./assets/images/products/product_9.jpg'),
            title: 'Drone',            
            price: 410
          },
          {
            src: require ('./assets/images/products/product_10.jpg'),
            title: 'Headphones',            
            price: 365
          },
          {
            src: require ('./assets/images/products/product_11.jpg'),
            title: 'PlayStation',            
            price: 195
          },
          {
            src: require ('./assets/images/products/product_12.jpg'),
            title: 'Photo Camera',            
            price: 580
          }
        ],
        icons: [
          {
          src: require ('./assets/images/icons/icon_1.svg'),
          title: 'Free Shipping Worldwide',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
          },
          {
          src: require ('./assets/images/icons/icon_2.svg'),
          title: 'Free Returns',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
          },
          {
          src: require ('./assets/images/icons/icon_3.svg'),
          title: '24h Fast Support',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
          }
        ], 
        hero: {
          home: require ('./assets/images/products/products_header.jpg'),
        },
        images: {
          discount: require ('./assets/images/home/discount.png'),
          avds_small: require ('./assets/images/home/home_1.jpg'),
          avds_large: require ('./assets/images/home/home_2.jpg'),
          avds_xl: require ('./assets/images/home/home_3.jpg')   
        },
        single: {
          large: require ('./assets/images/single_page/details_1.jpg'),
          thumbnail_1: require ('./assets/images/single_page/details_1.jpg'),          
          thumbnail_2: require ('./assets/images/single_page/details_2.jpg'),
          thumbnail_3: require ('./assets/images/single_page/details_3.jpg'),
          thumbnail_4: require ('./assets/images/single_page/details_4.jpg')
        },
        products: [ 
          {
            image: require ('./assets/images/cart/cart_1.jpg'),
            name: 'Smart Phone Deluxe Edition',
            edit: 'Edit Product',
            price: 790.9 + '0'
          }                  
        ]  
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  /* .fade-enter {} */

  .fade-enter-active {
    animation: fadeInLeft .5s linear;
  }
  /* .fade-leave {} */

  .fade-leave-active {
    animation: fadeOutRight .5s linear;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  .fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }  
</style>
