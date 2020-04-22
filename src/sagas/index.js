import {
  takeLatest, put, call, fork,
} from 'redux-saga/effects';
import * as actions from '../actions';
import episodesApi from '../api';

export function* fetchSortedEpisodes(action) {
  const orderBasedBy = (action && action.orderBasedBy) || 'release';
  const episodes = yield call(episodesApi, orderBasedBy);
  yield put(actions.receiveEpisodes(orderBasedBy, episodes));
}

export function* updateEpisodesOrder() {
  yield takeLatest(actions.SELECT_ORDERBY, fetchSortedEpisodes);
}

export function* startup() {
  yield fork(fetchSortedEpisodes);
}

export default function* root() {
  yield fork(startup);
  yield fork(updateEpisodesOrder);
}
