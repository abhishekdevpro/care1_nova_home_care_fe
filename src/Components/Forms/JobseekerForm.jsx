import { useState } from 'react';
import { ChevronRight, User, MapPin, Clipboard, CheckCircle } from 'lucide-react';

const JobseekerForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobType: '',
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    additionalCare: [],
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1 && !formData.jobType) {
      newErrors.jobType = 'Job type is required';
    }
    if (step === 2 && !formData.zipCode) {
      newErrors.zipCode = 'ZIP code is required';
    }
    if (step === 3) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (!formData.gender) newErrors.gender = 'Gender selection is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleCareSelection = (careType) => {
    const isSelected = formData.additionalCare.includes(careType);
    if (isSelected) {
      setFormData({
        ...formData,
        additionalCare: formData.additionalCare.filter((item) => item !== careType),
      });
    } else {
      setFormData({
        ...formData,
        additionalCare: [...formData.additionalCare, careType],
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">What kind of job are you looking for?</h2>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a job type</option>
              <option value="childCare">Child care</option>
              <option value="seniorCare">Senior care</option>
              <option value="housekeeping">Housekeeping</option>
              <option value="petCare">Pet care</option>
              <option value="tutoring">Tutoring</option>
            </select>
            {errors.jobType && <p className="text-red-500">{errors.jobType}</p>}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">Where do you want to work?</h2>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter ZIP code"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">Create an account</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
            <div className="flex space-x-4">
              <button
                onClick={() => setFormData({ ...formData, gender: 'female' })}
                className={`flex-1 p-2 border rounded ${
                  formData.gender === 'female' ? 'bg-teal-700 text-white' : 'border-gray-300'
                }`}
              >
                Female
              </button>
              <button
                onClick={() => setFormData({ ...formData, gender: 'male' })}
                className={`flex-1 p-2 border rounded ${
                  formData.gender === 'male' ? 'bg-teal-700 text-white' : 'border-gray-300'
                }`}
              >
                Male
              </button>
            </div>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">What other care services would you like to offer?</h2>
            <div className="flex flex-col gap-3">
              {['Child care', 'Senior care', 'Housekeeping', 'Pet care', 'Tutoring'].map((careType) => (
                <button
                  key={careType}
                  onClick={() => handleCareSelection(careType)}
                  className={`p-2 border rounded ${
                    formData.additionalCare.includes(careType) ? 'bg-teal-700 text-white' : 'border-gray-300'
                  }`}
                >
                  {careType}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between mb-6">
        <div className={`flex items-center ${step >= 1 ? 'text-teal-700' : 'text-gray-400'}`}>
          <User size={24} />
          <span className="ml-2">Job</span>
        </div>
        <div className={`flex items-center ${step >= 2 ? 'text-teal-700' : 'text-gray-400'}`}>
          <MapPin size={24} />
          <span className="ml-2">Location</span>
        </div>
        <div className={`flex items-center ${step >= 3 ? 'text-teal-700' : 'text-gray-400'}`}>
          <Clipboard size={24} />
          <span className="ml-2">Account</span>
        </div>
          <div className={`flex items-center ${step >= 3 ? 'text-teal-700' : 'text-gray-400'}`}>
            <CheckCircle size={24} />
            <span className="ml-2">Care Options</span>
          </div>
      </div>
      {renderStep()}
      <button
        onClick={handleNext}
        className="mt-6 w-full bg-teal-700 text-white p-2 rounded flex items-center justify-center"
      >
        {step === 4 ? 'Submit' : 'Next'}
        <ChevronRight size={20} className="ml-2" />
      </button>
    </div>
  );
};

export default JobseekerForm;
