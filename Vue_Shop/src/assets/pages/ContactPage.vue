<template>
  <main>
    <!-- Home -->
	<section class="home">
		<div class="home_container">
			<div class="home_background" style="background-image:url(./src/assets/images/contact_header.jpg)"></div>
			<div class="home_content_container">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="home_content">
								<div class="breadcrumbs">
									<ul>
										<li><router-link to="/">Home</router-link></li>
										<li>Contact</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact -->	
	<section class="contact">
		<div class="container">
			<div class="row">

				<!-- Get in touch -->
				<div class="col-lg-8 contact_col">
					<div class="get_in_touch">
						<div class="section_title">Get in Touch</div>
						<div class="section_subtitle">Say hello</div>
						<div class="contact_form_container">
							<form action="#" id="contact_form" class="contact_form">
								<div class="row">
									<div class="col-xl-6">
										<!-- Name -->
										<label for="contact_name">First Name*</label>
										<input v-model="$v.firstName.$model" :class="status($v.firstName)" 
                                        type="text" id="contact_name" class="contact_input" required="required">
									</div>
									<div class="col-xl-6 last_name_col">
										<!-- Last Name -->
										<label for="contact_last_name">Last Name*</label>
										<input v-model="$v.lastName.$model" :class="status($v.lastName)" 
                                        type="text" id="contact_last_name" class="contact_input" required="required">
									</div>
								</div>
								<div>
									<!-- Subject -->
									<label for="contact_company">Subject</label>
									<input type="text" id="contact_company" class="contact_input">
								</div>
								<div>
									<label for="contact_textarea">Message*</label>
									<textarea v-model="$v.message.$model" :class="status($v.message)" 
                                    id="contact_textarea" class="contact_input contact_textarea" required="required"></textarea>
								</div>
								<button class="button contact_button"><span>Send Message</span></button>
							</form>
						</div>
					</div>
				</div>

				<!-- Contact Info -->
				<div class="col-lg-3 offset-xl-1 contact_col">
					<div class="contact_info">
						<div class="contact_info_section">
							<div class="contact_info_title">Marketing</div>
							<ul>
								<li>Phone: <span>+53 345 7953 3245</span></li>
								<li>Email: <span>yourmail@gmail.com</span></li>
							</ul>
						</div>
						<div class="contact_info_section">
							<div class="contact_info_title">Shippiing & Returns</div>
							<ul>
								<li>Phone: <span>+53 345 7953 3245</span></li>
								<li>Email: <span>yourmail@gmail.com</span></li>
							</ul>
						</div>
						<div class="contact_info_section">
							<div class="contact_info_title">Information</div>
							<ul>
								<li>Phone: <span>+53 345 7953 3245</span></li>
								<li>Email: <span>yourmail@gmail.com</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="row map_row">
				<div class="col">

					<!-- Google Map -->
					<div class="map">
						<div id="google_map" class="google_map">
							<div class="map_container">
								<div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.756815861973!2d-78.39390868469594!3d37.300896979848496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b25b98c26bb837%3A0xcc6791d136c80247!2sArbor%20Pro%20of%20Virginia%20-%20Tree%20Care%20Service!5e0!3m2!1sen!2sus!4v1581451773723!5m2!1sen!2sus"
                                    width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                                </div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
  </main>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
    data () {
        return {
            firstName: '',
            lastName: '',
            message: ''
        }
    },
    validations: {
        firstName: {
            required,
        },
        lastName: {
            required,
        },
        message: {
            required,
        }
    },
    methods: {
        status(validation) {
            return {
                error: validation.$error,
                dirty: validation.$dirty
            }
        }
    }
}
</script>

<style scoped lang="scss">    
    // Home
    .home {
        width: 100%;
        height: 362px;
        background: #FFFFFF;
        z-index: 2;
        padding-top: 130px;
        padding-left: 60px;
        padding-right: 60px;

        &_background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }
        
        &_container {
            width: 100%;
            height: 100%;

            .home_content_container {
                position: absolute;
                top: 53%;
                left: 0;
                -webkit-transform: translateY(-50%);
                -moz-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                -o-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 100%;

                .home_content {
                    width: 580px;

                    .breadcrumbs {
                        ul {
                            li {
                                display: inline-block;
                                position: relative;
                                font-size: 14px;
                                font-weight: 500;
                                color: #e95a5a;

                                &:not(:last-child)::after {
                                    display: inline-block;
                                    content: '/';
                                    margin-left: 10px;
                                    margin-right: 6px;
                                    color: #FFFFFF;
                                }

                                a {
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: #FFFFFF;
                                    -webkit-transition: all .6s ease;
                                    -moz-transition: all.6s ease;
                                    -ms-transition: all.6s ease;
                                    -o-transition: all.6s ease;
                                    transition: all.6s ease;

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
    }

    // Form
    .contact {
        width: 100%;
        background: #FFFFFF;
        z-index: 2;
        padding-top: 93px;
        padding-bottom: 97px;

        .section_title{
            font-size: 24px;
            font-weight: 600;
            color: #1b1b1b;
        }

        .section_subtitle {
            font-size: 14px;
            font-weight: 400;
            color: #6c6a74;
            margin-top: 3px;
        }

        .contact_form_container {
            width: 100%;
            margin-top: 46px;

            .contact_form {
                & > div:not(:last-child) {
                    margin-bottom: 14px;
                }

                label {
                    font-size: 14px;
                    font-weight: 400;
                    color: #6c6a74;
                }

                .contact_input {
                    width: 100%;
                    height: 52px;
                    background: #f2f4f8;
                    border: 1px solid transparent;
                    outline: none;
                    padding-left: 15px;
                }

                .contact_textarea {
                    height: 197px;
                    padding-top: 15px;
                }

                .contact_button {
                    position: relative;
                    margin-top: 10px;

                    &:after {
                        background: #000;
                    }

                    span {
                        display: block;
                        position: relative;
                        color: #1b1b1b;
                        z-index: 2;
                        -webkit-transition: all .6s ease;
                        -moz-transition: all .6s ease;
                        -ms-transition: all .6s ease;
                        -o-transition: all .6s ease;
                        transition: all .6s ease;
                    }

                    &:hover span {
                        color: #FFFFFF;
                    }
                }
            }
        }

        .contact_info {
            &_section:not(:first-child) {
                margin-top: 74px;
            }

            .contact_info_section {
                .contact_info_title {
                    font-size: 18px;
                    font-weight: 500;
                    color: #1b1b1b;
                }

                ul {
                    margin-top: 46px;

                    li {
                        font-size: 14px;
                        font-weight: 400;
                        color: #1b1b1b;

                        &:not(:last-child) {
                            margin-bottom: 7px;
                        }

                        span {
                            color: #6c6a74;
                            margin-left: 8px;
                        }
                    }
                }
            }
        }

        .map_row {
            margin-top: 98px;

            .google_map {
                width: 100%;
                height: 577px;

                .map_container {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;

                    #map {
                        width: 100%;
                        height: calc(100% + 30px);
                    }
                }
            }
        }
    }

    .dirty {
        border-color: #5A5 !important;
    }

    .dirty:focus {
        outline-color: #8E8 !important;
    }

    .error {
        border-color: red !important;
        background: #FDD;
    }

    .error:focus {
        outline-color: #F99 !important;
    }
</style>

