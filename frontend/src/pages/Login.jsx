import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center items-center"style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-2 flex items-center">Login</h2>
        <p className="text-gray-500 mb-6">Enter your credentials to access your account.</p>

        <label className="block font-semibold mb-1">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 p-2 px-5 w-full mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block font-semibold mb-1">Your Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-gray-300 p-2 px-5 w-full mb-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 cursor-pointer rounded-3xl w-full hover:size-1.5 ">Login</button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account? <a href="/signup" className="text-blue-600">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
