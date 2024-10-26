import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation to sign-up page

const Login = () => {
  // Initial state for the form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);

    // Add logic to handle login (send data to the backend)
    // Example: send formData via fetch/axios to your login API
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl shadow-gray-400 mx-auto w-11/12 md:w-3/4 lg:w-1/2  mt-8">
      <h1 className="text-3xl font-semibold text-red-600  mb-6 text-center">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-gray-800">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2  text-gray-100 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-gray-800">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2  text-gray-100 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Message for users who don't have an account */}
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
