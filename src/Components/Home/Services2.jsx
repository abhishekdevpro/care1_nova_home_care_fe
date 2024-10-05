import React from 'react';

const services = [
  {
    icon: '📋',
    title: 'Cozy Living Areas',
    description: 'Enjoy our beautifully designed living spaces that promote comfort and relaxation, providing a home-like atmosphere.'
  },
  {
    icon: '🍽️',
    title: 'Healthy Eating Choices',
    description: 'Benefit from nutritious, delicious meals tailored to meet dietary needs, ensuring overall well-being.'
  },
  {
    icon: '👨‍🦽',
    title: 'Security & Safety Procedures',
    description: 'Experience peace of mind with our comprehensive security measures and safety protocols in place.'
  },
  {
    icon: '🌱',
    title: 'Memory Care Facility',
    description: 'Receive specialized memory care with compassionate support to enhance cognitive health and quality of life.'
  },
  {
    icon: '🚑',
    title: 'Transportation and Medical Appointments',
    description: 'Access prompt, reliable emergency transportation services for any urgent medical needs.'
  },
  {
    icon: '🫀',
    title: 'Physical & Mental Assistance',
    description: 'Get holistic support with tailored physical and mental assistance programs to maintain optimal health.'
  }
];

const ServicesComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-600 text-center mb-2">Services</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-12">Explore What We Offer</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4 w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-700 rounded-full">
              {service.icon}
            </div>
            <h4 className="text-xl font-semibold text-teal-700 mb-2">{service.title}</h4>
            <p className="text-gray-600 max-w-xs">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;