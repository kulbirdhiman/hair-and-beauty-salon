'use client'; // Needed only for App Router to use state/hooks

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          satnam Salon
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((name, idx) => (
            <Link
              key={idx}
              href={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          {['Home', 'About', 'Services',  'Contact'].map((name, idx) => (
            <Link
              key={idx}
              href={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
              className="block text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
