import LoginForm from './components/LoginForm.vue'
import CreateUserForm from './components/CreateUserForm.vue'

export const routes = [
    {
        path: '',
        component: LoginForm
    },
    {
        path: '/register',
        component: CreateUserForm
    }
]