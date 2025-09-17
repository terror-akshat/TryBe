import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/sign.png"; // 👈 apna Trybe logo import karo
import axios from "axios";
export default function LoginPage({ setUserDetails }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    identifier: "", // email ya username
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        gmail: form.identifier,
        password: form.password,
      });
      if (response.data.status === true) {
        setUserDetails(response.data.foundUser[0]);
        navigate(`/home/${response.data.foundUser[0]._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-md text-gray-900"
      >
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Trybe Logo" className="w-20 h-auto" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <input
          type="text"
          name="identifier"
          placeholder="Email or Username"
          value={form.identifier}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-100 placeholder-gray-500 focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 rounded-lg bg-gray-100 placeholder-gray-500 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:opacity-90"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
