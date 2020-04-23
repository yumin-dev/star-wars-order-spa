import {
  takeLatest, put, call, fork,
} from 'redux-saga/effects';
import * as actions from '../actions';
import {
  fetchSortedEpisodes, fetchAllFavorites, addFavorite, deleteFavorite,
} from '../api';

export function* invokeFetchSortedEpisodes(action) {
  const orderBasedBy = (action && action.orderBasedBy) || 'release';
  const episodes = yield call(fetchSortedEpisodes, orderBasedBy);
  yield put(actions.receiveEpisodes(episodes));
}

export function* invokeFetchAllFavorites() {
  const favorites = yield call(fetchAllFavorites);
  yield put(actions.receieFavorites(favorites));
}

export function* invokeDeleteFavoriteEpisodeApi(action) {
  yield call(deleteFavorite, action.imdbId);
  yield put(actions.deleteFavoriteDone(action.imdbId));
}

export function* invokeAddFavoriteEpisodeApi(action) {
  yield call(addFavorite, action.imdbId);
  yield put(actions.addFavoriteDone(action.imdbId));
}

export function* addFavoriteEpisode() {
  yield takeLatest(actions.ADD_FAVORITE, invokeAddFavoriteEpisodeApi);
}

export function* deleteFavoriteEpisode() {
  yield takeLatest(actions.DELETE_FAVORITE, invokeDeleteFavoriteEpisodeApi);
}

export function* updateEpisodesOrder() {
  yield takeLatest(actions.SELECT_ORDERBY, invokeFetchSortedEpisodes);
}

export function* startup() {
  yield fork(invokeFetchSortedEpisodes);
  yield fork(invokeFetchAllFavorites);
}

export default function* root() {
  yield fork(startup);
  yield fork(updateEpisodesOrder);
  yield fork(addFavoriteEpisode);
  yield fork(deleteFavoriteEpisode);
}
