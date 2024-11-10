import cut from './assests/cut.png';
import crop from './assests/crop-m.png';
import c from './assests/crop.png';
import sm from './assests/sm.png'
import program from './assests/programer.jpeg'
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Saanvi Patel",
      role: "Executive Engineer",
      avatar: program
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Saanvi Patel",
      role: "Software Engineer",
      avatar: program
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Saanvi Patel",
      role: "Full Stack Developer",
      avatar: program
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-sky-500 overflow-hidden mt-9">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-b from-[#40E0D0] to-[#0099ff]">
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-[#0099ff]"
          style={{
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            transform: "scaleX(1.5)"
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 pt-8">
        {/* Top Images Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-8">
          {[{ img: cut, role: "QR Tester" }, { img: sm, role: "Software Engineer" }, { img: c, role: "Data Scientist" }, { img: crop, role: "AI Engineer" }].map((item, idx) => (
            <div key={idx} className="w-32 h-32 sm:w-48 sm:h-48 relative group">
              <img
                src={item.img}
                alt="Team member"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute -mt-32 left-1/4 transform -translate-x-1/2 px-3 py-1 rounded text-xs sm:text-sm text-white lg:-mt-48 lg:left-1/5 font-bold">
                {item.role}
              </div>
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-12">
          And Our Students Agree . . .
        </h2>

        {/* Tech Stack Icons */}
        <div className="absolute left-4 top-1/4 hidden md:block">
          <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-red-500 font-bold">Java</span>
          </div>
        </div>

        <div className="absolute right-4 bottom-1/4 hidden md:block">
          <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-blue-500 font-bold">Flutter</span>
          </div>
        </div>

        <div className="absolute left-10 bottom-1/4 hidden md:block">
          <div className="w-12 h-12 bg-[#2D2D2D] rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-green-400 font-mono font-bold">JS</span>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 relative">
                {/* Profile Image */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-[#0099ff] font-serif leading-none">
                  “
                </div>

                {/* Testimonial Content */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{testimonial.text}</p>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-5">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors shadow-lg mb-3"
            >
              <FaAngleLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
            >
              <FaAngleRight className="w-5 h-5 sm:w-6 sm:h-6 text-white " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
