import { useState } from 'react';
import {FormControl,Select,MenuItem,InputLabel, FormGroup,Grid, Button } from '@mui/material';

export default function SideBarLocationSelect(){
    const [location,setLocation] = useState({'State':'','District':'','SubDistrict':'','Village' : ''});
    const handleChange = (event) => {
        console.log(event);
    }
    return (
        <FormGroup>
        <Grid container rowSpacing={1}>
        <Grid item >
    <FormControl size="small" sx={{width : 145,marginRight:1,marginLeft: 1}}>
    <InputLabel id="state-location" sx={{fontSize: '13px'}}>State</InputLabel>
    <Select
    labelId="state-location"
    id="state-location-select"
    value={location.State}
    label="State location"
    onChange={handleChange}
    >
    <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
    <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
    </Select>
    </FormControl>
    </Grid>
    <Grid item>
    <FormControl size="small" sx={{width : 145,marginRight:1,marginLeft: 1}}>
    <InputLabel id="district-location" sx={{fontSize: '13px'}}>District</InputLabel>
    <Select
    labelId="district-location"
    id="district-location-select"
    value={location.District}
    label="District location"
    onChange={handleChange}
    >
    <MenuItem value={"Bikaner"}>Bikaner</MenuItem>
    <MenuItem value={"Udaipur"}>Udaipur</MenuItem>
    <MenuItem value={"Chittorgarh"}>Chittorgarh</MenuItem>
    </Select>
    </FormControl>
    </Grid>
    <Grid item>
    <FormControl size="small" sx={{width : 145,marginRight:1,marginLeft: 1}}>
    <InputLabel id="subDistrict" sx={{fontSize: '13px'}}>SubDistrict</InputLabel>
    <Select
    labelId="subDistrict"
    id="subDistrict-select"
    value={location.SubDistrict}
    label="subDistrict"
    onChange={handleChange}
    >
    <MenuItem value={"Himadri"}>Himadri</MenuItem>
    <MenuItem value={"Sonar"}>Sonar</MenuItem>
    <MenuItem value={"Accut"}>Accut</MenuItem>
    </Select>
    </FormControl>
    </Grid>
    <Grid item>
    <FormControl size="small" sx={{width : 145,marginRight:1,marginLeft: 1}}>
    <InputLabel id="village" sx={{fontSize: '13px'}}>Village</InputLabel>
    <Select
    labelId="village"
    id="village-select"
    value={location.Village}
    label="village"
    onChange={handleChange}
    >
    <MenuItem value={"Himadri"}>Himadri</MenuItem>
    <MenuItem value={"Sonar"}>Sonar</MenuItem>
    <MenuItem value={"Accut"}>Accut</MenuItem>
    </Select>
    </FormControl>
    </Grid>
    {/* <Grid item>
        <Button sx={{backgroundColor:'blue',color:'white',width:305,marginRight:1,marginLeft: 1}}>Reset</Button>
    </Grid> */}
    </Grid>
    </FormGroup>
    );
}