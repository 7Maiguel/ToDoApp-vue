import ShowForm from './components/ShowForm.vue'
import CreateUserForm from '@/components/CreateUserForm.vue'
import ShowTodoApp from './components/ShowTodoApp.vue'

export const routes = [
    { path: '', component: ShowForm, name: 'ShowForm'},
    { path: '/register', component: CreateUserForm, name: 'CreateUserForm' },
    { path: '/todos', component: ShowTodoApp, name: 'ShowTodoApp' }
]