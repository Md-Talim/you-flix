import videos from '@/data/index';

const getVideos = () => {
  return videos.map((video) => {
    return {
      title: video.snippet.title,
      channelId: video.snippet.channelId,
      imageUrl: video.snippet.thumbnails.high.url,
    };
  });
};

export default getVideos;
