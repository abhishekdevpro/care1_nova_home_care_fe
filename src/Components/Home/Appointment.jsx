import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [service, setService] = useState('');
  const [staff, setStaff] = useState('');
  const [date, setDate] = useState('');

  const handleCheckAvailability = () => {
    // Logic to check available time slots
    console.log('Checking availability for:', { service, staff, date });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-8">Make An Appointment</h1>

      <div className="flex flex-col md:flex-row justify-center items-center mb-12 space-y-4 md:space-y-0">
        <div className="flex items-center">
          <div className="bg-sky-300 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">1</div>
          <p className="ml-2 mr-4 text-teal-800 font-semibold">Select Date / Time Slot</p>
        </div>
        <div className="hidden md:block h-px w-16 bg-gray-300 mx-2"></div>
        <div className="flex items-center">
          <div className="border-2 border-sky-300 rounded-full w-10 h-10 flex items-center justify-center text-sky-300 font-bold">2</div>
          <p className="ml-2 mr-4 text-teal-800 font-semibold">Fill Contact Details</p>
        </div>
        <div className="hidden md:block h-px w-16 bg-gray-300 mx-2"></div>
        <div className="flex items-center">
          <div className="border-2 border-sky-300 rounded-full w-10 h-10 flex items-center justify-center text-sky-300 font-bold">3</div>
          <p className="ml-2 text-teal-800 font-semibold">Check Details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
        <div>
          <p className="text-teal-800 font-semibold mb-2">Select Date / Time Slot</p>
          <p className="text-sm text-gray-600">Choose the type of service and your staff along with the time slot</p>
        </div>
        <div>
          <p className="text-teal-800 font-semibold mb-2">Fill Contact Details</p>
          <p className="text-sm text-gray-600">Fill in your personal details and brief description of your treatment needed</p>
        </div>
        <div>
          <p className="text-teal-800 font-semibold mb-2">Check Details</p>
          <p className="text-sm text-gray-600">Proofread the details about the chosen staff, service & personal details</p>
        </div>
      </div>

      <div className="bg-sky-100 p-4 mb-8 text-center">
        <p className="text-sky-800">All fields are mandatory</p>
      </div>

      <h2 className="text-2xl font-bold text-teal-800 text-center mb-6">Select Service & Date</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          {/* Add service options here */}
        </select>

        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={staff}
          onChange={(e) => setStaff(e.target.value)}
        >
          <option value="">Select Staff</option>
          {/* Add staff options here */}
        </select>

        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="text-center">
        <button
          className="bg-teal-800 text-white py-2 px-6 rounded hover:bg-teal-700 transition duration-300"
          onClick={handleCheckAvailability}
        >
          Check Available Time
        </button>
      </div>
    </div>
  );
};

export default AppointmentBooking;
