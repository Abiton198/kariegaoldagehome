import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — Services page
 * Matches the design system from Home.jsx / About.jsx:
 *  pine #16302A · sand #F1E9DA · gold #C68A2E · sage #7F9A87 · ink #24211B
 *  display: Newsreader · body: Work Sans · utility: Space Mono
 *
 * IMAGE NOTE: every image below is a neutral placeholder (picsum.photos,
 * seeded per-service so it stays stable on reload). Replace each `image`
 * with real, licensed photography before launch.
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
      'Our caregivers help residents maintain personal cleanliness with respect and sensitivity. Services include assistance with bathing, dressing, oral care, and grooming routines. Every effort is made to ensure residents feel dignified, refreshed, and confident, with care plans adapted to each individual\'s preferences and physical needs.',
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
      className="min-h-screen bg-[#F1E9DA] text-[#24211B]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=Work+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Newsreader', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* ---------- SLIDER HERO ---------- */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden bg-[#16302A]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#16302A] via-[#16302A]/40 to-[#16302A]/10" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 pb-12 max-w-5xl mx-auto">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C68A2E] uppercase mb-4">
            What we offer
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F1E9DA] leading-tight max-w-2xl">
            Care that covers everything, delivered by people who notice the details.
          </h1>
        </div>

        {/* slide indicators */}
        <div className="absolute bottom-5 right-6 sm:right-10 z-10 flex gap-2">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentImage ? 'w-8 bg-[#C68A2E]' : 'w-4 bg-[#F1E9DA]/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs tracking-[0.25em] text-[#7F9A87] uppercase">
            14 areas of care
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#16302A] mt-3">
            Services at Kareiga
          </h2>
          <p className="text-[#4A463B] mt-4 leading-relaxed">
            From daily medical monitoring to a quiet conversation over tea —
            every service here is delivered by the same familiar faces, not
            a rotating roster of strangers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8CFBD]">
          {kareigaServices.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const previewText =
              service.description.length > 110
                ? service.description.slice(0, 110).trim() + '…'
                : service.description;

            return (
              <div key={service.title} className="bg-[#F1E9DA] flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#C68A2E] uppercase mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg text-[#16302A] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#4A463B] text-[15px] leading-relaxed mb-3 flex-1">
                    {isExpanded ? service.description : previewText}
                  </p>
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="inline-flex items-center gap-1.5 text-sm text-[#16302A] font-medium hover:text-[#C68A2E] transition self-start"
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                    <FaArrowRight
                      className={`text-xs transition-transform ${
                        isExpanded ? '-rotate-90' : 'rotate-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- CTA STRIP ---------- */}
      <section className="bg-[#16302A] py-16 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-[#F1E9DA] mb-4">
            Not sure which level of care fits?
          </h2>
          <p className="text-[#9CB0A3] max-w-xl mx-auto mb-8 leading-relaxed">
            Our care coordinator can walk you through an honest assessment —
            no obligation, just clarity.
          </p>
          <a
            href="mailto:info@kareiga.co.za"
            className="inline-flex items-center gap-2 bg-[#C68A2E] text-[#16302A] font-semibold px-7 py-3.5 rounded-sm hover:bg-[#dda04a] transition"
          >
            Talk to our care team
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </section>
    </div>
  );
}