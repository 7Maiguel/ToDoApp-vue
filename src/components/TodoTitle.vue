<template>
    <h1
        v-garnish.bold.italic="{
            font: 'helvetica',
            color: '#006eff'
        }">
        {{ text }}
    </h1>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>