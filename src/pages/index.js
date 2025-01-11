import AttraCard from '@/components/common/AttraCard';
import GlobalAttractions from '@/components/Homepage/Attractions/GlobalAttractions';
import SearchSlider from '@/components/SearchSlider/SearchSlider';

export default function Home() {
  return (
    <>
      <SearchSlider />
      <GlobalAttractions />

      <AttraCard />
    </>
  );
}
