import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import App from './App.vue'
import Main from '@/stories/Views/Main.vue'
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
const app = createApp(App) 
app.use(router);
app.mount('#app')
