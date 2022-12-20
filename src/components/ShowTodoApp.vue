<template>
    <div>
        <todo-title :text="title"></todo-title>

        <todos-list
            :todos="todos"
            @update-todo="todos[$event].finished = !todos[$event].finished"
            @delete-todo="todos.splice($event, 1)">
        </todos-list>

        <add-todo-btn @toggle-modal="toggleModal"></add-todo-btn>

        <ModalTodoPrompt
            v-if="openedModal"
            :todos="todos"
            :newTodo="newTodo"
            @setNewTodo="newTodo = $event"
            @update-todos="todos = $event"
            @clean-newTodo="newTodo = ''"
            @toggle-modal="toggleModal">
        </ModalTodoPrompt>
    </div>
</template>

<script>
import TodoTitle from "./TodoTitle.vue";
import TodosList from "./TodosList.vue";
import AddTodoBtn from "./AddTodoBtn.vue";
import ModalTodoPrompt from "./ModalTodoPrompt.vue";

export default {
    name: 'ShowTodoApp',
    components: {
        TodoTitle,
        TodosList,
        AddTodoBtn,
        ModalTodoPrompt
    },

    data(){
        return {
            title: 'TODO APP',
            newTodo: '',
            todos: [
                {
                    id: '1WER',
                    content: 'Learn Vue Testing',
                    finishe: false
                }
            ],
            openedModal: false
        }
    },
    methods: {
        toggleModal(){
            this.openedModal = !this.openedModal 
        }
    },
    created(){
        this.$http.get('todos.json')
        .then(res => res.json())
        .then(data => {
            for(let id in data){
            let todo = {
                id,
                content: data[id].content,
                finished: data[id].finished
            }
            this.todos.push(todo)
            }
        })
    }
}
</script>

<style>
  .finished {
    text-decoration: line-through;
  }
</style>