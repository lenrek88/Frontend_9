import { TextField, Box, IconButton, Typography, Paper} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  function HeaderButtonHandler() {}
  return (
    <Paper>
    <Box backgroundColor={'#2196F3'} boxSizing={'border-box'} color={'white'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} padding={'20px 20px 20px 20px'} >  
  <Typography fontSize={'20px'}>Фильмы</Typography>
  <IconButton onClick={HeaderButtonHandler}>
    <AccountCircleIcon sx={{color: 'white' }}></AccountCircleIcon>
  </IconButton>
    </Box>
    </Paper>

  );
}
