import { useState } from 'react';
import { Checkbox, FormGroup, Grid, FormControlLabel } from '@mui/material';
import './SideBarRoadSelect.css'; 

export default function SideBarRoadSelect() {
  const [poi, setPoi] = useState({ Hospital: false, School: false });

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <FormGroup className="form-group">
      <Grid container rowSpacing={2}>
        <Grid item>
          <FormControlLabel control={<Checkbox />} label="Hospital" className="checkbox-label" />
          <FormControlLabel control={<Checkbox />} label="School" className="checkbox-label" />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
