// // // import React, { useState } from 'react';

// // // const MultiStepForm = () => {
// // //   const [step, setStep] = useState(1);
// // //   const [formData, setFormData] = useState({
// // //     zipCode: '',
// // //     careDate: '',
// // //     careType: '',
// // //     whoNeedsCare: '',
// // //     additionalCare: [],
// // //     email: '',
// // //   });
// // //   const [errors, setErrors] = useState({});
// // //   const addChild = () => {
// // //     setFormData({
// // //       ...formData,
// // //       children: [...formData.children, { birthDate: '' }],
// // //     });
// // //   };

// // //   const validate = () => {
// // //     const newErrors = {};
// // //     switch (step) {
// // //       case 1:
// // //         if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
// // //         break;
// // //       case 2:
// // //         if (!formData.careDate) newErrors.careDate = 'Care date is required';
// // //         break;
// // //       case 3:
// // //         if (!formData.careType) newErrors.careType = 'Care type is required';
// // //         break;
// // //       case 4:
// // //         if (!formData.whoNeedsCare) newErrors.whoNeedsCare = 'Who needs care is required';
// // //         break;
// // //       case 5:
// // //         if (formData.additionalCare.length === 0) newErrors.additionalCare = 'Please select at least one additional care option';
// // //         break;
// // //       case 6:
// // //         if (!formData.email) newErrors.email = 'Email is required';
// // //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
// // //         break;
// // //       // Add validation for payment step if needed
// // //       default:
// // //         break;
// // //     }
// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleNext = () => {
// // //     if (validate()) {
// // //       setStep(step + 1);
// // //       window.sessionStorage.setItem('formData', JSON.stringify(formData));
// // //       console.log(formData);
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleCheckboxChange = (e) => {
// // //     const { name, value, checked } = e.target;
// // //     setFormData((prev) => {
// // //       const selectedOptions = prev[name] || [];
// // //       if (checked) {
// // //         selectedOptions.push(value);
// // //       } else {
// // //         return { ...prev, [name]: selectedOptions.filter((option) => option !== value) };
// // //       }
// // //       return { ...prev, [name]: selectedOptions };
// // //     });
// // //   };

// // //   const formStyles = "p-6 md:p-4 bg-white rounded shadow-lg max-w-md mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 ";

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // //       <div className={formStyles}>
// // //         {step === 1 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">Where do you need care?</h2>
// // //             <input
// // //               type="text"
// // //               name="zipCode"
// // //               placeholder="ZIP code"
// // //               value={formData.zipCode}
// // //               onChange={handleChange}
// // //               className="border rounded w-full p-2 mb-4"
// // //             />
// // //             {errors.zipCode && <p className="text-red-500 text-sm mb-2">{errors.zipCode}</p>}
// // //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}
// // //         {step === 2 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">When do you need care?</h2>
// // //             <select
// // //               name="careDate"
// // //               value={formData.careDate}
// // //               onChange={handleChange}
// // //               className="border rounded w-full p-2 mb-4"
// // //             >
// // //               <option value="" disabled>Select a date</option>
// // //               <option value="Today">Right Now</option>
// // //               <option value="Tomorrow">Within a week</option>
// // //               <option value="This Week">In 1-2 months</option>
// // //               <option value="Next Week">Just browsing</option>
// // //             </select>
// // //             {errors.careDate && <p className="text-red-500 text-sm mb-2">{errors.careDate}</p>}
// // //             <button onClick={handleNext} className="bg-teal-800 text-white px-4 py-2 rounded-full w-full">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}
// // //         {step === 3 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">What kind of care do you need?</h2>
// // //             <select
// // //               name="careType"
// // //               value={formData.careType}
// // //               onChange={handleChange}
// // //               className="border rounded w-full p-2 mb-4"
// // //             >
// // //               <option value="" disabled>Select specific child care</option>
// // //           <option value="Part Time Child Care">Part Time Child Care</option>
// // //           <option value="After School Child Care">After School Child Care</option>
// // //           <option value="Hourly Child Care">Hourly Child Care</option>
// // //           <option value="Night Child Care">Night Child Care</option>
// // //           <option value="Weekend Child Care">Weekend Child Care</option>
// // //           <option value="Before School Child Care">Before School Child Care</option>
// // //           <option value="Early Morning Child Care">Early Morning Child Care</option>
// // //           <option value="Child Care Centers">Child Care Centers</option>
// // //           <option value="Camps">Camps</option>
// // //           <option value="Drop-In Child Care">Drop-In Child Care</option>
// // //           <option value="Head Start Programs">Head Start Programs</option>
// // //           <option value="Infant Child Care">Infant Child Care</option>
// // //           <option value="After School Transportation">After School Transportation</option>
// // //           <option value="In Home Child Care">In Home Child Care</option>
// // //           <option value="Bilingual Child Care">Bilingual Child Care</option>
// // //             </select>
// // //             {errors.careType && <p className="text-red-500 text-sm mb-2">{errors.careType}</p>}
// // //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}
// // //         {step === 4 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">Who needs care?</h2>
      
// // //       {formData.children.map((child, index) => (
// // //         <div key={index} className="mb-4">
// // //           <label className="block mb-2 font-bold">Child {index + 1}</label>
// // //           <input
// // //             type="text"
// // //             name="birthDate"
// // //             placeholder="Birth Month and Year (MM/YYYY)"
// // //             value={child.birthDate}
// // //             onChange={(e) => handleChange(e, index)}
// // //             className="border rounded w-full p-2 mb-2"
// // //           />
// // //           {errors.birthDate && <p className="text-red-500 text-sm mb-2">{errors.birthDate}</p>}
// // //         </div>
// // //       ))}

// // //       {/* Button to add another child */}
// // //       <button
// // //         onClick={addChild}
// // //         className="flex items-center text-blue-600 mb-4"
// // //       >
// // //         <span className="mr-2 text-xl">+</span> Add another child
// // //       </button>

// // //       {/* Checkbox for "I'm expecting" */}
// // //       <div className="flex items-center mb-4">
// // //         <input
// // //           type="checkbox"
// // //           name="expecting"
// // //           checked={formData.expecting}
// // //           onChange={handleChange}
// // //           className="mr-2"
// // //         />
// // //         <label>I am expecting</label>
// // //       </div>

// // //       {/* Next button */}
// // //       <button
// // //         onClick={handleNext}
// // //         className="bg-red-500 text-white px-4 py-2 rounded-full w-full"
// // //       >
// // //         Next
// // //       </button>
// // //           </>
// // //         )}
// // //         {step === 5 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">Do you need any other type of care?</h2>
// // //             <div className="mb-4">
// // //               <label className="flex items-center">
// // //                 <input
// // //                   type="checkbox"
// // //                   name="additionalCare"
// // //                   value="Child care"
// // //                   checked={formData.additionalCare.includes('Child care')}
// // //                   onChange={handleCheckboxChange}
// // //                   className="mr-2"
// // //                 />
// // //                 Child care
// // //               </label>
// // //               <label className="flex items-center">
// // //                 <input
// // //                   type="checkbox"
// // //                   name="additionalCare"
// // //                   value="Senior care"
// // //                   checked={formData.additionalCare.includes('Senior care')}
// // //                   onChange={handleCheckboxChange}
// // //                   className="mr-2"
// // //                 />
// // //                 Senior care
// // //               </label>
// // //               <label className="flex items-center">
// // //                 <input
// // //                   type="checkbox"
// // //                   name="additionalCare"
// // //                   value="Housekeeping"
// // //                   checked={formData.additionalCare.includes('Housekeeping')}
// // //                   onChange={handleCheckboxChange}
// // //                   className="mr-2"
// // //                 />
// // //                 Housekeeping
// // //               </label>
// // //               <label className="flex items-center">
// // //                 <input
// // //                   type="checkbox"
// // //                   name="additionalCare"
// // //                   value="Pet care"
// // //                   checked={formData.additionalCare.includes('Pet care')}
// // //                   onChange={handleCheckboxChange}
// // //                   className="mr-2"
// // //                 />
// // //                 Pet care
// // //               </label>
// // //             </div>
// // //             {errors.additionalCare && <p className="text-red-500 text-sm mb-2">{errors.additionalCare}</p>}
// // //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}
// // //         {step === 6 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">Enter your email for verification</h2>
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               placeholder="Email address"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               className="border rounded w-full p-2 mb-4"
// // //             />
// // //             {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
// // //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}
// // //         {step === 7 && (
// // //           <>
// // //             <h2 className="text-lg mb-4">Payment Information</h2>
// // //             {/* Add your payment form fields here */}
// // //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// // //               Submit
// // //             </button>
// // //           </>
// // //         )}
// // //         {step === 8 && (
// // //           <div className="text-center">
// // //             <h2 className="text-lg mb-4">Form Completed!</h2>
// // //             <p>Thank you for your submission.</p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MultiStepForm;
// // import React, { useState } from 'react';

// // const MultiStepForm = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     zipCode: '',
// //     careDate: '',
// //     careType: '',
// //     children: [{ birthDate: '' }],
// //     expecting: false,
// //     additionalCare: [],
// //     email: '',
// //   });
// //   const [errors, setErrors] = useState({});

// //   const addChild = () => {
// //     setFormData({
// //       ...formData,
// //       children: [...formData.children, { birthDate: '' }],
// //     });
// //   };

// //   const validate = () => {
// //     const newErrors = {};
// //     switch (step) {
// //       case 1:
// //         if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
// //         break;
// //       case 2:
// //         if (!formData.careDate) newErrors.careDate = 'Care date is required';
// //         break;
// //       case 3:
// //         if (!formData.careType) newErrors.careType = 'Care type is required';
// //         break;
// //       case 4:
// //         if (formData.children.length === 0 && !formData.expecting) {
// //           newErrors.children = 'Please add at least one child or select "I am expecting"';
// //         }
// //         formData.children.forEach((child, index) => {
// //           if (!child.birthDate) {
// //             newErrors[`birthDate${index}`] = 'Birth date is required';
// //           }
// //         });
// //         break;
// //       case 5:
// //         if (formData.additionalCare.length === 0) newErrors.additionalCare = 'Please select at least one additional care option';
// //         break;
// //       case 6:
// //         if (!formData.email) newErrors.email = 'Email is required';
// //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
// //         break;
// //       default:
// //         break;
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleNext = () => {
// //     if (validate()) {
// //       setStep(step + 1);
// //       window.sessionStorage.setItem('formData', JSON.stringify(formData));
// //       console.log(formData);
// //     }
// //   };

// //   const handleChange = (e, index) => {
// //     const { name, value, type, checked } = e.target;
// //     if (name === 'birthDate') {
// //       const updatedChildren = [...formData.children];
// //       updatedChildren[index] = { ...updatedChildren[index], birthDate: value };
// //       setFormData({ ...formData, children: updatedChildren });
// //     } else if (type === 'checkbox' && name === 'expecting') {
// //       setFormData({ ...formData, [name]: checked });
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   const handleCheckboxChange = (e) => {
// //     const { name, value, checked } = e.target;
// //     setFormData((prev) => {
// //       const selectedOptions = prev[name] || [];
// //       if (checked) {
// //         return { ...prev, [name]: [...selectedOptions, value] };
// //       } else {
// //         return { ...prev, [name]: selectedOptions.filter((option) => option !== value) };
// //       }
// //     });
// //   };

// //   const formStyles = "p-6 md:p-4 bg-white rounded shadow-lg max-w-md mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 ";

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className={formStyles}>
// //         {step === 1 && (
// //           <>
// //             <h2 className="text-lg mb-4">Where do you need care?</h2>
// //             <input
// //               type="text"
// //               name="zipCode"
// //               placeholder="ZIP code"
// //               value={formData.zipCode}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2 mb-4"
// //             />
// //             {errors.zipCode && <p className="text-red-500 text-sm mb-2">{errors.zipCode}</p>}
// //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// //               Next
// //             </button>
// //           </>
// //         )}
// //         {step === 2 && (
// //           <>
// //             <h2 className="text-lg mb-4">When do you need care?</h2>
// //             <select
// //               name="careDate"
// //               value={formData.careDate}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2 mb-4"
// //             >
// //               <option value="" disabled>Select a date</option>
// //               <option value="Today">Right Now</option>
// //               <option value="Tomorrow">Within a week</option>
// //               <option value="This Week">In 1-2 months</option>
// //               <option value="Next Week">Just browsing</option>
// //             </select>
// //             {errors.careDate && <p className="text-red-500 text-sm mb-2">{errors.careDate}</p>}
// //             <button onClick={handleNext} className="bg-teal-800 text-white px-4 py-2 rounded-full w-full">
// //               Next
// //             </button>
// //           </>
// //         )}
// //         {step === 3 && (
// //           <>
// //             <h2 className="text-lg mb-4">What kind of care do you need?</h2>
// //             <select
// //               name="careType"
// //               value={formData.careType}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2 mb-4"
// //             >
// //               <option value="" disabled>Select specific child care</option>
// //               <option value="Part Time Child Care">Part Time Child Care</option>
// //               <option value="After School Child Care">After School Child Care</option>
// //               <option value="Hourly Child Care">Hourly Child Care</option>
// //               <option value="Night Child Care">Night Child Care</option>
// //               <option value="Weekend Child Care">Weekend Child Care</option>
// //               <option value="Before School Child Care">Before School Child Care</option>
// //               <option value="Early Morning Child Care">Early Morning Child Care</option>
// //               <option value="Child Care Centers">Child Care Centers</option>
// //               <option value="Camps">Camps</option>
// //               <option value="Drop-In Child Care">Drop-In Child Care</option>
// //               <option value="Head Start Programs">Head Start Programs</option>
// //               <option value="Infant Child Care">Infant Child Care</option>
// //               <option value="After School Transportation">After School Transportation</option>
// //               <option value="In Home Child Care">In Home Child Care</option>
// //               <option value="Bilingual Child Care">Bilingual Child Care</option>
// //             </select>
// //             {errors.careType && <p className="text-red-500 text-sm mb-2">{errors.careType}</p>}
// //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// //               Next
// //             </button>
// //           </>
// //         )}
// //         {step === 4 && (
// //           <>
// //             <h2 className="text-lg mb-4">Who needs care?</h2>
      
// //             {formData.children.map((child, index) => (
// //               <div key={index} className="mb-4">
// //                 <label className="block mb-2 font-bold">Child {index + 1}</label>
// //                 <input
// //                   type="text"
// //                   name="birthDate"
// //                   placeholder="Birth Month and Year (MM/YYYY)"
// //                   value={child.birthDate}
// //                   onChange={(e) => handleChange(e, index)}
// //                   className="border rounded w-full p-2 mb-2"
// //                 />
// //                 {errors[`birthDate${index}`] && <p className="text-red-500 text-sm mb-2">{errors[`birthDate${index}`]}</p>}
// //               </div>
// //             ))}

// //             <button
// //               onClick={addChild}
// //               className="flex items-center text-blue-600 mb-4"
// //             >
// //               <span className="mr-2 text-xl">+</span> Add another child
// //             </button>

// //             <div className="flex items-center mb-4">
// //               <input
// //                 type="checkbox"
// //                 name="expecting"
// //                 checked={formData.expecting}
// //                 onChange={handleChange}
// //                 className="mr-2"
// //               />
// //               <label>I am expecting</label>
// //             </div>

// //             {errors.children && <p className="text-red-500 text-sm mb-2">{errors.children}</p>}

// //             <button
// //               onClick={handleNext}
// //               className="bg-teal-700 text-white px-4 py-2 rounded-full w-full"
// //             >
// //               Next
// //             </button>
// //           </>
// //         )}
// //         {step === 5 && (
// //           <>
// //             <h2 className="text-lg mb-4">Do you need any other type of care?</h2>
// //             <div className="mb-4">
// //               <label className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   name="additionalCare"
// //                   value="Child care"
// //                   checked={formData.additionalCare.includes('Child care')}
// //                   onChange={handleCheckboxChange}
// //                   className="mr-2"
// //                 />
// //                 Child care
// //               </label>
// //               <label className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   name="additionalCare"
// //                   value="Senior care"
// //                   checked={formData.additionalCare.includes('Senior care')}
// //                   onChange={handleCheckboxChange}
// //                   className="mr-2"
// //                 />
// //                 Senior care
// //               </label>
// //               <label className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   name="additionalCare"
// //                   value="Housekeeping"
// //                   checked={formData.additionalCare.includes('Housekeeping')}
// //                   onChange={handleCheckboxChange}
// //                   className="mr-2"
// //                 />
// //                 Housekeeping
// //               </label>
// //               <label className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   name="additionalCare"
// //                   value="Pet care"
// //                   checked={formData.additionalCare.includes('Pet care')}
// //                   onChange={handleCheckboxChange}
// //                   className="mr-2"
// //                 />
// //                 Pet care
// //               </label>
// //             </div>
// //             {errors.additionalCare && <p className="text-red-500 text-sm mb-2">{errors.additionalCare}</p>}
// //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// //               Next
// //             </button>
// //           </>
// //         )}
// //         {step === 6 && (
// //           <>
// //             <h2 className="text-lg mb-4">Enter your email for verification</h2>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email address"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2 mb-4"
// //             />
// //             {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
// //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// //               Next
// //             </button>
// //           </>
// //         )}
// //         {step === 7 && (
// //           <>
// //             <h2 className="text-lg mb-4">Payment Information</h2>
// //             {/* Add your payment form fields here */}
// //             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
// //               Submit
// //             </button>
// //           </>
// //         )}
// //         {step === 8 && (
// //           <div className="text-center">
// //             <h2 className="text-lg mb-4">Form Completed!</h2>
// //             <p>Thank you for your submission.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MultiStepForm;

// import  { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const MultiStepForm = () => {
//   const location = useLocation();
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     zipCode: '',
//     careDate: '',
//     careType: '',
//     children: [{ birthDate: '' }],
//     expecting: false,
//     additionalCare: [],
//     email: '',
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const { zipCode } = location.state || {};
//     if (zipCode) {
//       setFormData(prevData => ({
//         ...prevData,
//         zipCode
//       }));
//     }
//   }, [location]);

//   const addChild = () => {
//     setFormData({
//       ...formData,
//       children: [...formData.children, { birthDate: '' }],
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     switch (step) {
//       case 1:
//         if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
//         break;
//       case 2:
//         if (!formData.careDate) newErrors.careDate = 'Care date is required';
//         break;
//       case 3:
//         if (!formData.careType) newErrors.careType = 'Care type is required';
//         break;
//       case 4:
//         if (formData.children.length === 0 && !formData.expecting) {
//           newErrors.children = 'Please add at least one child or select "I am expecting"';
//         }
//         formData.children.forEach((child, index) => {
//           if (!child.birthDate) {
//             newErrors[`birthDate${index}`] = 'Birth date is required';
//           }
//         });
//         break;
//       case 5:
//         if (formData.additionalCare.length === 0) newErrors.additionalCare = 'Please select at least one additional care option';
//         break;
//       case 6:
//         if (!formData.email) newErrors.email = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//         break;
//       default:
//         break;
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validate()) {
//       setStep(step + 1);
//       window.sessionStorage.setItem('formData', JSON.stringify(formData));
//       console.log(formData);
//     }
//   };

//   const handleChange = (e, index) => {
//     const { name, value, type, checked } = e.target;
//     if (name === 'birthDate') {
//       const updatedChildren = [...formData.children];
//       updatedChildren[index] = { ...updatedChildren[index], birthDate: value };
//       setFormData({ ...formData, children: updatedChildren });
//     } else if (type === 'checkbox' && name === 'expecting') {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFormData((prev) => {
//       const selectedOptions = prev[name] || [];
//       if (checked) {
//         return { ...prev, [name]: [...selectedOptions, value] };
//       } else {
//         return { ...prev, [name]: selectedOptions.filter((option) => option !== value) };
//       }
//     });
//   };

//   const formStyles = "p-6 md:p-4 bg-white rounded shadow-lg max-w-md mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3";

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className={formStyles}>
//         {step === 1 && (
//           <>
//             <h2 className="text-lg mb-4">Where do you need care?</h2>
//             <input
//               type="text"
//               name="zipCode"
//               placeholder="ZIP code"
//               value={formData.zipCode}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             />
//             {errors.zipCode && <p className="text-red-500 text-sm mb-2">{errors.zipCode}</p>}
//             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 2 && (
//           <>
//             <h2 className="text-lg mb-4">When do you need care?</h2>
//             <select
//               name="careDate"
//               value={formData.careDate}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             >
//               <option value="" disabled>Select a date</option>
//               <option value="Today">Right Now</option>
//               <option value="Tomorrow">Within a week</option>
//               <option value="This Week">In 1-2 months</option>
//               <option value="Next Week">Just browsing</option>
//             </select>
//             {errors.careDate && <p className="text-red-500 text-sm mb-2">{errors.careDate}</p>}
//             <button onClick={handleNext} className="bg-teal-800 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 3 && (
//           <>
//             <h2 className="text-lg mb-4">What kind of care do you need?</h2>
//             <select
//               name="careType"
//               value={formData.careType}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             >
//               <option value="" disabled>Select specific child care</option>
//               <option value="Part Time Child Care">Part Time Child Care</option>
//               <option value="After School Child Care">After School Child Care</option>
//               <option value="Hourly Child Care">Hourly Child Care</option>
//               <option value="Night Child Care">Night Child Care</option>
//               <option value="Weekend Child Care">Weekend Child Care</option>
//               <option value="Before School Child Care">Before School Child Care</option>
//               <option value="Early Morning Child Care">Early Morning Child Care</option>
//               <option value="Child Care Centers">Child Care Centers</option>
//               <option value="Camps">Camps</option>
//               <option value="Drop-In Child Care">Drop-In Child Care</option>
//               <option value="Head Start Programs">Head Start Programs</option>
//               <option value="Infant Child Care">Infant Child Care</option>
//               <option value="After School Transportation">After School Transportation</option>
//               <option value="In Home Child Care">In Home Child Care</option>
//               <option value="Bilingual Child Care">Bilingual Child Care</option>
//             </select>
//             {errors.careType && <p className="text-red-500 text-sm mb-2">{errors.careType}</p>}
//             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 4 && (
//           <>
//             <h2 className="text-lg mb-4">Who needs care?</h2>
//             {formData.children.map((child, index) => (
//               <div key={index} className="mb-4">
//                 <label className="block mb-2 font-bold">Child {index + 1}</label>
//                 <input
//                   type="text"
//                   name="birthDate"
//                   placeholder="Birth Month and Year (MM/YYYY)"
//                   value={child.birthDate}
//                   onChange={(e) => handleChange(e, index)}
//                   className="border rounded w-full p-2 mb-2"
//                 />
//                 {errors[`birthDate${index}`] && <p className="text-red-500 text-sm mb-2">{errors[`birthDate${index}`]}</p>}
//               </div>
//             ))}
//             <button
//               onClick={addChild}
//               className="flex items-center text-blue-600 mb-4"
//             >
//               <span className="mr-2 text-xl">+</span> Add another child
//             </button>
//             <div className="flex items-center mb-4">
//               <input
//                 type="checkbox"
//                 name="expecting"
//                 checked={formData.expecting}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <label>I am expecting</label>
//             </div>
//             {errors.children && <p className="text-red-500 text-sm mb-2">{errors.children}</p>}
//             <button
//               onClick={handleNext}
//               className="bg-teal-700 text-white px-4 py-2 rounded-full w-full"
//             >
//               Next
//             </button>
//           </>
//         )}
//         {step === 5 && (
//           <>
//             <h2 className="text-lg mb-4">Do you need any other type of care?</h2>
//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="additionalCare"
//                   value="Child care"
//                   checked={formData.additionalCare.includes('Child care')}
//                   onChange={handleCheckboxChange}
//                   className="mr-2"
//                 />
//                 Child care
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="additionalCare"
//                   value="Senior care"
//                   checked={formData.additionalCare.includes('Senior care')}
//                   onChange={handleCheckboxChange}
//                   className="mr-2"
//                 />
//                 Senior care
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="additionalCare"
//                   value="Housekeeping"
//                   checked={formData.additionalCare.includes('Housekeeping')}
//                   onChange={handleCheckboxChange}
//                   className="mr-2"
//                 />
//                 Housekeeping
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="additionalCare"
//                   value="Pet care"
//                   checked={formData.additionalCare.includes('Pet care')}
//                   onChange={handleCheckboxChange}
//                   className="mr-2"
//                 />
//                 Pet care
//               </label>
//             </div>
//             {errors.additionalCare && <p className="text-red-500 text-sm mb-2">{errors.additionalCare}</p>}
//             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 6 && (
//           <>
//             <h2 className="text-lg mb-4">Enter your email for verification</h2>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={formData.email}
//               onChange={handleChange}
//               className="border rounded w-full p-2 mb-4"
//             />
//             {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
//             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
//               Next
//             </button>
//           </>
//         )}
//         {step === 7 && (
//           <>
//             <h2 className="text-lg mb-4">Payment Information</h2>
//             {/* Add your payment form fields here */}
//             <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
//               Submit
//             </button>
//           </>
//         )}
//         {step === 8 && (
//           <div className="text-center">
//             <h2 className="text-lg mb-4">Form Completed!</h2>
//             <p>Thank you for your submission.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;


import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const MultiStepForm = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    startDate: '',
    careType: '',
    childrenInfo: [{ birthDate: '' }],
    pregnant: false,
    additionalCareTypes: [],
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  useEffect(() => {
    const { zipCode } = location.state || {};
    if (zipCode) {
      setFormData(prevData => ({
        ...prevData,
        zipCode
      }));
    }
  }, [location]);

  const addChild = () => {
    setFormData({
      ...formData,
      childrenInfo: [...formData.childrenInfo, { birthDate: '' }],
    });
  };

  const validate = () => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
        break;
      case 2:
        if (!formData.startDate) newErrors.startDate = 'Start date is required';
        break;
      case 3:
        if (!formData.careType) newErrors.careType = 'Care type is required';
        break;
      case 4:
        if (formData.childrenInfo.length === 0 && !formData.pregnant) {
          newErrors.childrenInfo = 'Please add at least one child or select "I am pregnant"';
        }
        formData.childrenInfo.forEach((child, index) => {
          if (!child.birthDate) {
            newErrors[`birthDate${index}`] = 'Birth date is required';
          }
        });
        break;
      case 5:
        if (formData.additionalCareTypes.length === 0) newErrors.additionalCareTypes = 'Please select at least one additional care option';
        break;
      case 6:
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      if (step === 6) {
        handleSubmit();
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    if (name === 'birthDate') {
      const updatedChildrenInfo = [...formData.childrenInfo];
      updatedChildrenInfo[index] = { ...updatedChildrenInfo[index], birthDate: value };
      setFormData({ ...formData, childrenInfo: updatedChildrenInfo });
    } else if (type === 'checkbox' && name === 'pregnant') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const selectedOptions = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...selectedOptions, value] };
      } else {
        return { ...prev, [name]: selectedOptions.filter((option) => option !== value) };
      }
    });
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch('https://api.novajobs.us/api/vendors/nova-home-care', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     console.log('Success:', data);
  //     setStep(7); // Move to success step
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setErrors({ submit: 'An error occurred while submitting the form. Please try again.' });
  //   }
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const formDataObj = new FormData();
      
  //     // Assuming formData is an object with key-value pairs
  //     Object.keys(formData).forEach(key => {
  //       formDataObj.append(key, formData[key]);
  //     });
  
  //     const response = await axios.post('https://api.novajobs.us/api/vendors/nova-home-care', formDataObj, {
  //       headers: {
          // 'Content-Type': 'multipart/form-data',
  //       },
  //     });
  
  //     console.log('Success:', response.data);
  //     setStep(7); // Move to success step
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setErrors({ submit: 'An error occurred while submitting the form. Please try again.' });
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const postData = {
        email_for: 'find_care',
        zipcode: formData.zipCode,
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phoneNumber,
      };

      const response = await axios.post('https://api.novajobs.us/api/vendors/nova-home-care', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Success:', response.data);
      navigate('/')
      setStep(7); // Move to success step
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'An error occurred while submitting the form. Please try again.' });
    }
  };
  const formStyles = "p-6 md:p-4 bg-white rounded shadow-lg max-w-md mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={formStyles}>
        {step === 1 && (
          <>
            <h2 className="text-lg mb-4">Where do you need care?</h2>
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP code"
              value={formData.zipCode}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.zipCode && <p className="text-red-500 text-sm mb-2">{errors.zipCode}</p>}
            <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-lg mb-4">When do you need care?</h2>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.startDate && <p className="text-red-500 text-sm mb-2">{errors.startDate}</p>}
            <button onClick={handleNext} className="bg-teal-800 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-lg mb-4">What kind of care do you need?</h2>
            <select
              name="careType"
              value={formData.careType}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            >
              <option value="" disabled>Select specific child care</option>
              <option value="Part Time Child Care">Part Time Child Care</option>
              <option value="After School Child Care">After School Child Care</option>
              <option value="Hourly Child Care">Hourly Child Care</option>
              <option value="Night Child Care">Night Child Care</option>
              <option value="Weekend Child Care">Weekend Child Care</option>
              <option value="Before School Child Care">Before School Child Care</option>
              <option value="Early Morning Child Care">Early Morning Child Care</option>
              <option value="Child Care Centers">Child Care Centers</option>
              <option value="Camps">Camps</option>
              <option value="Drop-In Child Care">Drop-In Child Care</option>
              <option value="Head Start Programs">Head Start Programs</option>
              <option value="Infant Child Care">Infant Child Care</option>
              <option value="After School Transportation">After School Transportation</option>
              <option value="In Home Child Care">In Home Child Care</option>
              <option value="Bilingual Child Care">Bilingual Child Care</option>
            </select>
            {errors.careType && <p className="text-red-500 text-sm mb-2">{errors.careType}</p>}
            <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-lg mb-4">Who needs care?</h2>
            {formData.childrenInfo.map((child, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2 font-bold">Child {index + 1}</label>
                <input
                  type="date"
                  name="birthDate"
                  value={child.birthDate}
                  onChange={(e) => handleChange(e, index)}
                  className="border rounded w-full p-2 mb-2"
                />
                {errors[`birthDate${index}`] && <p className="text-red-500 text-sm mb-2">{errors[`birthDate${index}`]}</p>}
              </div>
            ))}
            <button
              onClick={addChild}
              className="flex items-center text-blue-600 mb-4"
            >
              <span className="mr-2 text-xl">+</span> Add another child
            </button>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="pregnant"
                checked={formData.pregnant}
                onChange={handleChange}
                className="mr-2"
              />
              <label>I am pregnant</label>
            </div>
            {errors.childrenInfo && <p className="text-red-500 text-sm mb-2">{errors.childrenInfo}</p>}
            <button
              onClick={handleNext}
              className="bg-teal-700 text-white px-4 py-2 rounded-full w-full"
            >
              Next
            </button>
          </>
        )}
        {step === 5 && (
          <>
            <h2 className="text-lg mb-4">Do you need any other type of care?</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCareTypes"
                  value="Child care"
                  checked={formData.additionalCareTypes.includes('Child care')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Child care
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCareTypes"
                  value="Senior care"
                  checked={formData.additionalCareTypes.includes('Senior care')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Senior care
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCareTypes"
                  value="Housekeeping"
                  checked={formData.additionalCareTypes.includes('Housekeeping')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Housekeeping
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCareTypes"
                  value="Pet care"
                  checked={formData.additionalCareTypes.includes('Pet care')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Pet care
              </label>
            </div>
            {errors.additionalCareTypes && <p className="text-red-500 text-sm mb-2">{errors.additionalCareTypes}</p>}
            <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 6 && (
          <>
            <h2 className="text-lg mb-4">Enter your contact information</h2>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.firstName && <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.lastName && <p className="text-red-500 text-sm mb-2">{errors.lastName}</p>}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mb-2">{errors.phoneNumber}</p>}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.address && <p className="text-red-500 text-sm mb-2">{errors.address}</p>}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.city && <p className="text-red-500 text-sm mb-2">{errors.city}</p>}
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.state && <p className="text-red-500 text-sm mb-2">{errors.state}</p>}
            <button onClick={handleNext} className="bg-teal-700 text-white px-4 py-2 rounded-full w-full">
              Submit
            </button>
            {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
          </>)}
        {step === 7 && (
          <div className="text-center">
            <h2 className="text-lg mb-4">Form Submitted Successfully!</h2>
            <p>Thank you for your submission. We will be in touch shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;