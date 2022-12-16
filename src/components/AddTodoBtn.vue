<template>
    <button 
        class="add-todo-btn btn-primary btn"
        @click="saveTodo">
            <i class="fa-solid fa-plus"></i>
    </button>
</template>

<script>
export default {
    props: ['newTodo', 'todos'],
    methods: {
        saveTodo(){
            if(this.newTodo){
                let todos = this.todos
                todos.push({
                        content: this.newTodo,
                        finished: false
                    })
                this.$emit('update-todos', todos)
                this.$emit('clean-newTodo')
                this.$http.post('todos.json',
                {
                    content: this.newTodo,
                    finished: false
                }
                ).then(res => console.info(`Status Code: ${res.status} (${res.statusText})`))

            } else alert('It couldn´t be added')
        }
    }
}
</script>

<style>
.add-todo-btn {
    position: fixed;
    bottom: 28px;
    right: 28px;
    font-size: 25px;
    padding: 0.8rem 1.2rem;
}
</style>

