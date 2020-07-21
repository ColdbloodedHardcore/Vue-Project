<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/about">About</nuxt-link>
                </li>  
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/users">Users</nuxt-link>
                </li>  
                 <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/login">Login</nuxt-link>
                </li>  
            </ul>  
        </div>
        </div>
    </nav>
</template>