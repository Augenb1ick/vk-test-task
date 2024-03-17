import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface CartTotalProps {
    totalSum: number;
    totalQty: number;
}

const CartTotal: FC<CartTotalProps> = ({ totalSum, totalQty }) => {
    return (
        <Box>
            <Typography variant='h6'>Ваша корзина</Typography>
            <Typography>{`Товары (${totalQty}) на сумму ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'USD',
                }
            ).format(totalSum)}`}</Typography>
        </Box>
    );
};

export default CartTotal;
