import {jwtDecode} from "jwt-decode";
import {useTokenStore} from "@/stores/token";

export function getPayloadFromToken(token: string): JwtPayload | null {
    if (token !== null && token !== "" && token !== undefined) {
        return jwtDecode<JwtPayload>(token)
    }

    return null
}

function checkExpToken(exp: number): boolean {
    if (currentUnixTimestamp() > exp) {
        useTokenStore().clearToken()
        return false
    }

    return true
}

function currentUnixTimestamp(): number {
    return Math.floor(Date.now() / 1000)
}

export default function validateToken(token: string): boolean {
    const decodedToken = getPayloadFromToken(token)
    if (decodedToken === null) {
        return false
    }
    return checkExpToken(decodedToken.exp);
}