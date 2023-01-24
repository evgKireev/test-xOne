import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CardsType,
  CardType,
  GetCardaApi,
  GetCardsSearchApi,
  GetCardsTrendApi,
} from '../@types/types/cards';

type initialStateType = {
  cards: CardType[];
  card: CardType | null;
  statusCards: string;
  statusCard: string;
  page: number;
  isOverGlobal: boolean;
  totalCaunt: number;
};

const initialState: initialStateType = {
  cards: [],
  card: null,
  statusCards: '',
  statusCard: '',
  page: 1,
  isOverGlobal: false,
  totalCaunt: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCard: (state, actions: PayloadAction<string | undefined>) => {},
    getCards: (state, actions: PayloadAction<GetCardaApi>) => {},
    getCardsTrend: (state, actions: PayloadAction<GetCardsTrendApi>) => {},
    getSuggestions: (state, actions: PayloadAction<string | undefined>) => {},
    getCardsSearch: (state, actions: PayloadAction<GetCardsSearchApi>) => {},
    setCards: (state, actions: PayloadAction<CardsType>) => {
      const { isOverwrite, cards } = actions.payload;
      state.isOverGlobal = isOverwrite;
      if (isOverwrite) {
        state.cards = [];
      } else {
        state.cards = [...state.cards, ...cards];
      }
    },
    setCard: (state, actions: PayloadAction<CardType>) => {
      state.card = actions.payload;
    },
    setStatusCards: (state, actions: PayloadAction<string>) => {
      state.statusCards = actions.payload;
    },
    setStatusCard: (state, actions: PayloadAction<string>) => {
      state.statusCards = actions.payload;
    },
    setPage: (state, actions: PayloadAction<number>) => {
      state.page = actions.payload;
    },
    seTtotalCaunt: (state, actions: PayloadAction<number>) => {
      state.totalCaunt = actions.payload;
    },
  },
});
export const {
  getCards,
  setCards,
  getCard,
  setCard,
  getSuggestions,
  setStatusCards,
  setStatusCard,
  getCardsTrend,
  setPage,
  seTtotalCaunt,
  getCardsSearch,
} = cardsSlice.actions;
export default cardsSlice.reducer;
