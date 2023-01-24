import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './Sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import cardsSlice from './cardsSlice';
import signInAuthSlice from './signInAuthSlice';
import signUpAuthSlice from './signUpAuthSlice';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cardsSlice,
    signInAuthSlice,
    signUpAuthSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
