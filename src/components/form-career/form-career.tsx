'use client';
import React from 'react';

export default function FormCareer() {
  return (
    <form className="form md:flex gap-5  w-full md:w-[704px] lg:w-[607px]">
      <div>
        <label
          htmlFor="fullname"
          className="block text-white text-xs font-extralight leading-loose tracking-[.2em] "
        >
          Full name
        </label>
        <input
          name="fullName"
          placeholder="John Smith"
          type="text"
          className="text-white bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6 h-[24px] w-full md:w-[222px] xl:w-[290px] mb-4 pl-2"
        />
        <label
          htmlFor="email"
          className="block text-white text-xs font-extralight leading-loose tracking-[.2em] "
        >
          E-mail
        </label>
        <input
          name="email"
          type="email"
          placeholder="johnsmith@email.com"
          className="bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6 w-full md:w-[221px] xl:w-[293px] mb-4 pl-2"
        />

        <label
          htmlFor="position"
          className="block text-white text-xs font-extralight leading-loose tracking-[.2em] "
        >
          Position
        </label>
        <input
          name="position"
          placeholder="Movie maker"
          type="text"
          className="bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6  w-full md:w-[221px] xl:w-[293px] mb-4 pl-2"
        />

        <label
          htmlFor="phone"
          className="block text-white text-xs font-extralight leading-loose tracking-[.2em] "
        >
          Phone
        </label>
        <input
          name="phone"
          placeholder="+ 38 (097) 12 34 567"
          type="tel"
          className="bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6  w-full md:w-[221px] xl:w-[293px] mb-4 pl-2"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-white text-xs font-extralight leading-loose tracking-[.2em] "
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="bg-white opacity-[0.05] text-white text-[13px] xl:text-[20px] font-extralight leading-6 bg-gray form-textarea resize-none w-full md:w-[221px] xl:w-[234px] h-[193px] md:h-[228px] xl:h-[174px] p-2 focus:text-white"
        />
        <button
          type="submit"
          className="block text-white text-[30px] xl:text-[32px] font-medium transition-all hover:underline uppercase ml-auto mt-6"
        >
          Send
        </button>
      </div>
    </form>
  );
}
