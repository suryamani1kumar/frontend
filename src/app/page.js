import Engine from "@/components/Engine/Engine";
import ActivityCard from "@/components/Homepage/Activity/ActivityCard";
import GlobalAttractions from "@/components/Homepage/Attractions/GlobalAttractions";
import DestinationCard from "@/components/Homepage/Destination/DestinationCard";
import HomeBlog from "@/components/Homepage/HomeBlog";
import HotelCard from "@/components/Homepage/Hotels/HotelCard";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Travel Guides | Tourmingle",
  description: "Read Tourmingle travel ideas to inspire your next trip.",
  keywords: "travel guides, travel ideas, Tourmingle",
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
          <Engine />
        </div>
      </div>
      <div className="container">
        <h2 style={{ fontSize: "23px", margin: "20px 0", fontWeight: "600" }}>
          Popular Hotels
        </h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Sea View Resort",
              location: "Goa, India",
              rating: "4.5",
              price: "3,499",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Sea View Resort",
              location: "Goa, India",
              rating: "4.5",
              price: "3,499",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Sea View Resort",
              location: "Goa, India",
              rating: "4.5",
              price: "3,499",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Sea View Resort",
              location: "Goa, India",
              rating: "4.5",
              price: "3,499",
            },
          ].map((hotel, i) => (
            <HotelCard hotel={hotel} key={i} />
          ))}
        </div>
        <h2 style={{ fontSize: "23px", margin: "20px 0", fontWeight: "600" }}>
          Top Activities & Tours
        </h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Scuba Diving Adventure",
              location: "Andaman Islands",
              price: "2,999",
              category: "Water Sport",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Scuba Diving Adventure",
              location: "Andaman Islands",
              price: "2,999",
              category: "Water Sport",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Scuba Diving Adventure",
              location: "Andaman Islands",
              price: "2,999",
              category: "Water Sport",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Scuba Diving Adventure",
              location: "Andaman Islands",
              price: "2,999",
              category: "Water Sport",
            },
          ].map((activity, i) => (
            <ActivityCard activity={activity} key={i} />
          ))}
        </div>
        <h2 style={{ fontSize: "23px", margin: "20px 0", fontWeight: "600" }}>
          Top Destinations
        </h2>
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
              properties: 185,
            },
            {
              name: "Jaipur",
              image: "/destination-img/kuala-lumpur.webp",
              properties: 185,
            },
            {
              name: "Jaipur",
              image: "/destination-img/kuala-lumpur.webp",
              properties: 185,
            },
            {
              name: "Jaipur",
              image: "/destination-img/kuala-lumpur.webp",
              properties: 185,
            },
          ].map((d, i) => (
            <DestinationCard key={i} destination={d} />
          ))}
        </div>

        <HomeBlog />
        <h2 style={{ fontSize: "23px", margin: "20px 0", fontWeight: "600" }}>
          Top Attraction
        </h2>
        <GlobalAttractions />
      </div>
    </div>
  );
}
