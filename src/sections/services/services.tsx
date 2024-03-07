import Image from 'next/image';
import React from 'react';
import cards from '../../app/data/cards.json';

const titles = Object.values(cards.map((card) => card.title));

export default function Services() {
  return (
    <section id="services" className="bg-black/50">
      <div className="px-5 py-14">
        <h2 className=" text-white uppercase font-thin text-[40px] leading-[1.4] tracking-[-.04em] mb-6">
          we <span className="font-medium">offer</span>
        </h2>
        <ul>
          {cards.map((card) => {
            return (
              <li key={card.number}>
                <p>
                  <span>{card.number}/</span>05
                </p>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={280}
                  height={213}
                />
                <p>{card.text}</p>
                <ul>
                  {titles.map((title, index) => {
                    return <li key={index}>{title}</li>;
                  })}
                </ul>
                <p>{card.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
