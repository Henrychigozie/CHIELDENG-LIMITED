import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import FooterSection from "./footer.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "447867045156";

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = `Website enquiry from ${name || "visitor"}`;
    const body = `${message}\n\nFrom: ${name || ""} (${email || ""})`;
    window.location.href = `mailto:hello@chieldeng.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${name || "a visitor"}.\n\n${message}\n\nContact: ${email || ""}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-25">
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
            <div className="p-6 rounded-xl bg-white shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-[#2d5a84] mb-3">
                Quick Contact
              </h3>
              <p className="text-slate-600 mb-4">
                Reach us directly via WhatsApp or email for fast replies.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:scale-105 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>

                <a
                  href="mailto:hello@chieldeng.com"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-[#2d5a84] font-semibold hover:bg-slate-100 transition"
                >
                  <Mail size={16} />
                  hello@chieldeng.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md border border-slate-100">
              <h3 className="text-lg font-bold text-[#2d5a84] mb-3">
                Our Services
              </h3>
              <ul className="text-slate-600 space-y-2 list-disc list-inside">
                <li>
                  <strong>End of Tenancy Cleaning</strong> — thorough move-out
                  cleans
                </li>
                <li>
                  <strong>Deep Kitchen &amp; Appliance Cleaning</strong>
                </li>
                <li>
                  <strong>Commercial &amp; Office Cleaning</strong> — tailored
                  schedules for businesses
                </li>
                <li>
                  <strong>Regular Domestic Cleaning</strong> — weekly, bi-weekly
                  or monthly
                </li>
              </ul>
              <p className="text-sm text-slate-500 mt-4">
                Not sure which service fits? Message us on WhatsApp for a quick
                recommendation and free quote.
              </p>
            </div>
          </div>

          {/* Contact Form */}
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
            <label className="block mb-4">
              <span className="text-sm font-medium text-slate-700">
                Message
              </span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-1 block w-full rounded-md border-slate-200 bg-white px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-[#56ab2f] focus:ring-2 focus:ring-[#56ab2f]/20 transition"
                placeholder="How can we help?"
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSendEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2d5a84] text-white font-semibold hover:opacity-95 transition"
              >
                <Mail size={16} />
                Send Email
              </button>
              <button
                onClick={handleSendWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-95 transition"
              >
                <MessageCircle size={16} />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Contact;
