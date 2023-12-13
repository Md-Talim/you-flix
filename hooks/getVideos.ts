interface Video {
  id: { kind: string };
  snippet: {
    title: string;
    channelId: string;
    thumbnails: { high: { url: string } };
  };
}

const getVideos = async (query: string) => {
  const apiKey = process.env.API_KEY;

  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${apiKey}&q=${query}`,
  );

  const videos = await res.json();

  return videos.items.map((video: Video) => {
    return {
      title: video.snippet.title,
      channelId: video.snippet.channelId,
      imageUrl: video.snippet.thumbnails.high.url,
    };
  });
};

export default getVideos;
