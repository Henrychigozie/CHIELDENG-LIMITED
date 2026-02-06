import React, { useEffect, useRef } from "react";

const BookingPage = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // If BookingKoala gave you a <script> tag instead of just a URL:
    const script = document.createElement("script");
    script.src = "https://js.bookingkoala.com/static/embed.js"; // Standard Koala script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black tracking-tighter mb-4">
            BOOK YOUR <span className="text-yellow-400">CLEAN</span>
          </h1>
          <p className="text-white/50 uppercase tracking-widest text-sm font-bold">
            Professional Cleaning Services in Lagos & Abuja
          </p>
        </div>

        {/* BOOKING ENGINE CONTAINER */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-yellow-400/5 overflow-hidden border border-white/10">
          <iframe
            ref={iframeRef}
            title="Ozed Booking Form"
            /* REPLACE THE URL BELOW WITH YOUR ACTUAL BOOKINGKOALA SUBDOMAIN URL */
            src="https://ozedcleaning.bookingkoala.com/book" 
            width="100%"
            height="900" // Set a high initial height
            style={{ border: "none" }}
            className="w-full"
            allowFullScreen
          ></iframe>
        </div>

        {/* TRUST SIGNALS */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
           <p className="font-bold uppercase text-xs italic">✓ Insured & Bonded</p>
           <p className="font-bold uppercase text-xs italic">✓ Background Checked</p>
           <p className="font-bold uppercase text-xs italic">✓ 100% Satisfaction Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;