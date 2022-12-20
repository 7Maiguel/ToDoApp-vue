<template>
    <div class="modal-bg">
        <div class="my-modal">
            <div class="header-modal">
                <h5 v-garnish.bold="{font: 'helvetica', color: '#005fe6'}">CREATE TODO</h5>
            </div>
            <div class="content-modal">
                <div class="modal-input">
                    <label for="todo-input" class="form-label">Type a ToDo...</label>
                    <input
                    id="todo-input"
                    type="text"
                    class="form-control"
                    placeholder="To learn Vue..."
                    :value="newTodo"
                    @keyup="typeTodo">
                </div>
                <div class="modal-buttons">
                    <button class="btn btn-success" @click="saveTodo">Add</button>
                    <button class="btn btn-primary" @click="closeModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['newTodo', 'todos'],    
    methods: {
        saveTodo(){
            if(this.newTodo){
                let todos = this.todos
                this.$http.post('todos.json',
                {
                    content: this.newTodo,
                    finished: false
                })
                .then(res => {
                    todos.push({
                        id: res.body.name,
                        content: this.newTodo,
                        finished: false
                    })
                    this.$emit('update-todos', todos)
                    this.$emit('clean-newTodo')
                    this.$emit('toggle-modal')
                    console.info(`Create Request - Status code: ${res.status} (${res.statusText})`)
                })
            } else alert('It couldn´t be added')
        },

        typeTodo(e){
            this.$emit('setNewTodo', e.target.value)
        },

        closeModal(){
            this.$emit('clean-newTodo')
            this.$emit('toggle-modal')
        }
    }
}
</script>

<style scoped>
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100vh;
    }

    .my-modal {
        width: 80%;
        height: 30vh;
        background-color: #fff;
        border: 2px solid #005fe6;
        border-radius: 15px;
        padding: 1rem;
        margin: 5rem auto;
    }

    .content-modal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 25px;
        height: 65%;
    }

    .modal-buttons {
        width: 42%;
        display: flex;
        justify-content: space-between;
    }
</style>