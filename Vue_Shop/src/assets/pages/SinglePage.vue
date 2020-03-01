<template>
   <main>
    <section class="home">
        <div class="home_container">
            <div class="home_background" style="background-image:url(/src/assets/images/products/products_header.jpg)"></div>
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
    </section>

    <!-- Product Details -->
	<section class="product_details">
		<div class="container">
			<div class="row details_row" v-for="(item, i) in items" :key="i">

				<!-- Product Image -->
				<div class="col-lg-6">
                
					<div class="details_image">
						<div class="details_image_large"><img :src="item.src" alt=""><div class="product_extra product_new"><a href="#">New</a></div></div>
						<div class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
							<div class="details_image_thumbnail active"><img src="/src/assets/images/single_page/details_1.jpg" alt=""></div>
							<div class="details_image_thumbnail"><img src="/src/assets/images/single_page/details_2.jpg" alt=""></div>
							<div class="details_image_thumbnail" ><img src="/src/assets/images/single_page/details_3.jpg" alt=""></div>
							<div class="details_image_thumbnail"><img src="/src/assets/images/single_page/details_4.jpg" alt=""></div>
						</div>
					</div>
				</div>

				<!-- Product Content -->
				<div class="col-lg-6">
					<div class="details_content">
						<div class="details_name">{{ item.title }}</div>
						<div class="details_discount">$890</div>
						<div class="details_price">${{ item.price }}</div>

						<!-- In Stock -->
						<div class="in_stock_container">
							<div class="availability">Availability:</div>
							<span>In Stock</span>
						</div>
						<div class="details_text">
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
						</div>

						<!-- Product Quantity -->
						<div class="product_quantity_container">
							<div class="product_quantity clearfix">
								<span>Qty</span>
								<input type="text" pattern="[0-9]*" value="0">
								<div class="quantity_buttons">
									<div class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
									<div  class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
								</div>
							</div>
							<div class="button cart_button"><a type="button" @click="addToCart(item)">Add to cart</a></div>
						</div>

						<!-- Share -->
						<div class="details_share">
							<span>Share:</span>
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

			<div class="row description_row">
				<div class="col">
					<div class="description_title_container">
						<div class="description_title">Description</div>
						<div class="reviews_title"><a href="#">Reviews <span>(1)</span></a></div>
					</div>
					<div class="description_text">
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

    <!-- Products -->
    <section class="products">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="products_title">Related Products</div>
                </div>
            </div>


            <products/>  
            
             
        </div> 
    </section> 

    <!-- Newsletter -->
    <newsletter/>   
   </main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {  
  data () {
    return {
        
    }
  },
  computed: {
    ...mapGetters([
        'items'
    ]),    
  },
  methods: {
    addToCart(item) {
        this.$store.commit('addToCart', item);
    },
    incQty () {
      this.$store.commit('incrementQty');      
    },
    decQty () {
      this.$store.commit('decrementQty')
    },    
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

    // Product Details
    .product_details {
        width: 100%;
        background: #FFFFFF;
        z-index: 2;
        padding-top: 1px;

        .details_row {
            margin-top: 95px;

            .details_image {
                .details_image_large {
                    width: 100%;

                    img {
                        max-width: 100%;
                    }
                }
            }

            .details_image_thumbnails {
                margin-top: 17px;

                .details_image_thumbnail {
                    width: calc((100% - 51px) / 4);
                    cursor: pointer;

                    &::after {
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: solid 2px #1b1b1b;
                        content: '';
                        background: transparent;
                        pointer-events: none;
                        visibility: hidden;
                        opacity: 0;
                        -webkit-transition: all 200ms ease;
                        -moz-transition: all 200ms ease;
                        -ms-transition: all 200ms ease;
                        -o-transition: all 200ms ease;
                        transition: all 200ms ease;
                    }

                    &.active::after,
                    &:hover::after {
                        visibility: visible;
                        opacity: 1;
                    }

                    img {
                        max-width: 100%;
                    }
                }
            }

            .details_content {
                .details_name {
                    font-size: 24px;
                    font-weight: 500;
                    color: #1b1b1b;
                    margin-top: -9px;
                }

                .details_discount {
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 500;
                    color: #e95a5a;
                    margin-right: 20px;
                    text-decoration: line-through;
                }

                .details_price {
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 500;
                    color: #6c6a74;
                    margin-top: 12px;
                }

                .in_stock_container {
                    margin-top: 22px;

                    .availability {
                        display: inline-block;
                        font-size: 14px;
                        font-weight: 500;
                        color: #6c6a74;
                    }

                    span {
                        display: inline-block;
                        font-size: 14px;
                        font-weight: 500;
                        color: #44a038;
                        margin-left: 5px;
                    }
                }

                .details_text {
                    margin-top: 49px;

                    p {
                        font-weight: 500;
                    }
                }

                .product_quantity_container {
                    margin-top: 48px;

                    .product_quantity {
                        display: inline-block;
                        width: 147px;
                        height: 61px;
                        border: solid 2px #d0d0d0;
                        overflow: hidden;
                        padding-left: 78px;
                        vertical-align: middle;

                        span {
                            position: absolute;
                            top: 50%;
                            left: 23px;
                            -webkit-transform: translateY(-50%);
                            -moz-transform: translateY(-50%);
                            -ms-transform: translateY(-50%);
                            -o-transform: translateY(-50%);
                            transform: translateY(-50%);
                            font-size: 16px;
                            font-weight: 600;
                            color: #6c6a74;
                        }

                        input {
                            display: block;
                            width: 30px;
                            height: 57px;
                            border: none;
                            outline: none;
                            font-size: 16px;
                            font-weight: 600;
                            color: #1b1b1b;
                            text-align: left;
                            padding-left: 9px;
                            line-height: 39px;
                            float: left;
                        }

                        .quantity_buttons {
                            position: absolute;
                            top: 0;
                            right: 1px;
                            height: 100%;
                            width: 29px;

                            .quantity_inc, 
                            .quantity_dec {
                                display: -webkit-box;
                                display: -moz-box;
                                display: -ms-flexbox;
                                display: -webkit-flex;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                width: 100%;
                                height: 50%;
                                cursor: pointer;
                            }

                            .quantity_control {
                                i {
                                    font-size: 10px;
                                    color: #232323;
                                    pointer-events: none;
                                }

                                &:active {
                                    border: solid 1px rgba(14, 140, 228, 0.2);
                                }
                            }

                            .quantity_inc {
                                padding-bottom: 3px;
                                justify-content: flex-end;

                                i {
                                    -webkit-transform: translateY(3px);
                                    -moz-transform: translateY(3px);
                                    -ms-transform: translateY(3px);
                                    -o-transform: translateY(3px);
                                    transform: translateY(3px);
                                }
                            }

                            .quantity_dec {
                                padding-top: 3px;
                                justify-content: flex-start;

                                i {
                                    -webkit-transform: translateY(-3px);
                                    -moz-transform: translateY(-3px);
                                    -ms-transform: translateY(-3px);
                                    -o-transform: translateY(-3px);
                                    transform: translateY(-3px);
                                }
                            }
                        }
                    }

                    .cart_button {
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 13px;

                        &::after{
                            background: #1b1b1b;
                        }

                        &:hover {
                            color: #fff;
                        }
                    }
                }

                .details_share {
                    margin-top: 51px;
                    border-top: solid 1px #d0d0d0;

                     span {
                        display: inline-block;
                    }

                    ul {
                        display: inline-block;
                        margin-top: 31px;
                        margin-left: 41px;
                        
                        li {
                            display: inline-block;

                            &:not(:last-child) {
                                margin-right: 18px;
                            }

                            a {
                                i {
                                    font-size: 16px;
                                    color: #b5b5b5;
                                    padding: 5px;
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
            }            
        }     
        
        .description_row {
            margin-top: 91px;

            .description_title {
                display: inline-block;
                font-size: 24px;
                font-weight: 500;
                color: #1b1b1b;
            }

            .reviews_title {
                display: inline-block;
                margin-left: 41px;

                a {
                    font-size: 24px;
                    font-weight: 500;
                    color: #6c6a74;
                    -webkit-transition: all 200ms ease;
                    -moz-transition: all 200ms ease;
                    -ms-transition: all 200ms ease;
                    -o-transition: all 200ms ease;
                    transition: all 200ms ease;

                    &:hover {
                        color: #1b1b1b;
                    }
                }
            }

            .description_text {
                margin-top: 44px;
            }
        }

        .product_extra {
            position: absolute;
            top: 0;
            left: 54px;
            width: 66px;
            height: 36px;
            text-align: center;
            -webkit-transform-origin: top left;
            -moz-transform-origin: top left;
            -ms-transform-origin: top left;
            -o-transform-origin: top left;
            transform-origin: top left;
            transform: rotate(90deg);

            a {
                display: block;
                font-size: 16px;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 36px;
            }
        }

        .product_new {
            background: #6c6a74;
        }
        .product_sale {
            background: #e95a5a;
        }
        .product_hot {
            background: #1b1b1b;
        } 
    }

    // Products
    .products {
        width: 100%;
        background: #FFFFFF;
        z-index: 2;
        padding-top: 90px;

        .products_title {
            font-size: 30px;
            font-weight: 500;
            color: #1b1b1b;
        }
    }    
</style>
