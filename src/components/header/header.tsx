import React from 'react';
import Image from 'next/image';
import MobileMenu from '../mobile-menu/mobile-menu';

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto px-2.5 py-9">
      <Image src="/logo.png" width={61} height={33} alt="Logo" />
      <button
        className="uppercase tracking-widest font-normal text-sm"
        type="button"
      >
        Menu
      </button>
      <MobileMenu />
    </header>
  );
}
