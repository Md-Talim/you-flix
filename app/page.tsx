import ThumbnailCard from '@/components/ThumbnailCard';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="h-full">
      <Hero image="/banner.jpg" title="Aladdin" subTitle="Naam to suna hoga!" />

      <ThumbnailCard size="small" imageUrl="/banner.jpg" />
      <ThumbnailCard size="medium" imageUrl="/banner.jpg" />
      <ThumbnailCard size="large" imageUrl="/banner.jpg" />
    </main>
  );
};

export default Home;
