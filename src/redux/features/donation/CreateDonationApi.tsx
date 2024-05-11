import { baseApi } from "../../api/baseApi";

const createDonationApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createDonation : builder.mutation({
            query : (donationInfo) => ({
                url : '/create-donation',
                method: 'POST',
                body:donationInfo
            }),
            invalidatesTags:['donations']
        })
    }),
})

export const {useCreateDonationMutation} = createDonationApi;