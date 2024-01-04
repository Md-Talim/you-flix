import getVideos from "./getVideos";

const usePopular = () => {
  const query =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN";

  return getVideos(query);
};

export default usePopular;
