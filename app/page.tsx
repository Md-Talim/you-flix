import VideoCarousel from '@/components/VideoCarousel';
import getVideos from '@/hooks/getVideos';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="h-full">
      <Hero image="/banner.jpg" title="Aladdin" subTitle="Naam to suna hoga!" />
      <ProgrammingSection />
      <DSASection />
    </main>
  );
};

const ProgrammingSection = async () => {
  const programmingVideos = await getVideos('Programming');

  return (
    <div className="py-8">
      <VideoCarousel title="Programming Tutorials" videos={programmingVideos} />
    </div>
  );
};

const DSASection = async () => {
  const dsaVideos = await getVideos('Data Structures & Algorithms');

  return (
    <div className="py-8">
      <VideoCarousel
        title="Learn Data Structures & Algorithms"
        videos={dsaVideos}
      />
    </div>
  );
};

export default Home;
