'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow, A11y } from 'swiper/modules';
import gallery from '../../../app/data/gallery.json';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GallerySlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  return (
    <div className="max-md:hidden">
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        autoplay={true}
        grabCursor={true}
        centeredSlides={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          scale: 0.5,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, Autoplay, EffectCoverflow, A11y]}
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
              />
            </SwiperSlide>
          );
        })}
        <button
          type="button"
          ref={prevRef}
          className="text-[33px] uppercase font-thin text-white hover:underline  leading-[1.21]"
        >
          Back
        </button>
        <button
          type="button"
          className="absolute right-0 bottom-0 text-white uppercase text-[33px] font-thin hover:underline leading-[1.21]"
          ref={nextRef}
        >
          Next
        </button>
      </Swiper>
    </div>
  );
}
