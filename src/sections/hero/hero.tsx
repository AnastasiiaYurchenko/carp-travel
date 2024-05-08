'use client';

import React from 'react';
import { Link } from 'react-scroll';

import './hero.modules.css';

import LeftFrameMob from '/public/assets/svg/left-frame-mob.svg';
import RightFrameMob from '/public/assets/svg/right-frame-mob.svg';
import LeftFrameTab from '/public/assets/svg/left-frame-tab.svg';
import RightFrameTab from '/public/assets/svg/right-frame-tab.svg';
import LeftFrameDesk from '/public/assets/svg/left-frame-desk.svg';
import RightFrameDesk from '/public/assets/svg/right-frame-desk.svg';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="md:flex justify-between md:gap-12 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] px-5 md:px-8 xl:px-6 pt-[105px] md:pt-[121px]  xl:pt-[130px] pb-14">
        <p className=" md:hidden ml-auto w-[118px] md:w-[230px]  xl:w-[305px] text-white font-thin uppercase text-right text-[37px] md:text-[67px] xl:text-[98px] tracking-[.04em] md:tracking-[.13em] xl:tracking-normal leading-[1.22] mb-6">
          <span className="font-medium xl:mr-2">7</span>days
          <span className="block font-light uppercase text-xs md:text-sm xl:text-base tracking-[.79em] md:tracking-[1.85em] xl:tracking-[2.28em] leading-tight xl:leading-[1.19] mt-[-7px] xl:mt-[-8.5px]">
            journey
          </span>
        </p>
        <div>
          <h1 className=" w-[280px] md:w-[426px] xl:w-[646px] text-white uppercase font-thin text-[40px] md:text-[67px] xl:md:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-6 md:mb-[68px] xl:mb-[148px]">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="w-[157px] md:w-[262px] xl:w-[646px] text-white font-extralight text-[10px] md:text-[14px] xl:text-base leading-[1.6] md:leading-[1.143] md:treaking-[0.09em] mb-6 md:mb-0">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="md:w-[230px] xl:w-[305px]">
          <p className="hidden md:block md:w-[230px]  xl:w-[305px] text-white font-thin uppercase text-right text-[37px] md:text-[67px] xl:text-[98px] tracking-[.04em] md:tracking-[.13em] xl:tracking-normal leading-[1.22] mb-14 xl:mb-[181px]">
            <span className="font-medium xl:mr-2">7</span>days
            <span className="block font-light uppercase text-xs md:text-sm xl:text-base tracking-[.79em] md:tracking-[1.85em] xl:tracking-[2.28em] leading-tight xl:leading-[1.19] mt-[-7px] xl:mt-[-8.5px]">
              journey
            </span>
          </p>
          <p className="xl:w-[294px] text-white font-extralight text-justify text-sm md:text-base xl:text-lg leading-[1.43] md:leading-[1.25] xl:leading-[1.333] mb-6 md:mb-7">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <div className="relative cursor-pointer md:inline-block">
            <Link
              href="/"
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer inline-block w-full md:w-[230px] xl:w-[293px] py-[2.5px] md:py-[14px] xl:py-[16px] text-white uppercase font-bold text-lg xl:text-[32px] text-center leading-[2.67] md:leading-[1.29] bg-white/10 md:bg-white/5 transition-colors hover:bg-white/20"
              aria-label="Go to Contacts Section"
            >
              join now
            </Link>
            <LeftFrameMob
              className="absolute md:hidden bottom-0 left-0"
              aria-label="Decoration border for Link Go to Contacts Section"
            />
            <RightFrameMob
              className="absolute md:hidden bottom-0 right-0"
              aria-label="Decoration border for Link Go to Contacts Section"
            />

            <LeftFrameTab
              className="absolute hidden md:block xl:hidden bottom-0 left-0"
              aria-label="Decoration border for Link Go to Contacts Section"
            />
            <RightFrameTab
              className="absolute hidden md:block xl:hidden bottom-0 right-0"
              aria-label="Decoration border for Link Go to Contacts Section"
            />

            <LeftFrameDesk
              className="hidden xl:block absolute bottom-0 left-0"
              aria-label="Decoration border for Link Go to Contacts Section"
            />
            <RightFrameDesk
              className="hidden xl:block absolute bottom-0 right-0"
              aria-label="Decoration border for Link Go to Contacts Section"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
