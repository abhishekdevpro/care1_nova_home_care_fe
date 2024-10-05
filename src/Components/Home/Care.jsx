import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Service data
const services = [
  { name: 'Child care', icon: '👶' },
  { name: 'Senior care', icon: '🤝' },
  { name: 'Housekeeping', icon: '🏠' },
  { name: 'Pet care', icon: '🐾' },
  { name: 'Tutoring', icon: '📝' },
];

// Popup component
const Popup = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="bg-pink-100 rounded-full p-4 mb-4">
            <span className="text-3xl sm:text-4xl"> 👶 </span>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

// ServiceCard component
const ServiceCard = ({ name, icon }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCareClick = () => {
    navigate('/form');
  };

  const handlejobclick=()=>{
    navigate('/job-form')
  }

  return (
    <>
      <div
        className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 aspect-square cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
        <p className="text-sm sm:text-base text-gray-700 text-center">{name}</p>
      </div>
      <Popup title={name} isOpen={isPopupOpen} onClose={closePopup}>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-full"
            onClick={handleCareClick}
          >
            Find care
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full"
           onClick={handlejobclick}
          >
            Find a job
          </button>
        </div>
      </Popup>
    </>
  );
};

// ServiceGrid component
const ServiceGrid = () => (
  <div className="p-4 sm:p-6 md:p-8 flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl w-full">
      {services.map((service) => (
        <ServiceCard key={service.name} {...service} />
      ))}
    </div>
  </div>
);

export default ServiceGrid;
