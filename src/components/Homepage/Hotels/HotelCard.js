import { Rating } from "@mui/material";
import styles from "./hotelCard.module.scss";
import { TfiLocationPin } from "react-icons/tfi";

export default function HotelCard({ hotel }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={hotel.image} alt={hotel.name} />
      </div>

      <div className={styles.content}>
        <h3>{hotel.name}</h3>
        <p className={styles.location}>
          <TfiLocationPin /> {hotel.location}
        </p>

        <div className={styles.footer}>
          <span className={styles.rating}>
            <Rating
              name="half-rating"
              defaultValue={hotel.rating}
              precision={0.5}
            />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
