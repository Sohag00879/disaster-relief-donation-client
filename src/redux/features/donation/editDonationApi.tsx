import { baseApi } from "../../api/baseApi";

const editDonationApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        editDonation : builder.mutation({
            query : (editInfo) => ({
                url :`/edit-donation/${editInfo.id}`,
                method: 'POST',
                body:editInfo.donationData
            }),
            invalidatesTags:['donations']
        })
    }),
})
export const {useEditDonationMutation} = editDonationApi;