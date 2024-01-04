const getVideos = async (query: string) => {
  const apiKey = process.env.API_KEY;

  const baseUrl = "https://youtube.googleapis.com/youtube/v3";

  try {
    const res = await fetch(`${baseUrl}/${query}&key=${apiKey}&maxResults=25`);

    const videos = await res.json();

    return videos;
  } catch (error) {
    console.error(error);
  }
};

export default getVideos;
