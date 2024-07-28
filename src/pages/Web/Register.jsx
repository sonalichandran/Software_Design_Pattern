// src/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div className=" flex items-center pl-80 h-screen">
      <div className="p-8 rounded-lg shadow-sm shadow-white max-w-sm w-full border border-black ">
        <h2 className="text-2xl font-bold mb-6  flex items-center justify-center">Register</h2>
        <form id="registerForm" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 mb-5 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        <div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-400 border border-white text-white font-semibold rounded-md shadow-sm hover:bg-white hover:text-black  focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-white focus:text-black">
            
            Register
          </button>
              </div>
              <div className="mt-4 flex justify-center items-center">
          <p>Already having an account?<a href="/login" id="registerLink">Login</a></p>
          </div>
        </form>
      </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotvsSVsktQNlZs4kbv-7GbHuEaSs3d058cg&s" className="pl-60 h-80"></img>
    </div>
  );
};

export default Register;
