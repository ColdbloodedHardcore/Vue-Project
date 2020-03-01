<template>
  <footer class="footer" style="background-image: url(./src/assets/images/footer.jpg)">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="footer_content d-flex ">
            <div class="footer_logo"><a href="#">Vue Shop</a></div>
            <div class="copyright ml-auto mr-auto">
              Copyright &copy;2020 All rights reserved | This template is made with
              <i class="far fa-heart"></i> by <a href="#" target="_blank">Pop Coren</a></div>
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
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<style scoped lang="scss">
  .footer {

    &_background {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
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

          & a i {
            font-size: 17px;
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
      }
    }
  }

</style>
