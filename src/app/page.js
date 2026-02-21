import DestinationCard from "@/components/Homepage/Destination/DestinationCard";
import HomeBlog from "@/components/Homepage/HomeBlog";
import WhyBookWithUs from "@/components/Homepage/WhyBookWithUs/WhyBookWithUs";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "TourMingle – Travel Guides, Destinations, Hotels & Tours",
  description:
    "TourMingle is a travel discovery site where you can explore top destinations, find popular hotels & tours, read travel guides, and access trusted booking links for unforgettable trips.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
};

export default async function HomePage() {
  return (
    <div>
      <div className="Banners">
        <div
          className="container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#ffffff",
              lineHeight: "1.4",
              letterSpacing: "1px",
              textShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            Adventure, excitement, and unforgettable experiences
            <br />
            all in one place!
          </h1>
        </div>
      </div>
      <div className="container">
        <h2
          style={{
            fontSize: "23px",
            margin: "40px 0 20px 0",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Top Destinations
        </h2>
        <p
          style={{
            fontSize: "20px",
            margin: "20px",
            textAlign: "center",
            color: "#7d7a7a",
          }}
        >
          Explore the most popular travel destinations loved by travelers around
          the world.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              name: "Jaipur",
              image: "/destination-img/kuala-lumpur.webp",
            },
            {
              name: "Kerala (Munnar & Alleppey)",
              image: "/india-visit/backwaters-of-alleppey.webp",
            },
            {
              name: "Manali, Himachal Pradesh",
              image: "/destination-img/kuala-lumpur.webp",
            },
            {
              name: "Varanasi, Uttar Pradesh",
              image: "/destination-img/kuala-lumpur.webp",
            },
          ].map((d, i) => (
            <DestinationCard key={i} destination={d} />
          ))}
        </div>
        <WhyBookWithUs />
        <HomeBlog />
      </div>
    </div>
  );
}
