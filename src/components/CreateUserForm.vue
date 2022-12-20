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
        <div style="margin-bottom: 1rem;" slot="button">
            <button class="btn btn-primary">Create</button>
        </div>
        <router-link to="/">I have an account</router-link>
    </div>
</template>

<script>
export default {

}
</script>