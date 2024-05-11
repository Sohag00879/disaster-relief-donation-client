import { baseApi } from "../../api/baseApi";

const getAllVolunteersApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        allVolunteers: builder.query({
            query : () => ({
                url : '/get-volunteers',
                method: 'GET',
            }),
            providesTags:['volunteers']
        })
    }),
})
export const {useAllVolunteersQuery} = getAllVolunteersApi;