import Image from 'next/image';
import React from 'react';
import './services.modules.css';
import cards from '../../app/data/cards.json';

const titles = Object.values(cards.map((card) => card.title));

export default function Services() {
  return (
    <section id="services">
      {cards.map((card) => {
        return (
          <div
            key={card.number}
            className="px-5 py-14 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] md:px-8 xl:px-20"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 24, 38, 0.75), rgba(0, 37, 49, 0)), linear-gradient(rgba(0, 37, 49, 0), rgba(0, 24, 38, 0.75)),
      linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(${card.bgd})`,
              backgroundSize: 'auto 247px, auto 247px, cover, cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top, bottom, center, center',
            }}
          >
            <h2 className=" text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-6">
              we <span className="font-medium">offer</span>
            </h2>
            <p className="text-white text-right font-thin text-[43px] md:text-[67px] xl:text-[98px] leading-[1.2] mb-4">
              {card.number}/<span className="opacity-20">05</span>
            </p>
            <Image
              className="shadow-[0_0_100px_0_rgba(9, 20, 16, 0.5)] mb-2"
              src={card.img}
              alt={card.title}
              width={280}
              height={213}
            />
            <p className="text-white font-extralight text-right text-xs leading-[2] tracking-[.02em] mb-6 md:mb-[54px] xl:mb-244px">
              {card.text}
            </p>
            <ul className="mb-[34px]">
              {titles.map((title, index) => {
                return (
                  <li
                    className="flex gap-2 items-center active w-[169px] xl:w-[236px] text-white opacity-50 uppercase font-extralight text-[20px] md:text-[22px] xl:text-[28px] leading-[0.85] md:leading-[0.81] xl:leading-[0.86] mb-4 xl:mb-6"
                    key={index}
                  >
                    <span className="diamond"></span>
                    {title}
                  </li>
                );
              })}
            </ul>
            <p className="md:w-[221px] xl:w-[293px] text-white font-extralight md:text-justify text-sm md:text-[13px] xl:text-lg leading-[1.43] md:leading-[1.54] xl:leading-[1.333]">
              {card.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
