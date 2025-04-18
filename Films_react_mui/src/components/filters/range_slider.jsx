import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function RangeSlider() {
    const [value, setValue] = useState([1987, 2001]);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div>
            <Box sx={{ width: 350, ml: 1 }}>
                <Slider
                    min={1960}
                    max={2030}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                />
            </Box>
        </div>
    );
}
