import { Badge, BadgeProps, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { openModal } from '../../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -2,
        top: 5,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}));

const CartButton: FC = () => {
    const dispatch = useDispatch();

    const cartTotal = useAppSelector((state) => state.cart.totalQty);

    const handleOpenCart = () => dispatch(openModal({ modalType: 'Cart' }));

    return (
        <Button
            onClick={handleOpenCart}
            aria-label='cart'
            color='info'
            endIcon={
                <StyledBadge badgeContent={cartTotal} color='success'>
                    <ShoppingCartIcon />
                </StyledBadge>
            }
        >
            Корзина
        </Button>
    );
};

export default CartButton;
