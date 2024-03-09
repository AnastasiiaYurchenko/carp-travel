import React from 'react';
import FormContacts from '@/components/form-contacts/form-contacts';
import './contacts.modules.css';

export default function Contacts() {
  return (
    <section id="contacts" className="section-contacts">
      <div className=" py-14 md:py-16 xl:py-20 mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] px-5 md:px-8 xl:px-20 ">
        <h2 className="text-white uppercase font-thin text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] tracking-[-.04em] mb-2 ">
          contact <span className="font-medium">us</span>
        </h2>

        <FormContacts />
      </div>
    </section>
  );
}
