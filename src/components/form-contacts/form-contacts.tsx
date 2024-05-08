'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import ErrorIcon from '/public/assets/svg/error-icon.svg';

export default function FormContacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className="form md:flex gap-5 xl:flex-col w-full md:w-[704px] lg:w-[607px]"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="md:flex md:flex-col xl:flex-row xl:gap-5 mb-6">
        <div className="relative">
          <label
            htmlFor="fullname"
            className="block text-white text-xs font-extralight leading-loose tracking-[.2em]"
          >
            Full name
          </label>
          <input
            {...register('fullName', {
              required: true,
              minLength: 1,
              maxLength: 20,
            })}
            id="fullname"
            name="fullName"
            placeholder="John Smith"
            type="text"
            autoComplete="off"
            className="block bg-white opacity-[0.05] text-white text-[13px] xl:text-[20px] font-extralight leading-[1.85] w-full md:w-[221px] xl:w-[293px] h-[24px] pl-2 mb-6 placeholder:text-white placeholder:opacity-[0.2]"
          />
          {errors.fullName && (
            <p className="absolute right-0 xl:right-5 top-[52px] flex items-center justify-end">
              <ErrorIcon aria-label="Error Indicator" />
              <span className="text-orange text-xs font-extralight leading-6 ">
                Incorrect name
              </span>
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="text-white text-xs font-extralight leading-loose tracking-[.2em] "
          >
            E-mail
          </label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/,
            })}
            id="email"
            name="email"
            type="email"
            placeholder="johnsmith@email.com"
            autoComplete="off"
            className="bg-white opacity-[0.05] text-white text-[13px] xl:text-[20px] font-extralight leading-[1.85]  w-full md:w-[221px] xl:w-[293px] h-[24px] pl-2"
          />
          {errors.email && (
            <p className="absolute right-0 top-[52px] flex items-center justify-end">
              <ErrorIcon aria-label="Error Indicator" />
              <span className="text-orange text-xs font-extralight leading-6 ">
                Invalid email
              </span>
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-white text-xs font-extralight leading-loose tracking-[.2em] "
        >
          Message
        </label>
        <textarea
          {...register('message', {
            required: true,
          })}
          name="message"
          className="bg-white opacity-[0.05] text-white text-[13px] xl:text-[20px] font-extralight leading-6 form-textarea resize-none w-full md:w-[463px] xl:w-[607px] h-[193px] md:h-[221px] xl:h-[174px] p-2"
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
