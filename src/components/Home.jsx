import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaLeaf,
  FaHandHoldingHeart,
  FaHouseUser,
  FaHeartbeat,
  FaQuoteLeft,
  FaArrowRight,
} from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — landing page
 * -----------------------------------
 * Design direction:
 *  - Palette: deep pine (#16302A), warm sand (#F1E9DA), ochre gold (#C68A2E),
 *    sage (#7F9A87), ink (#24211B)
 *  - Type:   display  → 'Newsreader'   (warm, literary, not the default cream/terracotta serif)
 *            body     → 'Work Sans'    (clean, humane, legible at small sizes)
 *            utility   → 'Space Mono'  (used only for schedule times — precision cue)
 *  - Signature element: the "A Day at Kareiga" timeline — a real, ordered daily
 *    rhythm rendered in mono type, because here (unlike most feature grids)
 *    the sequence is genuinely informative.
 *
 * NOTE ON IMAGES
 * All image sources below are neutral placeholders (picsum.photos, seeded so
 * they stay consistent on reload) so nothing here relies on stock photography
 * that may be copyrighted. Swap each `src` for your own licensed / on-site
 * photography before launch — warm, natural-light shots of the garden,
 * communal rooms, and real staff/residents (with consent) will do more for
 * credibility than any stock image could.
 */

const heroImg     = 'https://picsum.photos/seed/kareiga-hero/1200/1400';
const gardenImg   = 'https://picsum.photos/seed/kareiga-garden/900/700';
const diningImg   = 'https://picsum.photos/seed/kareiga-dining/900/700';
const roomImg     = 'https://picsum.photos/seed/kareiga-room/900/700';
const wellnessImg = 'https://picsum.photos/seed/kareiga-wellness/900/700';
const familyImg   = 'https://picsum.photos/seed/kareiga-family/500/500';

const dayTimeline = [
  { time: '06:30', label: 'Sunrise tea', note: 'Rooibos on the east veranda, birdsong included.' },
  { time: '08:00', label: 'Breakfast', note: 'Dietician-planned, cooked to order in the dining hall.' },
  { time: '09:30', label: 'Garden hour', note: 'Raised beds, gentle mobility work, fresh air.' },
  { time: '11:00', label: 'Wellness & therapy', note: 'Physio, occupational therapy, or a quiet check-in.' },
  { time: '13:00', label: 'Lunch & rest', note: 'The home slows down — reading, naps, visits.' },
  { time: '15:30', label: 'Afternoon activity', note: 'Music, art, cards, or a resident-led club.' },
  { time: '18:00', label: 'Supper', note: 'Shared tables, familiar faces, unhurried conversation.' },
  { time: '20:00', label: 'Night care begins', note: 'A nurse on every floor, all night, every night.' },
];

const carePillars = [
  {
    icon: FaHouseUser,
    stat: 'Independent Living',
    text: 'Private cottages on the estate for residents who want their own front door — with staff a phone call away.',
  },
  {
    icon: FaHandHoldingHeart,
    stat: 'Assisted Living',
    text: 'Help with the parts of the day that have become harder, without giving up the parts that still feel like home.',
  },
  {
    icon: FaHeartbeat,
    stat: 'Frail Care',
    text: '24-hour nursing in a dedicated wing, for residents who need continuous, hands-on medical support.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-[#24211B]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=Work+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Newsreader', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="relative bg-[#16302A] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* text side */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20 lg:py-0 relative z-10">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C68A2E] uppercase mb-6">
              Kareiga Old Age Home · Eastern Cape
            </span>
            <h1 className="font-display text-[#F1E9DA] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
              A home that still <em className="text-[#C68A2E] not-italic">feels</em> like home.
            </h1>
            <p className="text-[#D8CFBD] text-lg leading-relaxed max-w-md mb-10">
              Kareiga was built on one idea: growing older should never mean
              losing your garden, your community, or your say. Independent
              living, assisted care, and 24-hour frail care, all on one
              gentle, walkable estate.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/confirmation')}
                className="group inline-flex items-center gap-2 bg-[#C68A2E] text-[#16302A] font-semibold px-7 py-3.5 rounded-sm hover:bg-[#dda04a] transition"
              >
                Book a visit
                <FaArrowRight className="text-sm transition group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/confirmation')}
                className="inline-flex items-center gap-2 border border-[#7F9A87] text-[#F1E9DA] font-medium px-7 py-3.5 rounded-sm hover:bg-white/5 transition"
              >
                Download the brochure
              </button>
            </div>

            <div className="flex gap-10 mt-14 pt-8 border-t border-white/10">
              <div>
                <p className="font-display text-3xl text-[#F1E9DA]">32</p>
                <p className="text-[#9CB0A3] text-sm mt-1">years caring for<br/>Eastern Cape families</p>
              </div>
              <div>
                <p className="font-display text-3xl text-[#F1E9DA]">1:4</p>
                <p className="text-[#9CB0A3] text-sm mt-1">caregiver to<br/>resident ratio</p>
              </div>
              <div>
                <p className="font-display text-3xl text-[#F1E9DA]">24/7</p>
                <p className="text-[#9CB0A3] text-sm mt-1">on-site nursing<br/>staff</p>
              </div>
            </div>
          </div>

          {/* image side */}
          <div className="relative min-h-[420px] lg:min-h-0">
            <img
              src={heroImg}
              alt="A resident enjoying the garden at Kareiga Old Age Home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#16302A]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#16302A] lg:via-[#16302A]/10 lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* ---------- CARE PILLARS ---------- */}
      <section className="bg-[#F1E9DA] py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-[#7F9A87] uppercase">Levels of care</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#16302A] mt-3">
              Care that grows with you, not around you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8CFBD]">
            {carePillars.map(({ icon: Icon, stat, text }) => (
              <div key={stat} className="bg-[#F1E9DA] p-8 sm:p-10 flex flex-col">
                <Icon className="text-2xl text-[#C68A2E] mb-6" />
                <h3 className="font-display text-xl text-[#16302A] mb-3">{stat}</h3>
                <p className="text-[#4A463B] leading-relaxed text-[15px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- A DAY AT KAREIGA (signature timeline) ---------- */}
      <section className="bg-[#16302A] py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C68A2E] uppercase">The daily rhythm</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F1E9DA] mt-3">
              A day at Kareiga
            </h2>
            <p className="text-[#9CB0A3] mt-4 leading-relaxed">
              No two residents' days look identical — but the rhythm of the
              house stays the same, so mornings are never a surprise.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-[22px] h-px bg-white/15" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {dayTimeline.map((item) => (
                <div key={item.time} className="relative pl-6 lg:pl-0">
                  <div className="lg:flex lg:flex-col">
                    <span className="font-mono text-[#C68A2E] text-sm block lg:mb-4">{item.time}</span>
                    <span className="absolute left-0 top-1.5 lg:static w-2 h-2 rounded-full bg-[#C68A2E] lg:hidden" />
                    <h3 className="font-display text-lg text-[#F1E9DA] mb-1.5">{item.label}</h3>
                    <p className="text-[#9CB0A3] text-sm leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LIFE ON THE ESTATE (gallery) ---------- */}
      <section className="bg-[#F1E9DA] py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-[#7F9A87] uppercase">Around the estate</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#16302A] mt-3">Life on the estate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: gardenImg, title: 'The kitchen garden', text: 'Residents plant, tend, and eat what grows here.' },
              { img: diningImg, title: 'The dining hall', text: 'Shared meals, three times a day, at your own table.' },
              { img: roomImg, title: 'Private rooms', text: 'Furnish it your way — bring what makes it yours.' },
              { img: wellnessImg, title: 'Wellness studio', text: 'Physio, movement classes, and quiet therapy space.' },
            ].map(({ img, title, text }) => (
              <div key={title} className="group overflow-hidden bg-white">
                <div className="overflow-hidden h-56">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-[#16302A] mb-1.5">{title}</h3>
                  <p className="text-[#4A463B] text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="bg-[#7F9A87] py-24 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-10 items-center sm:items-start">
          <img
            src={familyImg}
            alt="A family member of a Kareiga resident"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-[#F1E9DA]/40"
          />
          <div>
            <FaQuoteLeft className="text-[#F1E9DA]/50 text-2xl mb-4" />
            <p className="font-display text-xl sm:text-2xl text-[#16302A] leading-snug mb-5">
              My mother resisted moving for two years. Three weeks after
              arriving at Kareiga, she asked why we hadn't done it sooner.
              It's the garden, mostly — and the staff who remember how she
              takes her tea.
            </p>
            <p className="font-mono text-sm text-[#16302A]/70">— Daughter of a resident, Assisted Living wing</p>
          </div>
        </div>
      </section>

      {/* ---------- CTA / FOOTER STRIP ---------- */}
      <section className="bg-[#16302A] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <FaLeaf className="text-[#C68A2E] text-2xl mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#F1E9DA] mb-6">
            Come see it before you decide anything.
          </h2>
          <p className="text-[#9CB0A3] max-w-xl mx-auto mb-10 leading-relaxed">
            No pressure, no sales pitch — just a walk through the estate, a
            cup of rooibos, and honest answers to whatever you're weighing up.
          </p>
          <button
            onClick={() => navigate('/confirmation')}
            className="inline-flex items-center gap-2 bg-[#C68A2E] text-[#16302A] font-semibold px-8 py-4 rounded-sm hover:bg-[#dda04a] transition"
          >
            Book a visit
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </section>
    </div>
  );
}