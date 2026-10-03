
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — Services page
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
 * IMAGE NOTE:
 * Every image below is currently a neutral placeholder.
 * Replace each image with licensed/on-site photography before launch.
 */

const sliderImages = [
  'https://picsum.photos/seed/kareiga-slide1/1600/700',
  'https://picsum.photos/seed/kareiga-slide2/1600/700',
  'https://picsum.photos/seed/kareiga-slide3/1600/700',
];

const kareigaServices = [
  {
    title: '24/7 Nursing & Medical Supervision',
    description:
      'Our residents benefit from round-the-clock nursing care, ensuring help is always available when needed. Skilled professionals monitor health conditions and administer medications promptly. In case of emergencies, staff are trained to respond efficiently and compassionately. This constant supervision brings peace of mind to residents and their families alike.',
    image: 'https://picsum.photos/seed/kareiga-svc-nursing/700/500',
  },
  {
    title: "Alzheimer's & Dementia Care",
    description:
      "We provide specialised memory care for residents living with Alzheimer's or dementia. Our trained caregivers use gentle, supportive techniques to reduce confusion and stress. Residents enjoy a secure, structured environment with familiar routines to maintain cognitive function. Memory games and music therapy help enhance daily life and emotional wellbeing.",
    image: 'https://picsum.photos/seed/kareiga-svc-dementia/700/500',
  },
  {
    title: 'Mobility & Transfer Assistance',
    description:
      'Residents receive assistance with walking, moving between rooms, and transferring between beds and chairs. We prioritise safety and comfort while promoting as much independence as possible. Staff use proper technique and supportive tools like walkers and wheelchairs, helping prevent injuries while encouraging confidence in daily movement.',
    image: 'https://picsum.photos/seed/kareiga-svc-mobility/700/500',
  },
  {
    title: 'Personal Hygiene & Grooming Support',
    description:
      "Our caregivers help residents maintain personal cleanliness with respect and sensitivity. Services include assistance with bathing, dressing, oral care, and grooming routines. Every effort is made to ensure residents feel dignified, refreshed, and confident, with care plans adapted to each individual's preferences and physical needs.",
    image: 'https://picsum.photos/seed/kareiga-svc-hygiene/700/500',
  },
  {
    title: 'Housekeeping & Laundry Services',
    description:
      'A clean environment promotes health and happiness, and we ensure our facility stays spotless. Staff take care of room cleaning, linen changes, and laundry, so residents always have fresh clothes and bedding. We keep personal belongings organised and living spaces tidy, creating a homely, stress-free atmosphere.',
    image: 'https://picsum.photos/seed/kareiga-svc-housekeeping/700/500',
  },
  {
    title: 'Healthy, Home-Cooked Meals',
    description:
      'We serve delicious, nutritious meals prepared daily by our kitchen team. Menus are crafted to meet dietary needs, including diabetic, low-sodium, and culturally appropriate meals. Residents enjoy meals in a social dining setting that fosters connection and conversation, with snacks and beverages available throughout the day.',
    image: 'https://picsum.photos/seed/kareiga-svc-meals/700/500',
  },
  {
    title: 'Vital Signs Monitoring & Medical Records',
    description:
      'Our nursing staff routinely monitor vital signs such as blood pressure, heart rate, and temperature. Records are securely maintained and shared with doctors and families as needed. Monitoring helps detect changes in health early, preventing complications — part of our commitment to proactive, personalised care.',
    image: 'https://picsum.photos/seed/kareiga-svc-vitals/700/500',
  },
  {
    title: 'Toileting & Continence Assistance',
    description:
      'Residents who need help with toileting are treated with the utmost care and dignity. We assist with toilets, commodes, and continence care while maintaining hygiene and privacy. Staff are trained to prevent discomfort and maintain cleanliness at all times, so residents feel safe and respected.',
    image: 'https://picsum.photos/seed/kareiga-svc-toileting/700/500',
  },
  {
    title: 'Companionship & Emotional Support',
    description:
      'Beyond physical care, we provide genuine companionship and emotional nurturing. Our staff engage residents in conversation, shared hobbies, and quiet reflection. Emotional connection is essential to wellbeing, especially in later years — every resident is treated like family, never left to feel alone.',
    image: 'https://picsum.photos/seed/kareiga-svc-companion/700/500',
  },
  {
    title: 'Daily Activity & Engagement Programmes',
    description:
      'We organise a wide variety of daily activities to keep residents active and joyful — light exercise, art classes, puzzles, gardening, and cultural events. Each programme is tailored to residents\' abilities and interests to encourage participation, helping build community and brighten each day.',
    image: 'https://picsum.photos/seed/kareiga-svc-activity/700/500',
  },
  {
    title: 'Bathing & Dressing Assistance',
    description:
      "We offer support with daily routines such as getting dressed and bathing. Caregivers ensure residents are clean, comfortable, and appropriately dressed for all seasons. Assistance is given respectfully, maintaining the individual's independence where possible — helping start each day on a positive note.",
    image: 'https://picsum.photos/seed/kareiga-svc-dressing/700/500',
  },
  {
    title: 'Cognitive & Behavioural Monitoring',
    description:
      'We keep a close eye on changes in mood, memory, or behaviour that may signal a health concern. Any shifts are documented and discussed with healthcare providers and families, ensuring early intervention and appropriate care adjustments — part of our holistic approach to resident wellness.',
    image: 'https://picsum.photos/seed/kareiga-svc-cognitive/700/500',
  },
  {
    title: 'Counselling & Pastoral Support',
    description:
      'We offer emotional and spiritual care through access to counsellors, social workers, and pastoral visitors. Whether residents are dealing with grief, loneliness, or personal challenges, someone is always available to talk. Group and one-on-one sessions are available as needed, supporting emotional balance and inner peace.',
    image: 'https://picsum.photos/seed/kareiga-svc-counselling/700/500',
  },
  {
    title: 'Activity Journals & Family Updates',
    description:
      "We keep detailed logs of each resident's participation in activities, mood, and health. These records help staff track progress and make personalised care decisions. Families receive regular updates, including photos and summaries of their loved one's day — a meaningful way to stay connected from afar.",
    image: 'https://picsum.photos/seed/kareiga-svc-family/700/500',
  },
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
          SLIDER HERO
      ========================================================= */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden bg-[#0B132B]">

        {sliderImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
              i === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Oceanic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/55 to-[#2563EB]/10" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 pb-14 max-w-6xl mx-auto">

          <span className="font-mono text-xs tracking-[0.25em] text-[#38BDF8] uppercase mb-4">
            What we offer
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl text-white leading-tight max-w-3xl">
            Care that covers everything, delivered by people who notice the details.
          </h1>

          <div className="w-16 h-1 bg-[#38BDF8] mt-6 rounded-full" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 right-6 sm:right-10 z-10 flex gap-2">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentImage
                  ? 'w-10 bg-[#38BDF8]'
                  : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES GRID
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">

        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs tracking-[0.25em] text-[#2563EB] uppercase">
            14 areas of care
          </span>

          <h2 className="font-display text-3xl sm:text-4xl text-[#0B132B] mt-3">
            Services at Kareiga
          </h2>

          <div className="w-12 h-1 bg-[#38BDF8] mt-5 rounded-full" />

          <p className="text-[#475569] mt-5 leading-relaxed">
            From daily medical monitoring to a quiet conversation over tea —
            every service here is delivered by the same familiar faces, not
            a rotating roster of strangers.
          </p>
        </div>

        {/* Modern service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {kareigaServices.map((service, index) => {
            const isExpanded = expandedIndex === index;

            const previewText =
              service.description.length > 110
                ? service.description.slice(0, 110).trim() + '…'
                : service.description;

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >

                {/* Service image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/50 to-transparent" />

                  {/* Service number */}
                  <span className="absolute bottom-4 left-4 font-mono text-xs tracking-[0.15em] text-white bg-[#2563EB] px-3 py-1.5 rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">

                  <h3 className="font-display text-xl text-[#0B132B] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-[#475569] text-[15px] leading-relaxed mb-5 flex-1">
                    {isExpanded ? service.description : previewText}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                    className="inline-flex items-center gap-2 text-sm text-[#2563EB] font-semibold hover:text-[#0B132B] transition self-start group"
                  >
                    {isExpanded ? 'Show less' : 'Read more'}

                    <FaArrowRight
                      className={`text-xs transition-transform duration-300 ${
                        isExpanded
                          ? '-rotate-90'
                          : 'group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* =========================================================
          CTA STRIP
      ========================================================= */}
      <section className="bg-[#0B132B] py-20 px-6 sm:px-10 relative overflow-hidden">

        {/* Oceanic decorative glows */}
        <div className="absolute -right-32 -top-32 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl" />
        <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <span className="font-mono text-xs tracking-[0.25em] text-[#38BDF8] uppercase">
            Let's talk
          </span>

          <h2 className="font-display text-3xl sm:text-4xl text-white mt-3 mb-4">
            Not sure which level of care fits?
          </h2>

          <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Our care coordinator can walk you through an honest assessment —
            no obligation, just clarity.
          </p>

          <a
            href="mailto:info@kareiga.co.za"
            className="inline-flex items-center gap-3 bg-[#2563EB] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300"
          >
            Talk to our care team
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </section>

    </div>
  );
}