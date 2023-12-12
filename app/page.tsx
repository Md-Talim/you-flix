import VideoCarousel from '@/components/VideoCarousel';
import data from '@/data';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="h-full">
      <Hero image="/banner.jpg" title="Aladdin" subTitle="Naam to suna hoga!" />

      <div className="py-8">
        <VideoCarousel title="JavaScript Programming" videos={data} />
      </div>
    </main>
  );
};

export default Home;
