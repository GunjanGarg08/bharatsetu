import React, { useState } from 'react';
import { auth } from '../firebase-config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful');
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful");
      navigate('/dashboard');
    } catch (err) {
      alert("Google login failed");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-black mb-2">BharatSetu</h2>
        <p className="text-lg text-center text-gray-600 mb-6">Create your account</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-500 text-sm">---------------- OR CONTINUE WITH ----------------</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-gray-100 hover:bg-blue-200 text-black py-2 rounded transition duration-200 mb-3"
        >
          Sign up with Google
        </button>

        <Link to="/phone-login">
          <button className="w-full bg-gray-100 hover:bg-blue-200 text-black py-2 rounded transition duration-200">
            Sign up with Phone Number
          </button>
        </Link>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}