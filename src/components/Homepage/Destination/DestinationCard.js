import styles from "./destinationCard.module.scss";

export default function DestinationCard({ destination }) {
  return (
    <div className={styles.card}>
      <img
        src={destination.image}
        alt={destination.name}
        className={styles.image}
      />

      <div className={styles.overlay}>
        <h3>{destination.name}</h3>
      </div>
    </div>
  );
}
