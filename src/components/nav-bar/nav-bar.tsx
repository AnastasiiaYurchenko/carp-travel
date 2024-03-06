import React from 'react';
import navs from '../../app/navs.json';
import Link from 'next/link';
// import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <ul className="hidden md:flex gap-6 xl:gap-14 justify-center items-center">
      {navs.map((item) => {
        return (
          <li key={item.id}>
            <Link
              href={item.path}
              // to={item.path}
              // spy={true}
              // smooth={true}
              // // offset={50}
              // duration={500}
              className="font-normal text-white text-sm leading-[1.21] tracking-widest"
            >
              {item.nav}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
