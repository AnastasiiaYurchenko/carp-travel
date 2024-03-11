import React from 'react';
import gallery from '../../app/data/gallery.json';
import Image from 'next/image';

export default function GalleryList() {
  const images = gallery.slice(0, 3);
  return (
    <ul className="md:hidden mx-auto flex flex-col justify-center items-center gap-6">
      {images.map((item) => {
        return (
          <li key={item.id} className="shadow-[0_0_15px_0_rgba(0,0,0,0.5)]">
            <Image
              src={item.img}
              alt={item.description}
              width={280}
              height={187}
            />
          </li>
        );
      })}
    </ul>
  );
}
