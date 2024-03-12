import React from 'react';
import FormContacts from '@/components/form-contacts/form-contacts';
import socials from '../../app/data/socials.json';
import './contacts.modules.css';

export default function Contacts() {
  return (
    <section id="contacts" className="section-contacts">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20 ">
        <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-2 ">
          contact <span className="font-medium">us</span>
        </h2>
        <div>
          <p className="text-white text-[12px] font-extralight leading-[20px] xl:leading-6">
            Phone number
          </p>
          <ul>
            <li>
              <a
                href="tel:+380981234567"
                className="transition-all hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
              >
                +38 (098) 12 34 567
              </a>
            </li>
            <li>
              <a
                href="tel:+380731234567"
                className="transition-all hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
              >
                +38 (073) 12 34 567
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white text-[12px] font-extralight leading-[20px] xl:leading-6">
            E-mail
          </p>
          <a
            href="mailto:support@carptravel.com"
            className="transition-all hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
          >
            support@carptravel.com
          </a>
        </div>
        <div>
          <p className="text-white text-[12px] font-extralight leading-[20px] xl:leading-6">
            Follow us
          </p>
          <ul className="">
            {socials.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href="#"
                    className="transition-all hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
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
    </section>
  );
}
