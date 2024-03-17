import { Grid, Typography } from '@mui/material';
import ModalLayout from '../../components/modal-layout';
import List from '../../components/list';
import { useCallback } from 'react';
import CartItem from '../../components/cart-item';
import { useAppSelector } from '../../hooks/reduxHook';
import { CartItemType } from '../../models/CartItem';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/slices/modalSlice';
import {
    changeQuantity,
    removeFromCart,
    submitCart,
} from '../../store/slices/cartSlice';
import CartTotal from '../../components/cart-total';

const Cart = () => {
    const dispatch = useDispatch();

    const {
        list: cartItems,
        totalQty,
        totalSum,
    } = useAppSelector((state) => state.cart);

    const cartIsOpen = useAppSelector((state) => state.modal.isOpen);

    const callbacks = {
        onCloseCart: () => dispatch(closeModal()),
        onSubmitCart: () => dispatch(submitCart()),
        onChangeItemQty: (item: CartItemType, qty: number) =>
            dispatch(changeQuantity({ ...item, qty })),
        onRemoveItem: (item: CartItemType) =>
            dispatch(removeFromCart({ ...item })),
    };

    const renders = {
        cartItem: useCallback(
            (item: CartItemType) => {
                return (
                    <CartItem
                        item={item}
                        onChangeQty={callbacks.onChangeItemQty}
                        onRemove={callbacks.onRemoveItem}
                    />
                );
            },
            [callbacks.onChangeItemQty, callbacks.onRemoveItem]
        ),
    };

    return (
        <ModalLayout
            title='Корзина'
            onAction={callbacks.onSubmitCart}
            onClose={callbacks.onCloseCart}
            isOpen={cartIsOpen}
            actionTitle='Оформить заказ'
        >
            {!cartItems.length ? (
                <Typography variant='h6' padding={'20px'}>
                    Корзина пока пуста
                </Typography>
            ) : (
                <Grid sx={{ padding: '20px' }} container spacing={10}>
                    <Grid item xs={9}>
                        <List
                            items={cartItems}
                            renderItem={(item) => {
                                return 'qty' in item
                                    ? renders.cartItem(item)
                                    : '';
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CartTotal {...{ totalQty, totalSum }} />
                    </Grid>
                </Grid>
            )}
        </ModalLayout>
    );
};

export default Cart;
