<template>
  <section>
    <!-- Home -->
    <div class="home">
      <div class="home_container">
        <div class="home_background" :style="{ backgroundImage: 'url(' + hero.home + ')' }"></div>
        <div class="home_content_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content">
                  <div class="home_title">Smart Phones<span>.</span></div>
                  <div class="home_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
   
    <!-- Products -->
    <products :posts="posts"/>

    <!-- Icon Boxes -->
    <icon-box :icons="icons"/>

    <!-- Newsletter -->
    <newsletter/>   
  </section>
</template>

<script>
export default {
  props: ['icons', 'posts', 'hero'],
  name: 'category',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    height: 625px;
    background: #FFFFFF;
    z-index: 2;
    padding-top: 130px;
    padding-left: 60px;
    padding-right: 60px;

    &_container {
      width: 100%;
      height: 100%;

      .home_background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .home_content_container {
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;

        .home_content {
          width: 580px;

          .home_title {
            font-size: 60px;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 1.2;

            span {
              color: #e95a5a;
            }
          }

          .home_text {
            margin-top: 7px;

            p {
              color: #FFFFFF;
            }
          }
        }
      }
    }
  }
</style>
