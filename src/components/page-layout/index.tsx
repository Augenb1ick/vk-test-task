import { Box } from '@mui/material';
import { FC } from 'react';

interface PageLayoutProps {
    header: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ header, main, footer }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '98vh',
            }}
        >
            <Box>{header}</Box>
            <Box flexGrow='1'>{main}</Box>
            <Box>{footer}</Box>
        </Box>
    );
};

export default PageLayout;
