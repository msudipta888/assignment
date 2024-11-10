import React from 'react';
import modoi from './assests/modi.jpeg';
import award from './assests/award.png'
const RecognitionSlider: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header with decorative elements */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-4">
          <svg className="w-24 h-24 text-cyan-400 transform -rotate-45" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2L2 22h20L12 2z" />
          </svg>
          
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-700">Our Efforts To </span>
            <span className="text-cyan-500">Innovate</span>
            <span className="text-gray-700"> Have Been</span>
            <br />
            <span className="text-cyan-500">Recognized</span>
            <span className="text-gray-700"> And Appreciated</span>
          </h1>

          <svg className="w-24 h-24 text-cyan-400 transform rotate-45" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2L2 22h20L12 2z" />
          </svg>
        </div>
      </div>

      {/* First Achievement Section */}
      <div className="w-full mx-auto relative mb-16">
        {/* Navigation Arrows */}
        <button className="absolute left-16 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg">
          <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        
        <button className="absolute right-16 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg">
          <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>

        <div className="flex items-center">
          {/* Teal background strip */}
          <div className="h-20 bg-cyan-400 w-1/5" />

          {/* Main content card */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden shadow-xl flex">
            <div className="w-1/2 h-64 bg-gray-200 rounded-l-xl"> 
              {/* Image placeholder - you'll add src later */}
              <img src={award}  className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-6 text-white">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nunc vulputate libero et velit interdum
              </p>
              {/* Blue dot decoration */}
              <div className="absolute right-4 bottom-4 w-9 h-9 bg-blue-400 rounded-full top-40" />
            </div>
          </div>

          {/* Blue background strip */}
          <div className="h-20 bg-blue-500 w-1/4" />
        </div>
      </div>

      {/* Second Achievement Section */}
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center justify-end">
          {/* Main content with image */}
          <div className="w-3/4 relative flex flex-row">
            <div className="bg-blue-500 p-4 text-white text-center mb-4">
              <p className="font-medium">Honored by Shri Dharmendra Pradhan ji</p>
              <p className="text-sm">Union Minister for Education</p>
              <p className="text-sm">Govt. of India - 2023</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* Image placeholder - you'll add src later */}
              <img src={modoi}  className="w-full h-48 object-cover" />
            </div>
            {/* Blue dot decoration */}
            <div className="absolute left-4 top-40 w-9 h-9 bg-blue-400 rounded-full" />
          </div>
          {/* Teal background strip */}
          <div className="h-24 bg-cyan-400 w-1/2"/>
        </div>
      </div>
    </div>
  );
};

export default RecognitionSlider;