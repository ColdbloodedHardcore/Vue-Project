<template>
    <div class="row">
        <div class="col-lg-3 col-md-3 col-3 post" 
            v-for="post in posts">

            <div class="card">
                <img :src="post.src" class="card-img-top" alt="">

                <div class="card-body">
                    <h5 class="card-title" :title="post.title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.description }}</p>
                    <span class="text-success">{{ post.genre }}</span>
                    <span class="text-danger">{{ post.price }}$</span>

                    <button class="btn btn-primary text-right">Buy Album</button>
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

<style>
    .card {
        height: 700px;
    }

    .card-title {
        height: 50px;
    }

    .post {
        padding: 15px;
    }
</style>
