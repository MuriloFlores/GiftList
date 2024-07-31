import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import validateToken from "@/http/validateToken";
import {useTokenStore} from "@/stores/token";
import {usePresentStore} from "@/stores/presents";
import {useGuestStore} from "@/stores/guest";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {requireAuth: true},
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

router.beforeEach(async (to, from) => {
    if (!validateToken(useTokenStore().getToken()) && to.name !== "login") {
        return {name: 'login'}
    }

    if (to.name !== "login") {
        useGuestStore().setGuest()
        await usePresentStore().setPresent()
    }

    if (to.name === "login" && validateToken(useTokenStore().getToken())) {
        return {name: 'dashboard'}
    }
})

export default router
