import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useCreateTestimonialMutation } from "@/redux/features/testimonial/createTestimonialsApi";
import { useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import {message } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title:string;
  testimonial: string;
};
type TUser = {
  email?: string;
  name?: string;
  exp?: number;
  iat?: number;
};

const CreateTestimonaials = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<Inputs>();
  const token = useAppSelector(useCurrentToken) as string;
  const user:TUser = verifyToken(token);
  const [createTestimonial] = useCreateTestimonialMutation();

  const OnSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email } = user;
    const TestimonialsData = {
      ...data,
      name,
      email,
    };
    try {
      const res = await createTestimonial(TestimonialsData).unwrap();
      message.success(res.message);
      reset();
        navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="sm:w-full md:w-[50%] mx-auto">
      <div className="px-3 my-2">
      <input
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            placeholder="Type Your Title"
            required
            {...register('title')}
          />
       <textarea
            className="mt-5 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            placeholder="Type Your Message"
            required
            {...register('testimonial')}
          ></textarea>
      </div>

      <div className="w-full flex justify-end px-3">
      <button type="submit" className="btn btn:hover">Submit</button>
      </div>
    </form>
  );
};

export default CreateTestimonaials;
