
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaWandMagicSparkles } from "react-icons/fa6";

/**
 * KAREIGA OLD AGE HOME — Modern Navbar
 *
 * Design system:
 * Deep Indigo  #0B132B
 * Sapphire     #2563EB
 * Sky Cyan     #38BDF8
 * Soft Slate   #F8FAFC
 * Slate        #475569
 *
 * Fonts:
 * Newsreader  — display / brand
 * Work Sans   — body
 * Space Mono  — utility labels
 *
 * Functionality:
 * - Responsive desktop/mobile navigation
 * - Active route highlighting
 * - Mobile menu toggle
 * - "Book a visit" CTA
 * - Wordmark with leaf icon
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

  // Desktop navigation links
  const linkClass = ({ isActive }) =>
    `
      relative text-sm font-medium tracking-wide
      transition-all duration-200
      group
      ${
        isActive
          ? 'text-[#38BDF8]'
          : 'text-white/80 hover:text-white'
      }
    `;

  // Mobile navigation links
  const mobileLinkClass = ({ isActive }) =>
    `
      block py-3.5
      border-b border-white/10
      text-base font-medium
      transition-colors duration-200
      ${
        isActive
          ? 'text-[#38BDF8]'
          : 'text-white/85 hover:text-white'
      }
    `;

  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-[#0B132B]/95
        backdrop-blur-md
        border-b border-white/10
        shadow-lg
        z-50
      "
    >
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600&family=Space+Mono:wght@400&family=Work+Sans:wght@400;500;600&display=swap');

        .font-display {
          font-family: 'Newsreader', serif;
        }

        .font-body {
          font-family: 'Work Sans', sans-serif;
        }

        .font-mono {
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          py-3.5
          px-5 sm:px-8 lg:px-10
        "
      >
        {/* =========================================================
            BRAND / WORDMARK
        ========================================================== */}
        <Link
          to="/"
          onClick={closeMenu}
          className="
            flex items-center gap-3
            group
            flex-shrink-0
          "
        >
          {/* Leaf icon */}
         
<span
  className="
    w-9 h-9
    rounded-xl
    bg-gradient-to-br from-[#38BDF8] to-[#2563EB]
    flex items-center justify-center
    shadow-md shadow-[#2563EB]/20
    transition-all duration-300
    group-hover:scale-105
    group-hover:shadow-lg
    group-hover:shadow-[#38BDF8]/20
  "
>
  <FaWandMagicSparkles className="text-white text-sm" />
</span>

          {/* Brand name */}
          <span className="flex items-center">
            <span
              className="
                font-display
                text-xl
                sm:text-[22px]
                font-medium
                text-white
                leading-none
                transition-colors duration-200
                group-hover:text-[#38BDF8]
              "
            >
              Kareiga
            </span>

            <span
              className="
                hidden sm:inline
                font-mono
                text-[9px]
                tracking-[0.18em]
                text-[#94A3B8]
                uppercase
                ml-2.5
                mt-1
              "
            >
              Old Age Home
            </span>
          </span>
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================== */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={linkClass}
            >
              {({ isActive }) => (
                <span className="relative">
                  {label}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute
                      -bottom-2
                      left-0
                      h-0.5
                      rounded-full
                      bg-[#38BDF8]
                      transition-all duration-300
                      ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }
                    `}
                  />
                </span>
              )}
            </NavLink>
          ))}

          {/* Book a visit CTA */}
          <Link
            to="/contact"
            className="
              ml-1
              inline-flex items-center justify-center
              font-mono
              text-[10px]
              tracking-[0.14em]
              uppercase
              font-medium
              bg-[#2563EB]
              text-white
              px-5
              py-2.5
              rounded-lg
              shadow-md
              shadow-[#2563EB]/20
              border border-[#2563EB]
              hover:bg-[#1D4ED8]
              hover:shadow-lg
              hover:shadow-[#2563EB]/30
              hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            Book a visit
          </Link>
        </div>

        {/* =========================================================
            MOBILE MENU BUTTON
        ========================================================== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="
            md:hidden
            w-10 h-10
            rounded-lg
            border border-white/10
            bg-white/5
            flex items-center justify-center
            text-white
            hover:bg-white/10
            hover:text-[#38BDF8]
            transition-all duration-200
            focus:outline-none
            focus:ring-2
            focus:ring-[#38BDF8]/50
          "
        >
          {isOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-[#0B132B]
            border-t border-white/10
            px-5 sm:px-8
            pb-6
            shadow-xl
          "
        >
          <div className="max-w-7xl mx-auto">
            {/* Mobile links */}
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                mt-5
                w-full
                inline-flex
                items-center
                justify-center
                font-mono
                text-[10px]
                tracking-[0.15em]
                uppercase
                font-medium
                bg-[#2563EB]
                text-white
                px-5
                py-3.5
                rounded-lg
                shadow-md
                shadow-[#2563EB]/20
                hover:bg-[#1D4ED8]
                transition-all duration-200
              "
            >
              Book a visit
            </Link>

            {/* Mobile location indicator */}
            <div
              className="
                mt-5
                flex items-center justify-center gap-2
                text-[10px]
                font-mono
                tracking-[0.12em]
                uppercase
                text-[#64748B]
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              Kenton-on-Sea · Eastern Cape
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}