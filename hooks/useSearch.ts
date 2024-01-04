import getVideos from "./getVideos";

interface Video {
  id: { videoId: string };
  snippet: {
    thumbnails: { high: { url: string } };
  };
}

const useSearch = async (searchQuery: string) => {
  const query = `search?part=snippet&type=video&q=${searchQuery}`;

  const videos = await getVideos(query);

  return videos.items.map((video: Video) => {
    return {
      videoId: video.id.videoId,
      imageUrl: video.snippet.thumbnails.high.url,
    };
  });
};

export default useSearch;
