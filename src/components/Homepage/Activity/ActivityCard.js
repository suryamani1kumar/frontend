import styles from "./activityCard.module.scss";
import { TfiLocationPin } from "react-icons/tfi";

export default function ActivityCard({ activity }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={activity.image} alt={activity.title} />
        <span className={styles.tag}>{activity.category}</span>
      </div>

      <div className={styles.content}>
        <h3>{activity.title}</h3>
        <p className={styles.location}><TfiLocationPin/> {activity.location}</p>
      </div>
    </div>
  );
}
