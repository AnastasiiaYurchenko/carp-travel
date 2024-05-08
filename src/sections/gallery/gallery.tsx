'use client';

import React from 'react';

import GalleryList from '@/components/gallery-list/gallery-list';
import GallerySlider from '@/components/gallery-slider/gallery-slider';

import './gallery.modules.css';

export default function Gallery() {
  return (
    <section id="gallery" className="section-gallery">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] px-5 md:px-8 xl:px-6 ">
        <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-6 md:mb-[72px]  xl:mb-6 ">
          our <span className="font-medium">gallery</span>
        </h2>
        <GalleryList />
        <GallerySlider />
      </div>
    </section>
  );
}
