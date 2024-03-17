import { FC } from 'react';
import { Box } from '@mui/material';
import { Item } from '../../models/Item';
import { CartItemType } from '../../models/CartItem';

interface ListProps {
    items: (Item | CartItemType)[];
    renderItem: (item: Item | CartItemType) => React.ReactNode;
}

const List: FC<ListProps> = ({ items, renderItem }) => {
    return (
        <Box
            display={'flex'}
            flexWrap={'wrap'}
            columnGap={'50px'}
            rowGap={'50px'}
            justifyContent={'space-between'}
        >
            {items.map((item) => (
                <Box flexGrow={1} key={item.id}>
                    {renderItem(item)}
                </Box>
            ))}
        </Box>
    );
};

export default List;
