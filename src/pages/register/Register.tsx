import { message } from "antd";
import { useState } from "react";
import { useRegisterMutation } from "../../redux/features/auth/registerApi";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dark = localStorage.getItem('isDark') === 'true';
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const registeredData = {
        name,
        email,
        password,
      };

      const res = await register(registeredData).unwrap();
      message.success(res.message);
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`flex items-center justify-center pt-5 pb-5 ${dark?'bg-neutral-950':'bg-white'}`}>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Sign Up</h1>
              <p className="mt-2 text-gray-500">
                Sign Up below
              </p>
            </div>
            <div className="mt-5">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="relative mt-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="relative mt-6">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  required
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
                  to={'/login'}
                  className="font-semibold text-gray-600 hover:underline hover:text-gray-800 focus:outline-none"
                >
                  Sign in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
