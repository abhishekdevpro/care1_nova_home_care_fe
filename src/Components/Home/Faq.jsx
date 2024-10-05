import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import img from '../../assests/Img4.jpg'
const FaqSection = () => {
  const [open, setOpen] = useState(0); // Default open first question

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What services are typically provided in an old age home?",
      answer:
        "In an old age home, residents receive help with daily activities, medical care, balanced meals, and engage in social activities. The facility also provides housekeeping and transportation for appointments and outings.",
    },
    {
      question: "How do I choose the right old age home for myself or a loved one?",
      answer:
        "Selecting the right old age home involves evaluating the services provided, visiting the facility, speaking with staff, and considering the specific needs and preferences of the resident.",
    },
    {
      question: "What are the costs associated with living in an old age home?",
      answer:
        "Costs can vary based on location, level of care required, and amenities offered. It's important to review the pricing structure and what is included in the fees.",
    },
    {
      question: "Can residents bring their own furniture and personal belongings?",
      answer:
        "Many old age homes allow residents to bring personal belongings, including furniture, to make their space feel more like home. It's best to check with the facility's policies.",
    },
    {
      question: "Do old age homes provide medical care?",
      answer:
        "Yes, old age homes typically provide basic medical care, including regular health checkups, medication management, and access to healthcare professionals.",
    },
    {
      question: "What happens if a resident's health needs change over time?",
      answer:
        "If a resident's health needs change, the facility may adjust their care plan to provide additional support. This could include increased medical supervision, therapy services, or transferring to a more specialized care unit.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%] mb-8 md:mb-0">
          <img
            src={img}
            alt="Caregiver assisting elderly person"
            className="w-full h-screen object-cover rounded-lg"
          />
        </div>
        <div className="md:w-[60%] md:pl-12">
          <h2 className="text-teal-600 text-sm font-semibold uppercase">
            Do You Have Any Queries?
          </h2>
          <h3 className="text-4xl font-bold text-teal-900 mb-10">
            We Address Your Essential Queries
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-300 pb-4 ${
                  open === index ? "open" : ""
                }`}
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <span className="text-teal-600 text-2xl">
                    {open === index ? <FiMinus /> : <FiPlus />}
                  </span>
                  <h4 className="text-xl md:-2xl font-semibold text-teal-800">
                    {faq.question}
                  </h4>
                </div>
                {open === index && (
                  <p className="text-gray-700 text-md md:text-xl mt-4 transition-all ease-in-out duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
