import { apiSlice } from "store/api";

export const signinApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ account, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { account, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = signinApi;
