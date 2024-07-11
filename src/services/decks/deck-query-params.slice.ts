import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isClearedFilter: boolean;
};

const initialState: initialStateType = {
  isClearedFilter: false,
};

export const decksSlice = createSlice({
  name: "decksQueryParams",
  initialState: initialState,
  reducers: {
    setClearFilter: () => {
      return { ...initialState, isClearedFilter: true };
    },
  },
});

export const { setClearFilter } = decksSlice.actions;
export const { actions: decksActions } = decksSlice;
