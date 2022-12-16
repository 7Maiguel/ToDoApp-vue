import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({routes, mode: 'history'})
Vue.http.options.root = 'https://todo-app-37a6d-default-rtdb.firebaseio.com'
Vue.config.productionTip = false

Vue.directive('garnish', {
  bind(el, binding){
    el.style.fontFamily = binding.value.font
    el.style.color = binding.value.color
    
    if(binding.modifiers['bold']) el.style.fontWeight = 'bold'

    if(binding.modifiers['italic']) el.style.fontStyle = 'italic'

    if(binding.arg == 'small') el.style.fontSize = '14px'
    else if(binding.arg == 'medium') el.style.fontSize = '36px'
    else if(binding.arg == 'big') el.style.fontSize = '60px'
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
