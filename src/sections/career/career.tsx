import React from 'react';
import advantages from '../../app/data/advantages.json';
import './career.modules.css';
import FormCareer from '@/components/form-career/form-career';

export default function Career() {
  return (
    <section id="career" className="section-career">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20 ">
        <div className="md:flex justify-between">
          <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-2 ">
            choose <span className="font-medium">us</span>
          </h2>

          <p className="w-[179px] md:w-[221px] xl:w-[293px] md:text-justify text-white font-extralight text-sm md:text-[13px] xl:text-lg leading-[1.43] md:leading-[1.54] xl:leading-[1.333] ml-auto mb-9 md:mb-[5px] xl:mb-[31px]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
        </div>

        <h3 className="w-[180px] text-white uppercase font-extralight text-[30px] xl:text-[36px] leading-[1.2] xl:leading-[1.083] mb-9 md:mb-[56px] xl:mb-[45px] ml-auto md:ml-[80px] xl:ml-[147px]">
          Why us ?
        </h3>
        <div className="md:flex gap-[20px]">
          <div>
            <ul>
              {advantages.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="w-[181px] xl:w-[562px] text-right text-white mb-4 last:mb-0 xl:flex gap-6"
                  >
                    <p className="font-normal text-sm leading-[1.43] mb-2 xl:w-[253px]">
                      {item.text}
                    </p>
                    <p className="font-extralight text-xs leading-[1.67] xl:w-[285px] xl:text-left">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:block">
            <p className="w-[179px] xl:w-[293px]  text-white font-extralight md:text-[13px] xl:text-lg leading-[1.53] xl:leading-[1.333]  mb-8  xl:mb-[31px]">
              Don&apos;t miss your opportunity! Fill out the form right now and
              join our team!
            </p>
            <FormCareer />
          </div>
        </div>
      </div>
    </section>
  );
}
