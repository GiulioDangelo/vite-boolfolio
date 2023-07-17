import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './components/ProjectList.vue';
import ProjectShow from './pages/ProjectShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectShow,
        }
    ]
    
})

export { router };