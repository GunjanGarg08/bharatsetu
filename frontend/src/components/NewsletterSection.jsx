import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import newsletterImage from "../assets/newsletter.png";

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }

    // Simulated success response
    setTimeout(() => {
      toast.success("Thank you for subscribing!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section
      className="py-40"
      style={{ backgroundImage: `url(${newsletterImage})` }}
    >
      <div className="max-w-2xl text-center ml-auto">
        <h2 className="text-5xl font-extrabold text-teal-800 mb-3">Newsletter</h2>
        <p className="text-xl text-gray-700 mb-10">
          Sign up to receive the latest updates.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-5">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-full px-4 py-2 flex items-center shadow-md w-full max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full text-gray-800 focus:outline-none text-lg bg-transparent placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-teal-700 text-white font-semibold rounded-full px-6 py-2 ml-2 hover:bg-teal-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}