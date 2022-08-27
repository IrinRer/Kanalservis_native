import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../network";
import { POSTS_SLICE_ALIAS } from "./constants";

export const fetchPostsAction = createAsyncThunk(
  `${POSTS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api().get("/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
