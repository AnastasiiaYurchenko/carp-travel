import React from 'react';
('use client');

import { useForm } from 'react-hook-form';

import ErrorIcon from '/public/assets/svg/error-icon.svg';

export default function FormCareer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className="form md:flex gap-5 lg:flex-col w-[280px] md:w-[704px] lg:w-[607px]"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="md:flex md:flex-col lg:flex-row">
        <label
          htmlFor="fullname"
          className="text-[12px] font-extralight leading-6 tracking-[2.4px]"
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
          className="text-[13px] lg:text-[20px] font-extralight leading-6 bg-gray w-[280px] md:w-[221px] lg:w-[293px]"
        />
        {errors.fullName && (
          <p className="absolute right-0 lg:right-5 top-[52px] flex items-center justify-end">
            <ErrorIcon />
            <span className="text-orange text-[12px] font-extralight leading-6 tracking-[2.4px]">
              Incorrect name
            </span>
          </p>
        )}

        <div className="relative">
          <label
            htmlFor="email"
            className="text-[12px] font-extralight leading-6 tracking-[2.4px]"
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
            className="text-[13px] lg:text-[20px] font-extralight leading-6 bg-gray w-[280px] md:w-[221px] lg:w-[293px]"
          />
          {errors.email && (
            <p className="absolute right-0 top-[52px] flex items-center justify-end">
              <ErrorIcon />
              <span className="text-orange text-[12px] font-extralight leading-6 tracking-[2.4px]">
                Invalid email
              </span>
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-[12px] font-extralight leading-6 tracking-[2.4px]"
        >
          Message
        </label>
        <textarea
          {...register('message', {
            required: true,
          })}
          name="message"
          className="text-[13px] lg:text-[20px] font-extralight leading-6 bg-gray form-textarea resize-none w-[280px] md:w-[463px] lg:w-[607px] h-[193px] md:h-[221px] lg:h-[174px]"
        />
        <button
          type="submit"
          className="block text-[30px] lg:text-[32px] font-thin hover:font-medium focus:font-medium uppercase ml-auto mt-6"
        >
          Send
        </button>
      </div>
    </form>
  );
}
