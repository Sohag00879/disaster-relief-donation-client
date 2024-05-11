import { baseApi } from "../../api/baseApi";

const createUserDonationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUserDonation: builder.mutation({
      query: (donationInfo) => ({
        url: `/user-donation/${donationInfo.id}`,
        method: "PUT",
        body: donationInfo.donationData,
      }),
      invalidatesTags:['donations']
    }),
  }),
});

export const { useCreateUserDonationMutation } = createUserDonationApi;
