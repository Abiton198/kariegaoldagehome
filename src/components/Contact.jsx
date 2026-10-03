import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — Contact page
 *
 * Modern Oceanic Indigo & Sapphire Blue design system:
 *
 * Deep Indigo:  #0B132B
 * Sapphire:     #2563EB
 * Sky Cyan:     #38BDF8
 * Soft Slate:   #F8FAFC
 * Slate Text:   #475569
 * Muted Slate:  #64748B
 *
 * display: Newsreader
 * body: Work Sans
 * utility: Space Mono
 *
 * Location:
 * Kenton-on-Sea, Eastern Cape
 *
 * Email links use `mailto:` and telephone links use `tel:`.
 */

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendAgain = () => {
    setFormSubmitted(false);
  };

  const locations = [
    {
      label: 'Head Office',
      lines: [
        'Kenton-on-Sea,',
        'Eastern Cape',
      ],
      postal: 'Kenton-on-Sea, Eastern Cape',
      tel: '+27 41 555 0123',
      email: 'info@kareiga.co.za',
    },
    {
      label: 'Kareiga Old Age Home',
      lines: [
        'Kenton-on-Sea,',
        'Eastern Cape',
      ],
      postal: 'Kenton-on-Sea, Eastern Cape',
      tel: '+27 41 555 0124',
      email: 'admissions@kareiga.co.za',
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] text-[#0B132B]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=Work+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .font-display {
          font-family: 'Newsreader', serif;
        }

        .font-mono {
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="relative bg-[#0B132B] py-20 sm:py-24 px-6 sm:px-10 overflow-hidden">

        {/* Oceanic decorative elements */}
        <div className="absolute -right-32 -top-32 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">

          <span className="font-mono text-xs tracking-[0.25em] text-[#38BDF8] uppercase">
            Get in touch
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl text-white mt-3 leading-tight max-w-4xl">
            Ask us anything. We'd rather you knew too much than too little.
          </h1>

          <div className="w-16 h-1 bg-[#38BDF8] mt-6 rounded-full" />

          <p className="text-slate-300 mt-6 max-w-2xl leading-relaxed">
            Whether you're considering care for yourself or a loved one,
            our team is here to answer your questions and help you understand
            what Kareiga can offer.
          </p>
        </div>
      </section>

      {/* =========================================================
          LOCATIONS
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 -mt-10 relative z-10">
        <div className="grid gap-6 md:grid-cols-2">

          {locations.map((loc) => (
            <div
              key={loc.label}
              className="bg-white p-8 sm:p-9 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#2563EB] text-lg" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-[#0B132B]">
                  {loc.label}
                </h3>
              </div>

              {/* Physical address */}
              <p className="text-[#475569] leading-relaxed mb-5">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#2563EB] uppercase block mb-2">
                  Physical address
                </span>

                {loc.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              {/* Postal address */}
              <p className="text-[#475569] leading-relaxed mb-5">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#2563EB] uppercase block mb-2">
                  Postal address
                </span>

                {loc.postal}
              </p>

              {/* Contact details */}
              <div className="pt-5 border-t border-slate-100 space-y-3">

                <p className="flex items-center gap-3 text-[#0B132B]">
                  <span className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <FaPhoneAlt className="text-[#2563EB] text-xs" />
                  </span>

                  <a
                    href={`tel:${loc.tel.replace(/\s+/g, '')}`}
                    className="hover:text-[#2563EB] transition"
                  >
                    {loc.tel}
                  </a>
                </p>

                <p className="flex items-center gap-3 text-[#0B132B]">
                  <span className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <FaEnvelope className="text-[#2563EB] text-xs" />
                  </span>

                  <a
                    href={`mailto:${loc.email}`}
                    className="hover:text-[#2563EB] transition"
                  >
                    {loc.email}
                  </a>
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section className="max-w-3xl mx-auto px-6 sm:px-10 py-20">

        {!formSubmitted ? (

          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">

            <span className="font-mono text-xs tracking-[0.25em] text-[#2563EB] uppercase">
              Send a message
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-[#0B132B] mt-3 mb-3">
              We usually reply within a day.
            </h2>

            <div className="w-12 h-1 bg-[#38BDF8] mb-8 rounded-full" />

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Full name */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] text-[#64748B] uppercase block mb-2">
                  Full name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] text-[#64748B] uppercase block mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] text-[#64748B] uppercase block mb-2">
                  Message
                </label>

                <textarea
                  required
                  placeholder="Tell us what you'd like to know — a tour, admissions, or a specific level of care."
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0B132B] placeholder:text-slate-400 h-36 resize-none focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#2563EB] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
              >
                Send message
                <FaPaperPlane className="text-sm" />
              </button>

            </form>
          </div>

        ) : (

          /* =====================================================
             FORM SUCCESS STATE
          ===================================================== */
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100 text-center">

            <div className="w-16 h-16 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mx-auto mb-6">
              <FaPaperPlane className="text-[#2563EB] text-2xl" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-[#0B132B] mb-4">
              Thank you for reaching out.
            </h2>

            <div className="w-12 h-1 bg-[#38BDF8] mx-auto mb-6 rounded-full" />

            <p className="text-[#475569] mb-8 leading-relaxed max-w-xl mx-auto">
              Your message is on its way to our team. If it's urgent, you're
              welcome to email us directly at{' '}
              <a
                href="mailto:info@kareiga.co.za"
                className="text-[#2563EB] font-medium underline underline-offset-4 hover:text-[#0B132B]"
              >
                info@kareiga.co.za
              </a>
              .
            </p>

            <button
              onClick={handleSendAgain}
              className="inline-flex items-center gap-3 bg-[#0B132B] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#111C3D] transition"
            >
              Send another message
            </button>

          </div>
        )}

      </section>

      {/* =========================================================
          LOCATION FOOTER STRIP
      ========================================================= */}
      <section className="bg-[#0B132B] py-12 px-6 sm:px-10">

        <div className="max-w-4xl mx-auto text-center">

          <FaMapMarkerAlt className="text-[#38BDF8] text-xl mx-auto mb-4" />

          <p className="font-mono text-xs tracking-[0.2em] text-[#38BDF8] uppercase mb-3">
            Visit us
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-white">
            Kenton-on-Sea, Eastern Cape
          </h2>

          <p className="text-slate-400 mt-3">
            A peaceful coastal setting for care, connection and community.
          </p>

        </div>

      </section>

    </div>
  );
}
