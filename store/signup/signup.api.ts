import { apiSlice } from "store/api";

export const signupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ nickname, account, password }) => ({
        url: "/user/register",
        method: "POST",
        body: { nickname, account, password },
      }),
    }),
  }),
});

export const { useRegisterMutation } = signupApi;
