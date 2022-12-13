import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.YUCHI_API,
  prepareHeaders: (headers) => {
    const access_token = window.sessionStorage.getItem("access_token");
    if (access_token) headers.set("Authorization", `Bearer ${access_token}`);
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Post", "Comment"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
