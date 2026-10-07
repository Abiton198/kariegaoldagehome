import React, { useState, useMemo } from 'react';

// Custom inline SVG icons with zero external dependencies
const Icon = {
  Sparkles: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  ShieldCheck: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Waves: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15C5 15 7 13 9 13C11 13 13 15 15 15C17 15 19 13 21 13M3 9C5 9 7 7 9 7C11 7 13 9 15 9C17 9 19 7 21 7M3 21C5 21 7 19 9 19C11 19 13 21 15 21C17 21 19 19 21 19" />
    </svg>
  ),
  HeartPulse: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Home: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  UserGroup: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  ArrowRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Clock: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Phone: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Calendar: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Calculator: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Close: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Star: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Mail: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Sun: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Activity: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
};

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80',
  cottage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  assisted: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=900&q=80',
  frail: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
  oceanPool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80',
  dining: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
  garden: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
  lounge: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  testimonial: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
};

const CARE_LEVELS = [
  {
    id: 'independent',
    title: 'Ocean Breeze Cottages',
    tagline: 'Independent Senior Living',
    badge: '1:8 Staff Ratio',
    basePrice: 19500,
    icon: Icon.Home,
    desc: 'Private 1 & 2 bedroom standalone coastal suites with full fitted kitchens, private verandahs, emergency nurse buttons, and weekly maintenance.',
    img: IMAGES.cottage,
    features: ['Weekly housekeeping & linen', 'Full emergency alert system', 'All estate social events included', 'Pet friendly private gardens']
  },
  {
    id: 'assisted',
    title: 'Sapphire Suites',
    tagline: 'Assisted Daily Care',
    badge: '1:4 Care Ratio',
    basePrice: 28000,
    icon: Icon.UserGroup,
    desc: 'Dedicated daily support for bathing, medication reminders, and mobility, while fostering personal dignity and total peace of mind.',
    img: IMAGES.assisted,
    features: ['3 Chef-curated daily meals', 'On-demand nursing assistance', 'Medication administration', 'Daily mobility support']
  },
  {
    id: 'frail',
    title: 'Sanctuary Clinical Wing',
    tagline: '24/7 Memory & Frail Nursing',
    badge: '1:2 Intensive Care',
    basePrice: 38500,
    icon: Icon.HeartPulse,
    desc: 'Round-the-clock registered nurse monitoring in a warm, non-institutional setting with sensory garden access and specialized memory care.',
    img: IMAGES.frail,
    features: ['24/7 Dedicated nursing team', 'Dementia & Alzheimer safety wing', 'Biokineticist & physio support', 'Vital signs & medical sync']
  }
];

const DAILY_RHYTHM = [
  { time: '06:30', title: 'Sunrise Rooibos & Ocean Views', text: 'Gentle wake-up call, fresh tea on the east deck overlooking Kenton-on-Sea coastline.', icon: Icon.Sun },
  { time: '08:00', title: 'Nutritional Chef Breakfast', text: 'Dietician-approved full breakfast cooked fresh in the sunlit ocean dining hall.', icon: Icon.Home },
  { time: '09:30', title: 'Hydro-Pool & Mobility Session', text: 'Climate-controlled aquatic exercises led by qualified biokineticists.', icon: Icon.Waves },
  { time: '11:00', title: 'Coastal Walk & Botanical Club', text: 'Guided garden strolls, elevated flower bed gardening, or book reading.', icon: Icon.Sparkles },
  { time: '13:00', title: 'Three-Course Harvest Lunch', text: 'Farm-to-table lunch prepared with organic produce from our estate garden.', icon: Icon.Home },
  { time: '15:30', title: 'Art & Classical Music Ensemble', text: 'Creative ceramics studio, choir practice, bridge matches, or afternoon tea.', icon: Icon.Activity },
  { time: '18:00', title: 'Sunset Courtyard Dinner', text: 'Warm evening dining with visiting family members and ambient acoustic music.', icon: Icon.UserGroup },
  { time: '20:00', title: 'Evening Nursing & Peaceful Rest', text: 'Night-shift nursing check-in, medication rounds, and soothing bedtime care.', icon: Icon.ShieldCheck }
];

