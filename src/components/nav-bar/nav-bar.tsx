import React from 'react';
import { Link } from 'react-scroll';
import navs from '../../data/navs.json';

export default function NavBar() {
  return (
    <ul className="hidden md:flex gap-6 xl:gap-14 justify-center items-center">
      {navs.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer font-normal text-white text-sm leading-[1.21] tracking-widest hover:underline transition-all"
            >
              {item.nav}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
