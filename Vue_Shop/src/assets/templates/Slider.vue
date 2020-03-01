<template>
    <section class="home">
        <agile :options="options">          
            
            <div class="home_slider_container">
                <div v-for="(slide, indx) in slides" :key="indx" :index="indx">
                    <div class="home_slider_background" :style="{ backgroundImage: 'url(' + slide.slide_image + ')' }"></div>
                    <div class="home_slider_content_container">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="home_slider_content">
                                        <div class="home_slider_title">{{ slide.title }}</div>
                                        <div class="home_slider_subtitle">{{ slide.subtitle }}</div>
                                        <div class="button button_light home_button"><router-link to="/category">Shop Now</router-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
           
        </agile>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data () {
        return {
            options: {
                dots: false,
                navButtons: false,
                speed: 3000,
                timing: 'linear',
                autoplay: true
            },
        }
    },
    computed: {
        ...mapGetters(['slides'])        
    },
}
</script>

<style scoped lang="scss">
    .home {
        position: relative;
        width: 100%;
        background: #FFFFFF;
        z-index: 2;  

        .home_slider_container {
            width: 100%;
            height: 850px;
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
                top: 210px;
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
                        position: relative;
                        margin-top: 40px;
                        width: 178px;
                        height: 61px;
                        background: 0 0;
                        text-align: center;
                        border: solid 2px #FFFFFF; 
                        overflow: hidden;
                        cursor: pointer;

                        &:hover::after {
                            opacity: 1;
                            -webkit-transform: rotate3d(0, 0, 1, 0deg);
                            transform: rotate3d(0, 0, 1, 0deg);
                            -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                        }

                        a {
                            display: block;
                            position: relative;
                            font-size: 16px;
                            font-weight: 600;
                            line-height: 57px;
                            color: #fff;
                            background: none;
                            z-index: 1;
                            -webkit-transition: all 200ms ease;
                            -moz-transition: all 200ms ease;
                            -ms-transition: all 200ms ease;
                            -o-transition: all 200ms ease;
                            transition: all 200ms ease;                           
                        }

                        &:hover a {                            
                            color: #1b1b1b;
                        }

                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 150%;
                            height: 100%;
                            background: #fff;
                            z-index: 0;
                            opacity: 0;
                            -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                            transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                            -webkit-transform-origin: 0% 100%;
                            transform-origin: 0% 100%;
                            -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
                            transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
                        }                    
                    }
                }
            }        
        }        
    } 
</style>
