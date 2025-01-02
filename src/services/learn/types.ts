import { Card } from "../cards/types.ts";

export type LearnDeckResponse = Omit<Card, "userId">;
