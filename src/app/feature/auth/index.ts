import { api } from "../../../lib/api/client";
import type { LoginInput, UserSession } from "./types";



export const authApi = {
    login(input: LoginInput) {
        return api.post<UserSession>("/auth/login", input);
    },

    session() {
        return api.get<UserSession>("/auth/session");
    },

    logout() {
        return api.post<null>("/auth/logout");
    },
};