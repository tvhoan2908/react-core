import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../@types";
import { CacheUtils } from "../utils";
import { userApi } from "../services/user";
import { CONSTANT } from "../config";

interface IUserState {
  user: IUser;
  authenticated: boolean;
}

const initialState: IUserState = {
  user: {} as IUser,
  authenticated: !!CacheUtils.get(CONSTANT.USER_TOKEN_KEY),
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: IUserState, action: UserPayload) => {
      state.user = action.payload.user!;
      state.authenticated = true;
    },
    logout: (state: IUserState) => {
      CacheUtils.clearAll();
      state.user = {} as IUser;
      state.authenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
      state.authenticated = true;
      state.user = action.payload!;
    });
  },
});

export const { setCredentials, logout } = slice.actions;

type UserPayload = {
  payload: Partial<IUserState>;
};
export default slice.reducer;
