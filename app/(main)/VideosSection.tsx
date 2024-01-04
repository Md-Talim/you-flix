import VideoCarousel from "@/components/VideoCarousel";
import usePopular from "@/hooks/usePopular";
import useSearch from "@/hooks/useSearch";

const ProgrammingSection = async () => {
  const programmingVideos = await useSearch("Programming");

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
  const dsaVideos = await useSearch("Data Structures & Algorithms");

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

const PopularVideosSection = async () => {
  const popularVideos = await usePopular();

  return (
    <div>
      <VideoCarousel title="Popular Videos" videos={popularVideos} />
    </div>
  );
};

const VideosSection = () => (
  <section className="space-y-8">
    <PopularVideosSection />
    <ProgrammingSection />
    <DSASection />
  </section>
);

export default VideosSection;
