import { ApiError } from "./error";
import type { ApiResponse, ErrorResponse } from "./types";


interface RequestOptions extends Omit<RequestInit, "body"> {
    body?: unknown;
}

const isServer = typeof window === "undefined"
const SERVER_BASE =
    import.meta.env.API_URL

const API_BASE = isServer ? SERVER_BASE : "/api";

async function request<T>(
    path: string,
    options: RequestOptions = {},
): Promise<ApiResponse<T>> {
    const {
        body,
        headers: customHeaders,
        ...init
    } = options;

    const headers = new Headers(customHeaders);

    headers.set("Accept", "application/json");

    let requestBody: BodyInit | undefined;

    if (body instanceof FormData) {
        requestBody = body;
    } else if (body !== undefined) {
        headers.set("Content-Type", "application/json");
        requestBody = JSON.stringify(body);
    }

    const response = await fetch(
        `${API_BASE}/${path.replace(/^\/+/, "")}`,
        {
            ...init,
            headers,
            body: requestBody,
            credentials: "same-origin",
        },
    );

    const raw = await response.text();

    let payload: unknown;

    try {
        payload = raw ? JSON.parse(raw) : null;
    } catch {
        throw new ApiError("INVALID_RESPONSE", "Invalid Response Json", "", 500);
    }

    if (!response.ok) {
        throw ApiError.fromResponse(
            payload as ErrorResponse,
            response.status
        );
    }

    return payload as ApiResponse<T>;
}

export const api = {
    request,

    get<T>(path: string) {
        return request<T>(path, { method: "GET" });
    },

    post<T>(path: string, body?: unknown) {
        return request<T>(path, {
            method: "POST",
            body,
        });
    },

    patch<T>(path: string, body?: unknown) {
        return request<T>(path, {
            method: "PATCH",
            body,
        });
    },

    delete<T>(path: string) {
        return request<T>(path, {
            method: "DELETE",
        });
    },
};