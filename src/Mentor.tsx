import React from 'react';
import ss from './assests/ss.png';
import mk from './assests/mk.png';
import mentor from './assests/mentor.png';

const mentors = [
  {
    name: "Vikas Shukla",
    role: "Software Engineering",
    pic: mk,
    institute: "IIT- BHU",
    bgColor: "bg-cyan-400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    name: "Sumit Bhatt",
    role: "Software Engineering",
    pic: mentor,
    institute: "IIT- BHU",
    bgColor: "bg-blue-500",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    name: "Neelu Verma",
    pic: ss,
    role: "Software Engineering",
    institute: "IIT- BHU",
    bgColor: "bg-cyan-400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  }
];

const MentorSection:React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8 relative">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-cyan-300">
          <path d="M10 60 L60 10 L110 60 L60 110 Z" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>
      <div className="absolute top-24 right-24 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" className="stroke-blue-300">
          <rect x="10" y="10" width="60" height="60" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
            We Know Just Education Is Not Enough Anymore
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold">
            So We've Got The <span className="text-cyan-500">Best Mentors</span> For You.
          </h1>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Decorative dotted line connecting cards */}
          <svg className="absolute top-20 left-0 w-full h-20 z-0" stroke="currentColor">
            <line 
              x1="20%" y1="50%" 
              x2="80%" y2="50%" 
              stroke="#0BC5EA" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
          </svg>

          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-lg ${mentor.bgColor}`}
            >
              {/* Mentor Image Container */}
              <div className="h-80 relative">
                <img
                  src={mentor.pic}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4  flex items-center justify-center backdrop-blur-sm ">
                  <h3 className=" font-bold text-2xl text-white">{mentor.name}</h3>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="bg-black/30 backdrop-blur-md text-white p-6 rounded-b-3xl">
                <div className="mb-4">
                  <div className="font-semibold text-lg">{mentor.role}</div>
                  <div className="text-sm">{mentor.institute}</div>
                </div>
                <p className="text-sm opacity-90">
                  "{mentor.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-12 left-1/4 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-cyan-300">
          <circle cx="50" cy="50" r="40" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>
      <div className="absolute right-12 bottom-24 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-blue-300">
          <polygon points="60,10 110,60 60,110 10,60" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default MentorSection;
