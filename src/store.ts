import { configureStore } from '@reduxjs/toolkit'
import MembersSlice from './Model/MembersSlice'
import ProductSlice from './Model/ProductSlice'

const store = configureStore({
  reducer: {
      members: MembersSlice,
      products: ProductSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;