import {defineStore} from "pinia";

export const useTokenStore = defineStore('auth', () => {
    function setToken(token: string) {
        localStorage.setItem("token", token);
    }

    function getToken(): string {
        return localStorage.getItem("token") ?? ""
    }

    function clearToken() {
        localStorage.removeItem("token")
    }

    return {setToken, getToken, clearToken}
})