export const RECEIVE_EPISODES = 'RECEIVE_ORDER';
export const SELECT_ORDERBY = 'SELECT_ORDERBY';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export function selectOrderBy(orderBasedBy) {
  return {
    type: SELECT_ORDERBY,
    orderBasedBy,
  };
}

export function receiveEpisodes(orderBasedBy, episodes) {
  return {
    type: RECEIVE_EPISODES,
    orderBasedBy,
    episodes,
  };
}
