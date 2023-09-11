import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = ({ handleChangeToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [signInFailed, setSignInFailed] = useState(false);
  const [signInErrMessage, setSignInErrMessage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const validation = {
    email: { required: true },
    password: { required: true },
  };

  const signInCustomer = async () => {

    await axios
      .post("http://localhost:5000/user/SignIn", { email, password })
      .then(async(response) => {
        const cart =await axios.post("http://localhost:5000/cart/addCart"); 
        localStorage.setItem("cartId",cart.data.data.newCart._id);  
        handleChangeToken(response.data.token);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data === "Incorrect password!") {
          setSignInErrMessage(err.response.data);
          setSignInFailed(true);
        } else {
          setSignInErrMessage(err.response.data);
          setSignInFailed(true);
        }
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(signInCustomer)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xl font-extrabold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", validation.email)}
                  type="email"
                  autoComplete="email"
                  className=" w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {errors?.email?.type === "required" && (
                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                  <p>Email is required !</p>
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xl font-extrabold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="Password"
                  {...register("password", validation.password)}
                  type="Password"
                  autoComplete="Password"
                  className=" w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {errors?.password?.type === "required" && (
                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                  <p>Password is required !</p>
                </div>
              )}
            </div>
            <Link to="/SignUp">
              <button className="text-sm font-extrabold text-blue">
                create a new account ?
              </button>
            </Link>
            {signInFailed && (
              <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                <p>{signInErrMessage}</p>
              </div>
            )}
            <div>
              <input
                type="submit"
                className="flex w-full justify-center cursor-pointer rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
