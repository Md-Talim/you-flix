import ThumbnailCard from "./ThumbnailCard";

interface Props {
  title: string;
  size?: "normal" | "large";
  videos: {
    imageUrl: string;
    videoId: string;
  }[];
}

const VideoCarousel = ({ title, size = "normal", videos }: Props) => {
  return (
    <section className="mt-8 ml-4 lg:ml-16">
      <h2 className="text-3xl font-semibold text-zinc-400">{title}</h2>
      <div className="hide-scrollbar flex gap-x-2 max-w-full overflow-x-scroll">
        {videos?.map((video) => (
          <ThumbnailCard
            imageUrl={video.imageUrl}
            key={video.videoId}
            size={size}
            videoId={video.videoId}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
