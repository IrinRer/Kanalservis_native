import { configureStore } from "@reduxjs/toolkit";
import AuthorizationReducer from "./auth/slice";
import UsersReducer from "./users/slice";
import PostsReducer from "./posts/slice";

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    users: UsersReducer,
    posts: PostsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
