import { apiSlice } from "store/api";

const path = "/post";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrievePost: builder.query({
      query: ({ pid }) => ({ url: `${path}/${pid}` }),
      providesTags: (result) => [{ type: "Post", id: result.pid }],
    }),
    listPost: builder.query({
      query: ({ limit }) => ({ url: `${path}?limit=${limit}` }),
      providesTags: () => [{ type: "Post", id: "LIST" }],
    }),
    createPost: builder.mutation({
      query: ({ title, content }) => ({
        url: path,
        method: "POST",
        body: { title, content },
      }),
      invalidatesTags: () => [{ type: "Post" }],
    }),
    editPost: builder.mutation({
      query: ({ pid, title, content }) => ({
        url: `${path}/${pid}`,
        method: "PATCH",
        body: { title, content },
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Post", id: arg.pid }],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useEditPostMutation,
  useListPostQuery,
  useRetrievePostQuery,
} = postApi;
