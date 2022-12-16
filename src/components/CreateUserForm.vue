<template>
    <div class="container">
        <h2
            v-garnish:medium.bold.italic="{ font: 'helvetica', color: '#005fe6' }">
            Create User
        </h2>
        <div slot="elements" class="form-group mt-4 mb-4">
            <label for="username">Username</label>
            <input class="form-control" id="username" type="text" placeholder="New username...">
        </div>
        <div slot="button">
            <button class="btn btn-primary">Create</button>
            <router-link
                style="margin-left: 5px;"
                class="btn btn-primary"
                to="/">
                Login
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>