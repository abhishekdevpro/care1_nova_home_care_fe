// import React, { useState } from 'react';

// const JobForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     zipCode: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//   });
//   const [errors, setErrors] = useState({});

//   // Validation function
//   const validate = () => {
//     const newErrors = {};
//     switch (step) {
//       case 1:
//         if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
//         break;
//       case 2:
//         if (!formData.firstName) newErrors.firstName = 'First name is required';
//         if (!formData.lastName) newErrors.lastName = 'Last name is required';
//         break;
//       case 3:
//         if (!formData.email) newErrors.email = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//         break;
//       default:
//         break;
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle next step
//   const handleNext = () => {
//     if (validate()) {
//       setStep(step + 1);
//       window.sessionStorage.setItem('formData', JSON.stringify(formData));
//     }
//   };

//   // Handle form data change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Styles for the form
//   const formStyles = "p-6 bg-white rounded shadow-lg max-w-md mx-auto w-full";

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className={formStyles}>
//         {step === 1 && (
//           <>
//             <h2 className="text-lg mb-4">Enter Your ZIP Code</h2>
//             <input
//               type="text"
//               name="zipCode"
//               placeholder="ZIP code"
//               value={formData.zipCode}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             />
//             {errors.zipCode && <p className="text-red-500 text-sm mb-2">{errors.zipCode}</p>}
//             <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 2 && (
//           <>
//             <h2 className="text-lg mb-4">Create Your Profile</h2>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             />
//             {errors.firstName && <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>}
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             />
//             {errors.lastName && <p className="text-red-500 text-sm mb-2">{errors.lastName}</p>}
//             <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 3 && (
//           <>
//             <h2 className="text-lg mb-4">Verify Your Email</h2>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={formData.email}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             />
//             {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
//             <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
//               Submit
//             </button>
//           </>
//         )}
//         {step === 4 && (
//           <div className="text-center">
//             <h2 className="text-lg mb-4">Form Completed!</h2>
//             <p>Thank you for your submission.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobForm;


// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const JobSeekerForm = () => {
//   const location = useLocation();
//   const { zipCode } = location.state || {};

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     jobCareType: '',
//     totalExperience: '',
//     zipCode: zipCode || '',
//     availableToJoin: '',
//     otherCareExperience: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const renderStep = () => {
//     switch(step) {
//       case 1:
//         return (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Job Details</h2>
//             <div className="mb-4">
//               <label className="block mb-2">Experience in Job Care Type</label>
//               <input
//                 type="text"
//                 name="jobCareType"
//                 value={formData.jobCareType}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Total Experience (years)</label>
//               <input
//                 type="number"
//                 name="totalExperience"
//                 value={formData.totalExperience}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Availability</h2>
//             <div className="mb-4">
//               <label className="block mb-2">Jobseeker Zip Code</label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Available to join in (days)</label>
//               <input
//                 type="number"
//                 name="availableToJoin"
//                 value={formData.availableToJoin}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Any Other Care Experience</label>
//               <textarea
//                 name="otherCareExperience"
//                 value={formData.otherCareExperience}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
//             <div className="mb-4">
//               <label className="block mb-2">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData);
//     // You can add navigation logic here, e.g., redirect to a thank you page
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
//       <form onSubmit={handleSubmit}>
//         {renderStep()}
//         <div className="flex justify-between mt-6">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//             >
//               Previous
//             </button>
//           )}
//           {step < 3 ? (
//             <button
//               type="button"
//               onClick={nextStep}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default JobSeekerForm;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// const JobSeekerForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate()
//   const { zipCode } = location.state || {};

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     jobCareType: '',
//     totalExperience: '',
//     zipCode: zipCode || '',
//     availableToJoin: '',
//     otherCareExperience: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const renderStep = () => {
//     switch(step) {
//       case 1:
//         return (
//           <>
//             <h2 className="text-3xl font-bold mb-6 text-teal-600">Job Details</h2>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Experience in Job Care Type</label>
//               <input
//                 type="text"
//                 name="jobCareType"
//                 value={formData.jobCareType}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="E.g., Child Care, Senior Care"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Total Experience (years)</label>
//               <input
//                 type="number"
//                 name="totalExperience"
//                 value={formData.totalExperience}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="Enter number of years"
//               />
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h2 className="text-3xl font-bold mb-6 text-teal-600">Availability</h2>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Jobseeker Zip Code</label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="Enter your ZIP code"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Available to join in (days)</label>
//               <input
//                 type="number"
//                 name="availableToJoin"
//                 value={formData.availableToJoin}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="Enter number of days"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Any Other Care Experience</label>
//               <textarea
//                 name="otherCareExperience"
//                 value={formData.otherCareExperience}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 h-32"
//                 placeholder="Describe any other relevant experience"
//               />
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <h2 className="text-3xl font-bold mb-6 text-teal-600">Personal Information</h2>
//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block mb-2 text-lg font-semibold text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-2 text-lg font-semibold text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                   placeholder="Enter your last name"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="Enter your email address"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log('Form submitted:', formData);
//   //   // Add your form submission logic here
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
    
