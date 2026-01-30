import GlobalAttractions from "@/components/Homepage/Attractions/GlobalAttractions";
import HomeBlog from "@/components/Homepage/HomeBlog";
import SearchBar from "@/components/Search/SearchBar";

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
    <div className="container">
      <SearchBar />
      <HomeBlog />
      <GlobalAttractions />
    </div>
  );
}
