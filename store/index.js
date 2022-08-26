import { configureStore } from "@reduxjs/toolkit";
import AuthorizationReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    // users: UsersReducer,
    // posts: PostsReducer,
    // photos: PhotosReducer
  },
  // devTools: process.env.NODE_ENV !== "production",
});
