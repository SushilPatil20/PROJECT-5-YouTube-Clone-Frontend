import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for client-side navigation
import { useFormValidation } from "../../validations/useFormValidation";
import { signUpSchema } from "../../validations/signUpSchema";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../services/authServices";
import ButtonLoader from "../ButtonLoader";

const SignUp = () => {
  const { register, handleSubmit, errors } = useFormValidation(signUpSchema);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.avatar && data.avatar[0]) {
      formData.append("avatar", data.avatar[0]);
    }

    try {
      setLoading(true);
      await registerUser(formData);
      toast.success("User registered successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl shadow-gray-400 mx-auto w-11/12 md:w-3/4 lg:w-1/2 mt-8">
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-red-600 mb-6 text-center">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-800">Username</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your username"
            className="w-full px-4 py-2 text-gray-800 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-800">Email</label>
          <input
            type="text"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-gray-900 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
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
              className="w-full px-4 py-2 text-gray-900 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
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
          <label className="block text-gray-800">Avatar (optional)</label>
          <input type="file" {...register("avatar")} accept="image/*" />
          {errors.avatar && (
            <p className="text-red-600">{errors.avatar.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            {loading ? <ButtonLoader text={"Signing Up..."} /> : "Sign Up"}
          </button>
        </div>
      </form>

      <p className="text-center text-gray-800 mt-4">
        Already have an account?
        <Link to="/signin" className="text-red-600 hover:underline ml-1">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
