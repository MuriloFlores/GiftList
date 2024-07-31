import {defineStore} from "pinia";
import {getPayloadFromToken} from "@/http/validateToken";
import {useTokenStore} from "@/stores/token";

export const useGuestStore = defineStore('guest', () => {
    function setGuest() {
        if (localStorage.getItem("guest_name") === null || localStorage.getItem("guest") === "") {
            localStorage.setItem("guest_name", getPayloadFromToken(useTokenStore().getToken())?.name ?? "")
            localStorage.setItem("guest_id", getPayloadFromToken(useTokenStore().getToken())?.id ?? "")
        }
    }

    function getGuestName() {
        return localStorage.getItem("guest_name")
    }

    function getGuestId() {
        return localStorage.getItem("guest_id")
    }

    return {setGuest, getGuestName, getGuestId}
})