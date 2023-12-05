import { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Box, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import FactoryIcon from '@mui/icons-material/Factory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './SideBarPOISelect.css'; 

export default function SideBarPOISelect() {
  const [poi, setPoi] = useState({ Hospital: false, School: false });

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <FormGroup className="form-group">
      <FormControlLabel
        control={<Checkbox className="checkbox" />}
        label={
          <Box className="checkbox-box">
            <Typography className="checkbox-text">Hospitals</Typography>
            <LocalHospitalIcon />
          </Box>
        }
      />
      <FormControlLabel
        control={<Checkbox className="checkbox" />}
        label={
          <Box className="checkbox-box">
            <Typography className="checkbox-text">Schools</Typography>
            <SchoolIcon />
          </Box>
        }
      />
      <FormControlLabel
        control={<Checkbox className="checkbox" />}
        label={
          <Box className="checkbox-box">
            <Typography className="checkbox-text">Industrial Centers</Typography>
            <FactoryIcon />
          </Box>
        }
      />
      <FormControlLabel
        control={<Checkbox className="checkbox" />}
        label={
          <Box className="checkbox-box">
            <Typography className="checkbox-text">Banks</Typography>
            <AccountBalanceIcon />
          </Box>
        }
      />
      <FormControlLabel
        control={<Checkbox className="checkbox" />}
        label={
          <Box className="checkbox-box">
            <Typography className="checkbox-text">APMCS</Typography>
            <StoreIcon />
          </Box>
        }
      />
      <FormControlLabel
        control={<Checkbox className="checkbox" />}
        label={
          <Box className="checkbox-box">
            <Typography className="checkbox-text">Transport Nagar</Typography>
            <LocalShippingIcon />
          </Box>
        }
      />
    </FormGroup>
  );
}
