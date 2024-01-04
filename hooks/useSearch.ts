import getVideos from "./getVideos";

const useSearch = (searchQuery: string) => {
  const query = `search?part=snippet&type=video&q=${searchQuery}`;

  return getVideos(query);
};

export default useSearch;
