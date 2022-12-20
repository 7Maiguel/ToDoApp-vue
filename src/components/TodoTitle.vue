<template>
    <div id="header">
        <h1
            v-garnish:medium.bold.italic="{ font: 'helvetica', color: '#005fe6' }">
            {{ text }}
        </h1>
        <router-link class="sign-out-btn btn btn-primary" to="/">
            <i class="fa-solid fa-right-to-bracket"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'TodoTitle',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .sign-out-btn {
        font-size: 20px;
    }
</style>