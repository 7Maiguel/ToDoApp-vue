const app = new Vue({
    el: '#app',
    data: {
        title: 'TODOs',
        todoText: '',
        todos: ['To learn Vue', 'To code all day']
    },
    methods: {
        saveTodo: function(){
            if(this.todoText != ''){
                this.todos.push(this.todoText);
                this.clearInput();

            } else alert('You must write a ToDo');
        },

        deleteTodo: function(item){
            if(confirm('Are you sure of remove this ToDo ?')) this.todos.splice(item, 1);
        },

        clearInput: function(){
            this.todoText = '';
        }
    }
})