export type CreateCardDto = {
  question: string;
  answer: string;
  questionImg?: string;
  answerImg?: string;
  questionVideo?: string;
  answerVideo?: string;
};

export type Card = CreateCardDto & {
  id: string;
  deckId: string;
  userId: string;
  created: string;
  updated: string;
  shots: number;
  grade: number;
};

export type UpdateCardArgs = Pick<Card, "deckId"> & {
  body: FormData;
  cardId: Card["id"];
};

export type DeleteCardArgs = { cardId: Card["id"] } & Pick<Card, "deckId">;
