import { FC } from 'react';
import { CartItemType } from '../../models/CartItem';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import QuantityInput from '../qty-input';

interface CartItemProps {
    item: CartItemType;
    onChangeQty: (item: CartItemType, qty: number) => void;
    onRemove: (item: CartItemType) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onChangeQty, onRemove }) => {
    const { title, description, price, qty, image } = item;

    const callbacks = {
        onChangeQty: (qty: number | null) => {
            if (qty === null) {
                onChangeQty(item, 1);
            } else onChangeQty(item, qty);
        },
        onRemove: () => onRemove(item),
    };

    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'felx-start'}
            gap={'50px'}
            sx={{ backgroundColor: 'white' }}
            width={'100%'}
        >
            <Box>
                <img
                    style={{
                        width: '150px',
                        height: '200px',
                        objectFit: 'contain',
                    }}
                    src={image}
                    alt={`картинка ${title}`}
                />
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'20px'}
                sx={{
                    maxHeight: '200px',
                }}
            >
                <Typography variant='h6'>{title}</Typography>
                <Typography
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                    variant='body2'
                >
                    {description}
                </Typography>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'20px'}
                alignItems={'flex-start'}
                marginLeft={'auto'}
            >
                <Typography variant='h6'>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(price)}
                </Typography>
                <QuantityInput
                    inputValue={qty}
                    onChangeValue={(value: number | null) =>
                        callbacks.onChangeQty(value)
                    }
                />
                <Button
                    variant='outlined'
                    color='error'
                    onClick={callbacks.onRemove}
                    startIcon={<DeleteIcon />}
                    size='small'
                >
                    Удалить
                </Button>
            </Box>
        </Box>
    );
};

export default CartItem;
