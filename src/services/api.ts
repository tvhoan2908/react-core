import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API, CONSTANT } from "../config";
import { logout } from "../stores/UserReducer";
import { CacheUtils } from "../utils";

const baseQuery = fetchBaseQuery({
  baseUrl: API.API_URL,
  prepareHeaders: (headers: Headers) => {
    // Get Token
    const token = CacheUtils.get(CONSTANT.USER_TOKEN_KEY);
    if (token) headers.set("Authorization", `Bearer ${token}`);

    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    (result.error.status === 401 || (result.error.status == "PARSING_ERROR" && result.error?.originalStatus === 401)) &&
    result.meta?.request.url !== API.API_LOGIN
  ) {
    // try to get a new token
    api.dispatch(logout());
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
