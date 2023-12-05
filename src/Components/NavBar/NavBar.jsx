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
import logo from './logo.png';
import TranslateIcon from '@mui/icons-material/Translate';
import './NavBar.css'; 

const languages = ['English', 'Japanese'];
const settings = ['Profile', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);

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
    <AppBar position="static" className="app-bar">
      <Container maxWidth="x1">
        <Toolbar disableGutters>

          <Box
            component="img"
            className="logo"
            alt="Logo"
            src={logo}
          />

          {/* Right side menu */}
          <Box className="right-menu">
            <Box className="language-icon" onClick={handleOpenLanguageMenu}>
              <TranslateIcon />
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

            <Box className="user-box" onClick={handleOpenUserMenu}>
              <Avatar alt="Adtiya Jain" src="/static/images/avatar/2.jpg" className="avatar" />
              <Typography variant="h6" component="div" className="user-name">
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
