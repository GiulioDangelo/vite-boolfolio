import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './components/ProjectList.vue';
import ProjectShow from './pages/ProjectShow.vue';
import AppAbout from './pages/AppAbout.vue';
import App404 from './pages/App404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
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
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'page404',
            component: App404,
        }
    ]
    
})

export { router };