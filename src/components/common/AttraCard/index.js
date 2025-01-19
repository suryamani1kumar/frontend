import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';

const AttraCard = () => {
  return (
    <div className="wrapper">
      {Array(5)
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
  );
};

export default AttraCard;
