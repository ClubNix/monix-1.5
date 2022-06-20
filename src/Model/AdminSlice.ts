import { generateFakeHistory } from './../utils';
import { HistoryEntry } from "./types.d";
import { getToken } from "../TokenService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

/** State contenant toutes les informations liés aux membres */
interface AdminState {
  token: string;
  globalHistory: HistoryEntry[];
}

const initialState: AdminState = {
  token: getToken() || "",
  globalHistory: generateFakeHistory(50)
};

/** Slice pour la gestion des membres */
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setToken: (state: AdminState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setHistory: (state: AdminState, action: PayloadAction<HistoryEntry[]>) => {
      state.globalHistory = action.payload;
    },
  },
});

export const { setToken, setHistory } = adminSlice.actions;

export const tokenSelector = (state: RootState) => state.admin.token;
export const globalHistorySelector = (state: RootState) => state.admin.globalHistory;

export default adminSlice.reducer;
