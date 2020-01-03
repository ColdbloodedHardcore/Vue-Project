<template>
    <div class="row">
        <div class="col-lg-3 col-md-3 col-3 post" 
            v-for="post in posts">

            <div class="card">
                <img :src="post.src" class="card-img-top" alt="1">

                <div class="card-body">
                    <h5 class="card-title" :title="post.title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.description }}</p>
                    <span class="text-success">{{ post.genre }}</span>

                    <div class="card-price">
                        <span class="text-danger">{{ post.price }}$</span>
                        <button class="btn btn-dark">Add To Cart</button>
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
    .post {
        padding: 15px;   

        .card {
        box-shadow:0px 5px 8px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow:0px 5px 8px 0px rgba(0,0,0,0.5);
        -moz-box-shadow:0px 5px 8px 0px rgba(0,0,0,0.5);

            &-title {
            height: 55px;
            font-size: 18px;
            }

            &-text {
            font-size: 14px;
            }    

            &-price {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            
                .btn {
                    border-radius: 4px;
                } 
            }
        }     
    } 
</style>
