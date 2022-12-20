<template>
    <button 
        class="add-todo-btn btn-primary btn"
        @click="$emit('toggle-modal')">
            <i class="fa-solid fa-plus"></i>
    </button>
</template>

<script>
export default {
    
}    
</script>

<style>
.add-todo-btn {
    position: fixed;
    bottom: 15px;
    right: 15px;
    font-size: 25px;
    padding: 0.8rem 1.2rem;
}
</style>

