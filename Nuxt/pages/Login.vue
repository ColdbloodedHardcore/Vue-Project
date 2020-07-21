<template>
    <section>      
        <form action="#">
            <h1>Login Page</h1>

            <div class="form-group">
                <input type="text" class="form-control">
            </div>

            <p>
                <nuxt-link to="/">To Home Page</nuxt-link>
            </p>

            <button class="btn btn-primary" type="submit">Login</button>
        </form>
    </section>  
</template>

<script>
export default {
    layout: 'empty'
}
</script>

<style scoped>
    h1 {
        padding-bottom: 1rem;
    }

    form {
        width: 600px;
        margin: 0 auto;
    }
</style>

