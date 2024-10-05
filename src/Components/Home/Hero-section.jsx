
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch, FaChild, FaHeart, FaHome, FaPaw, FaBook } from 'react-icons/fa';

// const HeroSection = () => {
//   const [zipCode, setZipCode] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (zipCode) {
//       // Navigate to /form and pass the zipCode as state
//       navigate('/form', { state: { zipCode } });
//     }
//   };

//   return (
//     <div className="relative h-screen bg-gray-100">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://wedesignthemes.s3.amazonaws.com/thatha/Slider+VDO+02+HD.mp4"
//         autoPlay
//         loop
//         muted
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full w-full flex items-center justify-start">
//         <div className="w-full max-w-5xl px-4 lg:px-8">
//           <div className="text-white">
//             <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
//               <div className="flex gap-4 items-center mb-6">
//                 <button className="text-teal-400 font-semibold border-b-2 border-teal-400 pb-2">Find care</button>
//                 <button className="text-white font-semibold pb-2 border-b-2 border-transparent hover:border-white">Find a job</button>
//               </div>

//               {/* Search Input */}
//               <div className="flex mb-6">
//                 <div className="relative flex-grow">
//                   <input
//                     type="text"
//                     placeholder="Enter ZIP code"
//                     value={zipCode}
//                     onChange={(e) => setZipCode(e.target.value)}
//                     className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                   />
//                   <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 </div>
//                 <button
//                   className="ml-4 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition duration-300"
//                   onClick={handleSearch}
//                 >
//                   Search
//                 </button>
//               </div>

//               {/* Icon Section */}
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//                 {[
//                   { icon: FaChild, label: 'Child care' },
//                   { icon: FaHeart, label: 'Senior care' },
//                   { icon: FaHome, label: 'Housekeeping' },
//                   { icon: FaPaw, label: 'Pet care' },
//                   { icon: FaBook, label: 'Tutoring' },
//                 ].map((item, index) => (
//                   <div key={index} className="text-center">
//                     <item.icon className="mx-auto mb-2 text-teal-400 text-4xl" />
//                     <p className="text-sm text-white font-medium">{item.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaChild, FaHeart, FaHome, FaPaw, FaBook } from 'react-icons/fa';

const HeroSection = () => {
  const [zipCode, setZipCode] = useState('');
  const [activeTab, setActiveTab] = useState('care');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (zipCode) {
      if (activeTab === 'care') {
        navigate('/form', { state: { zipCode } });
      } else {
        navigate('/job-form', { state: { zipCode } });
      }
    }
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://wedesignthemes.s3.amazonaws.com/thatha/Slider+VDO+02+HD.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-start">
        <div className="w-full max-w-5xl px-4 lg:px-8">
          <div className="text-white">
            <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
              <div className="flex gap-4 items-center mb-6">
                <button 
                  className={`font-semibold pb-2 border-b-2 ${activeTab === 'care' ? 'text-teal-400 border-teal-400' : 'text-white border-transparent hover:border-white'}`}
                  onClick={() => setActiveTab('care')}
                >
                  Find care
                </button>
                <button 
                  className={`font-semibold pb-2 border-b-2 ${activeTab === 'job' ? 'text-teal-400 border-teal-400' : 'text-white border-transparent hover:border-white'}`}
                  onClick={() => setActiveTab('job')}
                >
                  Find a job
                </button>
              </div>

              {/* Search Input */}
              <div className="flex mb-6">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button
                  className="ml-4 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition duration-300"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>

              {/* Icon Section */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { icon: FaChild, label: 'Child care' },
                  { icon: FaHeart, label: 'Senior care' },
                  { icon: FaHome, label: 'Housekeeping' },
                  { icon: FaPaw, label: 'Pet care' },
                  { icon: FaBook, label: 'Tutoring' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="mx-auto mb-2 text-teal-400 text-4xl" />
                    <p className="text-sm text-white font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;