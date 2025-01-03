import { baseApi } from "../base-api.ts";
import { Deck } from "../decks/types.ts";

import { LearnDeckResponse } from "./types.ts";

const learnEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    learnDeck: builder.query<LearnDeckResponse, Pick<Deck, "id">>({
      query: ({ id }) => ({
        url: `decks/${id}/learn`,
        method: "GET",
      }),
      providesTags: ["Learn"],
    }),
  }),
});

export const { useLearnDeckQuery } = learnEndpoints;
