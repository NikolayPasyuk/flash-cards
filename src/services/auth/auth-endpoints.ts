import { Nullable } from "../../types/common.types.ts";
import { baseApi } from "../base-api.ts";

import { MeResponse } from "./types.ts";

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
  }),
});

export const { useMeQuery } = authEndpoints;
