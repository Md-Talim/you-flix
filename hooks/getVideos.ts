interface Video {
  id: { kind: string; videoId: string };
  snippet: {
    title: string;
    channelId: string;
    thumbnails: { high: { url: string } };
  };
}

const getVideos = async (query: string) => {
  const apiKey = process.env.API_KEY;

  const baseUrl = "https://youtube.googleapis.com/youtube/v3";

  try {
    const res = await fetch(`${baseUrl}/${query}&key=${apiKey}&maxResults=25`);

    const videos = await res.json();

    return videos.items.map((video: Video) => {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        channelId: video.snippet.channelId,
        imageUrl: video.snippet.thumbnails.high.url,
      };
    });
  } catch (error) {
    console.error(error);
  }
};

export default getVideos;
