<template>
   <div>
     <!-- Home -->
     

    <!-- Ads -->
    <section class="avds">
      <div class="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
        <div class="avds_small">
          <div class="avds_background" :style="{ backgroundImage: 'url(' + images.avds_small + ')' }"></div>
          <div class="avds_small_inner">
            <div class="avds_discount_container">
              <img :src="images.discount" alt="">
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
          <div class="avds_background" :style="{ backgroundImage: 'url(' + images.avds_large + ')' }"></div>
          <div class="avds_large_container">
            <div class="avds_large_content">
              <div class="avds_title">Professional Cameras</div>
              <div class="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viver ra velit venenatis fermentum luctus.</div>
              <div class="avds_link avds_link_large"><a href="categories.html">See More</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <products :posts="posts.slice(0, 8)"/>

    <!-- Ad -->
    <section class="avds_xl">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="avds_xl_container clearfix">
              <div class="avds_xl_background" :style="{ backgroundImage: 'url(' + images.avds_xl + ')' }"></div>
              <div class="avds_xl_content">
                <div class="avds_title">Amazing Devices</div>
                <div class="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.</div>
                <div class="avds_link avds_xl_link"><a href="#">See More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Icon Boxes -->
    <section class="icon_boxes">
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
    </section>

    <!-- Newsletter -->
    <newsletter/>   
   </div>
</template>

<script>
export default {
  props: ['posts', 'icons', 'images'],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  .avds {
    position: relative;
    width: 100%;
    background: #FFFFFF;
    z-index: 2;

    .avds_container {
      width: 100%;
      height: 490px;
      padding-left: 60px;
      padding-right: 60px;
    }

    /* Ad Small*/
    .avds_small {
      position: relative;
      width: calc((100% * 0.391) - 15px);
      height: 100%;
      padding: 30px;

      .avds_background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }     

      .avds_small_inner {
        position: relative;
        width: 100%;
        height: 100%;
        border: solid 2px #FFFFFF;

        .avds_discount_container {
          position: absolute;
          right: 36px;
          bottom: 0;

          & > div {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .avds_discount {
            position: absolute;
            bottom: 71px;
            right: 0;
            width: 152px;
            text-align: center;

            & div:first-child {
              font-size: 60px;
              font-weight: 700;
              color: #1b1b1b;
              line-height: 0.75;

            & span {
                font-size: 36px;
                font-weight: 700;
                vertical-align: super;
              }
            }

            & div:last-child {
              font-size: 14px;
              font-weight: 400;
              color: #1b1b1b;
              margin-top: 1px;
            }
          }
        }

        .avds_small_content {
          max-width: 250px;
          padding-top: 57px;
          padding-left: 31px;
          padding-right: 30px;

          .avds_title {
            font-size: 48px;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 1.16;
          }

          .avds_link {
            margin-top: 18px;
            padding-left: 4px;

            a {
              position: relative;
              display: inline-block;
              font-size: 14px;
              font-weight: 400;
              color: #FFFFFF;

              &::after {
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #FFFFFF;
                content: '';
              }
            }
          }
        }
      }
    }

    /* Ad Large*/
    .avds_large {
      position: relative;
      width: calc((100% * 0.608) - 15px);
      height: 100%;

      .avds_background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .avds_large_container {
        position: relative;
        width: 100%;
        height: 100%;
        padding-top: 39px;
        padding-left: 32px;
        padding-bottom: 44px;

        .avds_large_content {
          max-width: 567px;
          height: 100%;
          background: rgba(0,0,0,0.63);
          padding-right: 130px;
          padding-left: 30px;
          padding-top: 51px;
          padding-bottom: 30px;

          .avds_title {
            font-size: 48px;
            font-weight: 600;
            color: #fff;
            line-height: 1.16;
          }

          .avds_text {
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 2.14;
            margin-top: 11px;
            padding-left: 2px;
          }

          .avds_link_large {
            margin-top: 40px;

            a {
              position: relative;
              display: inline-block;
              font-size: 14px;
              font-weight: 400;
              color: #fff;

              &::after {
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #fff;
                content: '';
              }
            }
          }
        }
      }
    }
  }

  .avds_xl {
    position: relative;
    width: 100%;
    background: #FFFFFF;
    z-index: 2;

    .clearfix {
        zoom: 1;
    }

    &_container {
      width: 100%;
      height: 345px;
      padding-top: 34px;
      padding-right: 35px;
      padding-bottom: 30px;
      padding-left: 30px;

      .avds_xl_background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .avds_xl_content {
        position: relative;
        width: 391px;
        height: 100%;
        background: #e95a5a;
        float: right;
        padding-top: 28px;
        padding-left: 42px;
        padding-right: 30px;    

        .avds_title {
          font-size: 48px;
          font-weight: 600;
          color: #fff;
          line-height: 1.16;
        }

        .avds_text {
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          line-height: 2.14;
          margin-top: 11px;
          padding-left: 2px;
        }

        .avds_xl_link {
          margin-top: 18px; 

          a {
            position: relative;
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            color: #fff;

            &::after {
              display: block;
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 1px;
              background: #fff;
              content: '';
            }
          }
        }
      }
    }
  }

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
</style>
