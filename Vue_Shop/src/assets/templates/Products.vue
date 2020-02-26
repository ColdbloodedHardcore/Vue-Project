<template>
    <section class="products">
        <div class="container">
            <div class="row">
                <div class="col">					
                    <!-- Product Sorting -->
                    <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
                        <div class="results">Showing <span>12</span> results</div>
                        <div class="sorting_container ml-md-auto">
                            <div class="sorting">
                                <ul class="item_sorting">
                                    <li>
                                        <span class="sorting_text">Sort by</span>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                        <ul>   
                                            <li class="product_sorting_btn"><span>Default</span></li>
                                            <li class="product_sorting_btn" @click="sortByPrice()"><span>Price</span></li>
                                            <li class="product_sorting_btn" @click="sortByTitle()"><span>Name</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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
    </section>    
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data () {
            return {    
                
            }                
        },
        computed: {
            ...mapGetters(['posts'])        
        },
        methods: {            
            sortByTitle() {              

                let title = [];                

                for (let i in this.posts) {
                    title.push(this.posts[i].title); 
                }
                console.log(title);

                title.sort();
                console.log(title);  
            },
            sortByPrice() {
                let price = [];

                for (let i in this.posts) {
                    price.push(this.posts[i].price);
                }

                console.log(price);

                price.sort(function(a, b) {
                    return a - b;
                })
                console.log(price);
            }
        }    
    }
</script>

<style scoped lang="scss"> 
    .products {
        position: relative;
        z-index: 2;
        padding-top: 100px;
        background-color: white;

        .sorting_bar {
            width: 100%;
            padding-top: 88px;
            padding-bottom: 100px;

            .results {
                font-size: 14px;
                font-weight: 400;
                color: #6c6a74;
            }

            .item_sorting {
                display: inline-block;

                & > li {
                    display: inline-block;
                    position: relative;
                    width: 191px;
                    height: 36px;
                    line-height: 32px;
                    cursor: pointer;
                    border: solid 2px #ececec;
                    padding-left: 26px;
                    padding-right: 19px;
                    margin-right: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #6c6a74;
                    margin-bottom: 10px;

                    &:last-child {
                        margin-right: 0;
                    }

                    &:hover ul {
                        visibility: visible;
                        opacity: 1;
                        top: calc(100% + 1px);
                    }

                    i {
                        float: right;
                        line-height: 32px;
                        font-size: 10px;
                        color: #787878;
                    }

                    ul {
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 120%;
                        margin: 0;
                        width: 100%;
                        background: #FFFFFF;
                        visibility: hidden;
                        opacity: 0;
                        z-index: 1;
                        box-shadow: 0 15px 25px rgba(63, 78, 100, 0.15);
                        -webkit-transition: opacity 0.6s ease;
                        -moz-transition: opacity 0.6s ease;
                        -ms-transition: opacity 0.6s ease;
                        -o-transition: opacity 0.6s ease;
                        transition: all 0.6s ease;

                        li {
                            display: block;
                            text-align: left;
                            padding-left: 15px;
                            padding-right: 15px;

                            &:last-child span {
                                border-bottom: none;
                            }

                            span {
                                display: block;
                                height: 36px;
                                line-height: 36px;
                                border-bottom: solid 1px #dddddd;
                                color: #6c6a74;
                                text-align: right;
                                padding-right: 5px;
                                -webkit-transition: opacity 0.6s ease;
                                -moz-transition: opacity 0.6s ease;
                                -ms-transition: opacity 0.6s ease;
                                -o-transition: opacity 0.6s ease;
                                transition: all 0.6s ease;

                                &:hover {
                                    color: #e95a5a;
                                }

                                &:nth-child(2) {
                                    margin-left: 63px;
                                }
                            }
                        }
                    }
                }
            }
        }

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
</style>
