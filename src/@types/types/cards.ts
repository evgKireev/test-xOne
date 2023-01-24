export type CardsType = {
  isOverwrite: boolean;
  cards: CardType[];
};

export type CardsTrendType = {
  cardsTrends: CardType[];
};

export type CardType = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

type TorrensType = {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
};

export type GetCardaApi = {
  page: number;
  isOverwrite: boolean;
};

export type GetCardsTrendApi = {
  pageTrends: number;
};

export type GetCardsSearchApi = {
  query_term: string;
};
