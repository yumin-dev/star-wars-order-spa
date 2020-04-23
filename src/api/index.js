const host = 'http://localhost:8080';
const sortEndpoint = '/v1/star-wars/watch-order';
const favoritesEnpoint = '/v1/star-wars/favorite/';

const fetchSortedEpisodes = async (sort) => {
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

const deleteFavorite = async (imdbId) => {
  const url = new URL(host + favoritesEnpoint + imdbId);
  const response = await fetch(url, { method: 'DELETE' });
  if (response.status >= 400) {
    throw new Error('service call failed');
  }
};

const addFavorite = async (imdbId) => {
  const url = new URL(host + favoritesEnpoint + imdbId);
  const response = await fetch(url, { method: 'POST' });
  if (response.status >= 400) {
    throw new Error('service call failed');
  }
};

const fetchAllFavorites = async () => {
  const url = new URL(`${host + favoritesEnpoint}all`);
  const response = await fetch(url);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {
  fetchSortedEpisodes, fetchAllFavorites, deleteFavorite, addFavorite,
};
