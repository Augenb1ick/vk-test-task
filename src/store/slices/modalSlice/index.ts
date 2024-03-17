import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
    isOpen: boolean;
    modalType: string | null;
};

const initialState: ModalState = {
    isOpen: false,
    modalType: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<{ modalType: string }>) {
            const { modalType } = action.payload;
            state.isOpen = true;
            state.modalType = modalType;
        },
        closeModal(state) {
            state.isOpen = false;
            state.modalType = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
