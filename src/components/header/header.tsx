'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import NavBar from '../nav-bar/nav-bar';
import MobileMenu from '../mobile-menu/mobile-menu';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  const closeMenuOnEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflowY = showMobileMenu ? 'hidden' : 'auto';
    };

    if (showMobileMenu) {
      document.body.style.overflowY = 'hidden';
      window.addEventListener('scroll', handleBodyScroll);
      window.addEventListener('keydown', closeMenuOnEsc);
    } else {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('scroll', handleBodyScroll);
      window.removeEventListener('keydown', closeMenuOnEsc);
    }

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('scroll', handleBodyScroll);
      window.removeEventListener('keydown', closeMenuOnEsc);
    };
  }, [showMobileMenu]);

  return (
    <header className="absolute z-10 w-full ">
      <div className="mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] px-5 md:px-8 xl:px-6 pt-9 md:pt-7 flex justify-between items-center">
        <nav className="w-full flex justify-between items-center">
          <Link href="/" aria-label="Logo Carp-Travel - Navigate to Home">
            <Image
              src="/assets/images/logo.png"
              width={61}
              height={33}
              alt="Logo"
              priority={true}
              style={{ width: '61px', height: '33px' }}
            />
          </Link>
          <NavBar />
        </nav>

        <button
          className="md:hidden uppercase tracking-widest font-normal text-sm text-white border-none outline-none hover:underline transition-all"
          type="button"
          onClick={toggleMenu}
        >
          Menu
        </button>
        {showMobileMenu && <MobileMenu onClick={toggleMenu} />}
      </div>
    </header>
  );
}
