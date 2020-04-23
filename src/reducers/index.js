import { combineReducers } from 'redux';
import {
  RECEIVE_EPISODES, RECEIVE_FAVORITES, ADD_FAVORITE_DONE, DELETE_FAVORITE_DONE,
} from '../actions';

function receivedSortedEpisodes(state = [], action) {
  if (action.type === RECEIVE_EPISODES) {
    return action.episodes;
  }
  return state;
}

function updatedFavorites(state = [], action) {
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;
    case ADD_FAVORITE_DONE:
      return state.concat([action.imdbId]);
    case DELETE_FAVORITE_DONE:
      return state.filter((e) => e !== action.imdbId);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  episodes: receivedSortedEpisodes,
  favorites: updatedFavorites,
});

export default rootReducer;
