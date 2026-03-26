import styles from "@/components/destinations/destinations.module.scss";

const continents = [
  {
    name: "Europe",
    image: "/destination-img/europe.webp",
  },
  {
    name: "Asia",
    image: "/destination-img/kuala-lumpur.webp",
  },
  {
    name: "Africa",
    image: "/destination-img/africa.webp",
  },
  {
    name: "Middle East",
    image: "/destination-img/middle-east.webp",
  },
];

export default function DestinationsPage() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Explore the World</h1>
          <p>Discover top continents and travel destinations with beautiful images and curated suggestions.</p>
        </div>
      </section>

      <section className={styles.intro}>
        <h2>Plan your next trip</h2>
        <p>From mountain landscapes to sun-drenched beaches, get inspired by these destination highlights.</p>
      </section>

      <section className={styles.grid}>
        {continents.map((continent) => (
          <article key={continent.name} className={styles.card}>
            <img src={continent.image} alt={continent.name} className={styles.image} />
            <div className={styles.cardContent}>
              <h3>{continent.name}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.recent}>
        <h2>Recent Destinations</h2>
        <div className={styles.recentList}>
          {[
            {
              name: "Santorini",
              desc: "A Greek island famous for white-washed buildings and spectacular sunsets.",
              image: "/destination-img/europe.webp",
            },
            {
              name: "Kyoto",
              desc: "Historic temples, gardens, and traditional tea houses in Japan.",
              image: "/destination-img/kuala-lumpur.webp",
            },
            {
              name: "Serengeti",
              desc: "Wildlife safaris and sweeping plains in Tanzania.",
              image: "/destination-img/africa.webp",
            },
          ].map((item) => (
            <article key={item.name} className={styles.recentCard}>
              <img src={item.image} alt={item.name} className={styles.recentImage} />
              <div className={styles.recentContent}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
