import {
  FaMapSigns,
  FaHotel,
  FaTicketAlt,
  FaPlaneDeparture,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";
import styles from "./whyBookWithUs.module.scss";

export default function WhyBookWithUs() {
  const items = [
    {
      icon: <FaMapSigns />,
      title: "Easy Destination Guides",
      text: "Understand where to go, best time to visit, and what to explore.",
    },

    {
      icon: <FaTicketAlt />,
      title: "Stays & Experiences",
      text: "Find popular hotels, top tours, attractions, and local experiences in one place.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Travel Tips & Ideas",
      text: "Get helpful blog articles to plan smarter trips.",
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <h2>
          We Make <span>Travel Easier</span>
        </h2>
        <p>
          Discover destinations, hotels, and activities with simple travel
          guides
        </p>
      </div>

      <div className={styles.cardWrapper}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHead}>
              {item.icon}
              <p>{item.title}</p>
            </div>

            <div className={styles.content}>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
