<template>
    <div class="home">
        <hooper class="home_slider_container" :settings="hooperSettings">          
            

            <slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
                <div class="home_slider_background" :style="{ backgroundImage: 'url(' + slide.slide_image + ')' }"></div>
                <div class="home_slider_content_container">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="home_slider_content"  data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                    <div class="home_slider_title">{{ slide.title }}</div>
                                    <div class="home_slider_subtitle">{{ slide.subtitle }}</div>
                                    <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
            
            <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
        </hooper>
    </div>
</template>

<script>
export default {
    props: ['slides'],
    data () {
        return {
            hooperSettings: {
            itemsToShow: 1,
            itemsToSlide: 1,
            centerMode: true,
            // autoPlay: true,
            playSpeed: 3000,
            wheelControl: false
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .home {
        position: relative;
        width: 100%;
        height: 950px;
        background: #FFFFFF;
        z-index: 2;     

        .home_slider_container {
            width: 100%;
            height: 100%;
            padding-top: 130px;
            padding-left: 60px;
            padding-right: 60px;
            padding-bottom: 30px;

            .home_slider_background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 700px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
            }

            .home_slider_content_container {
                position: absolute;
                left: 0;
                top: 32.3%;
                width: 100%;

                .home_slider_content {
                    max-width: 580px;

                    .home_slider_title {
                        font-size: 60px;
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: 1.2;
                    }

                    .home_slider_subtitle {
                        font-size: 14px;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 2.14;
                        margin-top: 22px;
                    }

                    .home_button {
                        margin-top: 40px;
                    }
                }
            }
        }
    }
</style>
