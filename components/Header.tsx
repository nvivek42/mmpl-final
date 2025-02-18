'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Chakra_Petch } from 'next/font/google';

import { NAV_LINKS, SITE_TITLE } from '@/config/site';
import './Header.css';

const chakraPetch = Chakra_Petch({
  weight: ['400', '700'],
  subsets: ['latin']
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white px-20 py-5">
      <div className="container mx-auto flex items-center justify-between  ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <Image 
            src="/image/logo1.jpg" 
            alt="Metalmach Logo" 
            width={40} 
            height={40} 
            className="transition-transform duration-300 hover:rotate-6"
          />
          <span className={`site-title text-2xl font-bold ${chakraPetch.className} shiny-text`}>
            {SITE_TITLE}
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg 
            className="w-6 h-6 text-primary"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <svg 
                className="w-6 h-6 text-primary"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block absolute md:relative top-full left-0 w-full md:w-auto
          bg-white/90 md:bg-transparent shadow-md md:shadow-none
          transition-all duration-300 ease-in-out
        `}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
