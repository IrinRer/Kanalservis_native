import { createSlice } from "@reduxjs/toolkit";
import { AUTHORIZATION_SLICE_ALIAS, LOGIN, PASSWORD } from "./constants";

const initialState = {
  auth: "",
  login: LOGIN,
  password: PASSWORD,
  inputLogin: "",
  inputPassword: "",
};

export const authorizationSlice = createSlice({
  name: AUTHORIZATION_SLICE_ALIAS,
  initialState,
  reducers: {
    authorization: (state) => {
      if (
        state.inputLogin === state.login &&
        state.inputPassword === state.password
      ) {
        state.auth = "yes";
      } else {
        state.auth = "no";
      }
    },
    changeInputLogin: (state, action) => {
      state.inputLogin = action.payload;
    },
    changeInputPassword: (state, action) => {
      state.inputPassword = action.payload;
    },
    resetAuthorization: (state) => {
      state.auth = initialState.auth;
      state.inputLogin = initialState.inputLogin;
      state.inputPassword = initialState.inputLogin;
    },
  },
});

export const {
  authorization,
  resetAuthorization,
  changeInputLogin,
  changeInputPassword,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;
