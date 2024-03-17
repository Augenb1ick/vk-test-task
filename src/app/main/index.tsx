import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import List from '../../components/list';
import { Box } from '@mui/material';
import { Item } from '../../models/Item';
import { loadItems } from '../../store/slices/catalogueSlice';
import CatalogueItem from '../../components/catalogue-item';
import { addToCart } from '../../store/slices/cartSlice';

const Main = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.catalogue.list);

    const callbacks = {
        addToCart: (item: Item) => dispatch(addToCart({ ...item, qty: 1 })),
    };

    const renders = {
        item: useCallback(
            (item: Item) => {
                return (
                    <CatalogueItem item={item} onAction={callbacks.addToCart} />
                );
            },
            [callbacks.addToCart]
        ),
    };

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    return (
        <Box padding={'20px'}>
            <List items={items} renderItem={renders.item} />
        </Box>
    );
};

export default Main;
