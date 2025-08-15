import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        navigate("/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-2 flex items-center">Create Account</h2>
        <p className="text-gray-500 mb-6">Fill in your details to sign up for an account.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 px-5 w-full mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 px-5 w-full mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 px-5 w-full mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <label className="block font-semibold mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 p-2 px-5 w-full mb-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 cursor-pointer rounded-3xl w-full hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
