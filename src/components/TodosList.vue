<template>
    <ul id="todos-list">
        <div
            class="todo-item"
            v-for="(todo, index) of todos"
            :key="todo.id">
            <li :class="{finished : todo.finished}" data-test="todo">{{ todo.content | ellipsis }}</li>
            <div class="todo-buttons">
                <button
                    id="check-todo-btn"
                    class="btn btn-success btn-sm"
                    @click="checkTodo(index)">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button
                    id="delete-todo-btn"
                    class="btn btn-danger btn-sm"
                    @click="deleteTodo(index)">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    </ul>
</template>

<script>
export default {
    props: ['todos'],
    filters: {
        ellipsis: (text) => text.length > 35 ? `${text.substring(0,35)}...` : text
    },
    methods: {
        checkTodo(index){
            this.$http.patch(`todos/${this.todos[index].id}.json`,{finished: !this.todos[index].finished})
                .then(res => console.info(`Patch Request - Status Code: ${res.status} (${res.statusText})`))
            this.$emit('update-todo', index)
        },

        deleteTodo(index){
            this.$http.delete(`todos/${this.todos[index].id}.json`)
                .then(res => console.info(`Delete Request - Status Code: ${res.status} (${res.statusText})`))
            this.$emit('delete-todo', index)
        }
    }
}
</script>

<style scoped>
    #todos-list{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin-top: 1.5rem;
    }

    .todo-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 18px;
        align-items: center;
        margin-bottom: 5px;
        background-color: #eee;
        padding: 12px;
    }

    .todo-buttons {
        width: 70px;
        display: flex;
        justify-content: space-between;
    }

    .todo-buttons button {
        font-size: 18px;
    }

    #check-todo-btn {
        padding: 1px 6px;
    }

    #delete-todo-btn {
        padding: 1px 9px;
    }

    .finished {
        color: #00b100;
        text-decoration: line-through;
    }
</style>