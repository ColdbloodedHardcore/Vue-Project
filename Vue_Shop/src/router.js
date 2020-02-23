import Vue from 'vue'
import Router from "vue-router"

import Home from './assets/pages/HomePage.vue'
import Single from './assets/pages/SinglePage.vue'
import Category from './assets/pages/CategoryPage.vue'
import Cart from './assets/pages/CartPage.vue'
import Check from './assets/pages/CheckOutPage.vue'
import Contact from './assets/pages/ContactPage.vue'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        props: {
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
          images: {
            discount: require ('./assets/images/home/discount.png'),
            avds_small: require ('./assets/images/home/home_1.jpg'),
            avds_large: require ('./assets/images/home/home_2.jpg'),
            avds_xl: require ('./assets/images/home/home_3.jpg')   
          },
        }
      },
      {
        path: '/single',
        name: 'single',
        component: Single,
        props: {
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
          hero: {
            home: require ('./assets/images/products/products_header.jpg'),
          },
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
          single: {
            large: require ('./assets/images/single_page/details_1.jpg'),
            thumbnail_1: require ('./assets/images/single_page/details_1.jpg'),          
            thumbnail_2: require ('./assets/images/single_page/details_2.jpg'),
            thumbnail_3: require ('./assets/images/single_page/details_3.jpg'),
            thumbnail_4: require ('./assets/images/single_page/details_4.jpg')
          }   
        }
      },
      {
        path: '/category',
        name: 'category',
        component: Category,
        props: {
          hero: {
            home: require ('./assets/images/products/products_header.jpg'),
          },
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
        }
      },
      {
        path: '/check',
        name: 'check',
        component: Check,
        props: {
          
        }
      }, 
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
        props: {          
          products: [ {
              image: require ('./assets/images/cart/cart_1.jpg'),
              name: 'Smart Phone Deluxe Edition',
              edit: 'Edit Product',
              price: 790.9 + '0'
            }                  
          ]
        }
      },   
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        props: {
          
        }
      }        
    ]
  })
