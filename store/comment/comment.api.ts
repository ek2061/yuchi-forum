import { apiSlice } from "store/api";

const path = "/comment";

export const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listComment: builder.query({
      query: ({ pid, limit }) => ({ url: `${path}?pid=${pid}&limit=${limit}` }),
      providesTags: () => [{ type: "Comment", id: "LIST" }],
    }),
    createComment: builder.mutation({
      query: ({ uid, pid, content }) => ({
        url: path,
        method: "POST",
        body: { uid, pid, content },
      }),
      invalidatesTags: () => [{ type: "Comment" }],
    }),
    editComment: builder.mutation({
      query: ({ cid, uid, content }) => ({
        url: `${path}/${cid}`,
        method: "PUT",
        body: { uid, content },
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Comment", id: arg.cid }],
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useEditCommentMutation,
  useListCommentQuery,
} = commentApi;
