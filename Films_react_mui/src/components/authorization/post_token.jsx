import {
    Paper,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addUserToken } from '../../redux/actions';
import { useDispatch } from 'react-redux';
export default function PostToken() {
    const [Token, setToken] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handlerSetToken() {
        document.cookie = `userToken = ${Token}`;
        console.log(Token);
        dispatch(addUserToken(Token));
        navigate('/');
        setTimeout(() => navigate(0), 1); // рефреш на / и перезагрузка страницы
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + Token,
            },
        };

        fetch('https://api.themoviedb.org/3/account/account_id', options)
            .then((response) => response.json())
            .then((response) => (document.cookie = `userId = ${response.id}`))
            .catch((err) => console.error(err));
    }, []);

    return (
        <Paper>
            <Box
                display="flex"
                width="444px"
                flexdirection="column"
                alignitems="flex-start"
            >
                <Dialog open={true}>
                    <DialogTitle>{'Введите токен'}</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={Token}
                            onChange={(e) => setToken(e.target.value)}
                            sx={{ width: '422px' }}
                            autoFocus
                            fullWidth
                            label="токен"
                        ></TextField>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/">
                            <Button>Отмена</Button>
                        </Link>
                        <Button onClick={handlerSetToken}>Ок</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Paper>
    );
}
