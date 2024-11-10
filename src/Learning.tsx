import React from 'react';
import grp from './assests/group.png'
const FeaturesTimeline: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "Custom Specialization",
      icon: "🎯",
      description: "We customize the study program to your interest and ensure that you make the best progress."
    },
    {
      number: 2,
      title: "Virtual Labs",
      icon: "💻",
      description: "Access to fully equipped virtual labs for hands-on practice and real-world experience."
    },
    {
      number: 3,
      title: "AI Tests",
      icon: "🤖",
      description: "Regular AI-powered tests and quizzes to track progress and identify areas for improvement."
    },
    {
      number: 4,
      title: "Resume Builder",
      icon: "📄",
      description: "Create impressive job-ready resumes with our AI-powered builder for better placements."
    },
    {
      number: 5,
      title: "Placement Preparation",
      icon: "🎓",
      description: "Get intensive training and guidance to prepare for successful placement opportunities."
    },
    {
      number: 6,
      title: "AI Interviews",
      icon: "🎯",
      description: "Practice with AI-powered mock interviews to build confidence and improve skills."
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-100 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center">Because We Offer What You Need <br />
at <span className="text-3xl text-sky-600">Every Step</span> Of Your <br />
<span className="text-3xl text-sky-600">Transformative Learning Journey</span></h1>
<div className="max-w-6xl mx-auto mb-12 flex justify-center items-center relative">
    <div className="relative flex justify-center items-center">
      <div className="bg-blue-500 rounded-full w-48 h-48 overflow-hidden shadow-lg relative z-10">
        <img src={grp} className="h-full w-full object-cover" alt="Group" />
        <div className="absolute inset-0 bg-blue-400 opacity-50" />
      </div>

      
    </div>
    <div className="absolute inset-x-0 bottom-0 h-32 w-full overflow-hidden">
     
      <svg
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-20 opacity-70 z-0"
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
        fillOpacity="1"
      >
        <ellipse cx="100" cy="25" rx="100" ry="25" fill="#3b82f6" fillOpacity="1"/>
      </svg>
    </div>
  </div>
      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-400 transform -translate-x-1/2" />

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className={`flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Number Circle */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center transform -translate-x-1/2">
                  {feature.number}
                </div>

                {/* Content Box */}
                <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2rem)] bg-white p-4 rounded-lg shadow-md`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-blue-600">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </div>
  );
};

export default FeaturesTimeline;