import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for client-side navigation
import { useFormValidation } from "../../validations/useFormValidation";
import { signUpSchema } from "../../validations/signUpSchema";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SignUp = () => {
  const { register, handleSubmit, errors } = useFormValidation(signUpSchema);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl shadow-gray-400 mx-auto w-11/12 md:w-3/4 lg:w-1/2 mt-8">
      <h1 className="text-3xl font-semibold text-red-600 mb-6 text-center">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <div>
          <label className="block text-gray-800">Username</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Enter your username"
            className="w-full px-4 py-2 text-gray-800 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
          />
          {errors.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
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
            Sign Up
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
