import VideoCarousel from '@/components/VideoCarousel';
import getVideos from '@/hooks/getVideos';
import Hero from './Hero';

const Home = () => {
  const videos = getVideos();

  return (
    <main className="h-full">
      <Hero image="/banner.jpg" title="Aladdin" subTitle="Naam to suna hoga!" />

      <div className="py-8">
        <VideoCarousel title="JavaScript Programming" videos={videos} />
      </div>
    </main>
  );
};

export default Home;
