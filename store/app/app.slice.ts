import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { sidedrawerOpen: boolean } = {
  sidedrawerOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSideDrawer: (state, action: PayloadAction<boolean>) => {
      state.sidedrawerOpen = action.payload ?? false;
    },
  },
});

export const { openSideDrawer } = appSlice.actions;
