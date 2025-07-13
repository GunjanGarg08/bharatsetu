import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import aiChatbot from "../assets/ai-chatbot.png";
import multilingual from "../assets/multilingual.png";
import docSimplify from "../assets/document-simplification.png";
import regionalAdvice from "../assets/regional-advice.png";
import signupImg from "../assets/signup.png";
import legalInfo from "../assets/legal-info.png";
import locateServices from "../assets/locate-services.png";
import robotIcon from "../assets/robot.png";
import languageIcon from "../assets/language.png";
import docIcon from "../assets/doc.png";
import mobileIcon from "../assets/mobile.png";
import FAQSection from "../components/FAQSection";
import NewsletterSection from "../components/NewsletterSection";

import {
  FaShieldAlt,
  FaMobileAlt,
  FaUserCheck,
  FaComments,
  FaGavel,
  FaGlobeAsia,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#a3e5de] min-h-screen flex flex-col md:flex-row items-center px-8 py-10 md:py-30">
        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight ml-8">
            Empowering Citizens with AI Legal Assistance
          </h1>
          <p className="text-lg text-gray-800 max-w-xl ml-8">
            Access legal support and resources quickly and efficiently through
            our AI-driven platform.
          </p>
          <Link
            to="/signup"
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-3 rounded-lg ml-8 text-lg"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={heroImg} alt="Hero Banner" className="w-full max-w-xl" />
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 mb-3 text-center bg-[#f7fdfd]">
        <h2 className="text-6xl font-bold text-teal-700 mb-2">Features</h2>
        <p className="mt-5 mb-12 text-gray-600 text-2xl">
          Explore AI tools and services for fast, reliable, and multilingual
          legal help
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-[#daf6f4] w-60 px-4 py-6 rounded-lg shadow-md">
            <img src={aiChatbot} alt="Chatbot" className="h-40 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AI Chatbot <br /> Assistance
            </h3>
            <p className="text-lg text-gray-700 leading-snug">
              Chat with AI in multiple languages for quick legal help.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#daf6f4] w-60 px-4 py-6 rounded-lg shadow-md">
            <img
              src={multilingual}
              alt="Multilingual"
              className="h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Multilingual <br /> Legal OS
            </h3>
            <p className="text-lg text-gray-700 leading-snug">
              Ask in your language and get simplified legal answers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#daf6f4] w-60 px-4 py-6 rounded-lg shadow-md">
            <img
              src={docSimplify}
              alt="Documents"
              className="h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Document <br /> Simplification
            </h3>
            <p className="text-lg text-gray-700 leading-snug">
              Upload legal docs to receive simplified explanations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#daf6f4] w-60 px-4 py-6 rounded-lg shadow-md">
            <img
              src={regionalAdvice}
              alt="Region"
              className="h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Regional <br /> Legal Advice
            </h3>
            <p className="text-lg text-gray-700 leading-snug">
              Get legal aid based on your region and local needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 pt-5 bg-white">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-14">
          Why Choose BharatSetu?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Secure & Confidential */}
          <div className="p-8 bg-white rounded-xl shadow-md text-center">
            <FaShieldAlt className="text-teal-600 text-8xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure & Confidential
            </h3>
            <p className="text-gray-600 text-md">
              Your data is safely encrypted. Every complaint is handled with
              strict privacy.
            </p>
          </div>

          {/* Verified Legal Routing */}
          <div className="p-8 bg-white rounded-xl shadow-md text-center">
            <FaUserCheck className="text-teal-600 text-8xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Verified Legal Routing
            </h3>
            <p className="text-gray-600 text-md">
              We connect complaints only to trusted legal bodies or NGOs.
            </p>
          </div>

          {/* Simple & Intuitive */}
          <div className="p-8 bg-white rounded-xl shadow-md text-center">
            <FaMobileAlt className="text-teal-600 text-8xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Simple & Intuitive
            </h3>
            <p className="text-gray-600 text-md">
              Easily file issues, follow up, and get help with minimal steps.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-25 px-4 text-center mb-5">
        <h2 className="text-6xl font-bold text-teal-700 mb-2">How It Works</h2>
        <p className="text-gray-700 text-2xl mb-12 mt-5">
          Create an account to start chatting with our AI chatbot
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Step 1 */}
          <div>
            <img
              src={signupImg}
              alt="Sign Up"
              className="h-65 mx-auto mb-4 mt-6"
            />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              Sign Up & Chat with AI
            </h4>
            <p className="text-lg text-gray-700 leading-snug">
              Create an account to <br /> start chatting with our AI.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <img src={legalInfo} alt="Get Info" className="h-45 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              Get Legal Information
            </h4>
            <p className="text-lg text-gray-700 leading-snug">
              Receive clear legal guidance <br /> and document explanations.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <img
              src={locateServices}
              alt="Locate"
              className="h-45 mx-auto mb-4"
            />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              Locate Legal Services
            </h4>
            <p className="text-lg text-gray-700 leading-snug">
              Access regional legal <br /> help and services easily.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-14 px-4 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-14">
          Roadmap
        </h2>

        <div className="flex flex-col items-center gap-5 max-w-md mx-auto">
          <div className="bg-[#78dbcf] w-74 rounded-xl shadow-md p-9 text-center border border-[#5bc0be]">
            <img
              src={robotIcon}
              alt="QnA Icon"
              className="h-40 w-45 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Real-time Legal Q&A
            </h3>
          </div>

          <div className="w-1 h-6 border-l-2 border-dotted border-gray-600"></div>

          <div className="bg-[#78dbcf] w-72 rounded-xl shadow-md p-7 text-center border border-[#5bc0be]">
            <img
              src={languageIcon}
              alt="Language Icon"
              className="h-40 w-45 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Regional Language Support
            </h3>
          </div>

          <div className="w-1 h-6 border-l-2 border-dotted border-gray-600"></div>

          <div className="bg-[#78dbcf] w-72 rounded-xl shadow-md p-8 text-center border border-[#5bc0be]">
            <img
              src={docIcon}
              alt="Document Icon"
              className="h-40 w-45 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Legal Document Automation
            </h3>
          </div>

          <div className="w-1 h-6 border-l-2 border-dotted border-gray-600"></div>

          <div className="bg-[#78dbcf] w-72 rounded-xl shadow-md p-8 text-center border border-[#5bc0be]">
            <img
              src={mobileIcon}
              alt="Mobile Icon"
              className="h-40 w-45 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Mobile App Development
            </h3>
          </div>
        </div>
      </section>

      {/* BharatSetu in Numbers */}
      <section className="py-16 px-4 bg-[#d4f6f2]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-teal-800 mb-12">
            BharatSetu in Numbers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Queries Answered */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-8xl mb-4 text-[#0e9a9a]">💬</div>
              <h3 className="text-5xl font-bold text-teal-800 mb-1">5K+</h3>
              <p className="text-gray-600 text-2xl">
                Queries <br /> Answered
              </p>
            </div>

            {/* Regional Languages */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-8xl mb-4 text-[#0e9a9a]">🌐</div>
              <h3 className="text-5xl font-bold text-teal-800 mb-1">50+</h3>
              <p className="text-gray-600 text-2xl">Regional Languages</p>
            </div>

            {/* Documents Simplified */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-8xl mb-4 text-[#0e9a9a]">📄</div>
              <h3 className="text-5xl font-bold text-teal-800 mb-1">10K+</h3>
              <p className="text-gray-600 text-2xl">Documents Simplified</p>
            </div>

            {/* Police Stations Mapped */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-8xl mb-4 text-[#0e9a9a]">🛡️</div>
              <h3 className="text-5xl font-bold text-teal-800 mb-1">100+</h3>
              <p className="text-gray-600 text-2xl">Police Stations Mapped</p>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <section className="bg-[#f7fdfd] py-12 px-6 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-10 mt-2">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-[#daf6f4] p-6 rounded-xl shadow-md">
            <p className="text-gray-800 italic mb-4">
              “BharatSetu helped me understand a legal notice in Hindi in
              minutes.”
            </p>
            <p className="font-semibold text-gray-700">— Rekha Devi, Bihar</p>
          </div>
          <div className="bg-[#daf6f4] p-6 rounded-xl shadow-md">
            <p className="text-gray-800 italic mb-4">
              “The regional legal advice feature guided me to a nearby NGO.
              Amazing!”
            </p>
            <p className="font-semibold text-gray-700">— Arun P., Tamil Nadu</p>
          </div>
          <div className="bg-[#daf6f4] p-6 rounded-xl shadow-md">
            <p className="text-gray-800 italic mb-4">
              “Very easy to use and multilingual chatbot is super helpful for my
              parents.”
            </p>
            <p className="font-semibold text-gray-700">— Sneha M., Delhi</p>
          </div>
        </div>
      </section>

      <FAQSection />
      <NewsletterSection />

      {/* CTA Section */}
      <section className="bg-teal-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to get legal help?</h2>
        <p className="mb-8">
          Join thousands of citizens using AI for their legal needs.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-teal-800 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 text-lg"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; BharatSetu — Empowering Citizens for Justice
      </footer>
    </div>
  );
};

export default LandingPage;
