import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CartButton from '../cart-button';

const Header = ({ title }: { title: string }) => {
    return (
        <Box>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Typography
                        variant='h2'
                        component='h1'
                        sx={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    <CartButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
