import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../network";
import { USERS_SLICE_ALIAS } from "./constants";

export const fetchUsersAction = createAsyncThunk(
  `${USERS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api().get("/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
