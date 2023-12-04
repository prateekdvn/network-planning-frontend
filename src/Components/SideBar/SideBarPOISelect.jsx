import { useState } from 'react';
import {Checkbox, FormGroup,Grid,FormControlLabel ,Box,Topography, Typography} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import FactoryIcon from '@mui/icons-material/Factory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
export default function SideBarPOISelect(){
    const [poi,setPoi] = useState({'Hospital' : false,'School' : false});
    const handleChange = (event) => {
        console.log(event);
    }
    return (
    <FormGroup>
    <FormControlLabel control={<Checkbox sx={{marginLeft:1}}/>} label={<Box sx={{width:280 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}><Typography sx={{fontSize:14}}>Hospitals</Typography><LocalHospitalIcon/></Box>} />
    <FormControlLabel control={<Checkbox sx={{marginLeft:1}}/>} label={<Box sx={{width:280 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}><Typography sx={{fontSize:14}}>Schools</Typography><SchoolIcon/></Box>} />
    <FormControlLabel control={<Checkbox sx={{marginLeft:1}}/>} label={<Box sx={{width:280 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}><Typography sx={{fontSize:14}}>Industrial Centers</Typography><FactoryIcon/></Box>} />
    <FormControlLabel control={<Checkbox sx={{marginLeft:1}}/>} label={<Box sx={{width:280 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}><Typography sx={{fontSize:14}}>Banks</Typography><AccountBalanceIcon/></Box>} />
    <FormControlLabel control={<Checkbox sx={{marginLeft:1}}/>} label={<Box sx={{width:280 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}><Typography sx={{fontSize:14}}>APMCS</Typography><StoreIcon/></Box>} />
    <FormControlLabel control={<Checkbox sx={{marginLeft:1}}/>} label={<Box sx={{width:280 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}><Typography sx={{fontSize:14}}>Transport Nagar</Typography><LocalShippingIcon/></Box>} />
    </FormGroup>
    );
}