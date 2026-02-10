import styles from "./hotelCard.module.scss";
import { TfiLocationPin } from "react-icons/tfi";

export default function HotelCard({ hotel }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={hotel.image} alt={hotel.name} />
        <span className={styles.price}>₹{hotel.price}/night</span>
      </div>

      <div className={styles.content}>
        <h3>{hotel.name}</h3>
        <p className={styles.location}>
          <TfiLocationPin /> {hotel.location}
        </p>

        <div className={styles.footer}>
          <span className={styles.rating}>⭐ {hotel.rating}</span>
          <button className={styles.button}>View Details</button>
        </div>
      </div>
    </div>
  );
}
