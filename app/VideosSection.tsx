import VideoCarousel from '@/components/VideoCarousel';
import getVideos from '@/hooks/getVideos';

const ProgrammingSection = async () => {
  const programmingVideos = await getVideos('Programming');

  return (
    <div>
      <VideoCarousel
        title="Programming Tutorials"
        videos={programmingVideos}
        size="large"
      />
    </div>
  );
};

const DSASection = async () => {
  const dsaVideos = await getVideos('Data Structures & Algorithms');

  return (
    <div>
      <VideoCarousel
        title="Learn Data Structures & Algorithms"
        videos={dsaVideos}
        size="medium"
      />
    </div>
  );
};

const VideosSection = () => (
  <section className="space-y-8">
    <ProgrammingSection />
    <DSASection />
  </section>
);

export default VideosSection;
