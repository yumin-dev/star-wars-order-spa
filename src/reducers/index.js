import { combineReducers } from 'redux';
import { RECEIVE_EPISODES } from '../actions';

function receivedSortedEpisodes(state = [], action) {
  if (action.type === RECEIVE_EPISODES) {
    return action.episodes;
  }
  return state;
}

const rootReducer = combineReducers({
  episodes: receivedSortedEpisodes,
});

export default rootReducer;
