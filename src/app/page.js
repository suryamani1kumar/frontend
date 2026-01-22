import AttraCard from "@/components/common/AttraCard";
import GlobalAttractions from "@/components/Homepage/Attractions/GlobalAttractions";
import SearchBar from "@/components/Search/SearchBar";

export default function HomePage() {
  return (
    <div className="container">
      <SearchBar />
      <AttraCard heading="Explore more destinations in India" />
      <AttraCard heading="Explore more destinations around the world" />
      <GlobalAttractions />
    </div>
  );
}
