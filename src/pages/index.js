import AttraCard from '@/components/common/AttraCard';
import GlobalAttractions from '@/components/Homepage/Attractions/GlobalAttractions';
import SearchSlider from '@/components/SearchSlider/SearchSlider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Triploom</title>
        <meta name="description" content="Triploom" />
        <meta name="keywords" content="Triploom" />
      </Head>

      <SearchSlider />
      <div className="container">
        <h1>Explore more destinations in India</h1>
        <AttraCard />
        <h1>Explore more destinations around the world</h1>
        <AttraCard />
        <GlobalAttractions />
      </div>
    </>
  );
}
