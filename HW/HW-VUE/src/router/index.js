import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddpostView from '@/views/AddpostView.vue';
import LoginView from '@/views/LoginView.vue';
import SignupView from '@/views/SignupView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/addpost',
        name: 'AddPost',
        component: AddpostView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignupView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
