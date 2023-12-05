import { useState } from 'react';
import { FormControl, Select, MenuItem, InputLabel, FormGroup, Grid, Button } from '@mui/material';
import './SideBarLocationSelect.css'; 

export default function SideBarLocationSelect() {
  const [location, setLocation] = useState({ State: '', District: '', SubDistrict: '', Village: '' });

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <FormGroup className="form-group" sx={{width: '100%'}}>
      <Grid container rowSpacing={1}>
        <Grid item>
          <Grid container spacing={3}>

            <Grid item>
              <FormControl size="small" className="form-control" sx={{width: '160px'}}>
                <InputLabel id="zonal-office" className="input-label">
                  Zonal Office
                </InputLabel>
            <Select
              labelId="state-location"
              id="state-location-select"
              value={location.State}
              label="State location"
              onChange={handleChange}
            >
              <MenuItem value={'Gujarat'}>Gujarat</MenuItem>
              <MenuItem value={'Rajasthan'}>Rajasthan</MenuItem>
            </Select>
          </FormControl>
            </Grid>
          
          <Grid item>
          <FormControl size="small" className="form-control" sx={{width: '160px'}}>
            <InputLabel id="state-location" className="input-label">
              District
            </InputLabel>
            <Select
              labelId="state-location"
              id="state-location-select"
              value={location.State}
              label="State location"
              onChange={handleChange}
            >
              <MenuItem value={'Ahmedabad'}>Ahmedabad</MenuItem>
              <MenuItem value={'Jaipur'}>Jaipur</MenuItem>
            </Select>
          </FormControl>
          </Grid>
        
          <Grid item>
          <FormControl size="small" className="form-control" sx={{width: '160px'}}>
            <InputLabel id="state-location" className="input-label">
              Sub District
            </InputLabel>
            <Select
              labelId="state-location"
              id="state-location-select"
              value={location.State}
              label="State location"
              onChange={handleChange}
            >
              <MenuItem value={'Rajkot'}>Rajkot</MenuItem>
              <MenuItem value={'Sikanderpur'}>Sikanderpur</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          
          <Grid item>
          <FormControl size="small" className="form-control" sx={{width: '160px'}}>
            <InputLabel id="state-location" className="input-label">
              Village
            </InputLabel>
            <Select
              labelId="state-location"
              id="state-location-select"
              value={location.State}
              label="State location"
              onChange={handleChange}
            >
              <MenuItem value={'Zila Sector 16'}>Zila Sector 16</MenuItem>
              <MenuItem value={'Zila Sector 18'}>Zila Sector 18</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          
          </Grid>
        </Grid>
        {/* Repeat the same structure for other form controls */}
      </Grid>
    </FormGroup>
  );
}
