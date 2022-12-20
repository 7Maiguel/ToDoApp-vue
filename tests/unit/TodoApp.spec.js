import { mount } from "@vue/test-utils";
import TodoApp from '@/components/ShowTodoApp.vue'

describe('TodoApp', () => {
    const wrapper = mount(TodoApp)
    const todo = wrapper.get('[data-test="todo"]')

    console.log(todo)
})