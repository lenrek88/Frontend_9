import Filters from '../filters/Filters';
import FilmGrid from './filmGrid';
import { Box } from '@mui/material';
export default function Content() {
    return (
        <>
            <Box display="flex" gap="10px" height="771px" padding="24px">
                <Filters />
                <FilmGrid />
            </Box>
        </>
    );
}
