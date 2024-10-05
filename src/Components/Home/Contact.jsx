
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    selectedOption: '',
    additionalMessage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-br from-teal-0 to-teal-0 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row max-w-7xl mx-auto rounded-lg shadow-lg">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-teal-900 mb-6">
          Lets Talk: Reach Out To Us For Tailored Support!
        </h1>
        <p className="text-gray-700 mb-8">
          We are here to provide personalized assistance. Contact us to discuss your needs and find the best solutions for you.
        </p>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-teal-600 rounded-full p-4 mr-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-900">Any Doubts?</h3>
              <p className="text-gray-600">Interact With A Real Aide</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-teal-600 rounded-full p-4 mr-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-900">Location</h3>
              <p className="text-gray-600">1509 Lady St, Columbia, SC 29201</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-teal-600 rounded-full p-4 mr-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-900">Mail Us</h3>
              <p className="text-gray-600">Info@Novahome.Care</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-gray-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-teal-900 mb-6">
          Feel Free To Call Us If You Have Any Queries
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email Address*"
              className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <select
              name="selectedOption"
              className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              onChange={handleChange}
              required
            >
              <option value="">Select Option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div>
            <textarea
              name="additionalMessage"
              placeholder="Additional Message"
              className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              rows="5"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
