import { useState } from 'react';
import { FormControl, Select, MenuItem, InputLabel, FormGroup, Grid, Button } from '@mui/material';
import './SideBarLocationSelect.css'; 

export default function SideBarLocationSelect() {
  const [location, setLocation] = useState({ State: '', District: '', SubDistrict: '', Village: '' });

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <FormGroup className="form-group">
      <Grid container rowSpacing={1}>
        <Grid item>
          <FormControl size="small" className="form-control">
            <InputLabel id="state-location" className="input-label">
              State
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
        {/* Repeat the same structure for other form controls */}
      </Grid>
    </FormGroup>
  );
}
