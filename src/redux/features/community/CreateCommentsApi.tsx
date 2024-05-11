import { baseApi } from "../../api/baseApi";

const createCommentsApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createComments: builder.mutation({
            query : (commentsData) => ({
                url : '/create-comments',
                method: 'POST',
                body:commentsData
            }),
            invalidatesTags:['comments']
        })
    }),
})

export const {useCreateCommentsMutation} = createCommentsApi;