const FACILITIES = [
  { id: 1, name: '32°C Heated Hydrotherapy Pool', cat: 'Wellness', img: IMAGES.oceanPool, desc: 'Low-impact aquatic pool with hoist assist for joint relief and active rehabilitation.' },
  { id: 2, name: 'Ocean View Gourmet Dining Hall', cat: 'Dining', img: IMAGES.dining, desc: '3 Daily fresh meals created by our resident chef with tailored dietary plans.' },
  { id: 3, name: 'Elevated Botanical Gardens', cat: 'Outdoors', img: IMAGES.garden, desc: 'Wheelchair-accessible scented gardens with native Eastern Cape flora.' },
  { id: 4, name: 'Coastal Library & Sun Conservatory', cat: 'Social', img: IMAGES.lounge, desc: 'Quiet fireside reading nook stocked with high-print books and game boards.' }
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState('independent');
  const [activeStep, setActiveStep] = useState(0);
  const [facilityCategory, setFacilityCategory] = useState('All');
  
  // Interactive Cost Calculator state
  const [calcTier, setCalcTier] = useState('assisted');
  const [calcRoom, setCalcRoom] = useState('deluxe');
  const [calcPhysio, setCalcPhysio] = useState(true);
  const [calcDiet, setCalcDiet] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('tour'); // 'tour' or 'brochure'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '' });

  // Calculate dynamic price
  const estimatedMonthly = useMemo(() => {
    let base = CARE_LEVELS.find(c => c.id === calcTier)?.basePrice || 25000;
    if (calcRoom === 'deluxe') base += 6000;
    if (calcPhysio) base += 2200;
    if (calcDiet) base += 1500;
    return base;
  }, [calcTier, calcRoom, calcPhysio, calcDiet]);

  const filteredFacilities = useMemo(() => {
    if (facilityCategory === 'All') return FACILITIES;
    return FACILITIES.filter(f => f.cat.toLowerCase() === facilityCategory.toLowerCase());
  }, [facilityCategory]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2800);
  };

  const activeCareObj = CARE_LEVELS.find(c => c.id === selectedTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* Dynamic Font Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        h1, h2, h3, .font-heading { font-family: 'Outfit', sans-serif; }
        body, button, input { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {}
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#0B132B]/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Icon.Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading text-2xl font-bold tracking-tight block text-white leading-none">
                KAREIGA
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#38BDF8] uppercase block mt-1">
                Senior Living · Kenton-on-Sea
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#care-tiers" className="hover:text-[#38BDF8] transition">Care Tiers</a>
            <a href="#rhythm" className="hover:text-[#38BDF8] transition">Daily Rhythm</a>
            <a href="#facilities" className="hover:text-[#38BDF8] transition">Estate Life</a>
            <a href="#calculator" className="hover:text-[#38BDF8] transition">Rate Calculator</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+27466481200" className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#38BDF8] hover:underline">
              <Icon.Phone className="w-4 h-4" /> +27 (0)46 648 1200
            </a>
            <button
              onClick={() => { setModalType('tour'); setIsModalOpen(true); }}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition shadow-md shadow-blue-500/20"
            >
              Book Estate Tour
            </button>
          </div>
        </div>
      </header>

      {}
      {/* HERO SECTION */}
      <section className="relative bg-[#0B132B] text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        {/* Glow ambient background graphics */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#38BDF8] uppercase tracking-widest bg-blue-950/80 border border-blue-800/50 px-3.5 py-1.5 rounded-full">
              <Icon.Sparkles className="w-4 h-4 text-[#38BDF8]" /> Coastal Senior Living Redefined
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Compassionate care with an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#2563EB]">ocean view</span>.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Situated along the serene Eastern Cape coastline, Kareiga combines resort-style independence with 24/7 medical dignity. Private cottages, assisted living, and continuous nursing care.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => { setModalType('tour'); setIsModalOpen(true); }}
                className="group inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition shadow-xl shadow-blue-600/20"
              >
                Schedule Personal Tour
                <Icon.ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => { setModalType('brochure'); setIsModalOpen(true); }}
                className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm px-7 py-3.5 rounded-xl transition"
              >
                Download Info Pack
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800/80 max-w-lg">
              <div>
                <p className="font-heading text-3xl font-bold text-white">32+</p>
                <p className="text-slate-400 text-xs mt-1 font-mono">Years in Excellence</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-[#38BDF8]">1 : 3</p>
                <p className="text-slate-400 text-xs mt-1 font-mono">Dedicated Nurse Ratio</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-white">24/7</p>
                <p className="text-slate-400 text-xs mt-1 font-mono">Medical Response</p>
              </div>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
              <img
                src={IMAGES.hero}
                alt="Active elderly residents enjoying the coastal gardens"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
              
              {/* Floating Testimonial Pill */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-xs text-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 text-[#38BDF8] flex items-center justify-center font-bold text-sm shrink-0">
                  <Icon.ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <p className="font-semibold text-white">POPIA & Medical Certified</p>
                  <p className="text-slate-400 text-[11px]">Full clinical accreditation with 24h doctor on-call.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {}
      {/* CARE TIERS SECTION */}
      <section id="care-tiers" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs tracking-widest text-[#2563EB] uppercase block mb-2 font-semibold">
            Tailored Senior Care
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#0F172A] font-bold">
            Continuum of Care Tiers
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Transition seamlessly between care levels without changing your community or environment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CARE_LEVELS.map((tier) => {
            const TierIcon = tier.icon;
            const isSelected = selectedTab === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTab(tier.id)}
                className={`p-6 rounded-2xl transition text-left border ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#2563EB] shadow-xl shadow-blue-900/20'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-blue-600/20 text-[#38BDF8]' : 'bg-slate-100 text-blue-600'}`}>
                    <TierIcon className="w-6 h-6" />
                  </div>
                  <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${isSelected ? 'bg-blue-500/20 text-[#38BDF8]' : 'bg-slate-100 text-slate-600'}`}>
                    {tier.badge}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-1">{tier.title}</h3>
                <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{tier.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        {activeCareObj && (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-xl overflow-hidden h-72">
              <img
                src={activeCareObj.img}
                alt={activeCareObj.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-wider block">
                Selected Option Details
              </span>
              <h3 className="font-heading text-3xl text-[#0F172A] font-bold">
                {activeCareObj.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeCareObj.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeCareObj.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon.Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-slate-500 block">Baseline Accommodation & Care</span>
                  <span className="font-heading text-3xl font-bold text-[#0F172A]">
                    R {activeCareObj.basePrice.toLocaleString()} <span className="text-xs font-mono font-normal text-slate-500">/ month</span>
                  </span>
                </div>
                <button
                  onClick={() => { setModalType('tour'); setIsModalOpen(true); }}
                  className="bg-[#0B132B] hover:bg-blue-600 text-white font-semibold text-xs px-6 py-3 rounded-xl transition flex items-center gap-2 shadow"
                >
                  Request Application <Icon.ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {}
      {/* DAILY RHYTHM TIMELINE */}
      <section id="rhythm" className="bg-[#0B132B] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-widest block mb-2">
              Structured Daily Rhythm
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              A Day in Coastal Serenity
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Residents maintain complete personal freedom with the assurance of scheduled social routines and medical oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Steps Navigation */}
            <div className="lg:col-span-5 space-y-2">
              {DAILY_RHYTHM.map((step, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <button
                    key={step.time}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-xl transition flex items-center justify-between border ${
                      isCurrent
                        ? 'bg-[#2563EB] text-white border-blue-400 font-semibold shadow-lg shadow-blue-600/30'
                        : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-black/30 font-bold">
                        {step.time}
                      </span>
                      <span className="text-sm font-medium">{step.title}</span>
                    </div>
                    <Icon.ArrowRight className={`w-4 h-4 ${isCurrent ? 'opacity-100' : 'opacity-30'}`} />
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-3 text-[#38BDF8]">
                <span className="font-mono text-3xl font-bold">{DAILY_RHYTHM[activeStep].time}</span>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Scheduled Experience</span>
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white">
                {DAILY_RHYTHM[activeStep].title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {DAILY_RHYTHM[activeStep].text}
              </p>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400 font-mono">
                <Icon.ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                Full nursing support available throughout every daily activity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* COST CALCULATOR */}
      <section id="calculator" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0B132B] to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              <Icon.Calculator className="w-4 h-4" /> Transparent Pricing Tool
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Interactive Monthly Fee Estimator
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Tailor your monthly care package according to accommodation style and required medical supervision.
            </p>

            <div className="space-y-5 pt-2">
              {/* Care Level Selector */}
              <div>
                <label className="font-mono text-xs text-[#38BDF8] uppercase block mb-2 font-bold">1. Care Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'independent', label: 'Cottage' },
                    { id: 'assisted', label: 'Assisted' },
                    { id: 'frail', label: 'Frail Care' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCalcTier(item.id)}
                      className={`font-mono text-xs py-3 px-3 rounded-xl border transition ${
                        calcTier === item.id
                          ? 'bg-[#2563EB] text-white border-blue-400 font-bold'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Suite Type Selector */}
              <div>
                <label className="font-mono text-xs text-[#38BDF8] uppercase block mb-2 font-bold">2. Suite Style</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcRoom('standard')}
                    className={`font-mono text-xs py-3 px-3 rounded-xl border transition ${
                      calcRoom === 'standard'
                        ? 'bg-[#2563EB] text-white border-blue-400 font-bold'
                        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    Standard Coastal Suite
                  </button>
                  <button
                    onClick={() => setCalcRoom('deluxe')}
                    className={`font-mono text-xs py-3 px-3 rounded-xl border transition ${
                      calcRoom === 'deluxe'
                        ? 'bg-[#2563EB] text-white border-blue-400 font-bold'
                        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    Deluxe Ocean Terrace Suite
                  </button>
                </div>
              </div>

              {/* Checkbox Addons */}
              <div className="space-y-2 pt-2">
                <label className="flex items-center gap-3 cursor-pointer text-xs font-mono text-slate-300">
                  <input
                    type="checkbox"
                    checked={calcPhysio}
                    onChange={(e) => setCalcPhysio(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-0 w-4 h-4 bg-slate-800 border-slate-700"
                  />
                  Weekly Hydrotherapy & Physio (+R2,200/pm)
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-xs font-mono text-slate-300">
                  <input
                    type="checkbox"
                    checked={calcDiet}
                    onChange={(e) => setCalcDiet(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-0 w-4 h-4 bg-slate-800 border-slate-700"
                  />
                  Specialized Diabetic / Cardiac Dietician Meal Plan (+R1,500/pm)
                </label>
              </div>
            </div>
          </div>

          {/* Calculator Output Box */}
          <div className="lg:col-span-5 bg-white text-[#0F172A] p-8 rounded-2xl space-y-6 shadow-2xl">
            <span className="font-mono text-xs text-slate-500 uppercase font-bold block">Estimated All-Inclusive Rate</span>
            
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#0F172A]">
              R {estimatedMonthly.toLocaleString()}
              <span className="text-xs font-mono font-normal text-slate-500 block mt-1">per month (no hidden levies)</span>
            </div>

            <div className="space-y-2 text-xs text-slate-600 pt-4 border-t border-slate-100">
              <div className="flex justify-between">
                <span>• 24/7 Medical Call Button</span>
                <span className="font-mono text-blue-600 font-bold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>• 3 Chef Daily Meals & Teas</span>
                <span className="font-mono text-blue-600 font-bold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>• Weekly Laundry & Maid Service</span>
                <span className="font-mono text-blue-600 font-bold">Included</span>
              </div>
            </div>

            <button
              onClick={() => { setModalType('tour'); setIsModalOpen(true); }}
              className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs py-4 rounded-xl transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              Request Full Pricing Brochure <Icon.ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {}
      {/* FACILITIES GALLERY */}
      <section id="facilities" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-[#2563EB] uppercase font-bold tracking-widest block mb-2">
              Sanctuary Life
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#0F172A] font-bold">
              Estate Facilities & Grounds
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Wellness', 'Dining', 'Outdoors', 'Social'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFacilityCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-xl border transition uppercase ${
                  facilityCategory === cat
                    ? 'bg-[#0B132B] text-white border-[#0B132B]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((fac) => (
            <div key={fac.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={fac.img}
                  alt={fac.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#0B132B] text-white font-mono text-[10px] uppercase px-2.5 py-1 rounded-full font-bold">
                  {fac.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-2">{fac.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {/* TESTIMONIAL FEATURE */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 items-center">
          <img
            src={IMAGES.testimonial}
            alt="Family testimonial"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-400/50 shrink-0"
          />
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex gap-1 justify-center sm:justify-start text-amber-300">
              {[...Array(5)].map((_, i) => (
                <Icon.Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="font-heading text-xl sm:text-2xl font-medium leading-relaxed">
              "Moving my father to Kareiga gave our family our peace of mind back. The hydro pool has worked wonders for his arthritis, and he loves his morning ocean walks."
            </p>
            <p className="font-mono text-xs text-blue-200 uppercase tracking-widest font-semibold">
              — Eleanor Vance, Daughter of Resident
            </p>
          </div>
        </div>
      </section>

      {}
      {/* FOOTER */}
      <footer className="bg-[#0B132B] text-white pt-16 pb-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon.Waves className="w-6 h-6 text-[#38BDF8]" />
              <span className="font-heading text-2xl font-bold">KAREIGA</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premier oceanfront senior sanctuary offering independent, assisted, and 24/7 frail care nursing in Kenton-on-Sea, South Africa.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider mb-4 font-bold">Care Options</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#care-tiers" className="hover:underline">Independent Cottages</a></li>
              <li><a href="#care-tiers" className="hover:underline">Assisted Living Suites</a></li>
              <li><a href="#care-tiers" className="hover:underline">24/7 Memory Care</a></li>
              <li><a href="#calculator" className="hover:underline">Rate Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider mb-4 font-bold">Sanctuary Location</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2"><Icon.MapPin className="w-4 h-4 text-[#38BDF8]" /> Kenton-on-Sea, Eastern Cape</li>
              <li className="flex items-center gap-2"><Icon.Phone className="w-4 h-4 text-[#38BDF8]" /> +27 (0)46 648 1200</li>
              <li className="flex items-center gap-2"><Icon.Mail className="w-4 h-4 text-[#38BDF8]" /> info@kareiga.co.za</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider mb-4 font-bold">Open Visiting Hours</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Family visits welcomed daily between 08:30 and 17:30.
            </p>
            <button
              onClick={() => { setModalType('tour'); setIsModalOpen(true); }}
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl w-full transition"
            >
              Book Private Tour
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Kareiga Senior Living. All rights reserved.</p>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">POPIA Compliance</a>
          </div> */}
        </div>
      </footer>

      {}
      {/* BOOKING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-[#0F172A] p-8 rounded-3xl max-w-md w-full relative shadow-2xl border border-slate-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
            >
              <Icon.Close className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                  <Icon.Check className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0F172A]">Request Received!</h3>
                <p className="text-sm text-slate-600">
                  Thank you <strong className="text-[#0F172A]">{formData.name || 'Friend'}</strong>. Our admissions sister will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <span className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-wider block">
                  {modalType === 'tour' ? 'Estate Visit Schedule' : 'Download Info Brochure'}
                </span>
                
                <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
                  {modalType === 'tour' ? 'Book a Guided Walkthrough' : 'Receive Estate Rates & Info'}
                </h3>

                <div>
                  <label className="font-mono text-xs text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-700 block mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 82 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600"
                  />
                </div>

                {modalType === 'tour' && (
                  <div>
                    <label className="font-mono text-xs text-slate-700 block mb-1">Preferred Tour Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs py-3.5 rounded-xl transition mt-2 shadow-md shadow-blue-500/20"
                >
                  {modalType === 'tour' ? 'Confirm Estate Visit' : 'Download Info Package'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}