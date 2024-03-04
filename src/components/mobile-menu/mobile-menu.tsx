import React from 'react';
import NavBar from '../nav-bar/nav-bar';

export default function MobileMenu() {
  return (
    <div>
      <button
        className="uppercase tracking-widest font-normal text-sm"
        type="button"
      >
        Close
      </button>
      <NavBar />
    </div>
  );
}
