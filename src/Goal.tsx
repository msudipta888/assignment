import React from "react";
import scholar from './assests/scholar.png';
import book from './assests/book.png';
import ai from './assests/ai.png';
import mess from './assests/message.png';
import nb from './assests/nb.png';
import video from './assests/video.png'
import ministry from './assests/ministry.png';
import nsdc from './assests/nsdc.png';
import start from './assests/start.png';
const Goal: React.FC = () => (
    <>
    <div className="flex flex-row justify-around bg-white w-full mt-12">
     <div >
      
        <img src={ministry} className="h-16 w-28" />
     </div>
     <div className="flex flex-col">
       <p className="text-base">RECOGNISED BY</p>
        <img src={nsdc} className="h-14 w-24" />
     </div>
     <div>
        <img src={start} className="h-16 w-28" />
     </div>
    </div>
  <div className="w-full bg-blue-400 py-8 px-4 flex flex-col items-center mt-3">
      
    <h3 className="font-bold text-white text-2xl mb-6 text-start w-full max-w-screen-lg">
      What Sets Us Apart?
    </h3>
    <div className="h-12 w-12  rounded-2xl ml-auto bg-white"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mt-4">
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
        <img src={scholar} alt="IIT-IIM Alumni" className="h-12 w-12 mb-2" />
        <h5 className="font-bold text-sky-700 mb-1">Created by IIT-IIM Alumni</h5>
        <p className="text-sm text-gray-600">We’ve learnt from the best and strive to bring you the best.</p>
      </div>
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
        <img src={ai} alt="AI Integration" className="h-12 w-12 mb-2" />
        <h5 className="font-bold text-sky-700 mb-1">A.I. Integration</h5>
        <p className="text-sm text-gray-600">We have harnessed the power of A.I. to enhance and assess your knowledge.</p>
      </div>
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
        <img src={mess} alt="In-app Coding" className="h-12 w-12 mb-2" />
        <h5 className="font-bold text-sky-700 mb-1">In-app Coding</h5>
        <p className="text-sm text-gray-600">The app features in-app coding, eliminating the need for laptops.</p>
      </div>
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
        <img src={nb} alt="Extensive E-books" className="h-12 w-12 mb-2" />
        <h5 className="font-bold text-sky-700 mb-1">Extensive E-books</h5>
        <p className="text-sm text-gray-600">Deepen your understanding and mastery of the skills.</p>
      </div>
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
        <img src={video} alt="Recorded Lectures" className="h-12 w-12 mb-2" />
        <h5 className="font-bold text-sky-700 mb-1">Recorded Lectures</h5>
        <p className="text-sm text-gray-600">Access lectures anywhere and anytime at your own pace.</p>
      </div>
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
        <img src={book} alt="Flash Cards" className="h-12 w-12 mb-2" />
        <h5 className="font-bold text-sky-700 mb-1">Flash Cards</h5>
        <p className="text-sm text-gray-600">Make learning convenient and fun using flash cards.</p>
      </div>
    </div>
  </div>
  </>
);

export default Goal;
