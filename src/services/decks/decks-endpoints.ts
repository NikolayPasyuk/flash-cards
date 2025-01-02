import { baseApi } from "../base-api.ts";

import { DeleteDeckRequestType, DeleteDeckResponseType } from "./types.ts";

export const decksEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDeckById: builder.query<DeleteDeckResponseType, DeleteDeckRequestType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: `GET`,
      }),
      providesTags: ["DeckById"],
    }),
  }),
});

export const { useGetDeckByIdQuery } = decksEndpoints;
