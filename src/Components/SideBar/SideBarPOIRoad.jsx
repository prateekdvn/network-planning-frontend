import {useState} from 'react';
import { Box,Button,Grid } from '@mui/material';
import SideBarPOISelect from './SideBarPOISelect';
import SideBarRoadSelect from './SideBarRoadSelect';
export default function SideBarPOIRoad(){
    const [mapInfoSelect,setMapInfoSelect] = useState(false);
    const handleChange = () => {
        setMapInfoSelect(!mapInfoSelect);
    };
    return (
        <Box sx={{'display' : 'flex','alignContent' : 'center'}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <Button fullWidth variant="outlined" onClick={handleChange}>POI</Button>
                </Grid>
                <Grid item xs={6}>
                <Button fullWidth variant="outlined" onClick={handleChange}>Road</Button>
                </Grid>
                <Grid item>
                    <Box sx={{width: "100%",display:"flex",justifyContent:"center"}}>
                    {!mapInfoSelect ? <SideBarPOISelect/> : <SideBarRoadSelect/>}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}