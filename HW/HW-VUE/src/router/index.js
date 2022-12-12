import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddpostView from '@/views/AddpostView.vue';
import LoginView from '@/views/LoginView.vue';
import SignupView from '@/views/SignupView.vue';
import ContactView from '@/views/ContactView.vue';
import auth from "../../auth";
import APostView from "@/views/APostView.vue";

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        },
    },
    {
        path: '/addpost',
        name: 'AddPost',
        component: AddpostView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        },
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
    },
    {
        path: '/post/:id',
        name: 'A post',
        component: APostView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        },
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})




export default router;
