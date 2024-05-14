import React from 'react';

import data from '../../data/about.json';
import './about.modules.css';

export default function About() {
  const {
    title,
    titleBold,
    firstTextBold,
    firstText,
    secondText,
    secondTextBold,
    thirdTextTop,
    thirdTextMiddle,
    thirdTextBottom,
    fourthTextBold,
    fourthText,
  } = data;
  return (
    <section id="about" className="section-about">
      <div className="container-about py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] px-5 md:px-8 xl:px-6 md:grid md:grid-cols-3 xl:grid-cols-4 md:grid-rows-[auto_auto_auto_auto] xl:grid-rows-[auto_auto_auto]">
        <h2 className=" text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-2 col-start-1 col-end-3">
          {title} <span className="font-medium">{titleBold}</span>
        </h2>

        <div className="w-[180px] md:w-[220px] xl:w-[292px] col-start-3 col-end-4 row-start-1 row-end-4 row-start-1 row-end-4 xl:row-end-3 mb-10 md:mb-16 xl:mb-[72px]">
          <p className="w-[180px] md:w-[220px] xl:w-[292px] text-white font-extralight text-sm md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] mb-5 md:mb-4 xl:mb-6">
            <span className="font-normal">{firstTextBold}</span> {firstText}
          </p>
          <p className="w-[180px] md:w-[220px] xl:w-[292px] text-white font-extralight text-sm  md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333]">
            <span className="font-normal">{secondTextBold}</span> {secondText}
          </p>
        </div>

        <div className="w-[180px] md:w-[221px] xl:w-[296px] text-white uppercase font-normal text-sm md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] ml-auto mb-10 md:mb-16 xl:mb-0 col-start-1 col-end-2 row-start-3 row-end-4 xl:col-start-4 xl:col-end-5 ">
          <p>{thirdTextTop}</p>
          <p className="text-right">{thirdTextMiddle}</p>
          <p className="font-extralight lowercase tracking-[-.01em] md:tracking-[.02em]">
            {thirdTextBottom}
          </p>
        </div>

        <p className="xl:w-[605px] text-white font-extralight text-justify text-sm md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] col-start-2 col-end-4 row-start-4 row-end-5  xl:col-start-1 xl:col-end-3 xl:row-start-3 xl:row-end-4">
          <span className="font-normal">{fourthTextBold}</span> {fourthText}
        </p>
      </div>
    </section>
  );
}
