const host = 'http://localhost:8080';
const sortEndpoint = '/v1/star-wars/watch-order';

const fetchSortedEpisodes = async (sort) => {
  console.log('--------------------in episodes API');
  const url = new URL(host + sortEndpoint);
  if (sort) {
    url.search = new URLSearchParams({ sort }).toString();
  }
  const response = await fetch(url);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export default fetchSortedEpisodes;
