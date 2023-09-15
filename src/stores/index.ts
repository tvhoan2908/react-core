import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import UserReducer from "./UserReducer";
import { api } from "../services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(api.middleware);

    return middlewares;
  },
});
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