//     // Show toast notification
//     toast.success('Form submitted successfully!', {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });

//     // Redirect to home page after 3 seconds
//     setTimeout(() => {
//       navigate('/');
//     }, 3000);
//   };


//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
//         <div className="bg-teal-600 py-4 px-6">
//           <h1 className="text-2xl font-bold text-white">Job Seeker Application</h1>
//         </div>
//         <div className="p-8">
//           <form onSubmit={handleSubmit}>
//             {renderStep()}
//             <div className="flex justify-between mt-8">
//               {step > 1 && (
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="flex items-center px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
//                 >
//                   <FaArrowLeft className="mr-2" />
//                   Previous
//                 </button>
//               )}
//               {step < 3 ? (
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300 ml-auto"
//                 >
//                   Next
//                   <FaArrowRight className="ml-2" />
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ml-auto"
//                 >
//                   Submit
//                   <FaCheck className="ml-2" />
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSeekerForm;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const JobSeekerForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { zipCode } = location.state || {};

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     email_for: 'find_job',
//     zipcode: zipCode || '',
//     email: '',
//     first_name: '',
//     last_name: '',
//     phone: '',
//     total_exp: '',
//     join_days: '',
//     care_exp: '',
//     other_exp: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = (fields) => {
//     const newErrors = {};
//     fields.forEach(field => {
//       if (!formData[field]) {
//         newErrors[field] = `${field.replace('_', ' ')} is required`;
//       }
//     });

//     if (fields.includes('zipcode') && !/^\d{5}$/.test(formData.zipcode)) {
//       newErrors.zipcode = 'Invalid zip code';
//     }

//     if (fields.includes('email') && !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (fields.includes('phone') && !/^\d+$/.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone number';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => {
//     const fieldsToValidate = getCurrentStepFields();
//     if (validateForm(fieldsToValidate)) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => setStep(step - 1);

//   const getCurrentStepFields = () => {
//     switch(step) {
//       case 1:
//         return ['care_exp', 'total_exp', 'zipcode'];
//       case 2:
//         return ['join_days', 'other_exp'];
//       case 3:
//         return ['first_name', 'last_name', 'email', 'phone'];
//       default:
//         return [];
//     }
//   };

//   const renderStep = () => {
//     switch(step) {
//       case 1:
//         return (
//           <>
//             <h2 className="text-3xl font-bold mb-6 text-teal-600">Job Details</h2>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Experience in Job Care Type</label>
//               <input
//                 type="text"
//                 name="care_exp"
//                 value={formData.care_exp}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.care_exp ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="E.g., Child Care, Senior Care"
//               />
//               {errors.care_exp && <p className="text-red-500 text-sm mt-1">{errors.care_exp}</p>}
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Total Experience (years)</label>
//               <input
//                 type="number"
//                 name="total_exp"
//                 value={formData.total_exp}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.total_exp ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="Enter number of years"
//               />
//               {errors.total_exp && <p className="text-red-500 text-sm mt-1">{errors.total_exp}</p>}
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Zip Code</label>
//               <input
//                 type="text"
//                 name="zipcode"
//                 value={formData.zipcode}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="Enter your ZIP code"
//               />
//               {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h2 className="text-3xl font-bold mb-6 text-teal-600">Availability</h2>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Available to join in (days)</label>
//               <input
//                 type="number"
//                 name="join_days"
//                 value={formData.join_days}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.join_days ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="Enter number of days"
//               />
//               {errors.join_days && <p className="text-red-500 text-sm mt-1">{errors.join_days}</p>}
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Any Other Care Experience</label>
//               <textarea
//                 name="other_exp"
//                 value={formData.other_exp}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 h-32 ${errors.other_exp ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="Describe any other relevant experience"
//               />
//               {errors.other_exp && <p className="text-red-500 text-sm mt-1">{errors.other_exp}</p>}
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <h2 className="text-3xl font-bold mb-6 text-teal-600">Personal Information</h2>
//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block mb-2 text-lg font-semibold text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="Enter your first name"
//                 />
//                 {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
//               </div>
//               <div>
//                 <label className="block mb-2 text-lg font-semibold text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="Enter your last name"
//                 />
//                 {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
//               </div>
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-lg font-semibold text-gray-700">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm(Object.keys(formData))) {
//       try {
//         const response = await axios.post('https://api.novajobs.us/api/vendors/nova-home-care', formData);
//         console.log('Form submitted:', response.data);
        
