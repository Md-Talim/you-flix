import getVideos from "./getVideos";

const getVideoDetails = async (videoId: string) => {
  const query = `videos?part=snippet,contentDetails,statistics&id=${videoId}`;

  const data = await getVideos(query);

  return data[0];
};

export default getVideoDetails;
