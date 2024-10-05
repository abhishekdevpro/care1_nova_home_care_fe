const StepsToJoin = () => {
  const steps = [
    {
      id: 1,
      title: "Application",
      description:
        "Easily apply with our streamlined process, designed for convenience and efficiency.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 11.25V9.75a7.5 7.5 0 10-15 0v1.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.5 11.25V17.25C5.5 19.5 7 21 9.25 21H14.75C17 21 18.5 19.5 18.5 17.25V11.25"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Health Certificate",
      description:
        "Provide a health certificate to ensure safety and well-being for all participants.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Get On Board",
      description:
        "Join us quickly and effortlessly with our straightforward onboarding process.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12l3 3L21 6m-7 6h-7v8h7"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-yellow-100  py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-teal-700 text-lg font-bold uppercase">Join With Us</h2>
        <h3 className="text-4xl font-bold text-teal-900">
          Steps To Join Nova Home Care
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="text-center">
            <div className="mb-4">{step.icon}</div>
            <h4 className="text-xl font-semibold text-teal-900">{step.title}</h4>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-teal-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-teal-800">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default StepsToJoin;
