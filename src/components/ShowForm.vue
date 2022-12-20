<template>
    <div class="container">
        <div>
            <h2
                v-garnish:medium.bold.italic="{ font: 'helvetica', color: '#005fe6' }">
                Login
            </h2>
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="username">Username</label>
            <input class="form-control" id="username" type="text" placeholder="Username">
        </div>
        <div>
            <router-link
                style="margin-bottom: 1rem"
                class="btn btn-primary"
                to="/todos">
                Login
            </router-link>
            <br>
            <router-link to="/register">I do not have an account...</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    h2 {
        color: #006eff;
    }
</style>