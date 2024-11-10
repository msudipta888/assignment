import React from 'react';
import { LuMonitor } from "react-icons/lu";
import { MdKeyboardAlt } from "react-icons/md";
import { FaInfinity, FaCode, FaCloud, FaBook, FaChartBar } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import phone from './assests/phone.png';
import logo from './assests/logo.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const features = [
  { icon: <LuMonitor className="w-6 h-6 text-cyan-500" />, text: "Recorded Lectures" },
  { icon: <MdKeyboardAlt className="w-6 h-6 text-cyan-500" />, text: "Language-specific keyboard" },
  { icon: <SiGooglemessages className="w-6 h-6 text-cyan-500" />, text: "Online Quizzes" },
  { icon: <FaInfinity className="w-6 h-6 text-cyan-500" />, text: "Infinite Project Size" },
  { icon: <FaCode className="w-6 h-6 text-cyan-500" />, text: "In-app Coding" },
  { icon: <FaCloud className="w-6 h-6 text-cyan-500" />, text: "Cloud Computation" },
  { icon: <FaChartBar className="w-6 h-6 text-cyan-500" />, text: "Evaluation Reports" },
  { icon: <FaBook className="w-6 h-6 text-cyan-500" />, text: "Coding Magazine" },
];

const JoinUs = () => {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden p-4 sm:p-8 lg:p-12 mt-7">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 hidden md:block">
        <svg width="300" height="100" viewBox="0 0 300 100" className="stroke-cyan-200">
          <line x1="0" y1="20" x2="300" y2="20" strokeWidth="4" strokeDasharray="8 8"/>
          <line x1="0" y1="40" x2="300" y2="40" strokeWidth="4" strokeDasharray="8 8"/>
          <line x1="0" y1="60" x2="300" y2="60" strokeWidth="4" strokeDasharray="8 8"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" className="stroke-cyan-200">
          <line x1="20" y1="0" x2="20" y2="200" strokeWidth="4" strokeDasharray="8 8"/>
          <line x1="40" y1="0" x2="40" y2="200" strokeWidth="4" strokeDasharray="8 8"/>
          <line x1="60" y1="0" x2="60" y2="200" strokeWidth="4" strokeDasharray="8 8"/>
        </svg>
      </div>

      <div className="absolute right-0 bottom-0 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" className="fill-cyan-100">
          <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" className="fill-cyan-300"/>
          </pattern>
          <rect width="200" height="200" fill="url(#pattern-circles)"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
        {/* Phone Mockup */}
        <div className="w-full lg:w-1/2 relative flex justify-center mb-8 lg:mb-0">
          <div className="relative w-[250px] sm:w-[300px] lg:w-[380px] h-[500px] sm:h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-[40px] shadow-xl">
              <img
                src={phone}
                alt="App Screenshot"
                className="w-full h-full object-cover rounded-[40px] p-2"
              />
              <img src={logo} className="lg:w-56 w-48 relative -top-72 left-9 lg:-top-96 lg:left-20 " />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Wanna See More?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 lg:mb-12">Join Us!</h3>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 lg:mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-cyan-50 flex items-center justify-center">
                  {feature.icon}
                </div>
                <span className="text-gray-600">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Active Users */}
          <div className="text-center mb-8">
            <div className="text-gray-600 flex items-center justify-center gap-4">
              <svg width="40" height="20" className="stroke-cyan-500">
                <path d="M0,10 C10,0 30,20 40,10" fill="none" strokeWidth="2"/>
              </svg>
              50k+ Active Users
              <svg width="40" height="20" className="stroke-cyan-500">
                <path d="M0,10 C10,0 30,20 40,10" fill="none" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button className="h-12 px-4 sm:px-6 bg-blue-500 text-white rounded-xl flex items-center gap-2 hover:bg-blue-600 transition-colors w-44">
        <IoLogoGooglePlaystore className="w-7 h-7 sm:w-6 sm:h-6"/>
              Get it on Google Play
            </button>
            <button className="h-12 px-4 sm:px-6 bg-blue-500 text-white rounded-xl flex items-center gap-2 hover:bg-blue-600 transition-colors w-44">
              <FaApple className="w-7 h-7 sm:w-6 sm:h-6"/>
              Download on App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
