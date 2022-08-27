import { createSlice } from "@reduxjs/toolkit";
import { POSTS_SLICE_ALIAS } from "./constants";
import { fetchPostsAction } from "./thunk";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: POSTS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostsAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPostsAction.fulfilled.type]: (state, action) => {
      state.posts = action.payload.filter(
        (item, i) => payload.findIndex((a) => a.userId === item.userId) === i
      );
      state.loading = false;
    },
    [fetchPostsAction.rejected.type]: (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
