import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { generateFakeProducts } from '../utils';
import { Member, Product } from './types'

/** State contenant toutes les informations liés aux produits */
interface ProductState {
  products: Product[];
  selectedProduct?: Product;
}

const initialState: ProductState = {
    products: generateFakeProducts(10),
}

/** Slice pour la gestion des produits */
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    clearProducts: (state: ProductState) => {
      state.products = []
    },
    setSelectedProduct: (state: ProductState, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload
    },
  },
})

export const { setProducts, clearProducts, setSelectedProduct } = productSlice.actions

export const productsSelector = (state: RootState) => state.products.products;
export const selectedProduct = (state: RootState) => state.products.selectedProduct;

export default productSlice.reducer