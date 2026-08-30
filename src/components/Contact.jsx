import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — Contact page
 * Matches the design system from Home.jsx / About.jsx / Services.jsx:
 *  pine #16302A · sand #F1E9DA · gold #C68A2E · sage #7F9A87 · ink #24211B
 *  display: Newsreader · body: Work Sans · utility: Space Mono
 *
 * Fixed from the original: the email links used `href="email:..."`, which
 * isn't a valid URI scheme and silently does nothing when clicked — this
 * version uses `mailto:` instead so the links actually open a mail client.
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
        '12 Milkwood Close,',
        'Fernglen, Gqeberha, 6070',
      ],
      postal: 'PO Box 4210, Fernglen, Gqeberha, 6070',
      tel: '+27 41 555 0123',
      email: 'info@kareiga.co.za',
    },
    {
      label: 'Kareiga Old Age Home',
      lines: [
        '12 Milkwood Close,',
        'Fernglen, Gqeberha, 6070',
      ],
      postal: 'PO Box 4210, Fernglen, Gqeberha, 6070',
      tel: '+27 41 555 0124',
      email: 'admissions@kareiga.co.za',
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#F1E9DA] text-[#24211B]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=Work+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Newsreader', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* ---------- HEADER ---------- */}
      <section className="bg-[#16302A] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C68A2E] uppercase">
            Get in touch
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F1E9DA] mt-3">
            Ask us anything. We'd rather you knew too much than too little.
          </h1>
        </div>
      </section>

      {/* ---------- LOCATIONS ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 -mt-10 relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.label} className="bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <FaMapMarkerAlt className="text-[#C68A2E]" />
                <h3 className="font-display text-xl text-[#16302A]">{loc.label}</h3>
              </div>

              <p className="text-[#4A463B] leading-relaxed mb-4">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#7F9A87] uppercase block mb-1">
                  Physical address
                </span>
                {loc.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>

              <p className="text-[#4A463B] leading-relaxed mb-4">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#7F9A87] uppercase block mb-1">
                  Postal address
                </span>
                {loc.postal}
              </p>

              <div className="pt-4 border-t border-[#F1E9DA] space-y-2">
                <p className="flex items-center gap-2 text-[#16302A]">
                  <FaPhoneAlt className="text-[#C68A2E] text-sm" />
                  <a href={`tel:${loc.tel.replace(/\s+/g, '')}`} className="hover:text-[#C68A2E] transition">
                    {loc.tel}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#16302A]">
                  <FaEnvelope className="text-[#C68A2E] text-sm" />
                  <a href={`mailto:${loc.email}`} className="hover:text-[#C68A2E] transition">
                    {loc.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CONTACT FORM ---------- */}
      <section className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        {!formSubmitted ? (
          <div className="bg-white p-8 sm:p-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#7F9A87] uppercase">
              Send a message
            </span>
            <h2 className="font-display text-3xl text-[#16302A] mt-3 mb-8">
              We usually reply within a day.
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] text-[#7F9A87] uppercase block mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full p-3 border border-[#D8CFBD] bg-[#F1E9DA]/40 focus:outline-none focus:border-[#C68A2E] transition"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] text-[#7F9A87] uppercase block mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 border border-[#D8CFBD] bg-[#F1E9DA]/40 focus:outline-none focus:border-[#C68A2E] transition"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] text-[#7F9A87] uppercase block mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  placeholder="Tell us what you'd like to know — a tour, admissions, or a specific level of care."
                  className="w-full p-3 border border-[#D8CFBD] bg-[#F1E9DA]/40 h-36 focus:outline-none focus:border-[#C68A2E] transition"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#C68A2E] text-[#16302A] font-semibold px-7 py-3.5 rounded-sm hover:bg-[#dda04a] transition"
              >
                Send message
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 text-center">
            <FaPaperPlane className="text-[#C68A2E] text-2xl mx-auto mb-5" />
            <h2 className="font-display text-3xl text-[#16302A] mb-4">
              Thank you for reaching out.
            </h2>
            <p className="text-[#4A463B] mb-8 leading-relaxed">
              Your message is on its way to our team. If it's urgent, you're
              welcome to email us directly at{' '}
              <a
                href="mailto:info@kareiga.co.za"
                className="text-[#C68A2E] font-medium underline underline-offset-4"
              >
                info@kareiga.co.za
              </a>
              .
            </p>
            <button
              onClick={handleSendAgain}
              className="inline-flex items-center gap-2 bg-[#16302A] text-[#F1E9DA] font-semibold px-7 py-3.5 rounded-sm hover:bg-[#1f4038] transition"
            >
              Send another message
            </button>
          </div>
        )}
      </section>
    </div>
  );
}