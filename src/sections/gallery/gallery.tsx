import React from 'react';
import gallery from '../../app/data/gallery.json';
import './gallery.modules.css';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="gallery" className="section-gallery">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20 ">
        <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-6 md:mb-18 xl:mb-6 ">
          our <span className="font-medium">gallery</span>
        </h2>
        <ul className="md:hidden mx-auto flex flex-col justify-center items-center gap-6">
          {gallery.map((item) => {
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
      </div>
    </section>
  );
}
