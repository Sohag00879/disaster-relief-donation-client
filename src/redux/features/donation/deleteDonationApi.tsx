import { baseApi } from "../../api/baseApi";

const deleteDonationApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
       deleteDonation: builder.mutation({
            query : (id) => ({
                url : `/delete-donation/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['donations']
        })
    }),
})
export const {useDeleteDonationMutation} = deleteDonationApi;