<template>
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
</template>

<script>
export default {
    props: ['icons'],
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
</style>
