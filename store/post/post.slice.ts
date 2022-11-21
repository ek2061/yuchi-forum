import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  open: boolean;
  form: { title: string; content: string };
} = {
  open: false,
  form: {
    title: "",
    content: "",
  },
};

export const postSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openDialog: (state) => {
      state.open = true;
    },
    closeAndResetDialog: (state) => {
      state.open = initialState.open;
      state.form = initialState.form;
    },
  },
});

export const { openDialog, closeAndResetDialog } = postSlice.actions;
