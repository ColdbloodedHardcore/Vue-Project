<template>
   <div>
     <div class="home">
      <div class="home_slider_container">
        
        <!-- Home Slider -->
        <div class="owl-carousel owl-theme home_slider">
          
          <!-- Slider Item -->
          <div class="owl-item home_slider_item">
            <div class="home_slider_background" style="background-image:url(images/home_slider_1.jpg)"></div>
            <div class="home_slider_content_container">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="home_slider_content"  data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                      <div class="home_slider_title">A new Online Shop experience.</div>
                      <div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                      <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slider Item -->
          <div class="owl-item home_slider_item">
            <div class="home_slider_background" style="background-image:url(images/home_slider_1.jpg)"></div>
            <div class="home_slider_content_container">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="home_slider_content"  data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                      <div class="home_slider_title">A new Online Shop experience.</div>
                      <div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                      <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slider Item -->
          <div class="owl-item home_slider_item">
            <div class="home_slider_background" style="background-image:url(images/home_slider_1.jpg)"></div>
            <div class="home_slider_content_container">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="home_slider_content"  data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                      <div class="home_slider_title">A new Online Shop experience.</div>
                      <div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                      <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Home Slider Dots -->
        
        <div class="home_slider_dots_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_slider_dots">
                  <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
                    <li class="home_slider_custom_dot active">01.</li>
                    <li class="home_slider_custom_dot">02.</li>
                    <li class="home_slider_custom_dot">03.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>	
        </div>

      </div>
    </div>

    <!-- Ads -->

    <div class="avds">
      <div class="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
        <div class="avds_small">
          <div class="avds_background" style="background-image:url(images/avds_small.jpg)"></div>
          <div class="avds_small_inner">
            <div class="avds_discount_container">
              <img src="images/discount.png" alt="">
              <div>
                <div class="avds_discount">
                  <div>20<span>%</span></div>
                  <div>Discount</div>
                </div>
              </div>
            </div>
            <div class="avds_small_content">
              <div class="avds_title">Smart Phones</div>
              <div class="avds_link"><a href="categories.html">See More</a></div>
            </div>
          </div>
        </div>
        <div class="avds_large">
          <div class="avds_background" style="background-image:url(images/avds_large.jpg)"></div>
          <div class="avds_large_container">
            <div class="avds_large_content">
              <div class="avds_title">Professional Cameras</div>
              <div class="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viver ra velit venenatis fermentum luctus.</div>
              <div class="avds_link avds_link_large"><a href="categories.html">See More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products -->

    <products :posts="posts"/>

    <!-- Ad -->

    <div class="avds_xl">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="avds_xl_container clearfix">
              <div class="avds_xl_background" style="background-image:url(images/avds_xl.jpg)"></div>
              <div class="avds_xl_content">
                <div class="avds_title">Amazing Devices</div>
                <div class="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.</div>
                <div class="avds_link avds_xl_link"><a href="categories.html">See More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Icon Boxes -->

    <div class="icon_boxes">
      <div class="container">
        <div class="row icon_box_row">
          
          <!-- Icon Box -->
          <div class="col-lg-4 icon_box_col"
                v-for="icon in icons"
                :key="icon.id"
                >

            <div class="icon_box">
              <div class="icon_box_image"><img :src="icon.src" alt=""></div>
              <div class="icon_box_title">{{ icon.title }}</div>
              <div class="icon_box_text">
                <p>{{ icon.text }}</p>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>

    <!-- Newsletter -->

    <div class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="newsletter_border"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="newsletter_content text-center">
              <div class="newsletter_title">Subscribe to our newsletter</div>
              <div class="newsletter_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros</p></div>
              <div class="newsletter_form_container">
                <form action="#" id="newsletter_form" class="newsletter_form">
                  <input type="email" class="newsletter_input" required="required">
                  <button class="newsletter_button trans_200"><span>Subscribe</span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  props: ['posts', 'icons'],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  .icon_boxes {
    position: relative;
    width: 100%;
    padding-top: 99px;
    padding-bottom: 99px;
    background: #FFFFFF;
    z-index: 2;

    .icon_box {
      width: 100%;
      text-align: center;

      .icon_box_image {
        width: 75px;
        height: 75px;
        margin-left: auto;
        margin-right: auto;
        
        img  {
          max-width: 100%;
        }
      }

      .icon_box_title {
        font-size: 18px;
        font-weight: 500;
        color: #1b1b1b;
        margin-top: 33px;
      }

      .icon_box_text {
        margin-top: 20px;
      }
    }
  }

  .newsletter {
    position: relative;
    width: 100%;
    background: #FFFFFF;
    padding-bottom: 99px;
    z-index: 2;

    .newsletter_border {
      width: 100%;
      border-top: solid 2px #e3e3e3;
    }

    .newsletter_content {
      padding-top: 88px;

      .newsletter_title {
        font-size: 30px;
        font-weight: 500;
        color: #1b1b1b;
      }

      .newsletter_text {
        margin-top: 8px;

        p {
          font-family: poppins,sans-serif;
          font-size: 14px;
          line-height: 2.14;
          font-weight: 400;
          color: #6c6a74;
          -webkit-font-smoothing: antialiased;
          -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
          text-shadow: rgba(0,0,0,.01) 0 0 1px;
        }
      }

      .newsletter_form_container {
        width: 100%;
        margin-top: 46px;

        .newsletter_form {
          width: 100%;

          .newsletter_input {
            width: 100%;
            height: 40px;
            border: none;
            border-bottom: solid 2px #787878;
            outline: none;
            text-align: center;
          }

          .newsletter_button {
            position: relative;
            width: 178px;
            height: 61px;
            border: solid 2px #1b1b1b;
            background: #FFFFFF;
            cursor: pointer;
            margin-top: 55px;
            overflow: hidden; 

            &::after {
              content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 150%;
                height: 100%;
                background: #1b1b1b;
                z-index: 0;
                opacity: 0;
                -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                -webkit-transform-origin: 0% 100%;
                transform-origin: 0% 100%;
                -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
                transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
            }

             &:hover::after {
                opacity: 1;
                -webkit-transform: rotate3d(0, 0, 1, 0deg);
                transform: rotate3d(0, 0, 1, 0deg);
                -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
            }           

            & span {
              display: block;
              position: relative;
              z-index: 10;
              font-size: 16px;
              font-weight: 600;
              color: #1b1b1b;
              background: none;
              -webkit-transition: all 200ms ease;
              -moz-transition: all 200ms ease;
              -ms-transition: all 200ms ease;
              -o-transition: all 200ms ease;
              transition: all 200ms ease;
            }

            &:hover span {
                color: #fff;
              }
          }
        }
      }
    }
  }
</style>
