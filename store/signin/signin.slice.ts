import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  form: {
    account: string;
    password: string;
  };
} = {
  form: {
    account: "",
    password: "",
  },
};

export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setForm: (state, action) => {
      const { account, password } = action.payload;
      state.form = {
        account: account ?? "",
        password: password ?? "",
      };
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
  },
});

export const { setForm, resetForm } = signinSlice.actions;
