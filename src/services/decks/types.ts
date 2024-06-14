export type AuthorType = {
  id: string;
  name: string;
};

export type Deck = {
  author: AuthorType;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  rating: number;
  created: string;
  updated: string;
  cardsCount: number;
};

export type PaginationType = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};

export type UpdateDeckRequestType = {
  id: string;
  body: FormData;
};
