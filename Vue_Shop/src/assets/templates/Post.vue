<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-3" 
                v-for="post in posts"
                :key="post.id"
                >

                <div class="product">
                    <div class="product_image">
                        <img :src="post.src">
                    </div>                    

                    <div class="product_content">
                        <div class="product_title">
                            <a href="#">{{ post.title }}</a>
                        </div>
                        <div class="product_price">{{ post.price }}$</div>                                         
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        props: ['posts'],
        data () {
            return {
                
            }
        }
    }
</script>

<style scoped lang="scss">   
    .product {
        margin-bottom: 60px;

        &_image {
            width: 100%;

            img {
                max-width: 100%;
            }
        }

        &_content {
            width: 100%;
            padding-top: 36px;
            padding-bottom: 38px;

            .product_title {
                a {
                    font-size: 18px;
                    font-weight: 500;
                    color: #1b1b1b;
                    line-height: 1.1;
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

            .product_price {
                font-size: 16px;
                font-weight: 500;
                color: #6c6a74;
                line-height: 0.75;
                margin-top: 13px;
            }
        }
    }    
</style>
