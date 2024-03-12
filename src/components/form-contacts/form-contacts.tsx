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
      <div className="md:flex md:flex-col xl:flex-row">
        <label
          htmlFor="fullname"
          className="block text-white text-xs font-extralight leading-6 "
        >
          Full name
        </label>
        <input
          {...register('fullName', {
            required: true,
            minLength: 1,
            maxLength: 20,
          })}
          name="fullName"
          placeholder="John Smith"
          type="text"
          className="bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6 bg-gray w-full md:w-[221px] xl:w-[293px]"
        />
        {errors.fullName && (
          <p className="absolute right-0 xl:right-5 top-[52px] flex items-center justify-end">
            <ErrorIcon />
            <span className="text-orange text-xs font-extralight leading-6 ">
              Incorrect name
            </span>
          </p>
        )}

        <div className="relative">
          <label
            htmlFor="email"
            className="text-white text-xs font-extralight leading-6 "
          >
            E-mail
          </label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/,
            })}
            name="email"
            type="email"
            placeholder="johnsmith@email.com"
            className="bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6 bg-gray w-full md:w-[221px] xl:w-[293px]"
          />
          {errors.email && (
            <p className="absolute right-0 top-[52px] flex items-center justify-end">
              <ErrorIcon />
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
          className="block text-white text-xs font-extralight leading-6 "
        >
          Message
        </label>
        <textarea
          {...register('message', {
            required: true,
          })}
          name="message"
          className="bg-white opacity-[0.05] text-[13px] xl:text-[20px] font-extralight leading-6 bg-gray form-textarea resize-none w-full md:w-[463px] xl:w-[607px] h-[193px] md:h-[221px] xl:h-[174px]"
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
