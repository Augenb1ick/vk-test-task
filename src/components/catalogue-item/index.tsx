import { FC } from 'react';
import { Item } from '../../models/Item';
import { Box, Button, Typography } from '@mui/material';

interface CatalogueItemProps {
    item: Item;
    onAction: (item: Item) => void;
}

const CatalogueItem: FC<CatalogueItemProps> = ({ item, onAction }) => {
    const { image, title, price } = item;

    const callbacks = {
        onAction: () => onAction(item),
    };

    return (
        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Box
                display={'flex'}
                justifyContent={'center'}
                sx={{ background: 'white', borderRadius: '8px' }}
            >
                <img
                    style={{
                        width: '350px',
                        height: '400px',
                        objectFit: 'contain',
                    }}
                    src={image}
                    alt={`картинка ${title}`}
                />
            </Box>
            <Typography
                maxWidth={'350px'}
                minHeight={'40px'}
                variant='caption'
                component='p'
            >
                {title}
            </Typography>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography variant='overline' component='p'>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(price)}
                </Typography>
                <Button
                    onClick={callbacks.onAction}
                    sx={{ maxWidth: 'fit-content' }}
                    variant='outlined'
                >
                    В корзину
                </Button>
            </Box>
        </Box>
    );
};

export default CatalogueItem;
