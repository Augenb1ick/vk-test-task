import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItemType } from '../../../models/CartItem';

type CartState = {
    list: CartItemType[];
    totalSum: number;
    totalQty: number;
    isSubmitted: boolean;
};

const initialState: CartState = {
    list: [],
    totalSum: 0,
    totalQty: 0,
    isSubmitted: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItemType>) {
            const { id, title, price, description, image } = action.payload;

            const itemExists = state.list.find((item) => item.id === id);
            const qty = itemExists ? itemExists.qty + 1 : 1;

            const updatedList = itemExists
                ? state.list.map((item) =>
                      item.id === id ? { ...item, qty } : item
                  )
                : [
                      ...state.list,
                      { id, title, price, qty, description, image },
                  ];

            const totalQty = updatedList.reduce(
                (acc, item) => acc + item.qty,
                0
            );
            const totalSum = updatedList.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            );

            return {
                ...state,
                list: updatedList,
                totalQty,
                totalSum,
                isSubmitted: false,
            };
        },
        removeFromCart(state, action: PayloadAction<CartItemType>) {
            const { id } = action.payload;
            const updatedList = state.list.filter((item) => item.id !== id);

            const totalQty = updatedList.reduce(
                (acc, item) => acc + item.qty,
                0
            );
            const totalSum = updatedList.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            );

            return {
                ...state,
                list: updatedList,
                totalQty,
                totalSum,
            };
        },
        changeQuantity(state, action: PayloadAction<CartItemType>) {
            const { id, qty } = action.payload;

            const updatedList = state.list.map((item) =>
                item.id === id ? { ...item, qty } : item
            );

            const totalQty = updatedList.reduce(
                (acc, item) => acc + item.qty,
                0
            );
            const totalSum = updatedList.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            );

            return {
                ...state,
                list: updatedList,
                totalQty,
                totalSum,
            };
        },
        submitCart(state) {
            return {
                ...state,
                list: [],
                totalSum: 0,
                totalQty: 0,
                isSubmitted: true,
            };
        },
    },
});

export const { addToCart, removeFromCart, changeQuantity, submitCart } =
    cartSlice.actions;

export default cartSlice.reducer;
