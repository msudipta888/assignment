import React from "react";
import head from './assests/headphone.jpeg';

const Contact: React.FC = () => (
  <div className="bg-white shadow-xl rounded-lg w-full flex flex-col p-4  items-center gap-4 border-violet-500 border-1 lg:flex-row lg:ml-14 lg:w-full">
    {/* Image Section */}
    <img src={head} className="h-80 w-80 rounded-md object-cover" alt="Headphone" />

    {/* Form Section */}
    <div className="flex flex-col items-center gap-4 lg:flex-col lg:-ml-2">
      {/* Title */}
      <h1 className="text-sky-500 font-bold text-2xl leading-tight">
        Find Out More <br />
        Reasons To Stay
      </h1>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Full Name"
        className="h-10 w-60 border border-gray-300 rounded-md pl-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <input
        type="text"
        placeholder="Mobile No"
        className="h-10 w-60 border border-gray-300 rounded-md pl-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <input
        type="text"
        placeholder="City"
        className="h-10 w-60 border border-gray-300 rounded-md pl-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      {/* Checkbox and Terms */}
      <div className="flex items-start gap-2 mt-2">
        <input type="checkbox" className="mt-3 ml-4" />
        <p className="text-gray-600 text-sm">
          Creating an account means you’re okay with our Terms of Service,<br /> 
          Privacy Policy, and default Notification Settings
        </p>
      </div>

      {/* Enquiry Button */}
      <button className="mt-4 h-10 w-40 bg-sky-500 text-white rounded-md hover:bg-sky-600">
        Enquire Now
      </button>

      {/* Sign In Link */}
      <p className="text-gray-500 text-sm mt-2">
        Already Have An Account? <span className="text-sky-500 cursor-pointer">Sign In</span>
      </p>
    </div>
  </div>
);

export default Contact;
