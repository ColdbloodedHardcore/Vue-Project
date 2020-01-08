<template>
  <section class="newsletter">
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
  </section>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
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

