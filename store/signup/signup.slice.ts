import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  form: {
    nickname: string;
    account: string;
    password: string;
  };
  policyOpen: boolean;
} = {
  form: {
    nickname: "",
    account: "",
    password: "",
  },
  policyOpen: false,
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
    openPolicy: (state, action: PayloadAction<boolean>) => {
      state.policyOpen = action.payload ?? false;
    },
    resetForm: (state) => {
      state.form = initialState.form;
      state.policyOpen = initialState.policyOpen;
    },
  },
});

export const { setForm, openPolicy, resetForm } = signupSlice.actions;
