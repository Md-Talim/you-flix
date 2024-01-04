import getVideos from "./getVideos";

interface Details {
  snippet: {
    title: string;
    description: string;
  };
}

const useDetails = async (videoId: string) => {
  const query = `videos?part=snippet,contentDetails,statistics&id=${videoId}`;

  const data: { items: Details[] } = await getVideos(query);
  const [details, _restItems] = data.items;

  return {
    title: details.snippet.title,
    description: details.snippet.description,
  };
};

export default useDetails;
