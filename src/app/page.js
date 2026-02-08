import Engine from "@/components/Engine/Engine";
import GlobalAttractions from "@/components/Homepage/Attractions/GlobalAttractions";
import HomeBlog from "@/components/Homepage/HomeBlog";

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
        <div className="container">
          <div
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
                margin: 0,
              }}
            >
              Adventure, excitement, and unforgettable experiences
              <br />
              all in one place!
            </h1>
            <Engine/>
          </div>
        </div>
      </div>
      <div className="container">
        <HomeBlog />
        <GlobalAttractions />
      </div>
    </div>
  );
}
