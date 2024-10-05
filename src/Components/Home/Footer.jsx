import React from 'react';
import logo from '../../assests/logo.png'
import logo2 from '../../assests/logo2.png'

const Footer = () => {
  return (
    <footer className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted
      >
        <source src="https://wedesignthemes.s3.amazonaws.com/thatha/Slider+VDO+02+HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-around">
        <p className="max-w-5xl text-xl md:text-2xl lg:text-3xl text-white font-bold text-center px-4 md:px-8 lg:px-16">
          Experience personalized care that caters to your unique needs, ensuring your comfort and satisfaction at every step.
        </p>
        <div className='flex justify-center items-center flex-col'>
        <img 
          src={logo} 
          alt="Nova Home Care Logo" 
          className="w-32 md:w-48 lg:w-64 mb-1"
        />
        <div className="flex justify-center items-center space-x-4 mt-4">
          <img 
            src={logo2} 
            alt="SBE DBE Certification Logo 1" 
            className="w-16 md:w-20 lg:w-24"
          />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
