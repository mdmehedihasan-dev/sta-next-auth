'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login_user } from '../feature/slice'; 
import Link from 'next/link';

export default function AdminLogin() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login_user(formData));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-2">Log in to Admin account</h2>
        <p className="text-gray-500 text-center mb-6">Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="**********" required />
          </div>
          <div className='flex justify-center'>
           <button type="submit" className="w-1/2 bg-pink-500 text-white py-2 rounded-md font-semibold" disabled={status === "loading"}>
            {status === "loading" ? "Logging in..." : "Sign In"}
          </button>
           </div>
          {error && <p className="text-red-500 text-center mt-2">{typeof error === 'string' ? error : error.message || "An error occurred"}</p>}
        </form>
      </div>
    </div>
  );
}
