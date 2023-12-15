import Hero from './Hero';
import VideosSection from './VideosSection';

const Home = () => {
  return (
    <main className="h-full">
      <Hero image="/banner.jpg" title="Aladdin" subTitle="Naam to suna hoga!" />
      <VideosSection />
    </main>
  );
};

export default Home;
