'use client';


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup_user } from '../feature/slice'; 
import Link from 'next/link';
import axios from 'axios';

export default function SignUp() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerificationChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(signup_user(formData));


    sendVerificationEmail(formData.email);
  };

  const sendVerificationEmail = async (email) => {
    try {
      const response = await axios.post('/user/auth/verify-email', {
        email,
        code: '9955'  
      });

      if (response.status === 200) {
        setIsEmailSent(true);  
      }
    } catch (err) {
      console.error('Verification email sending failed', err);
      setIsEmailSent(false);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();

    if (verificationCode === '9955') {  
      alert('Email verified successfully!');
    } else {
      alert('Invalid verification code!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-2">Sign Up to your account</h2>
        <p className="text-gray-500 text-center mb-6">Please Enter Your Personal Data</p>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block text-gray-700">Full name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-gray-700">Phone number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your phone no" required />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="**********" required />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="**********" required />
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="w-1/2 bg-pink-500 text-white py-2 rounded-md font-semibold" disabled={status === "loading"}>
              {status === "loading" ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>

        {isEmailSent && (
          <form onSubmit={handleVerifyEmail} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Enter Verification Code</label>
              <input type="text" value={verificationCode} onChange={handleVerificationChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter code" required />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md font-semibold">
              Verify Email
            </button>
          </form>
        )}

        <p className="text-center text-gray-600 mt-4">Have an account? <Link href="login" className="text-pink-500">Sign In</Link></p>
      </div>
    </div>
  );
}
