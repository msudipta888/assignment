import React from "react";

import Hero from "./Hero";
import Goal from "./Goal";
import Effort from "./Effort";
import FeaturesTimeline from "./Learning";
import Contact from "./Contact";
import RecognitionSlider from "./Award";
import Footer from "./Footer";
import News from "./News";
import TestimonialSection from "./StudentReview";
import MentorSection from "./Mentor";
import JoinUs from "./JoinUs";


const App: React.FC=()=>{
  return(
    <>
    <Hero/>
    <Goal/>
    <Effort/>
    <RecognitionSlider/>
    <FeaturesTimeline/>
    <TestimonialSection/>
    <MentorSection/>
    <News/>
    <JoinUs/>
    <Contact/>
    
   
   
  
    <Footer/>
    </>
  )
}
export default App;