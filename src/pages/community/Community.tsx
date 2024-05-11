import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useCreateCommentsMutation } from "@/redux/features/community/CreateCommentsApi";
import { useAllCommentsQuery } from "@/redux/features/community/GetAllCommunityApi";
import { useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { message } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  comment: string;
};
type TUser = {
  email?: string;
  name?: string;
  exp?: number;
  iat?: number;
};

type TComment = {
  _id: string;
  comment: string;
  name: string;
  email: string;
  time: number;
}

const Community = () => {
  const dark = localStorage.getItem("isDark") === "true";
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<Inputs>();
  const token = useAppSelector(useCurrentToken) as string;
  const user: TUser = verifyToken(token);
  const [createComments] = useCreateCommentsMutation();
  const { data } = useAllCommentsQuery(undefined);

  const OnSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email } = user;
    const commentsData = {
      ...data,
      name,
      email,
    };
    try {
      const res = await createComments(commentsData).unwrap();
      message.success(res.message);
      reset();
      navigate("/community");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`pt-5 pb-5 ${dark ? "bg-neutral-950" : "bg-white"}`}>
      <div
        className={`max-w-full rounded-lg border p-2 my-4 mx-6 overflow-x-hidden ${
          dark ? "bg-[#1A1D2B] text-white" : "bg-white"
        }`}
      >
        <h1
          className={`text-4xl text-center pt-[20px] ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Community gratitude wall{" "}
        </h1>

        <form className="w-full" onSubmit={handleSubmit(OnSubmit)}>
          <div className="flex flex-col">
            {data?.data?.map((item:TComment, i:number) => (
              <div className="border rounded-md p-3 ml-3 my-3" key={i}>
                <div className="flex gap-3 items-center">
                  <h3 className="font-bold">{item.name}</h3>
                </div>

                <p
                  className={`text-gray-600 mt-2 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  {item.comment}
                </p>
                <p>{new Date(item.time).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="w-full px-3 my-2">
            <textarea
              className={`rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium focus:outline-none  placeholder-dark-700 ${
                dark ? "bg-[#1A1D2B] focus:bg-white text-black" : "bg-dark-100 "
              }`}
              placeholder="Type Your Comment"
              required
              {...register("comment")}
            ></textarea>
          </div>

          <div className="w-full flex justify-end px-3">
            <button type="submit" className="btn btn:hover">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Community;
