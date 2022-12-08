import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { appSlice } from "./app";
import { postSlice } from "./post";
import { signupSlice } from "./signup";

const reducer = combineReducers({
  app: appSlice.reducer,
  post: postSlice.reducer,
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
