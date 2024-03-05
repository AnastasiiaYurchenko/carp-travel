import React from 'react';
import Link from 'next/link';
import './hero.modules.css';

import LeftFrameMob from '/public/assets/svg/left-frame-mob.svg';
import RightFrameMob from '/public/assets/svg/right-frame-mob.svg';
import LeftFrameTab from '/public/assets/svg/left-frame-tab.svg';
import RightFrameTab from '/public/assets/svg/right-frame-tab.svg';
import LeftFrameDesk from '/public/assets/svg/left-frame-desk.svg';
import RightFrameDesk from '/public/assets/svg/right-frame-desk.svg';

export default function Hero() {
  return (
    <div className="section">
      <div className="mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-[104px] pt-[105px] md:pt-[121px]  pb-14">
        <h1 className="ml-auto w-[118px] md:w-[230px]  xl:w-[305px] text-white font-thin uppercase text-right text-[37px] md:text-[67px] xl:text-[98px] tracking-[.04em] md:tracking-[.13em] xl:tracking-normal leading-[1.22] mb-6">
          <span className="font-medium xl:mr-2">7</span>days
          <span className="block font-light uppercase text-xs md:text-sm xl:text-base tracking-[.79em] md:tracking-[1.85em] xl:tracking-[2.28em] leading-tight mt-[-7px]">
            journey
          </span>
        </h1>
        <h2 className=" w-[280px] text-white uppercase font-thin text-[40px] leading-[1.4] tracking-[-.04em] mb-6">
          <span className="font-medium">Uncover</span> Carpathian’s Secrets
        </h2>
        <p className="w-[157px] text-white font-extralight text-[10px] leading-[1.6] mb-6">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text-white font-extralight text-justify text-sm leading-[1.43] mb-6">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <div className="relative cursor-pointer md:inline-block">
          <Link
            href="#contacts"
            className="inline-block w-full md:w-[230px] xl:w-[293px] py-[2.5px] md:py-[14px] xl:py-[16px] text-white uppercase font-bold text-lg xl:text-[32px] text-center leading-[2.67] md:leading-[1.29] bg-white/10 md:bg-white/5 transition-colors hover:bg-white/20"
            //   className="btn-primary"
          >
            join now
          </Link>
          <LeftFrameMob className="absolute md:hidden bottom-0 left-0" />
          <RightFrameMob className="absolute md:hidden bottom-0 right-0" />

          <LeftFrameTab className="absolute hidden md:block xl:hidden bottom-0 left-0" />
          <RightFrameTab className="absolute hidden md:block xl:hidden bottom-0 right-0" />

          <LeftFrameDesk className="hidden xl:block absolute bottom-0 left-0" />
          <RightFrameDesk className="hidden xl:block absolute bottom-0 right-0" />
        </div>
      </div>
    </div>
  );
}
