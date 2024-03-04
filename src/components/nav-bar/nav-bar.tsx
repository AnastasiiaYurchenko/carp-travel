import React from 'react';
import navs from '../../app/navs.json';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul>
        {navs.map((item) => {
          return (
            <li key={item.id} className="text-3xl">
              <Link href={item.path}>{item.nav}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
