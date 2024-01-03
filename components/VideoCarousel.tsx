import ThumbnailCard from "./ThumbnailCard";

interface Props {
  title: string;
  size?: "small" | "medium" | "large";
  videos: {
    title: string;
    channelId: string;
    imageUrl: string;
    videoId: string;
  }[];
}

const VideoCarousel = ({ title, size = "small", videos }: Props) => {
  return (
    <section className="mt-8 ml-4 lg:ml-16">
      <h2 className="text-3xl font-semibold text-zinc-400">{title}</h2>
      <div className="hide-scrollbar flex gap-x-2 max-w-full overflow-x-scroll">
        {videos?.map((video) => (
          <ThumbnailCard
            key={`${video.channelId} - ${video.title}`}
            imageUrl={video.imageUrl}
            size={size}
            videoId={video.videoId}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
