import { BasketEntry } from "./types.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { generateFakeMembers } from "../utils";
import { Member } from "./types";

/** State contenant toutes les informations liés aux membres */
interface MemberState {
  members: Member[];
  selectedMember?: Member;
  basket: BasketEntry[];
  basketOpened: boolean;
}

const initialState: MemberState = {
  members: generateFakeMembers(5),
  basketOpened: false,
  basket: [],
};

/** Slice pour la gestion des membres */
export const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    setMembers: (state: MemberState, action: PayloadAction<Member[]>) => {
      state.members = action.payload;
    },
    clearMembers: (state: MemberState) => {
      state.members = [];
    },
    setSelectedMembers: (
      state: MemberState,
      action: PayloadAction<Member | undefined>
    ) => {
      state.selectedMember = action.payload;
    },
    openBasket: (state: MemberState) => {
      state.basketOpened = true;
    },
    closeBasket: (state: MemberState) => {
      state.basketOpened = false;
    },
    modifyBasket: (
      state: MemberState,
      product: PayloadAction<BasketEntry[]>
    ) => {
      state.basket = product.payload;
    },
  },
});

export const {
  setMembers,
  clearMembers,
  setSelectedMembers,
  openBasket,
  closeBasket,
  modifyBasket,
} = memberSlice.actions;

export const membersSelector = (state: RootState) => state.members.members;
export const selectedMember = (state: RootState) =>
  state.members.selectedMember;

export const isBasketOpenedSelector = (state: RootState) =>
  state.members.basketOpened;

export const basketSelector = (state: RootState) => state.members.basket;

export default memberSlice.reducer;
