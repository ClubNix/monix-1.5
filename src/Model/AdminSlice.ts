import { getToken } from "../TokenService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

/** State contenant toutes les informations liés aux membres */
interface AdminState {
  token: string;
}

const initialState: AdminState = {
  token: getToken() || "",
};

/** Slice pour la gestion des membres */
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setToken: (state: AdminState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = adminSlice.actions;

export const tokenSelector = (state: RootState) => state.admin.token;

export default adminSlice.reducer;
