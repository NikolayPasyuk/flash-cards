import { Column } from "../../ui/table/types.ts";

export type Card = {
  id: string;
  deckId: string;
  userId: string;
  question: string;
  answer: string;
  shots: number;
  questionImg?: never;
  answerImg?: never;
  answerVideo?: never;
  questionVideo?: never;
  comments?: never;
  type?: never;
  grade: number;
  moreId?: never;
  created: string;
  updated: string;
};

export type CardTableContent = {
  question: string;
  answer: string;
  updated: string;
  grade: number;
};
export const cardContent: Card[] = [
  {
    deckId: "1",
    userId: "1",
    id: "1",
    shots: 1,
    created: "2024-05-31",
    question: "How translate Upbringing into Russian ?",
    answer: "Воспитание",
    updated: "2024-05-31",
    grade: 3,
  },
  {
    deckId: "1",
    id: "1",
    userId: "1",
    shots: 1,
    question: "How translate A glance into Russian ?",
    answer: "Взгляд",
    updated: "2024-05-31",
    created: "2024-05-31",
    grade: 3,
  },
  {
    deckId: "1",
    id: "1",
    shots: 1,
    userId: "1",
    question: "How translate To pear at into Russian ?",
    answer: "Всматриваться в",
    updated: "2024-05-31",
    created: "2024-05-31",
    grade: 3,
  },
  {
    deckId: "1",
    id: "1",
    userId: "1",
    shots: 1,
    question: "How translate Tears into Russian ?",
    answer: "Слёзы",
    updated: "2024-05-31",
    created: "2024-05-31",
    grade: 3,
  },
  {
    deckId: "1",
    id: "1",
    userId: "1",
    shots: 1,
    question: "How translate Modesty into Russian ?",
    answer: "Скромность",
    updated: "2024-05-31",
    created: "2024-05-31",
    grade: 3,
  },
];
export const cardColumns: Column[] = [
  {
    key: "question",
    title: "Question",
    isSortable: true,
  },
  {
    key: "answer",
    title: "Answer",
    isSortable: true,
  },
  {
    key: "updated",
    title: "Last Updated",
    isSortable: true,
  },
  {
    key: "grade",
    title: "Grade",
    isSortable: true,
  },
  {
    key: "actions",
    title: "",
    isSortable: false,
  },
];
