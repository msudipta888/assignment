import React from "react";
import man from './assests/man.png';
import woman from './assests/woman.png';

const Effort: React.FC = () => (
  <div className="flex flex-col bg-white items-center py-8 px-4">
    <h2 className="font-bold text-2xl font-mono text-center mb-8">
      Check out our <span className="text-sky-500">holistic programs</span> designed <br />
      to help you reach your <span className="text-sky-500">goals</span>
    </h2>
    
    <div className="flex flex-col lg:flex-col gap-8 items-center w-full max-w-screen-lg">
      <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 rounded-md shadow-md w-full lg:max-w-lg lg:-mt-2">
        <img src={man} alt="Campus Training" className="h-48 w-64 rounded-md mb-4 lg:mb-0 lg:mr-6" />
        <div className="flex flex-col text-center lg:text-left">
          <h5 className="font-bold text-lg">Campus Training</h5>
          <p className="text-sm text-gray-600">For students | 24+ Modules | 10 instructors</p>
          <p className="text-sm text-gray-600 mt-2">
            The app features in-app coding, eliminating the need for laptops.With cloud-based virtual machines and labs, students can practice freely.
          </p>
          <button className="mt-4 w-36 ml-96
           px-7 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 lg:w-28 lg:ml-9 ">
            Explore
           
          </button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 rounded-md shadow-md w-full lg:max-w-lg lg:h-max">
        <img src={woman} alt="Professional Training" className="h-48 w-64 rounded-md mb-4 lg:mb-0 lg:mr-6" />
        <div className="flex flex-col text-center lg:text-left">
          <h5 className="font-bold text-lg">Professional Training</h5>
          <p className="text-sm text-gray-600">For Professionals | 24+ Modules | 10 instructors</p>
          <p className="text-sm text-gray-600 mt-2">
            The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs.
          </p>
          
          <button className="mt-4 ml-96 w-36 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 lg:w-28 lg:ml-9">
            Explore 
           
          </button>
        
        </div>
      </div>
    </div>
  </div>
);

export default Effort;
