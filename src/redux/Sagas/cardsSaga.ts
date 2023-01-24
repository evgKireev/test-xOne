import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GetCardaApi } from '../../@types/types/cards';
import {
  getCard,
  getCards,
  getCardsTrend,
  getSuggestions,
  setCard,
  setCards,
  setStatusCard,
  setStatusCards,
} from '../cardsSlice';
import API from '../utils/API';

function* getCardsWorker(actions: PayloadAction<GetCardaApi>) {
  const { page, isOverwrite } = actions.payload;
  yield put(setStatusCards('pennding'));
  const { data, ok, problem } = yield call(API.fetchGetCards, {
    page,
    isOverwrite,
  });
  if (ok && data) {
    yield put(setCards({ cards: data, isOverwrite }));
    yield put(setStatusCards('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCards('rejected'));
  }
}

function* getCardWorker(action: PayloadAction<string>) {
  yield put(setStatusCard('pennding'));
  const { data, ok, problem } = yield call(API.fetchGetCard, action.payload);
  if (ok && data) {
    yield put(setCard(data));
    yield put(setStatusCard('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCard('rejected'));
  }
}

export default function* cardsSaga() {
  yield all([
    takeLatest(getCards, getCardsWorker),
    takeLatest(getCard, getCardWorker),
  ]);
}
