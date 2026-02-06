import React from "react";
// import emailjs from "emailjs-com"; // Uncomment if using EmailJS

const FloatingCallButton = () => {
  const handleCallAction = () => {
    // Uncomment and configure if using EmailJS
    // emailjs.send("service_id", "template_id", { message: "New call attempt from website!" });
    window.location.href = "tel:+234XXXXXXXXXX"; // Replace with your phone number
  };

  return (
    <button
      onClick={handleCallAction}
      className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
      aria-label="Call Ozed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-3.25a.75.75 0 00-.75.75v1.25c-3.728-.2-6.75-3.222-6.95-6.95h1.25a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75v0z"
        />
      </svg>
    </button>
  );
};

export default FloatingCallButton;
