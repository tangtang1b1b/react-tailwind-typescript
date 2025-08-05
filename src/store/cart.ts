import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload
      const existingItem = state.items.find((i) => i.id === item.id)

      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        state.items.push(item)
      }
      state.totalAmount += item.price * item.quantity
    },
    removeCartItem(state, action: PayloadAction<string>) {
      const id = action.payload
      const existingItem = state.items.find((i) => i.id === id)

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          state.totalAmount -= existingItem.price
        } else {
          state.items = state.items.filter((i) => i.id !== id)
          state.totalAmount -= existingItem.price
        }
      }
    },
  },
})

export const { addToCart, removeCartItem } = cartSlice.actions
export default cartSlice.reducer
export type { CartItem, CartState }
export type { PayloadAction } from '@reduxjs/toolkit'
