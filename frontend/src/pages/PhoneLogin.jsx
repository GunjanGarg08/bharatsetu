import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function PhoneLogin() {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {},
      });
    }
  };

  const handleSendOtp = async () => {
    if (!phone) return alert('Please enter a phone number');
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const result = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      alert('OTP sent successfully');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || !confirmationResult) return alert('Enter OTP correctly');
    try {
      await confirmationResult.confirm(otp);
      alert('Phone login successful');
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-black mb-2">BharatSetu</h2>
        <p className="text-lg text-center text-gray-600 mb-6">Login with Phone Number</p>

        <div className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-700 text-sm">+91</span>
            <input
              type="tel"
              maxLength="10"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              className="w-full p-2 outline-none"
            />
          </div>

          {!otpSent && (
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Send OTP
            </button>
          )}

          {otpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
              >
                Verify OTP
              </button>
            </>
          )}

          <p className="mt-4 text-sm text-center text-gray-600">
            Go back to <Link to="/login" className="text-blue-600 hover:underline">Login</Link> or <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}