import React from 'react';
import './career-form.modules.css';

export default function CareerForm() {
  return (
    <section className="section-career-form md:hidden">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20 ">
        <p className="w-[179px] md:w-[221px] xl:w-[293px] md:text-justify text-white font-extralight text-sm md:text-[13px] xl:text-lg leading-[1.43] md:leading-[1.54] xl:leading-[1.333] ml-auto mb-9 md:mb-[5px] xl:mb-[31px]">
          Don&apos;t miss your opportunity! Fill out the form right now and join
          our team!
        </p>
      </div>
    </section>
  );
}
