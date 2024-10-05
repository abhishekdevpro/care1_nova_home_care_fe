import React from 'react';

const HomeCarePage = () => {
  return (
    <div className="bg-teal-900 text-white p-8 md:p-12 lg:p-16 max-w-7xl mx-auto my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Daily Schedule */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Daily Schedule
          </h2>
          <div className="space-y-4">
            <ScheduleItem time="6:00 AM - 6:30 AM" activity="Coffee" />
            <ScheduleItem time="9:00 AM - 10:00 AM" activity="Breakfast" />
            <ScheduleItem time="12:00 PM - 1:00 PM" activity="Lunch" />
            <ScheduleItem time="4:00 PM" activity="Tea With Snacks" />
            <ScheduleItem time="7:00 PM" activity="Dinner With Milk" />
          </div>
        </div>

        {/* Contact Address */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact Address
          </h2>
          <p className="mb-4 text-lg">1509 Lady St, Columbia, SC 29201, United States</p>
          <p className="mb-4 text-lg">Email: <a href="mailto:info@novahome.care" className="text-blue-300 hover:underline">info@novahome.care</a></p>
          <a href="https://maps.app.goo.gl/TtzJLe5GKoXkYbSi6" className="text-blue-300 hover:underline text-lg">Google Map</a>
        </div>

        {/* Words From Founder */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Words From Founder
          </h2>
          <p className="text-lg">
            Welcome to Nova Home Care. Our mission is to provide exceptional, compassionate care, treating each individual with dignity and respect. Our dedicated team ensures your comfort and well-being at home. Thank you for trusting us with your care.
          </p>
        </div>

      </div>
    </div>
  );
};

const ScheduleItem = ({ time, activity }) => (
  <div className="flex justify-between text-lg">
    <span>{activity}</span>
    <span className="text-gray-300">{time}</span>
  </div>
);

export default HomeCarePage;
