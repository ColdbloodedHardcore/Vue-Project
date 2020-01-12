<template>
  <div id="shop">   
    <site-header :navList="navList"
    />  

    <home v-if="state == 'home'"
          :slides="slides"
          :posts="posts"
          :images="images"
          :icons="icons"          
    />   

    <single-page v-else-if="state == 'single'"
                :icons="icons" 
                :posts="posts"
                :single="single"   
    />
   
    <site-footer/>
  </div>
</template>

<script>
  export default {
    name: 'shop',
    data() {
      return {
        state: 'home',
        navList: [
        { url: "javascript:void(0)", name: "Home"},
        { url: "javascript:void(0)", name: "Categories",
        children: [
            {
              url: "#",
              name: "Category"
            },
            {
              url: "#",
              name: "Category"
            },
            {
              url: "#",
              name: "Category"
            },
            {
              url: "#",
              name: "Category"
            },
            {
              url: "#",
              name: "Category"
            }
          ]},
        { url: "#", name: "Accessories" },
        { url: "#", name: "Offers" },
        { url: "#", name: "Contact" }
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
        images: {
          discount: require ('./assets/images/home/discount.png'),
          avds_small: require ('./assets/images/home/home_1.jpg'),
          avds_large: require ('./assets/images/home/home_2.jpg'),
          avds_xl: require ('./assets/images/home/home_3.jpg')   
        },
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
        single: {
          home: require ('./assets/images/products/products_header.jpg'),
        } 
      }
    },
    methods: {
      onHome() {
        this.state = 'home';  
      },
      onSingle() {
        this.state = 'single';        
      }  
    }
  }
</script>

<style>

</style>
