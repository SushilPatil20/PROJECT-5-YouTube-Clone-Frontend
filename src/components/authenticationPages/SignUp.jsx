import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for client-side navigation

const SignUp = () => {
  // Initial state for the form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null, // Avatar will now be a file, so initialize it as null
  });

  // Handle input changes for text fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      avatar: e.target.files[0], // File input returns a FileList, so grab the first file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // FormData preparation to send to the backend
    const formToSubmit = new FormData();
    formToSubmit.append("username", formData.username);
    formToSubmit.append("email", formData.email);
    formToSubmit.append("password", formData.password);
    if (formData.avatar) {
      formToSubmit.append("avatar", formData.avatar);
    }

    // Example: Send formToSubmit via fetch/axios
    // fetch("/api/signup", {
    //   method: "POST",
    //   body: formToSubmit,
    // });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl shadow-gray-400 mx-auto w-4/5 md:w-1/3 mt-8">
      <h1 className="text-3xl font-semibold text-red-600 mb-6 text-center">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Field */}
        <div>
          <label className="block text-gray-800">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-100 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-800">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-100 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
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
            className="w-full px-4 py-2 text-gray-100 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
            required
            autoComplete="true"
          />
        </div>

        {/* Avatar File Field */}
        <div>
          <label className="block text-gray-800">Avatar (optional)</label>
          <input
            type="file"
            name="avatar"
            accept="image/*" // Only accept image files
            onChange={handleFileChange}
            className="w-full px-4 py-2 text-gray-100 border focus:border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Create Account
          </button>
        </div>
      </form>

      {/* Message for users who already have an account */}
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
