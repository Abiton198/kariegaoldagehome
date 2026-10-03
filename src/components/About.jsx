import React from 'react';
import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTree,
  FaEnvelope,
} from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — About page
 *
 * Modern Oceanic Indigo & Sapphire Blue design system:
 * deep indigo #0B132B
 * sapphire blue #2563EB
 * sky cyan #38BDF8
 * soft slate #F8FAFC
 * slate text #334155
 * muted slate #64748B
 *
 * display: Newsreader
 * body: Work Sans
 * utility: Space Mono
 *
 * IMAGE NOTE:
 * aboutImg is currently a neutral placeholder.
 * Replace with licensed/on-site photography before launch.
 */

const aboutImg = 'https://picsum.photos/seed/kareiga-about/1600/700';

export default function About() {
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
          HERO IMAGE + INTRO
      ========================================================= */}
      <section className="relative">
        <div className="h-[46vh] min-h-[320px] w-full overflow-hidden">
          <img
            src={aboutImg}
            alt="Kareiga Old Age Home grounds"
            className="w-full h-full object-cover"
          />

          {/* Oceanic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/45 to-[#2563EB]/10" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-10 -mt-24 relative z-10">
          <span className="font-mono text-xs tracking-[0.25em] text-[#38BDF8] uppercase">
            About Kareiga
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl text-white mt-3 leading-tight max-w-4xl">
            Care that's rooted in one place, for good reason.
          </h1>

          <div className="w-16 h-1 bg-[#38BDF8] mt-6 rounded-full" />
        </div>
      </section>

      {/* =========================================================
          ABOUT + CONTACT
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* About */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-1 bg-[#2563EB] mb-6 rounded-full" />

            <h2 className="font-display text-2xl sm:text-3xl text-[#0B132B] mb-4">
              Who we are
            </h2>

            <p className="text-[#475569] leading-relaxed mb-4">
              Kareiga Old Age Home has cared for Eastern Cape families for
              over three decades. We started as a single farmhouse and grew,
              slowly and deliberately, into a full estate — never losing the
              thing that made the first residents feel at home: staff who
              know your name, your history, and how you like your tea.
            </p>

            <p className="text-[#475569] leading-relaxed">
              Today Kareiga offers independent living, assisted living, and
              24-hour frail care, all on one walkable, garden-filled
              property, so a couple with different needs never has to be
              split between two homes.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#0B132B] p-8 sm:p-10 rounded-2xl shadow-lg flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#2563EB]/20 rounded-full" />
            <div className="absolute -right-8 -bottom-16 w-32 h-32 bg-[#38BDF8]/10 rounded-full" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#2563EB] flex items-center justify-center mb-5">
                <FaEnvelope className="text-white text-lg" />
              </div>

              <h3 className="font-display text-2xl text-white mb-3">
                Get in touch
              </h3>

              <p className="text-slate-300 leading-relaxed mb-2">
                For enquiries, tours, or admissions:
              </p>

              <a
                href="mailto:info@kareiga.co.za"
                className="text-[#38BDF8] font-medium underline underline-offset-4 hover:text-white transition-colors"
              >
                info@kareiga.co.za
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-100">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
              <FaMapMarkerAlt className="text-[#2563EB] text-lg" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#0B132B]">
              Perfectly positioned
            </h3>
          </div>

          <p className="text-[#475569] leading-relaxed mb-6 max-w-2xl">
            Kareiga sits just outside Gqeberha, close enough for family
            visits to be easy, far enough to feel like a proper change of
            pace.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {[
              'Set on the quiet edge of Gqeberha, Eastern Cape',
              '5 minutes from Walmer Park Shopping Centre',
              'Free weekly shuttle to nearby shops and pharmacies',
              '10 minutes from Humewood Golf Club',
              '15 minutes from the beachfront and promenade',
              '20 minutes from Gqeberha (Port Elizabeth) Airport',
            ].map((line) => (
              <div key={line} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] mt-2.5 flex-shrink-0" />
                <p className="text-[#475569]">{line}</p>
              </div>
            ))}
          </div>

          <p className="text-[#64748B] mt-6 pt-6 border-t border-slate-100">
            Mild coastal climate year-round. Livingstone Hospital is 15
            minutes away, with a private clinic 8 minutes from the estate.
          </p>
        </div>
      </section>

      {/* =========================================================
          CLUBHOUSE / ENTERTAINMENT
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="bg-gradient-to-br from-[#E0F2FE] to-[#EFF6FF] p-8 sm:p-10 rounded-2xl border border-[#BAE6FD]">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <FaTree className="text-[#2563EB] text-lg" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#0B132B]">
              The Milkwood Clubhouse
            </h3>
          </div>

          <p className="text-[#334155] leading-relaxed mb-6 max-w-2xl">
            Built around a century-old milkwood tree, the clubhouse keeps
            residents active and connected without ever leaving the estate.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {[
              'A well-equipped mini gym, sized for gentler routines',
              'A quiet library for reading and mental stimulation',
              'A resident-run social committee planning weekly events',
              'A bar and coffee bar for casual afternoons',
              'A hall with AV equipment and a full catering kitchen',
              'Braai facilities overlooking the garden',
            ].map((line) => (
              <li key={line} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-2.5 flex-shrink-0" />
                <span className="text-[#334155]">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          LIVING SPACES
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="bg-white p-8 sm:p-10 max-w-4xl rounded-2xl shadow-sm border border-slate-100">

          <div className="w-12 h-1 bg-[#38BDF8] mb-6 rounded-full" />

          <h3 className="font-display text-2xl sm:text-3xl text-[#0B132B] mb-4">
            Living spaces
          </h3>

          <p className="text-[#475569] leading-relaxed mb-4">
            Every home at Kareiga is built for light — wide windows, open
            living areas, and a private stretch of garden most mornings
            begin in. Comfort here isn't an afterthought; it's the starting
            point.
          </p>

          <p className="text-[#475569] leading-relaxed mb-4">
            We believe quality of life starts with the door you open every
            morning, so each unit is finished to feel like a home you chose,
            not one you settled for.
          </p>

          <p className="text-[#475569] leading-relaxed">
            All units are fitted with energy-saving solar geysers and LED
            lighting, in keeping with our commitment to a lighter footprint
            on the estate.
          </p>
        </div>
      </section>

      {/* =========================================================
          SAFETY & SECURITY
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10 pb-24">
        <div className="bg-[#0B132B] p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">

          {/* Decorative oceanic glow */}
          <div className="absolute right-0 top-0 w-72 h-72 bg-[#2563EB]/15 rounded-full blur-3xl" />
          <div className="absolute left-1/2 bottom-0 w-56 h-56 bg-[#38BDF8]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center">
                <FaShieldAlt className="text-white text-lg" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-white">
                Safety & security
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
              A beautiful home means little without peace of mind. Kareiga is
              built and staffed to protect both.
            </p>

            <div className="space-y-7 max-w-2xl">

              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-[#38BDF8] uppercase mb-2">
                  On the job, 24/7
                </p>

                <p className="text-slate-300 leading-relaxed">
                  A permanently manned gatehouse, round-the-clock security
                  patrols, and a panic button fitted in every home for
                  instant help.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-[#38BDF8] uppercase mb-2">
                  Speed dial
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Emergency contacts on speed dial, with each resident's
                  personal and medical information ready at security's
                  fingertips.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-[#38BDF8] uppercase mb-2">
                  Perimeter & monitoring
                </p>

                <p className="text-slate-300 leading-relaxed">
                  An electrified perimeter fence, CCTV coverage across the
                  estate, armed response, and monitoring that never clocks
                  off.
                </p>
              </div>

            </div>

            <p className="text-white font-display text-lg sm:text-xl mt-8 pt-6 border-t border-white/10">
              At Kareiga, peace of mind isn't a promise — it's the daily
              standard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}