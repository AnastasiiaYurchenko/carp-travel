import React from 'react';
import './about.modules.css';

export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="container-about py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20">
        <h2 className=" text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-2">
          who <span className="font-medium">we are</span>
        </h2>

        <p className="w-[180px] md:w-[220px] xl:w-[292px] text-white font-extralight text-sm md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] mb-5 md:mb-4 xl:mb-6">
          <span className="font-normal">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="w-[180px] md:w-[220px] xl:w-[292px] text-white font-extralight text-sm  md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] mb-10">
          <span className="font-normal">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
        <div className="w-[180px] md:w-[221px] text-white uppercase font-normal text-sm md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] ml-auto mb-10">
          <p>From vacationers </p>
          <p className="text-right">to active travelers</p>
          <p className="font-extralight lowercase tracking-[-.01em] md:tracking-[.02em]">
            we have a tour for everyone.
          </p>
        </div>

        <p className="text-white font-extralight text-justify text-sm md:text-base xl:text-lg leading-[1.43] md:leading-5 xl:leading-[1.333] mb-10">
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
}
