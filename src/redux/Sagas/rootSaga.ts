import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import cardsSaga from './cardsSaga';

export function* rootSaga() {
  yield all([cardsSaga(), authSaga()]);
}
