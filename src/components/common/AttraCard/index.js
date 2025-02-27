import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { CiCalendar } from 'react-icons/ci';

const Data = [
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
  {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  },
];
const AttraCard = () => {
  const swiperRef = useRef(null);
  const handleprevButton = () => {
    const card = swiperRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft -= width;
    }
  };
  const handlenextButton = () => {
    const card = swiperRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft += width;
    }
  };
  return (
    <div className="relative">
      <div className="swiperRootContainer" ref={swiperRef}>
        <div className="wrapper">
          {/* https://www.travelogyindia.com/ */}
          {Data.map((item, i) => (
            <div className="card" key={i}>
              <Image
                src="/destination-img/kuala-lumpur.webp"
                className="card__img"
                alt="kuala-lumpur"
                width={0}
                height={0}
              />
              <div className="card__body">
                <h2 className="card__title">{item.heading}</h2>
                <p className="card__description">{item.content}</p>
                <div className="card_read">
                  <Link href="attractions/kuala-lumpur" className="readMore">
                    Read Article
                  </Link>
                  <p className="card_releaseDate">
                    <CiCalendar /> Aug 21
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button left-carousel-button"
        onClick={handleprevButton}
      >
        <span className="arrow">&#x276E;</span>
      </button>
      <button
        className="carousel-button right-carousel-button"
        onClick={handlenextButton}
      >
        <span className="arrow">&#x276F;</span>
      </button>
    </div>
  );
};

export default AttraCard;
