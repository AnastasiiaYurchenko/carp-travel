import React from 'react';

export default function About() {
  return (
    <div id="about" className="bg-black/50">
      <div className="px-5 py-[54px]">
        <h2 className=" w-[280px] text-white uppercase font-thin text-[40px] leading-[1.4] tracking-[-.04em] mb-2">
          who <span className="font-medium">we are</span>
        </h2>

        <p className="w-[180px] text-white font-extralight text-sm leading-[1.43] mb-5">
          <span className="font-normal">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="w-[180px] text-white font-extralight text-sm leading-[1.43] mb-10">
          <span className="font-normal">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
        <div className="w-[180px] text-white uppercase font-normal text-sm leading-[1.43] ml-auto mb-10">
          <p>From vacationers </p>
          <p className="text-right">to active travelers</p>
          <p className="font-extralight lowercase tracking-[-.01em]">
            we have a tour for everyone.
          </p>
        </div>

        <p className="text-white font-extralight text-justify text-sm leading-[1.43] mb-10">
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </div>
  );
}
