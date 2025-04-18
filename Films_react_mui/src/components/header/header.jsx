import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import getCookie from '../../utils/cookie/getCookie';
import deleteAllCookies from '../../utils/cookie/deleteAllCookies';

export default function Header() {
    const Token = getCookie('userToken');
    console.log(Token, 'header.jsx');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Typography variant="h5">Фильмы</Typography>
                    {Token ? (
                        <IconButton
                            sx={{ color: 'white' }}
                            onClick={deleteAllCookies}
                        >
                            <AccountCircleIcon></AccountCircleIcon>
                        </IconButton>
                    ) : (
                        <Link to="/Registration">
                            <IconButton sx={{ color: 'white' }}>
                                <AccountCircleIcon></AccountCircleIcon>
                            </IconButton>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
