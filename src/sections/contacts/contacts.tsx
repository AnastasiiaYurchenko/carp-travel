import React from 'react';
import FormContacts from '@/components/form-contacts/form-contacts';
import socials from '../../data/socials.json';
import './contacts.modules.css';

export default function Contacts() {
  return (
    <section id="contacts" className="section-contacts">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] px-5 md:px-8 xl:px-6 ">
        <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-9 xl:mb-[71px]">
          contact <span className="font-medium">us</span>
        </h2>
        <div className="xl:flex justify-between gap-6">
          <div className="grid grid-cols-[auto_auto] md:grid-cols-[auto_auto_50px_auto_auto] xl:grid-cols-[auto_auto] grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] xl:grid-rows-[auto_auto_auto] gap-x-5 justify-end md:justify-start md:ml-[36px] xl:ml-[107px] mb-3">
            <p className="inline-block text-white text-xs font-extralight leading-[1.67] xl:leading-6 col-start-2 col-end-3 row-start-1 row-end-2 ">
              Phone number
            </p>
            <ul className="mb-6 xl:mb-[64px] col-start-1 col-end-2 row-start-1 row-end-2 justify-self-end md:col-start-1 md:col-end-2 xl:col-start-1 xl:col-end-2">
              <li>
                <a
                  href="tel:+380981234567"
                  className="transition-all hover:underline text-white text-sm leading-[1.71] md:text-base md:leading-normal xl:text-lg xl:leading-[1.33] font-normal "
                >
                  +38 (098) 12 34 567
                </a>
              </li>
              <li>
                <a
                  href="tel:+380731234567"
                  className="transition-all hover:underline text-white text-sm leading-[1.71] md:text-base md:leading-normal xl:text-lg xl:leading-[1.33] font-normal "
                >
                  +38 (073) 12 34 567
                </a>
              </li>
            </ul>

            <p className="mb-6 xl:mb-[124px] text-white text-xs  font-extralight leading-[1.67] xl:leading-6 col-start-2 col-end-3 row-start-2 row-end-3">
              E-mail
            </p>
            <a
              href="mailto:support@carptravel.com"
              className="transition-all hover:underline text-white ttext-sm leading-[1.71] md:text-base md:leading-normal xl:text-lg xl:leading-[1.33] font-normal  col-start-1 col-end-2 row-start-2 row-end-3 justify-self-end "
            >
              support@carptravel.com
            </a>

            <p className="text-white text-xs  font-extralight leading-[1.67] xl:leading-6 col-start-1 col-end-1 row-start-3 row-end-4 justify-self-end md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-4 xl:justify-self-start">
              Follow us
            </p>
            <ul className="col-start-2 col-end-3 row-start-3 row-end-4 md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-4 xl:justify-self-end">
              {socials.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href="#"
                      className="transition-all hover:underline text-white text-sm leading-[1.71] md:text-base md:leading-normal xl:text-lg xl:leading-[1.33] font-normal xl:text-right"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <FormContacts />
        </div>
      </div>
    </section>
  );
}
