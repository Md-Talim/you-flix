import getVideos from "./getVideos";

interface Video {
  id: string;
  snippet: {
    thumbnails: { high: { url: string } };
  };
}

const usePopular = async () => {
  const query =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN";

  const videos = await getVideos(query);

  return videos.items.map((video: Video) => {
    return { videoId: video.id, imageUrl: video.snippet.thumbnails.high.url };
  });
};

export default usePopular;
