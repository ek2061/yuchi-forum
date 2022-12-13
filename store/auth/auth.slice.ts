import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { signinApi } from "store/signin";

const initialState: {
  isAuthenticated: "Y" | "N";
  uid: string;
  nickname: string;
  access_token: string;
  refresh_token: string;
  expire_ts: number | string;
} = {
  isAuthenticated: "N",
  uid: "",
  nickname: "",
  access_token: "",
  refresh_token: "",
  expire_ts: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    if (typeof window === "undefined") return initialState;

    const state = { ...initialState, ...window.sessionStorage };
    state.isAuthenticated === "Y" ? "Y" : "N";
    return state;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      signinApi.endpoints.login.matchFulfilled,
      (state, action) => {
        window.sessionStorage.setItem("isAuthenticated", "Y");
        state.isAuthenticated = "Y";

        const { token } = action.payload;
        const decode: {
          exp: number;
          iat: number;
          nickname: string;
          uid: string;
        } = jwt_decode(token);

        window.sessionStorage.setItem("uid", decode.uid ?? "");
        window.sessionStorage.setItem("nickname", decode.nickname ?? "");
        window.sessionStorage.setItem("access_token", token ?? "");
        window.sessionStorage.setItem("expire_ts", String(decode.exp));
      }
    );
    builder.addMatcher(signinApi.endpoints.login.matchRejected, () => {
      window.sessionStorage.clear();
    });
  },
});
