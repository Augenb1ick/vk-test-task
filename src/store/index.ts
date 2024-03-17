import { configureStore } from '@reduxjs/toolkit';
import catalogueReducer from './slices/catalogueSlice';
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice';

const store = configureStore({
    reducer: {
        catalogue: catalogueReducer,
        cart: cartReducer,
        modal: modalReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
