import { baseApi } from "../../api/baseApi";

const createVolunteersApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createVolunteer: builder.mutation({
            query : (volunteerData) => ({
                url : '/create-volunteers',
                method: 'POST',
                body:volunteerData
            }),
            invalidatesTags:['volunteers']
        })
    }),
})

export const {useCreateVolunteerMutation} = createVolunteersApi;