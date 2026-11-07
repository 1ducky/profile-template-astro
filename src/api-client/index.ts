import type { ErrorResponse, Response } from "./contract/common";
import { ApiError } from "./error";


const BASE_URL = import.meta.env.PUBLIC_API_URL;

export async function apiRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${BASE_URL}${path}`,
    {
      ...init,
      headers: {
        Accept: "application/json",
        ...init?.headers,
      },
    },
  );

  const body: unknown = await response.json();

  if (!response.ok) {
    throw ApiError.fromResponse(
      body as ErrorResponse,
      response.status,
    );
  }

  const result = body as Response<T>;

  return result.data;
}