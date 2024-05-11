import { baseApi } from "../../api/baseApi";

const getAllDonationsApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        allDonation: builder.query({
            query : () => ({
                url : '/donations',
                method: 'GET',
            }),
            providesTags:['donations']
        })
    }),
})
export const {useAllDonationQuery} = getAllDonationsApi;