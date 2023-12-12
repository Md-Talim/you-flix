import ThumbnailCard from './ThumbnailCard';

interface Props {
  title: string;
  size?: 'small' | 'medium' | 'large';
  videos: {
    id: {
      kind: string;
      videoId?: string;
      playlistId?: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width?: number;
          height?: number;
        };
        medium: {
          url: string;
          width?: number;
          height?: number;
        };
        high: {
          url: string;
          width?: number;
          height?: number;
        };
      };
      channelTitle: string;
      publishTime: string;
    };
  }[];
}

const VideoCarousel = ({ title, size = 'small', videos }: Props) => {
  return (
    <section className="pl-16 pr-4 space-y-4">
      <h2 className="text-3xl font-semibold text-zinc-400">{title}</h2>
      <div className="hide-scrollbar flex gap-x-2 max-w-full overflow-x-scroll">
        {videos.map((video) => (
          <ThumbnailCard
            key={`${video.snippet.channelId} - ${video.snippet.title}`}
            imageUrl={video.snippet.thumbnails.high.url}
            size={size}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
