import { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import SideBarPOISelect from './SideBarPOISelect';
import SideBarRoadSelect from './SideBarRoadSelect';
import './SideBarPOIRoad.css'; 

export default function SideBarPOIRoad() {
  const [mapInfoSelect, setMapInfoSelect] = useState(false);

  const handleChange = () => {
    setMapInfoSelect(!mapInfoSelect);
  };

  return (
    <Box className="container">
      <Grid container spacing={1} className="button-grid">
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" className="button" onClick={handleChange}>
            POI
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" className="button" onClick={handleChange}>
            Road
          </Button>
        </Grid>
        <Grid item>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {!mapInfoSelect ? <SideBarPOISelect /> : <SideBarRoadSelect />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
