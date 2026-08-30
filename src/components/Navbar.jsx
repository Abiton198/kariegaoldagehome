import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

/**
 * KAREIGA OLD AGE HOME — Navbar
 * Matches the design system from Home / About / Services / Contact:
 *  pine #16302A · sand #F1E9DA · gold #C68A2E · sage #7F9A87
 *  display: Newsreader · body: Work Sans · utility: Space Mono
 *
 * CHANGE FROM ORIGINAL: there's no Kareiga logo file yet, so the raster
 * `logo.jpeg` import + click-to-zoom modal has been replaced with a simple
 * wordmark (leaf mark + "Kareiga" in the display face). Swap the <FaLeaf>
 * mark for an <img src={logo} .../> as soon as you have a real logo, and
 * bring the zoom-modal back if it's still useful for that logo.
 */

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm tracking-wide transition ${
      isActive ? 'text-[#C68A2E]' : 'text-[#F1E9DA]/85 hover:text-[#F1E9DA]'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-3 border-b border-white/10 text-base ${
      isActive ? 'text-[#C68A2E]' : 'text-[#F1E9DA]/85'
    }`;

  return (
    <nav className="fixed top-0 w-full bg-[#16302A] z-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600&family=Space+Mono:wght@400&display=swap');
        .font-display { font-family: 'Newsreader', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sm:px-10">
        {/* Wordmark */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full bg-[#C68A2E] flex items-center justify-center flex-shrink-0">
            <FaLeaf className="text-[#16302A] text-sm" />
          </span>
          <span className="font-display text-lg text-[#F1E9DA] leading-none group-hover:text-[#C68A2E] transition">
            Kareiga
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] text-[#9CB0A3] uppercase align-middle ml-2">
              Old Age Home
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="font-mono text-xs tracking-[0.15em] uppercase bg-[#C68A2E] text-[#16302A] px-5 py-2.5 rounded-sm hover:bg-[#dda04a] transition"
          >
            Book a visit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-2xl text-[#F1E9DA] focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#16302A] px-6 sm:px-10 pb-6">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu} className={mobileLinkClass}>
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 inline-flex font-mono text-xs tracking-[0.15em] uppercase bg-[#C68A2E] text-[#16302A] px-5 py-3 rounded-sm"
          >
            Book a visit
          </Link>
        </div>
      )}
    </nav>
  );
}
