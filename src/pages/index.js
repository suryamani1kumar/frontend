import AttraCard from '@/components/common/AttraCard';
import GlobalAttractions from '@/components/Homepage/Attractions/GlobalAttractions';
import SearchBar from '@/components/Search/SearchBar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Triploom</title>
        <meta name="description" content="Triploom" />
        <meta name="keywords" content="Triploom" />
      </Head>

      <div className="container overallMar">
        <div>
          <h1>
            Adventure, excitement, and unforgettable experiences—all in one
            place!
          </h1>
          <SearchBar />
        </div>

        <AttraCard heading="Explore more destinations in India" />
        <AttraCard heading="Explore more destinations around the world" />
        <GlobalAttractions />
      </div>
    </>
  );
}
