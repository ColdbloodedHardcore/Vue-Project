<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="header_content d-flex flex-row align-items-center justify-content-start" :style="{'height': scrolled.height}">
                        <div class="logo">
                            <router-link to="/">Vue Shop</router-link>
                        </div>

                        <nav class="main_nav">
                            <ul>
                               <li v-for="(item, i) in navList" :key="i">
                                    <template v-if="item.children">

                                        <a :to="item.url" @click.stop="dropShow()"                                       
                                        > {{ item.name }}<i class="fas fa-chevron-down"></i></a>  

                                        <div :class="{ showDropdown }" class="dropdown" v-show="showDropdown">
                                            <ul>
                                                <li v-for="{ url, name, i } in item.children" :key="i">
                                                    <router-link  :to="url">{{ name }}</router-link>
                                                </li>
                                              </ul>
                                        </div>   
                                         
                                    </template>
                                    <template v-else>
                                        <router-link 
                                        :to="item.url">{{ item.name }}</router-link>
                                    </template>
                                </li>
                            </ul>                            
                        </nav>

                        <div class="ml-auto">
                            <div class="shopping_cart">
                                <router-link to="/cart">

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve">
                                        <g>
                                            <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
                                            c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
                                            C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
                                            H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
                                            c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"></path>
                                        </g>
                                    </svg>

                                    <div>Cart <span>( {{ cartCount}} )</span></div>
                                </router-link>
                            </div>

                            <div class="search" @click="showSearch=!showSearch">
                                <div class="search_icon">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 475.084 475.084" style="enable-background:new 0 0 475.084 475.084;" xml:space="preserve">
                                        <g>
                                            <path d="M464.524,412.846l-97.929-97.925c23.6-34.068,35.406-72.047,35.406-113.917c0-27.218-5.284-53.249-15.852-78.087
                                            c-10.561-24.842-24.838-46.254-42.825-64.241c-17.987-17.987-39.396-32.264-64.233-42.826
                                            C254.246,5.285,228.217,0.003,200.999,0.003c-27.216,0-53.247,5.282-78.085,15.847C98.072,26.412,76.66,40.689,58.673,58.676
                                            c-17.989,17.987-32.264,39.403-42.827,64.241C5.282,147.758,0,173.786,0,201.004c0,27.216,5.282,53.238,15.846,78.083
                                            c10.562,24.838,24.838,46.247,42.827,64.234c17.987,17.993,39.403,32.264,64.241,42.832c24.841,10.563,50.869,15.844,78.085,15.844
                                            c41.879,0,79.852-11.807,113.922-35.405l97.929,97.641c6.852,7.231,15.406,10.849,25.693,10.849
                                            c9.897,0,18.467-3.617,25.694-10.849c7.23-7.23,10.848-15.796,10.848-25.693C475.088,428.458,471.567,419.889,464.524,412.846z
                                            M291.363,291.358c-25.029,25.033-55.148,37.549-90.364,37.549c-35.21,0-65.329-12.519-90.36-37.549
                                            c-25.031-25.029-37.546-55.144-37.546-90.36c0-35.21,12.518-65.334,37.546-90.36c25.026-25.032,55.15-37.546,90.36-37.546
                                            c35.212,0,65.331,12.519,90.364,37.546c25.033,25.026,37.548,55.15,37.548,90.36C328.911,236.214,316.392,266.329,291.363,291.358z
                                            "></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Search Panel -->
		<div class="search_panel" v-show="showSearch">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="search_panel_content d-flex flex-row align-items-center justify-content-end">
							<form action="#">
								<input type="text" class="search_input" placeholder="Search" required="required">
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </header>    
</template>

<script>
import {mapGetters} from 'vuex'