//         toast.success('Form submitted successfully!', {
//           position: "top-center",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });

//         setTimeout(() => {
//           navigate('/');
//         }, 3000);
//       } catch (error) {
//         console.error('API Error:', error);
//         toast.error('An error occurred while submitting the form. Please try again.', {
//           position: "top-center",
//           autoClose: 3000,
//         });
//       }
//     } else {
//       toast.error('Please correct the errors in the form.', {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
//         <div className="bg-teal-600 py-4 px-6">
//           <h1 className="text-2xl font-bold text-white">Job Seeker Application</h1>
//         </div>
//         <div className="p-8">
//           <form onSubmit={handleSubmit}>
//             {renderStep()}
//             <div className="flex justify-between mt-8">
//               {step > 1 && (
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="flex items-center px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
//                 >
//                   <FaArrowLeft className="mr-2" />
//                   Previous
//                 </button>
//               )}
//               {step < 3 ? (
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300 ml-auto"
//                 >
//                   Next
//                   <FaArrowRight className="ml-2" />
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ml-auto"
//                 >
//                   Submit
//                   <FaCheck className="ml-2" />
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSeekerForm;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheck, FaUpload } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const JobSeekerForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { zipCode } = location.state || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email_for: 'find_job',
    zipcode: zipCode || '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    total_exp: '',
    join_days: '',
    care_exp: '',
    other_exp: '',
    resume: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = (fields) => {
    const newErrors = {};
    fields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace('_', ' ')} is required`;
      }
    });

    if (fields.includes('zipcode') && !/^\d{5}$/.test(formData.zipcode)) {
      newErrors.zipcode = 'Invalid zip code';
    }

    if (fields.includes('email') && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (fields.includes('phone') && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (fields.includes('resume') && !formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => {
    const fieldsToValidate = getCurrentStepFields();
    if (validateForm(fieldsToValidate)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const getCurrentStepFields = () => {
    switch(step) {
      case 1:
        return ['care_exp', 'total_exp', 'zipcode'];
      case 2:
        return ['join_days', 'other_exp'];
      case 3:
        return ['first_name', 'last_name', 'email', 'phone', 'resume'];
      default:
        return [];
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-teal-600">Job Details</h2>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Experience in Job Care Type</label>
              <input
                type="text"
                name="care_exp"
                value={formData.care_exp}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.care_exp ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="E.g., Child Care, Senior Care"
              />
              {errors.care_exp && <p className="text-red-500 text-sm mt-1">{errors.care_exp}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Total Experience (years)</label>
              <input
                type="number"
                name="total_exp"
                value={formData.total_exp}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.total_exp ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter number of years"
              />
              {errors.total_exp && <p className="text-red-500 text-sm mt-1">{errors.total_exp}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Zip Code</label>
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your ZIP code"
              />
              {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-teal-600">Availability</h2>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Available to join in (days)</label>
              <input
                type="number"
                name="join_days"
                value={formData.join_days}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.join_days ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter number of days"
              />
              {errors.join_days && <p className="text-red-500 text-sm mt-1">{errors.join_days}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Any Other Care Experience</label>
              <textarea
                name="other_exp"
                value={formData.other_exp}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 h-32 ${errors.other_exp ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Describe any other relevant experience"
              />
              {errors.other_exp && <p className="text-red-500 text-sm mt-1">{errors.other_exp}</p>}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-teal-600">Personal Information</h2>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-lg font-semibold text-gray-700">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your first name"
                />
                {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg font-semibold text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your last name"
                />
                {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Resume (PDF)</label>
              <div className="flex items-center">
                <label className={`flex-1 flex items-center px-4 py-2 bg-white text-teal-600 rounded-lg border border-teal-600 cursor-pointer hover:bg-teal-50 ${errors.resume ? 'border-red-500' : ''}`}>
                  <FaUpload className="mr-2" />
                  <span>{formData.resume ? formData.resume.name : 'Upload Resume'}</span>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf"
                    className="hidden"
                  />
                </label>
              </div>
              {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(Object.keys(formData))) {
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, formData[key]);
        });

        const response = await axios.post('https://api.novajobs.us/api/vendors/nova-home-care', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Form submitted:', response.data);
        
        toast.success('Form submitted successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);
      } catch (error) {
        console.error('API Error:', error);
        toast.error('An error occurred while submitting the form. Please try again.', {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } else {
      toast.error('Please correct the errors in the form.', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-teal-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Job Seeker Application</h1>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300 ml-auto"
                >
                  Next
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ml-auto"
                >
                  Submit
                  <FaCheck className="ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerForm;