import { useState } from 'react';
import {FormControl,Select,MenuItem,InputLabel, FormGroup,Grid } from '@mui/material';

export default function SideBarOfficeSelect(){
    const [office,setOffice] = useState({'zo':'','ro':'','dealer':''});
    const handleChange = (event) => {
        console.log(event);
    }
    return (
        <FormGroup>
        <Grid container rowSpacing={1}>
        <Grid item >
            <Grid container spacing={1}>
                <Grid item>
                <FormControl size="small" sx={{width : 157}}>
    <InputLabel id="zonal-office" sx={{fontSize: '13px'}} >Zonal Office</InputLabel>
    <Select
    labelId="zonal-office"
    id="zonal-office-select"
    value={office.zo}
    label="Zonal Office"
    onChange={setOffice}
    >
    <MenuItem value={"North"}>North</MenuItem>
    <MenuItem value={"South"}>South</MenuItem>
    <MenuItem value={"East"}>East</MenuItem>
    </Select>
    </FormControl>
                </Grid>
                <Grid item>
                <FormControl size="small" sx={{width : 158}}>
    <InputLabel id="regional-office" sx={{fontSize: '13px'}}>Regional Office</InputLabel>
    <Select
    labelId="regional-office"
    id="regional-office-select"
    value={office.ro}
    label="Regional Office"
    onChange={setOffice}
    >
    <MenuItem value={"North 1"}>North 1</MenuItem>
    <MenuItem value={"South 2"}>South 2</MenuItem>
    <MenuItem value={"East 3"}>East 3</MenuItem>
    </Select>
    </FormControl>
                </Grid>
            </Grid>
   
    </Grid>

    <Grid item>
    <FormControl size="small" sx={{width : 325}}>
    <InputLabel id="dealer" sx={{fontSize: '13px'}}>Dealer</InputLabel>
    <Select
    labelId="dealer"
    id="dealer-select"
    value={office.dealer}
    label="Dealer"
    onChange={setOffice}
    >
    <MenuItem value={"Himadri"}>Himadri</MenuItem>
    <MenuItem value={"Sonar"}>Sonar</MenuItem>
    <MenuItem value={"Accut"}>Accut</MenuItem>
    </Select>
    </FormControl>
    </Grid>
    </Grid>
    </FormGroup>
    );
}