import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import validateToken from "@/http/validateToken";
import {useTokenStore} from "@/stores/token";
import {usePresentStore} from "@/stores/presents";
import {useGuestStore} from "@/stores/guest";
import Register from '@/views/Register.vue';

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
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})

router.beforeEach(async (to, from) => {
    const token = useTokenStore().getToken()
    const isValidate = validateToken(token)

    if (to.name === "register") {
        return true
    }

    if (!isValidate && to.name !== "login") {
        return {name: "login"}
    }

    if (to.name !== "login" && to.name !== "register") {
        useGuestStore().setGuest()
        await usePresentStore().setPresent()
    }

    if (to.name === "login" && isValidate) {
        return {name: 'dashboard'}
    }

})

export default router
