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
      <div className=''>
        <div className="container">
          <SearchBar />
        </div>
      </div>

      <div className="container">
        <AttraCard heading="Explore more destinations in India" />
        <AttraCard heading="Explore more destinations around the world" />
        <GlobalAttractions />
      </div>
    </>
  );
}
