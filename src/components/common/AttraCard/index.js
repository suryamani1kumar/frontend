import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { CiCalendar } from 'react-icons/ci';

const AttraCard = () => {
  const [startX, setStartX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const swiperRef = useRef(null);
  const handleOnMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
  };
  const handleOnMouseMove = (e) => {
    if (!isMouseDown || !swiperRef.current) return;
    e.preventDefault();
    const deltax = (e.clientX - startX) * 0.115;
    swiperRef.current.scrollLeft = scrollLeft - deltax;
  };
  const handleOnMouseUp = (e) => {
    setIsMouseDown(false);
  };
  const handleOnScroll = () => {
    setScrollLeft(swiperRef.current.scrollLeft);
  };
  return (
    <div
      className="swiperRootContainer"
      onMouseMove={handleOnMouseMove}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onScroll={handleOnScroll}
      ref={swiperRef}
    >
      <div className="wrapper">
        {/* https://github.com/virajj014/productslider-react */}
        {Array(9)
          .fill(0)
          .map((item, i) => (
            <div className="card" key={i}>
              <Image
                src="/destination-img/kuala-lumpur.webp"
                className="card__img"
                alt="kuala-lumpur"
                width={0}
                height={0}
              />
              <div className="card__body">
                <h2 className="card__title">Kuala Lumpur</h2>
                <p className="card__description">
                  the towering Petronas Twin Towers to the historic temples and
                  delicious street food ...
                </p>
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
  <button className="carousel-button">
        <span className="arrow">&#x276F;</span>
      </button>
    </div>
  );
};

export default AttraCard;
