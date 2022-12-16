<template>
  <div id="app" class="container mt-5">
    <component :is="selectedComponent"></component>

    <todo-title :text="title"></todo-title>

    <todo-prompt
      :newTodo="newTodo"
      @setNewTodo="newTodo = $event">
    </todo-prompt>

    <todos-list
      :todos="todos"
      @delete-todo="todos.splice($event, 1)">
    </todos-list>

    <add-todo-btn
      :todos="todos"
      :newTodo="newTodo"
      @update-todos="todos = $event"
      @clean-newTodo="newTodo = ''">
    </add-todo-btn>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TodoTitle from "./components/TodoTitle.vue";
import TodoPrompt from "./components/TodoPrompt.vue";
import TodosList from "./components/TodosList.vue";
import AddTodoBtn from "./components/AddTodoBtn.vue";
import LoginForm from "./components/LoginForm.vue";
import CreateUserForm from "./components/CreateUserForm.vue";

export default {
  components: {
    TodoTitle,
    TodoPrompt,
    TodosList,
    AddTodoBtn,
    LoginForm,
    CreateUserForm
  },

  data(){
    return {
      title: 'TODO APP',
      newTodo: '',
      todos: [],
      selectedComponent: ''
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
