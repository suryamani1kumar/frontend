import React from "react";
import styles from "./card.module.scss";
import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";

const Card = ({ url, img, heading, content, createDate }) => {
  return (
    <div className={styles.card}>
      <Link href={url}>
        <Image
          src={img}
          className={styles.card__img}
          alt="kuala-lumpur"
          width={0}
          height={0}
        />
        <div className={styles.card__body}>
          <h2 className={styles.card__title}>{heading}</h2>
          <p className={styles.card__description}>{content}</p>
          <div className={styles.card_read}>
            <p className={styles.readMore}>Read Article</p>
            <p className={styles.card_releaseDate}>
              <CiCalendar /> {createDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
