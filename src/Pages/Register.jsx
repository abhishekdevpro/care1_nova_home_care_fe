import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import logo from "../assests/logo.png";
import { ArrowLeft } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    acceptTerms: false,
  });

  const navigate = useNavigate(); // Navigation hook

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log(formData);

    // Reset the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      acceptTerms: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-teal-50 p-4">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-teal-600 font-semibold py-2 px-4 bg-white/80 backdrop-blur-sm border border-teal-500 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Back to Home</span>
      </button>

      <div className="bg-white rounded-lg shadow-md max-w-6xl w-full flex flex-col md:flex-row">
        {/* Right side (Company Logo and Welcome Message) */}
         <div className="md:w-1/2 bg-teal-100 p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
              <img src={logo} className="w-40 h-auto mb-6"  alt="" />
              <h2 className="text-3xl font-bold text-teal-700 mb-4 ">
            Welcome to Nova Homecare
          </h2>
              <p className="text-gray-700">
            We are glad to have you here. Please fill out the form to register
            and start exploring our services.
          </p>
            </div>
          </div>

        {/* Left side (Form) */}
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-bold text-teal-600 text-center mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="********"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-400"
                required
              />
              <label className="text-gray-700">
                I accept the Terms and Policy
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
