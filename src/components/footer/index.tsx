import { Box } from '@mui/material';

const Footer = () => {
    return (
        <Box padding={'20px'} display={'flex'} justifyContent={'center'}>
            {new Date().getFullYear()} @ All rights reserved
        </Box>
    );
};

export default Footer;
