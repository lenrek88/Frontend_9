import { Typography, Paper, Box } from '@mui/material';
export default function HelpRegisterText() {
    return (
        <>
            <Paper>
                <Box>
                    <Typography variant="h6" lineHeight="32px" fontWeight="500">
                        Пожалуйста, авторизуйтесь --- {'>'}
                    </Typography>
                </Box>
            </Paper>
        </>
    );
}
