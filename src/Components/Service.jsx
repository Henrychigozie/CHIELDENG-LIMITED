import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterSection from "../Components/footer";
import { MdEventAvailable} from "react-icons/md";

const Service = ({ onNavigate }) => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    faders.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const serviceCards = [
    {
      title: "Standard Cleaning",
      desc: [
        "Dusting and surface wiping",
        "Sweeping, mopping, vacuuming",
        "Kitchen and bathroom cleaning",
        "Trash removal",
        "Interior window cleaning",
      ],
      // Residential cleaning example (Unsplash premium image)
      img:
        "https://plus.unsplash.com/premium_photo-1679920026812-d9b1ec223018?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Deep Cleaning",
      desc: [
        "Intensive kitchen and Bathroom scrubbing",
        "Baseboards and door frames",
        "Hard-to-reach areas",
        "Post-construction cleaning",
      ],
      // Unsplash keyword-based image (falls back to a relevant photo)
      img: "https://plus.unsplash.com/premium_photo-1733306538480-f0d59b6edadf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Move-In/Move-Out Cleaning",
      desc: [
        "Full room cleaning",
        "Cabinets and closets",
        "Deep kitchen and bathroom sanitation",
        "Floor cleaning",
        "Wall spot cleaning",
        "Appliances interior cleaning",
      ],
      img: "https://plus.unsplash.com/premium_photo-1726869777151-5f15071f2c77?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const priceList = [
    { item: "Move In / Move Out", price: "£50 - £80" },
    { item: "Standard Cleaning", price: "From £120" },
    { item: "Deep Cleaning", price: "Custom Quote" },
    { item: "Full Property Clean", price: "Competitive Rates" },
  ];

  return (
    <div className="bg-white font-sans text-slate-800">
      {/* SECTION 1: VISUAL SERVICE CARDS */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-sm font-bold text-[#56ab2f] uppercase tracking-widest mb-3">
              Professional Solutions
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#0b0642]">
              Our Cleaning Services
            </h3>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 px-4">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="fade-in group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px] flex flex-col justify-between"
              >
                <div>
                  {service.img ? (
                    <div className="mb-4 rounded-2xl overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  <h4 className="text-xl font-bold text-[#0b0642] mb-3">
                    {service.title}
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    {service.desc.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-[#56ab2f] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="w-full py-3 px-4 bg-white border-2 border-[#56ab2f] text-[#56ab2f] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#56ab2f] hover:text-white transition-all duration-300"
                >
                  <MdEventAvailable size={18} />
                  Book a Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING BREAKDOWN */}
      {/* <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0642] mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 mb-6 font-medium italic">No hidden costs. Just premium quality.</p>
          </div>

          <div className="fade-in bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-[#0b0642] mb-6 border-b pb-4">Standard Rates:</h3>
            <ul className="space-y-4">
              {priceList.map((p, i) => (
                <li key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-white transition-all border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#56ab2f]" size={20} />
                    <span className="font-semibold text-slate-700">{p.item}</span>
                  </div>
                  <span className="font-bold text-[#0b0642] text-lg">{p.price}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full mt-10 bg-gradient-to-t from-[#1c4b77] to-[#23486a] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2 active:scale-95"
            >
              <Calculator size={22} />
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section> */}

      <FooterSection />
    </div>
  );
};

export default Service;
