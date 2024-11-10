import React, { useState } from 'react';

const Footer = () => {
  const [instituteName, setInstituteName] = useState('');

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-14 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Contact Section */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold mb-6">Let's keep in touch!</h2>
          <p className="text-gray-200 mb-4">Request a CodingPro Institute enquiry!</p>
          
          <div className="flex mb-6">
            <input
              type="text"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              placeholder="Institute name"
              className="bg-transparent border border-gray-300 rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-blue-300"
            />
            <button className="bg-blue-400 hover:bg-blue-500 rounded-r-full px-4">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-6 h-6 transform rotate-90"
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="space-y-2 mb-6">
            <button className="block text-gray-200 hover:text-white">Create Account</button>
            <button className="block text-gray-200 hover:text-white">Sign in</button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 97973 59144</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>codingjr.in@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>AIC-BHU, Varanasi, 421004</span>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white">Campus Training Program</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Professional Training Program</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">B. Tech</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">B. Des.</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Our Team</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Privacy</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;