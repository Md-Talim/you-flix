import getVideos from './getVideos';

const getSearchedVideos = (searchQuery: string) => {
  const query = `search?part=snippet&q=${searchQuery}`;

  return getVideos(query);
};

export default getSearchedVideos;
