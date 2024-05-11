import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { useCreateVolunteerMutation } from "@/redux/features/volunteer/createVolunteersApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useState,useEffect } from "react";
import { verifyToken } from "@/utils/verifyToken";

type Inputs = {
    name:string;
    email:string;
    phone:string;
    location:string;
    profession:string;
    image:string;
   }

   type TUser = {
    email?:string;
    name?:string;
    exp?:number;
    iat?:number;
  }

const Volunteer = () => { 
  const token = useAppSelector(useCurrentToken)
  const [user,setUser] = useState<TUser | null>(null);
  
  useEffect(()=>{
    if(token){
    const userInfo = verifyToken(token)
    setUser(userInfo)
    }
  },[])
  const userName = user? user.name:'';
  const userEmail = user?user.email:'';

  const dark = localStorage.getItem('isDark') === 'true';
    const navigate = useNavigate();
    const [createVolunteer] = useCreateVolunteerMutation();
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const volunteerData = {
          ...data,
          name:userName || data.name,
          email:userEmail || data.email
        }
        try {
            const res = await createVolunteer(volunteerData).unwrap();
            message.success(res.message);
            navigate('/about-us')
        } catch (err) {
            console.log(err)
        }
      }
  
    return (
      <div className={`flex items-center justify-center pt-5 pb-5 ${dark?'bg-neutral-950':'bg-white'}`}>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
          <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">Sign Up</h1>
                <p className="mt-2 text-gray-500">
                  Sign Up below
                </p>
              </div>
              <div className="mt-5">
           {
            !token && (
              <div>
                     <div>
                  <label>Name</label>
                  <input
                    type="text"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    {...register('name')}
                  />
                </div>
                <div className="relative mt-6">
                  <label>Email</label>
                  <input
                    type="email"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    {...register('email')}
                    
                  />
                </div>
              </div>
            )
           }
                <div className="relative mt-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    {...register('phone')}
                  />
                </div>
                <div className="relative mt-6">
                  <label>Location</label>
                  <input
                    type="text"
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    {...register('location')}
                  />
                </div>
                <div className="relative mt-6">
                  <label>Profession</label>
                  <input
                    type="text"
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    {...register('profession')}
                  />
                </div>
                <div className="relative mt-6">
                  <label>Image</label>
                  <input
                    type="text"
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    {...register('image')}
                  />
                </div>
                <div className="my-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-3 text-white focus:bg-gray-600 focus:outline-none"
                  >
                    Sign up
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Already Have an Account?{" "}
                  <Link
                    to={'/about-us'}
                    className="font-semibold text-gray-600 hover:underline hover:text-gray-800 focus:outline-none"
                  >
                    Visit Volunteer
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Volunteer