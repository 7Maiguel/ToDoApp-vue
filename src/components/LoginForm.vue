<template>
    <div class="container">
        <div slot="title">
            <h2
                v-garnish:medium.bold.italic="{ font: 'helvetica', color: '#005fe6' }">
                Login
            </h2>
        </div>
        <div slot="elements" class="form-group mt-4 mb-4">
            <label for="username">Username</label>
            <input class="form-control" id="username" type="text" placeholder="Username">
        </div>
        <div slot="button">
            <button class="btn btn-primary">Login</button>
            <router-link
                style="margin-left: 5px;"
                class="btn btn-primary"
                to="/register">
                Create a user
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>