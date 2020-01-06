<template>
  <div>
    <div class="footer_overlay"></div>
      <footer class="footer">      
        <div class="footer_background" style="background-image: url(./src/assets/images/footer.jpg)"></div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer_content d-flex ">
                <div class="footer_logo"><a href="#">Sublime.</a></div>
                <div class="copyright ml-auto mr-auto">
                  Copyright &copy;2020 All rights reserved | This template is made with 
                <i class="far fa-heart"></i> by <a href="#" target="_blank">Colorlib</a></div>
                <div class="footer_social ml-lg-auto">
                <ul>
                  <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
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
  .footer_overlay {
    width: 100%;
    height: 129px;
    background: transparent;
    z-index: 1;
  }
  
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;

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
      
      .footer_content {
          width: 100%;
          height: 129px;
          align-items: center;

          .footer_logo {
            width: 30%;

            a {
              font-size: 30px;
              line-height: 0.75;
              color: #1b1b1b;
              font-weight: 700;
            }
          }

          .copyright {
            width: 40%;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            color: #1b1b1b;
          }

          .footer_social {
            width: 30%;
            text-align: right;

            & ul li {
              display: inline-block;

              &:not(:last-child) {
                margin-right: 26px;
              }

              & a i  {
                font-size: 17px;
                color: #1b1b1b;
                -webkit-transition: all 200ms ease;
                -moz-transition: all 200ms ease;
                -ms-transition: all 200ms ease;
                -o-transition: all 200ms ease;
                transition: all 200ms ease;

                &:hover {
                  color: #e95a5a;
                }
              }
            }
        }
    }
  }
</style>
