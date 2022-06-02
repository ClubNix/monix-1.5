import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { generateFakeMembers } from '../utils';
import { Member } from './types'

/** State contenant toutes les informations liés aux membres */
interface MemberState {
  members: Member[];
  selectedMember?: Member;
}

const initialState: MemberState = {
    members: generateFakeMembers(100),
}

/** Slice pour la gestion des membres */
export const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setMembers: (state: MemberState, action: PayloadAction<Member[]>) => {
      state.members = action.payload
    },
    clearMembers: (state: MemberState) => {
      state.members = []
    },
    setSelectedMembers: (state: MemberState, action: PayloadAction<Member>) => {
      state.selectedMember = action.payload
    },
  },
})

export const { setMembers, clearMembers, setSelectedMembers } = memberSlice.actions

export const membersSelector = (state: RootState) => state.members.members;
export const selectedMember = (state: RootState) => state.members.selectedMember;

export default memberSlice.reducer