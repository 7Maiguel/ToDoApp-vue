<template>
    <div class="mb-3">
        <label for="todo-input" class="form-label">Type a ToDo...</label>
        <input
        id="todo-input"
        type="text"
        class="form-control"
        placeholder="To learn Vue..."
        :value="newTodo"
        @keyup="typeTodo">
    </div>
</template>

<script>
export default {
    props: ['newTodo'],
    methods: {
        typeTodo(e){
            this.$emit('setNewTodo', e.target.value)
        }
    }
}
</script>