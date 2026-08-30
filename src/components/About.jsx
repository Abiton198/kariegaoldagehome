import React from 'react';
import { FaMapMarkerAlt, FaShieldAlt, FaTree, FaEnvelope } from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — About page
 * Matches the design system introduced in Home.jsx:
 *  pine #16302A · sand #F1E9DA · gold #C68A2E · sage #7F9A87 · ink #24211B
 *  display: Newsreader · body: Work Sans · utility: Space Mono
 *
 * IMAGE NOTE: aboutImg below is a neutral placeholder (picsum.photos).
 * Replace with your own licensed / on-site photography before launch.
 */

const aboutImg = 'https://picsum.photos/seed/kareiga-about/1600/700';

export default function About() {
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

      {/* ---------- HERO IMAGE + INTRO ---------- */}
      <section className="relative">
        <div className="h-[46vh] min-h-[320px] w-full overflow-hidden">
          <img
            src={aboutImg}
            alt="Kareiga Old Age Home grounds"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16302A] via-[#16302A]/30 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 -mt-24 relative z-10">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C68A2E] uppercase">
            About Kareiga
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F1E9DA] mt-3 leading-tight">
            Care that's rooted in one place, for good reason.
          </h1>
        </div>
      </section>

      {/* ---------- ABOUT + CONTACT ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl text-[#16302A] mb-4">Who we are</h2>
            <p className="text-[#4A463B] leading-relaxed mb-4">
              Kareiga Old Age Home has cared for Eastern Cape families for
              over three decades. We started as a single farmhouse and grew,
              slowly and deliberately, into a full estate — never losing the
              thing that made the first residents feel at home: staff who
              know your name, your history, and how you like your tea.
            </p>
            <p className="text-[#4A463B] leading-relaxed">
              Today Kareiga offers independent living, assisted living, and
              24-hour frail care, all on one walkable, garden-filled
              property, so a couple with different needs never has to be
              split between two homes.
            </p>
          </div>

          <div className="bg-[#16302A] p-8 sm:p-10 flex flex-col justify-center">
            <FaEnvelope className="text-[#C68A2E] text-xl mb-4" />
            <h3 className="font-display text-xl text-[#F1E9DA] mb-3">Get in touch</h3>
            <p className="text-[#9CB0A3] leading-relaxed mb-1">
              For enquiries, tours, or admissions:
            </p>
            <a
              href="mailto:info@kareiga.co.za"
              className="text-[#C68A2E] font-medium underline underline-offset-4"
            >
              info@kareiga.co.za
            </a>
          </div>
        </div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="bg-white p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <FaMapMarkerAlt className="text-[#C68A2E] text-lg" />
            <h3 className="font-display text-2xl text-[#16302A]">Perfectly positioned</h3>
          </div>
          <p className="text-[#4A463B] leading-relaxed mb-6 max-w-2xl">
            Kareiga sits just outside Gqeberha, close enough for family
            visits to be easy, far enough to feel like a proper change of
            pace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {[
              'Set on the quiet edge of Gqeberha, Eastern Cape',
              '5 minutes from Walmer Park Shopping Centre',
              'Free weekly shuttle to nearby shops and pharmacies',
              '10 minutes from Humewood Golf Club',
              '15 minutes from the beachfront and promenade',
              '20 minutes from Gqeberha (Port Elizabeth) Airport',
            ].map((line) => (
              <div key={line} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C68A2E] mt-2 flex-shrink-0" />
                <p className="text-[#4A463B]">{line}</p>
              </div>
            ))}
          </div>
          <p className="text-[#4A463B] mt-6 pt-6 border-t border-[#F1E9DA]">
            Mild coastal climate year-round. Livingstone Hospital is 15
            minutes away, with a private clinic 8 minutes from the estate.
          </p>
        </div>
      </section>

      {/* ---------- CLUBHOUSE / ENTERTAINMENT ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="bg-[#7F9A87] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <FaTree className="text-[#16302A] text-lg" />
            <h3 className="font-display text-2xl text-[#16302A]">The Milkwood Clubhouse</h3>
          </div>
          <p className="text-[#16302A]/80 leading-relaxed mb-6 max-w-2xl">
            Built around a century-old milkwood tree, the clubhouse keeps
            residents active and connected without ever leaving the estate.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {[
              'A well-equipped mini gym, sized for gentler routines',
              'A quiet library for reading and mental stimulation',
              'A resident-run social committee planning weekly events',
              'A bar and coffee bar for casual afternoons',
              'A hall with AV equipment and a full catering kitchen',
              'Braai facilities overlooking the garden',
            ].map((line) => (
              <li key={line} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16302A] mt-2 flex-shrink-0" />
                <span className="text-[#16302A]/80">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- LIVING SPACES ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="bg-white p-8 sm:p-10 max-w-3xl">
          <h3 className="font-display text-2xl text-[#16302A] mb-4">Living spaces</h3>
          <p className="text-[#4A463B] leading-relaxed mb-4">
            Every home at Kareiga is built for light — wide windows, open
            living areas, and a private stretch of garden most mornings
            begin in. Comfort here isn't an afterthought; it's the starting
            point.
          </p>
          <p className="text-[#4A463B] leading-relaxed mb-4">
            We believe quality of life starts with the door you open every
            morning, so each unit is finished to feel like a home you chose,
            not one you settled for.
          </p>
          <p className="text-[#4A463B] leading-relaxed">
            All units are fitted with energy-saving solar geysers and LED
            lighting, in keeping with our commitment to a lighter footprint
            on the estate.
          </p>
        </div>
      </section>

      {/* ---------- SAFETY & SECURITY ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10 pb-24">
        <div className="bg-[#16302A] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <FaShieldAlt className="text-[#C68A2E] text-lg" />
            <h3 className="font-display text-2xl text-[#F1E9DA]">Safety & security</h3>
          </div>
          <p className="text-[#9CB0A3] leading-relaxed mb-6 max-w-2xl">
            A beautiful home means little without peace of mind. Kareiga is
            built and staffed to protect both.
          </p>
          <div className="space-y-6 max-w-2xl">
            <div>
              <p className="font-mono text-xs tracking-[0.15em] text-[#C68A2E] uppercase mb-1">
                On the job, 24/7
              </p>
              <p className="text-[#D8CFBD] leading-relaxed">
                A permanently manned gatehouse, round-the-clock security
                patrols, and a panic button fitted in every home for
                instant help.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.15em] text-[#C68A2E] uppercase mb-1">
                Speed dial
              </p>
              <p className="text-[#D8CFBD] leading-relaxed">
                Emergency contacts on speed dial, with each resident's
                personal and medical information ready at security's
                fingertips.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.15em] text-[#C68A2E] uppercase mb-1">
                Perimeter & monitoring
              </p>
              <p className="text-[#D8CFBD] leading-relaxed">
                An electrified perimeter fence, CCTV coverage across the
                estate, armed response, and monitoring that never clocks
                off.
              </p>
            </div>
          </div>
          <p className="text-[#F1E9DA] font-display text-lg mt-8 pt-6 border-t border-white/10">
            At Kareiga, peace of mind isn't a promise — it's the daily
            standard.
          </p>
        </div>
      </section>
    </div>
  );
}