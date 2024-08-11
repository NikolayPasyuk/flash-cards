import { Nullable } from "../../types/common.types.ts";
import { baseApi } from "../base-api.ts";

import { MeResponse, SignUpArgs, SignUpResponse } from "./types.ts";
import { setClearFilter } from "@/services/decks/deck-query-params.slice.ts";

export const authEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<Nullable<MeResponse>, void>({
      query: () => ({
        url: "auth/me",
        method: "GET",
        extraOptions: { maxRetries: false },
      }),
      providesTags: ["Me"],
    }),
    logout: builder.mutation<unknown, void>({
      query: () => ({
        url: `auth/logout`,
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authEndpoints.util.updateQueryData("me", undefined, () => {
            return null;
          }),
        );

        dispatch(setClearFilter());
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Me"],
    }),
    signUp: builder.mutation<SignUpResponse, SignUpArgs>({
      query: (args) => ({
        url: `auth/sign-up`,
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const { useMeQuery, useLogoutMutation, useSignUpMutation } =
  authEndpoints;
