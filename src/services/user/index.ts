import { IBaseResponse, ILoginRequest, ILoginResponse, IUser } from "../../@types";
import { API } from "../../config";
import { api } from "../api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IBaseResponse<ILoginResponse>, ILoginRequest>({
      query: (credentials) => ({
        url: API.API_LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query<IUser, null>({
      query: () => ({ url: API.API_GET_USER_INFO }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetUserQuery, useLoginMutation } = userApi;
