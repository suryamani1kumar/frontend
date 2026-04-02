import styles from "@/components/destinations/destinations.module.scss";
import { getAllDestinations } from "@/service/apicalling";
import Image from "next/image";
import Link from "next/link";

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

export default async function DestinationsPage() {
  // const des = await getAllDestinations();
  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Explore the World</h1>
          <p>
            Discover top continents and travel destinations with beautiful
            images and curated suggestions.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <h2>Plan your next trip</h2>
        <p>
          From mountain landscapes to sun-drenched beaches, get inspired by
          these destination highlights.
        </p>
      </section>

      <section className={styles.grid}>
        {continents.map((continent) => (
          <article key={continent.name} className={styles.card}>
            <img
              src={continent.image}
              alt={continent.name}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h3>{continent.name}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.recent}>
        <h2>Recent Destinations</h2>
        {/* <div className={styles.recentList}>
          {des.destinations.map((item) => (
            <Link
              href={`/destinations/${item.country.slug}/${item.city.slug}/${item.slug.trim()}`}
              key={item.name}
            >
              <article className={styles.recentCard}>
                {console.log("item", item.city.slug)}

                <Image
                  src={item.image || "/destination-img/europe.webp"}
                  alt={item.heading}
                  width={0}
                  height={0}
                  className={styles.recentImage}
                />
                <div className={styles.recentContent}>
                  <h3>{item.heading}</h3>
                  <p>{item.smallDescription}</p>
                </div>
              </article>
            </Link>
          ))}
        </div> */}
      </section>
    </div>
  );
}
