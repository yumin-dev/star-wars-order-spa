export const RECEIVE_EPISODES = 'RECEIVE_EPISODES';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const SELECT_ORDERBY = 'SELECT_ORDERBY';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const ADD_FAVORITE_DONE = 'ADD_FAVORITE_DONE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const DELETE_FAVORITE_DONE = 'DELETE_FAVORITE_DONE';

export function selectOrderBy(orderBasedBy) {
  return {
    type: SELECT_ORDERBY,
    orderBasedBy,
  };
}

export function receiveEpisodes(episodes) {
  return {
    type: RECEIVE_EPISODES,
    episodes,
  };
}

export function receieFavorites(favorites) {
  return {
    type: RECEIVE_FAVORITES,
    favorites,
  };
}

export function addFavoriteEpisode(imdbId) {
  return {
    type: ADD_FAVORITE,
    imdbId,
  };
}

export function addFavoriteDone(imdbId) {
  return {
    type: ADD_FAVORITE_DONE,
    imdbId,
  };
}

export function deleteFavoriteEpisode(imdbId) {
  return {
    type: DELETE_FAVORITE,
    imdbId,
  };
}

export function deleteFavoriteDone(imdbId) {
  return {
    type: DELETE_FAVORITE_DONE,
    imdbId,
  };
}
