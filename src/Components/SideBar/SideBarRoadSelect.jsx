import { useState } from 'react';
import {Checkbox, FormGroup,Grid,FormControlLabel } from '@mui/material';

export default function SideBarRoadSelect(){
    const [poi,setPoi] = useState({'Hospital' : false,'School' : false});
    const handleChange = (event) => {
        console.log(event);
    }
    return (
        <FormGroup>
        <Grid container rowSpacing={2}>
        <Grid item >
    <FormControlLabel control={<Checkbox />} label="Hospital" />
    <FormControlLabel control={<Checkbox />} label="School" />
    </Grid>
    </Grid>
    </FormGroup>
    );
}