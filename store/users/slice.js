import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersAction } from "./thunk";
import { USERS_SLICE_ALIAS } from "./constants";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: USERS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsersAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsersAction.fulfilled.type]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [fetchUsersAction.rejected.type]: (state, action) => {
      state.users = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
