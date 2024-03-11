'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { EffectFade, Pagination } from 'swiper/modules';
import './services.modules.css';
import cards from '../../app/data/cards.json';

type Card = {
  number: string;
  title: string;
  text: string;
  description: string;
  img: string;
  imgtab: string;
  imgdesk: string;
  bg: string;
  bgtab: string;
  bgd: string;
};

const titles = Object.values(cards.map((card) => card.title));

export default function Services() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<li class="' + className + '">' + titles[index] + '</li>';
    },
  };

  return (
    <section id="services">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={pagination}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        {cards.map((card) => {
          const getImageSrc = (card: Card) => {
            if (screenWidth <= 767) {
              return card.img;
            } else if (screenWidth <= 1279) {
              return card.imgtab;
            } else {
              return card.imgdesk;
            }
          };
          return (
            <SwiperSlide
              key={card.number}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 24, 38, 0.75), rgba(0, 37, 49, 0)), linear-gradient(rgba(0, 37, 49, 0), rgba(0, 24, 38, 0.75)),
      linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(${card.bgd})`,
                backgroundSize: 'auto 247px, auto 247px, cover, cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top, bottom, center, center',
              }}
            >
              <div className="relative px-5 py-14 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] md:px-8 xl:px-20 md:grid gap-x-[20px] md:grid-cols-[auto_auto] xl:grid-cols-[auto_auto_auto] md:grid-rows-[auto_auto_auto_auto] xl:grid-rows-[auto_auto_auto] ">
                <h2 className=" text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-6 md:mb-[23px] col-start-1 col-end-2">
                  we <span className="font-medium">offer</span>
                </h2>
                <p className="text-white text-right md:text-left font-thin text-[43px] md:text-[67px] xl:text-[98px] leading-[1.2] mb-4 col-start-2 col-end-3">
                  {card.number}/<span className="opacity-20">05</span>
                </p>
                <Image
                  className="shadow-[0_0_100px_0_rgba(9,20,16,0.5)] mb-3 w-[280px] h-[213px] mx-auto md:m-0 md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px] col-start-1 col-end-2 row-start-2 row-end-5 xl:row-end-4"
                  src={getImageSrc(card)}
                  alt={card.title}
                  width={607}
                  height={429}
                />
                <p className="text-white font-extralight text-right md:text-left text-xs leading-[2] tracking-[.02em] mb-[224px] md:mb-[34px] xl:mb-244px col-start-2 col-end-3 row-start-3 row-end-4 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3">
                  {card.text}
                </p>

                <p className="md:w-[221px] xl:w-[293px] text-white font-extralight md:text-justify text-sm md:text-[13px] xl:text-lg leading-[1.43] md:leading-[1.54] xl:leading-[1.333] col-start-2 col-end-3 row-start-4 row-end-5 xl:col-start-3 xl:col-end-4 xl:row-start-3 xl:row-end-4">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}

        <ul className="swiper-pagination">
          {titles.map((title, index) => {
            return (
              <li
                className="flex gap-2 items-center w-[169px] xl:w-[236px] text-white opacity-50 uppercase font-extralight text-[20px] md:text-[22px] xl:text-[28px] leading-[0.85] md:leading-[0.81] xl:leading-[0.86] mb-4 xl:mb-6"
                key={index}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </Swiper>
    </section>
  );
}
