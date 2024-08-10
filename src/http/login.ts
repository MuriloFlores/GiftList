import {useTokenStore} from "@/stores/token";
import router from "@/router";
import {useGuestStore} from "@/stores/guest";

export default async function login(phoneNumber: string): Promise<void> {
    try {
        const response: Response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "phone_number": phoneNumber
            })
        })

        if (!response.ok) {
            if(response.headers.get("Create") !== null) {
                useGuestStore().setPhoneNumberForRegister(phoneNumber);
                await router.push({name: 'register'})
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const loginResponse: LoginResponse = await response.json();

        useTokenStore().setToken(loginResponse.token)
    } catch (error) {
        throw error;
    }


}