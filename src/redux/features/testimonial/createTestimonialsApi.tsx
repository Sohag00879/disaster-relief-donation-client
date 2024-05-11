import { baseApi } from "../../api/baseApi";

const createTestimonialsApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createTestimonial: builder.mutation({
            query : (testimonialData) => ({
                url : '/create-testimonials',
                method: 'POST',
                body:testimonialData
            }),
            invalidatesTags:['testimonials']
        })
    }),
})

export const {useCreateTestimonialMutation} = createTestimonialsApi;