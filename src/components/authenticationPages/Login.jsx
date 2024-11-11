import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../validations/useFormValidation";
import { signInSchema } from "../../validations/signInSchema";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ButtonLoader from "../ButtonLoader";
import { loginUser } from "../../services/authServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slice/authSlice";

const Login = () => {
  const { register, handleSubmit, errors } = useFormValidation(signInSchema);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (credentials) => {
    try {
      setLoading(true);
      setServerError(null);
      const { token, user, serverError } = await loginUser(credentials);
      if (serverError) {
        return setServerError(serverError);
      }
      dispatch(loginSuccess({ token, user }));
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      setLoading(false);
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl shadow-gray-400 mx-auto w-11/12 md:w-3/4 lg:w-1/2  mt-8">
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-red-600  mb-6 text-center">
        Sign In
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-800">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full px-4 py-2  text-gray-900 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-800">Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2  text-gray-900 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
              autoComplete="true"
            />
            <p
              className="cursor-pointer absolute right-2 top-2 text-gray-600"
              onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            >
              {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </p>
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <p className="text-red-600 mb-2">{serverError && serverError}</p>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            {loading ? <ButtonLoader text={"Signing In..."} /> : "Sign In"}
          </button>
        </div>
      </form>

      <p className="text-center text-gray-800 mt-4">
        Don't have an account?
        <Link to="/signup" className="text-red-600 hover:underline ml-1">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
