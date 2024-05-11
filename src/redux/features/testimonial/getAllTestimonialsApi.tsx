import { baseApi } from "../../api/baseApi";

const getAllTestimonialsApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        allTestimonials: builder.query({
            query : () => ({
                url : '/get-testimonials',
                method: 'GET',
            }),
            providesTags:['testimonials']
        })
    }),
})
export const {useAllTestimonialsQuery} = getAllTestimonialsApi;