import { useState } from 'react';
import { Box, Grid, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import SideBarOfficeSelect from './SideBarOfficeSelect';
import SideBarLocationSelect from './SideBarLocationSelect';
import './SideBar.css';
import SideBarPOIRoad from './SideBarPOIRoad';
import SideBarBtn from './SideBarBtn';
import RefreshIcon from '@mui/icons-material/Refresh';
function SideBar(){
    const [isOpen,setIsOpen] = useState(false);
    const handleChange = () => {
        setIsOpen(!isOpen);
    }  
    return (
        <>
        <SideBarBtn isOpen={isOpen} handleChange={handleChange}/>
    <Box className={isOpen ? "side-bar" : "side-bar close"}>    
        <Paper variant="outlined" sx={{padding:1, marginBottom:3, height: 150}}>
        <Box sx={{padding:1,paddingBottom:4}}>
        <Typography sx={{position:'absolute'}}>Office Selection</Typography>
        </Box>
        <SideBarOfficeSelect/>
        </Paper>
        <Paper variant="outlined" sx={{padding:1,marginBottom: 3, height: 280}}>
        <Box sx={{padding:1,paddingBottom:1}}>
            <Grid container>
                <Grid item xs={11}>
                <Typography sx={{position:'absolute'}}>Location Selection</Typography>
                </Grid>
                <Grid item xs={1}>
                <RefreshIcon/>
                </Grid>
            </Grid>
        </Box>
        <SideBarLocationSelect/>
        </Paper>
        <Paper  variant="outlined" sx={{padding:1,marginBottom: 3, height: 580}}>
        <Box sx={{padding:1,paddingBottom:4}}>
        <Typography sx={{position:'absolute'}}>Layer Selection</Typography>
        </Box>
        <SideBarPOIRoad/>
        </Paper>
    </Box>
    </>
    );
}

export default SideBar;