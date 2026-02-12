import Engine from "@/components/Engine/Engine";
import ActivityCard from "@/components/Homepage/Activity/ActivityCard";
import GlobalAttractions from "@/components/Homepage/Attractions/GlobalAttractions";
import DestinationCard from "@/components/Homepage/Destination/DestinationCard";
import HomeBlog from "@/components/Homepage/HomeBlog";
import HotelCard from "@/components/Homepage/Hotels/HotelCard";
import WhyBookWithUs from "@/components/Homepage/WhyBookWithUs/WhyBookWithUs";

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
        <h2
          style={{
            fontSize: "23px",
            margin: "40px 0 20px 0",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Popular Hotels in India
        </h2>
        <p
          style={{
            fontSize: "20px",
            margin: "20px",
            textAlign: "center",
            color: "#7d7a7a",
          }}
        >
          Top-rated hotels across India offering comfort, luxury, and
          unforgettable experiences.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Treebo Trend Hotel",
              location: "Jaipur, Rajasthan",
              rating: "4.1",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Lemon Tree Hotel",
              location: "Bengaluru, Karnataka",
              rating: "4.3",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Radisson Blu",
              location: "Jaipur, Rajasthan",
              rating: "4.4",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              name: "Holiday Inn",
              location: "Mumbai, Maharashtra",
              rating: "4.5",
            },
          ].map((hotel, i) => (
            <HotelCard hotel={hotel} key={i} />
          ))}
        </div>
        <h2
          style={{
            fontSize: "23px",
            margin: "40px 0 20px 0",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Top Activities & Tours
        </h2>
        <p
          style={{
            fontSize: "20px",
            margin: "20px",
            textAlign: "center",
            color: "#7d7a7a",
          }}
        >
          Find exciting activities, guided tours, and unique experiences in
          every destination.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Scuba Diving Adventure",
              location: "Andaman Islands",
              category: "Water Adventure",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Paragliding in Solang Valley",
              location: "Manali, Himachal Pradesh",
              category: "Adventure",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Jaipur Elephant Village Experience",
              location: "Jaipur, Rajasthan",
              category: "Cultural / Wildlife",
            },
            {
              image: "/destination-img/kuala-lumpur.webp",
              title: "Gulmarg Gondola Ride",
              location: "Gulmarg, Kashmir",
              category: "Snow / Scenic",
            },
          ].map((activity, i) => (
            <ActivityCard activity={activity} key={i} />
          ))}
        </div>
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
          Explore the most popular travel destinations loved by travelers around the world.
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
        <h2
          style={{
            fontSize: "23px",
            margin: "40px 0",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Top Attraction
        </h2>
        <GlobalAttractions />
      </div>
    </div>
  );
}