export default {     
    data () {
        return {
            navList: [
                { url: "/", name: "Home"},
                { url: "#", name: "Categories",
                children: [
                    {
                    url: "/category",
                    name: "Category"
                    },
                    {
                    url: "/category",
                    name: "Category"
                    },
                    {
                    url: "/category",
                    name: "Category"
                    },
                    {
                    url: "/category",
                    name: "Category"
                    },
                    {
                    url: "/category",
                    name: "Category"
                    }
                ]},
                { url: "/single", name: "Product" },
                { url: "/check", name: "Check Out" },
                { url: "/contact", name: "Contact" }
            ],
            showSearch: false,
            showDropdown: false,
            scrolled: {
                limitPosition: 70,
                height: 130,
                lastPosition: 0
            }                
        }
    },
    computed: {
        ...mapGetters(['cartCount']),   
    },
    methods: {
        handleScroll() {
            if (this.scrolled.lastPosition < window.scrollY && this.scrolled.limitPosition < window.scrollY) {
                this.scrolled.height = 70 + 'px';              
                // move up!
            } 
            
            if (this.scrolled.lastPosition > window.scrollY) {
                this.scrolled.height = 130 + 'px';
                // move down
            }
            
            this.scrolled.lastPosition = window.scrollY;
            // this.scrolled = window.scrollY > 250;
        },
        dropShow() {
            this.showDropdown = !this.showDropdown; 
        },
        dropHide() {
            this.showDropdown =  false;
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener('click', this.dropHide.bind(this));
        
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }        
}
</script>

<style scoped lang="scss">
    header {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: #FFFFFF;

        .header_content {
            height: 130px;
            transition: 0.5s ease all;

            .logo {
                a {
                    cursor: pointer;
                    font-size: 30px;
                    font-weight: 700;
                    color: #1b1b1b;
                    -webkit-transition: all .6s ease;
                    -moz-transition: all .6s ease;
                    -ms-transition: all .6s ease;
                    -o-transition: all .6s ease;
                    transition: all .6s ease;
                }
            }

            .main_nav {
                margin-left: 156px;
                

                ul {
                    margin-bottom: 0;
                } 
                li {
                    display: inline-block;
                    position: relative;

                    &:hover i{
                        fill: #e95a5a;
                        color: #e95a5a;
                    }                   

                    a {
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 600;
                        color: #767676;
                        -webkit-transition: all .6s ease;
                        -moz-transition: all .6s ease;
                        -ms-transition: all .6s ease;
                        -o-transition: all .6s ease;
                        transition: all .6s ease;  

                        &:hover {
                            fill: #e95a5a;
                            color: #e95a5a;
                        }  

                        i {
                            position: absolute;
                            top: 50%;
                            -webkit-transform: translateY(-50%);
                            -moz-transform: translateY(-50%);
                            -ms-transform: translateY(-50%);
                            -o-transform: translateY(-50%);
                            transform: translateY(-50%);
                            left: calc(100% + 3px);
                            font-size: 10px;
                            color: #767676; 
                        }                    
                    }
                }

                & li:not(:last-child) {
                    margin-right: 46px;
                }

                .dropdown {
                    position: absolute;
                    left: 50%;
                    transform: translatex(-50%) rotatex(90deg) scale(0);
                    margin-top: 1.45em;
                    transform-origin: 0 0;
                    background: #FFFFFF;
                    visibility: hidden;
                    opacity: 0;
                    transition: all 200ms linear;                   

                    ul li {
                        padding: 7px 10px;
                        margin: 0 16px;

                        a {
                          &:hover {
                                color: #e95a5a;
                            }  
                        }
                        
                    }

                      

                    &.showDropdown {
                        transform: translatex(-50%);
                        visibility: visible;
                        opacity: 1;
                    }      
                }
            }

            .shopping_cart {
                display: inline-block;

                &:hover a,
                &:hover a div {
                    fill: #e95a5a;
                    color: #e95a5a;
                }

                a {
                    svg {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    vertical-align: sub;
                    -webkit-transition: all .6s ease;
                    -moz-transition: all .6s ease;
                    -ms-transition: all .6s ease;
                    -o-transition: all .6s ease;
                    transition: all .6s ease;
                    }

                    div {
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 14px;
                        font-weight: 500;
                        color: #1b1b1b;
                        margin-left: 13px;
                        -webkit-transition: all .6s ease;
                        -moz-transition: all .6s ease;
                        -ms-transition: all .6s ease;
                        -o-transition: all .6s ease;
                        transition: all .6s ease;
                    }
                }            
            }

            .search {
                display: inline-block;
                margin-left: 51px;
                cursor: pointer;
                -webkit-transform: translateY(-1px);
                -moz-transform: translateY(-1px);
                -ms-transform: translateY(-1px);
                -o-transform: translateY(-1px);
                transform: translateY(-1px);                

                &_icon {
                    width: 13px;
                    height: 13px;
                    -webkit-transition: all .6s ease;
                    -moz-transition: all .6s ease;
                    -ms-transition: all .6s ease;
                    -o-transition: all .6s ease;
                    transition: all .6s ease;

                    &:hover {
                        fill: #e95a5a;
                        color: #e95a5a;
                    }
                }
            }
            
            .hamburger {
                display: none;
                margin-left: 30px;
                cursor: pointer;
                margin-right: 4px;
                -webkit-transform: translateY(2px);
                -moz-transform: translateY(2px);
                -ms-transform: translateY(2px);
                -o-transform: translateY(2px);
                transform: translateY(2px);

                .hamburger i {
                    font-size: 18px;
                    color: #1b1b1b;
                }
            }
        }

        .search_panel {
            display: block;
            left: 0;
            bottom: 0;
            width: 100%;
            background:#e95a5a;
            z-index: -1;
            
            & .active {
                bottom: -80px;
            }
            &_content {
                height: 80px;

                .search_input {
                width: 300px;
                height: 40px;
                border: none;
                outline: none;
                border-radius: 3px;
                padding-left: 20px;
                }
            }        
        }
    }  
</style>
