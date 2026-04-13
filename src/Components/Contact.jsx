import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import FooterSection from "./footer.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "447867045156";

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = `Website enquiry from ${name || "visitor"}`;
    const body = `${message}\n\nFrom: ${name || ""} (${email || ""})\nPhone: ${phone || ""}\nAddress: ${address || ""}`;

    const mailTo = "Chieldengservices@gmail.com";
    window.location.href = `mailto:${mailTo}?cc=${encodeURIComponent}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${name || "a visitor"}.\n\n${message}\n\nContact: ${email || ""}\nPhone: ${phone || ""}\nAddress: ${address || ""}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-25">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d5a84]">
            Get in Touch
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you — whether it's a question about services,
            pricing, or to request a quote. Choose the method that suits you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            <form
              className="p-6 rounded-xl bg-white shadow-md border border-slate-100"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block mb-3">
                <span className="text-sm font-medium text-slate-700">
                  Your name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-slate-200 bg-white px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-[#56ab2f] focus:ring-2 focus:ring-[#56ab2f]/20 transition"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block mb-3">
                <span className="text-sm font-medium text-slate-700">
                  Email address
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-1 block w-full rounded-md border-slate-200 bg-white px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-[#56ab2f] focus:ring-2 focus:ring-[#56ab2f]/20 transition"
                  placeholder="you@company.com"
                />
              </label>

              <label className="block mb-3">
                <span className="text-sm font-medium text-slate-700">
                  Phone number
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="mt-1 block w-full rounded-md border-slate-200 bg-white px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-[#56ab2f] focus:ring-2 focus:ring-[#56ab2f]/20 transition"
                  placeholder="e.g. +44 7867 045156"
                />
              </label>

              <label className="block mb-3">
                <span className="text-sm font-medium text-slate-700">
                  Home address
                </span>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full rounded-md border-slate-200 bg-white px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-[#56ab2f] focus:ring-2 focus:ring-[#56ab2f]/20 transition"
                  placeholder="Street, City, Postcode"
                />
              </label>
              <label className="block mb-4">
                <span className="text-sm font-medium text-slate-700">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-slate-200 bg-white px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-[#56ab2f] focus:ring-2 focus:ring-[#56ab2f]/20 transition"
                  placeholder="Tell us about your home and your cleaning needs?"
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-95 transition"
                >
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>

                <button
                  onClick={handleSendEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2d5a84] text-white font-semibold hover:opacity-95 transition"
                >
                  <Mail size={16} />
                  Send Email
                </button>
              </div>
            </form>
          </div>

          {/* Services */}
          <div className="p-6 rounded-xl bg-white shadow-md border border-slate-100">
            <h3 className="text-lg font-bold text-[#2d5a84] mb-3">
              Our Services
            </h3>
            <p className="text-slate-600 mb-6">
              Trusted, professional cleaning solutions tailored to homes and
              businesses. Choose a service below to learn more or request a
              free, no-obligation quote.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:shadow-md transition">
                <div className="flex-shrink-0 bg-[#eef6ff] text-[#2d5a84] rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 11.5L12 4l9 7.5v6a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1v-6z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#2d5a84]">
                    Regular Domestic Cleaning
                  </h4>
                  <p className="text-sm text-slate-600">
                    Flexible weekly, bi-weekly or monthly visits to keep your
                    home consistently clean.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:shadow-md transition">
                <div className="flex-shrink-0 bg-[#eef6ff] text-[#2d5a84] rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 7h18M7 7v10a3 3 0 003 3h4a3 3 0 003-3V7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#2d5a84]">
                    End of Tenancy Cleaning
                  </h4>
                  <p className="text-sm text-slate-600">
                    Comprehensive move-out cleans that meet tenancy agreement
                    standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:shadow-md transition">
                <div className="flex-shrink-0 bg-[#eef6ff] text-[#2d5a84] rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 3h18v6H3zM5 9v11h14V9"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#2d5a84]">
                    Deep Kitchen &amp; Appliance Cleaning
                  </h4>
                  <p className="text-sm text-slate-600">
                    Intensive cleaning for kitchens and appliances to restore
                    hygiene and shine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:shadow-md transition">
                <div className="flex-shrink-0 bg-[#eef6ff] text-[#2d5a84] rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM7 7v-3h10v3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#2d5a84]">
                    Commercial &amp; Office Cleaning
                  </h4>
                  <p className="text-sm text-slate-600">
                    Tailored schedules and reliable teams to keep your workplace
                    professional and hygienic.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d5a84] text-white font-semibold hover:opacity-95 transition"
              >
                Request a free quote
              </a>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Contact;
