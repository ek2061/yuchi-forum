import {
  Action,
  combineReducers,
  configureStore,
  isRejectedWithValue,
  Middleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "./api";
import { appSlice } from "./app";
import { postSlice } from "./post";
import { signinSlice } from "./signin";
import { signupSlice } from "./signup";

const reducer = combineReducers({
  app: appSlice.reducer,
  post: postSlice.reducer,
  signin: signinSlice.reducer,
  signup: signupSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const errorMiddleware: Middleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // do something
  }
  return next(action);
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    errorMiddleware,
    apiSlice.middleware,
    ...getDefaultMiddleware(),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<typeof store>(() => store);
