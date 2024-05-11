import { baseApi } from "../../api/baseApi";

const getSingleDonationApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
       singleDonation: builder.query({
            query : (id) => ({
                url : `/single-donation/${id}`,
                method: 'GET',
            })
        })
    }),
})
export const {useSingleDonationQuery} = getSingleDonationApi;