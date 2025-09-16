import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sign.png"; // 👈 apna Trybe logo import karo

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    dob: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Signup Successful 🚀");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white">
      {/* 👕 Background clothing emojis pattern */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center text-6xl opacity-5 pointer-events-none">
        👕 👗 👟 👜 👒
      </div>

      {/* Signup Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Trybe Logo" className="w-20 h-auto" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Unique Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* DOB */}
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
