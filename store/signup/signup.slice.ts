import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  form: {
    nickname: string;
    account: string;
    password: string;
  };
} = {
  form: {
    nickname: "",
    account: "",
    password: "",
  },
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setForm: (state, action) => {
      const { nickname, account, password } = action.payload;
      state.form = {
        nickname: nickname ?? "",
        account: account ?? "",
        password: password ?? "",
      };
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
  },
});

export const { resetForm, setForm } = signupSlice.actions;
