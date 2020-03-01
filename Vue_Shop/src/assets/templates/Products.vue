<template>
    <div class="products">
        <div class="container">   
            <div v-if="$router.history.current.path ==='/'" class="row">
                <div class="col-lg-3 col-md-3 col-3" 
                    v-for="(item, i) in homeItems"
                    :key="i"
                    >

                    <div class="product">
                        <div class="product_image">
                            <img :src="item.src">
                        </div>                    

                        <div class="product_content">
                            <div class="product_title">
                                <router-link to="/category">{{ item.title }}</router-link>
                            </div>

                            <div class="product_price">{{ item.price }}$</div>                                  
                        </div>
                    </div>
                </div>
            </div>
            
            <transition-group v-else-if="$router.history.current.path ==='/category'" class="row" name="flip-list" tag="div">
                <div class="col-lg-3 col-md-3 col-3" 
                    v-for="item in items"
                    :key="item.id"
                    >

                    <div class="product">
                        <div class="product_image">
                            <img :src="item.src">
                        </div>                    

                        <div class="product_content">
                            <div class="product_title">
                                <router-link to="/category">{{ item.title }}</router-link>
                            </div>

                            <div class="product_price">{{ item.price }}$</div>                                  
                        </div>
                    </div>
                </div>
            </transition-group>

            <div v-else-if="$router.history.current.path ==='/single'" class="row">
                <div class="col-lg-3 col-md-3 col-3" 
                    v-for="item in singleItems"
                    :key="item.id"
                    >

                    <div class="product">
                        <div class="product_image">
                            <img :src="item.src">
                        </div>                    

                        <div class="product_content">
                            <div class="product_title">
                                <router-link to="/category">{{ item.title }}</router-link>
                            </div>

                            <div class="product_price">{{ item.price }}$</div>                                  
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>    
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data () {
            return {    
            }                
        },
        computed: {
            ...mapGetters([
                'items',
                'homeItems',
                'singleItems'
            ])
        }
    }
</script>

<style scoped lang="scss"> 
    .products {
        position: relative;
        z-index: 2;
        background-color: white;
        transition: all 1s ease;       

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
    }    

    .flip-list-move {
        transition: transform 1s;
    }
</style>
