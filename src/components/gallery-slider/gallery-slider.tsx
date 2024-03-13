'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import gallery from '../../data/gallery.json';
import './gallery-slider.modules.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GallerySlider() {
  return (
    <div className="slider max-md:hidden">
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        autoplay={true}
        grabCursor={true}
        centeredSlides={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {gallery.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="shadow-[0_0_15px_0_rgba(0,0,0,0.5)] md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]"
            >
              <Image
                src={item.imgd}
                alt={item.description}
                width={606}
                height={294}
                sizes="(min-width: 768px) 415px, (min-width: 1280px) 606px"
              />
            </SwiperSlide>
          );
        })}
        <button
          type="button"
          className="swiper-button-prev"
          aria-label="Previous Image"
        >
          Back
        </button>
        <button
          type="button"
          className="swiper-button-next"
          aria-label="Next Image"
        >
          Next
        </button>
      </Swiper>
    </div>
  );
}
