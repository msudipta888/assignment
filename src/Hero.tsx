import React from 'react';
import laptop from './assests/macbook copy.png'
import logo from './assests/logo.png'

import { ArrowRight } from 'lucide-react';

interface StatCardProps {
  icon: string;
  count: string;
  label: string;
}

interface TrainingCardProps {
  icon: string;
  title: string;
  description: string;
}

const Hero:React.FC = () => {
  const stats: StatCardProps[] = [
    { icon: "🗺️", count: "50+", label: "Cities" },
    { icon: "📝", count: "80+", label: "Modules" },
    { icon: "🎓", count: "10K+", label: "Students" },
    { icon: "🏫", count: "100+", label: "Institutes" }
  ];

  const trainingOptions: TrainingCardProps[] = [
    {
      icon: "🏛️",
      title: "Campus Training",
      description: "Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor"
    },
    {
      icon: "🏢",
      title: "Professional Training",
      description: "Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum"
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      {/* Top notification bar */}
      <div className="bg-blue-50 text-center py-3 px-4 mb-4">
        <p className="text-sm">
          Learn coding at the nearby <span className="text-blue-600 font-semibold">Coding Pro</span> Institute. 
          <a href="#" className="text-blue-600 hover:underline ml-1 font-semibold">Enquire now</a>
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Coding Pro Logo"
            className="h-12 "
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Virtual Labs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Programs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">For Colleges</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border-1 border-sky-500  outline font-serif text-blue-600 hover:bg-blue-50 rounded-md">
            Log in
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center my-12">
        {/* Left side - MacBook Image */}
        <div className="order-1 lg:order-1">
          <img
            src={laptop}
            alt="MacBook Pro"
            className="w-full max-w-2xl mx-auto"
          />
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 space-y-8 items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Where The World
            <br />
            Learns To Code
          </h1>

          {/* Training Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {trainingOptions.map((option, index) => (
              <div
                key={index}
                className="p-6 border-2 border-blue-500 rounded-lg space-y-4"
              >
                <div className="text-3xl">{option.icon}</div>
                <h3 className="font-bold text-gray-800">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
                <div className="ml-96 lg:ml-36 md:ml-48">
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 border-2 border-blue-500 rounded-lg text-center space-y-2"
          >
            <div className="text-3xl">{stat.icon}</div>
            <div className="text-2xl font-bold text-blue-600">{stat.count}</div>
            <div className="text-blue-600 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;