import React from 'react';

import { Link } from 'react-scroll';

import navs from '../../data/navs.json';

export default function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-[50px]">
      <button
        className="absolute top-[43px] right-[20px] uppercase tracking-widest text-white font-normal text-sm hover:underline transition-all"
        type="button"
        onClick={onClick}
      >
        Close
      </button>
      <ul className="flex flex-col gap-6 gap-12 justify-center items-center">
        {navs.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                spy={true}
                smooth={true}
                duration={500}
                className=" cursor-pointer font-normal text-white text-lg leading-[1.21] tracking-widest hover:underline transition-all"
                onClick={onClick}
              >
                {item.nav}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
