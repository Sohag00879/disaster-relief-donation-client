import { baseApi } from "../../api/baseApi";

const getAllCommentsApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        allComments: builder.query({
            query : () => ({
                url : '/get-comments',
                method: 'GET',
            }),
            providesTags:['comments']
        })
    }),
})
export const {useAllCommentsQuery} = getAllCommentsApi;