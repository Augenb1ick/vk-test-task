import { Box, CircularProgress } from '@mui/material';

const Preloader = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress sx={{ margin: 'auto' }} />
        </Box>
    );
};

export default Preloader;
