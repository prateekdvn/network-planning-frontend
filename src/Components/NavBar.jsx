import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.png';  
import TranslateIcon from '@mui/icons-material/Translate';
const languages = ['English', 'Japanese'];
const settings = ['Profile', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLanguage,setAnchorElLanguage] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    console.log("hello");
    setAnchorElUser(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor:'blue'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box
        component="img"
        sx={{width : '30%', height : 'auto'}}
        alt="Logo"
        src= {logo}
      />


            
          {/* Right side menu */}
          <Box sx={{ width:'100%',display: 'flex',justifyContent: 'flex-end',alignItems:'center'}}>
              <Box sx={{padding: '5vh'}}>
              <TranslateIcon onClick={handleOpenLanguageMenu}/>
              <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElLanguage}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguageMenu}
            >
              {languages.map((language) => (
                <MenuItem key={language} onClick={handleCloseLanguageMenu}>
                  <Typography textAlign="center">{language}</Typography>
                </MenuItem>
              ))}
            </Menu>
              </Box>


              <Box onClick={handleOpenUserMenu} sx={{display: 'flex', alignItems: 'center'}}>              
                <Avatar alt="Adtiya Jain" src="/static/images/avatar/2.jpg" />
                <Typography variant="h6" component="div" sx={{padding: 1}}>
                  Adtiya Jain
                </Typography>
                <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onBlur={handleCloseUserMenu}
                >
                                {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
                </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;