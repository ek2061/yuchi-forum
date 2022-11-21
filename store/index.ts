import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app";
import { postSlice } from "./post";

const reducer = combineReducers({
  app: appSlice.reducer,
  post: postSlice.reducer,
});

// const errorMiddleware = (api) => (next) => (action) => {
//   if (isRejectedWithValue(action)) {
//     // action.payload = { data: { msg: 'error message' }, status: 400 }
//     api.dispatch({ type: "app/pushMessage", payload: action.payload });
//   }
//   return next(action);
// };

// const middlewareHandler = (getDefaultMiddleware) => {
//   const middlewareList = [errorMiddleware, ...getDefaultMiddleware()];

//   return middlewareList;
// };

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
