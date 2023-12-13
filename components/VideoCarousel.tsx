import ThumbnailCard from './ThumbnailCard';

interface Props {
  title: string;
  size?: 'small' | 'medium' | 'large';
  videos: {
    title: string;
    channelId: string;
    imageUrl: string;
  }[];
}

const VideoCarousel = ({ title, size = 'small', videos }: Props) => {
  return (
    <section className="pl-16 pr-4 space-y-4">
      <h2 className="text-3xl font-semibold text-zinc-400">{title}</h2>
      <div className="hide-scrollbar flex gap-x-2 max-w-full overflow-x-scroll">
        {videos.map((video) => (
          <ThumbnailCard
            key={`${video.channelId} - ${video.title}`}
            imageUrl={video.imageUrl}
            size={size}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
