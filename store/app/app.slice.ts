import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState: {
  sidedrawerOpen: boolean;
  messages: Array<{ status: number; data: { msg: string } }>;
} = {
  sidedrawerOpen: false,
  messages: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSideDrawer: (state, action: PayloadAction<boolean>) => {
      state.sidedrawerOpen = action.payload ?? false;
    },
    pushMessage: (
      state,
      action: PayloadAction<{ status: number; data: { msg: string } }>
    ) => {
      const { status, data } = action.payload;
      state.messages.push({ status, data });
    },
    popMessage: (
      state,
      action: PayloadAction<{
        message: { status: number; data: { msg: string } };
      }>
    ) => {
      const { message } = action.payload;
      state.messages = _.reject(state.messages, message);
    },
  },
});

export const { openSideDrawer, pushMessage, popMessage } = appSlice.actions;
