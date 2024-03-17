import { Dispatch, createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    loading: false,
    error: null,
};

const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState,
    reducers: {
        loadItemsStart(state) {
            state.loading = true;
            state.error = null;
        },
        loadItemsSuccess(state, action) {
            state.loading = false;
            state.list = action.payload;
        },
        loadItemsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const { loadItemsStart, loadItemsSuccess, loadItemsFailure } =
    catalogueSlice.actions;

export const loadItems = () => async (dispatch: Dispatch) => {
    dispatch(loadItemsStart());
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(loadItemsSuccess(data));
    } catch (error: any) {
        dispatch(loadItemsFailure(error.message));
    }
};

export default catalogueSlice.reducer;
