import {useTokenStore} from "@/stores/token";

export default async function getPresents() : Promise<Present[]> {
    try {
        const response = await fetch("http://localhost:8080/auth/present", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearear ${useTokenStore().getToken()}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error("Erro ao obter os presentes selecionados:", error);
        throw error; // Rejeita a Promise com o erro capturado
    }
}