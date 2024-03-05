import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../nav-bar/nav-bar';
// import MobileMenu from '../mobile-menu/mobile-menu';

export default function Header() {
  return (
    <header className="absolute z-10 w-full ">
      <div className="mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-[104px] pt-9 md:pt-7 flex justify-between items-center">
        <nav className="w-full flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" width={61} height={33} alt="Logo" />
          </Link>
          <NavBar />
        </nav>

        <button
          className="md:hidden uppercase tracking-widest font-normal text-sm text-white"
          type="button"
        >
          Menu
        </button>
      </div>

      {/* <MobileMenu /> */}
    </header>
  );
}
