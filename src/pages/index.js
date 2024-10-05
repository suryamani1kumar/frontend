import GlobalAttractions from '@/component/Attractions/GlobalAttractions';
import { Carousel } from '@/component/Carousel';
import { TopDomesticAttractions } from '@/service/homePage';

export default function Home() {
  return (
    <div>
      <GlobalAttractions />
      <Carousel data={TopDomesticAttractions} />
    </div>
  );
}
