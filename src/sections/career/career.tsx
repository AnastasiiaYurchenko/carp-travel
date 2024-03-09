import React from 'react';
import advantages from '../../app/data/advantages.json';
import './career.modules.css';

export default function Career() {
  return (
    <section id="career" className="section-career">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20 ">
        <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-2 ">
          choose <span className="font-medium">us</span>
        </h2>

        <p className="w-[179px] md:w-[221px] xl:w-[293px] md:text-justify text-white font-extralight text-sm md:text-[13px] xl:text-lg leading-[1.43] md:leading-[1.54] xl:leading-[1.333] ml-auto mb-9 md:mb-[5px] xl:mb-[31px]">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>

        <h3 className="w-[180px] text-white uppercase font-extralight text-[30px] xl:text-[36px] leading-[1.2] xl:leading-[1.083] mb-9 md:mb-[56px] xl:mb-[45px] ml-auto ">
          Why us ?
        </h3>

        <ul>
          {advantages.map((item) => {
            return (
              <li
                key={item.id}
                className="w-[181px] text-right text-white mb-4 last:mb-0"
              >
                <p className="font-normal text-sm leading-[1.43] mb-2">
                  {item.text}
                </p>
                <p className="font-extralight text-xs leading-[1.67]">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
