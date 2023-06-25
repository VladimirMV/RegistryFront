

import React, { useState } from 'react';
import { AppBar, Nav, NavBlock, UserBlock } from './Header.styled';
import NavbarAuth from '../NavbarAuth/NavbarAuth';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'modules/UserMenu/UserMenu';
import { Navigation } from 'modules/Navigation/Navigation';
import Logo from 'img/contact-book.png';

import {
  Box,
  Divider,
  IconButton,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
 

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
 
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#E0E7D9',
    },
    secondary: {
      main: '#FFF4F0',
    },
  },
});

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenu = (
    <ThemeProvider theme={defaultTheme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography
          color="primary.main"
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            my: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/" sx={{ alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(7.5px)',
          }}>
            <img src={Logo} alt="logo" width={48} />
          </Link>
        </Typography>
        <Divider />
        <Nav>
          <Navigation />
        </Nav>
      </Box>
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box component={'header'} sx={{ position: 'relative', height: '44px' }}>
        <AppBar
          component={'nav'}
          sx={{
            background: '#ffffff',
            backdropFilter: 'blur(7.5px)',
            position: 'relative',
          }}
          elevation={6}
        >
          <Toolbar
            sx={{
                justifyContent: 'space-between',
                height: '44px'
            }}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
                color: '#A0C972',
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
                      </IconButton>
                     
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ my: 2, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to="/"  sx={{ alignItems: 'center',
                justifyContent: 'center', padding: "10px",
                backdropFilter: 'blur(7.5px)',
                boxShadow: "6",
              }}>
                <img src={Logo} alt="logo" width={48} />
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <NavBlock>
                <Navigation />
              </NavBlock>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <UserBlock>
                {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
              </UserBlock>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '280px',
                background: '#ffffff',
                backdropFilter: 'blur(7.5px)',
              },
            }}
          >
            {mobileMenu}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Header;

// This is a React component that defines the website header.It imports several components from 
// other modules: AppBar, Nav, NavBlock, UserBlock, NavbarAuth, UserMenu, Navigation and Logo, as well 
// as styles from MUI package.It also imports a custom hook, useAuth.

// The component defines a state for mobile menu visibility using useState hook.It provides a function
// to toggle this state.It uses this state and the imported components to define the header UI:

// A header logo that links to the homepage
// A navigation component, with menu/drawer hidden for small screens, and a button to toggle its visibility
// A user component, depending on whether the user is logged in or not
// A mobile menu/drawer that opens when the user clicks on the toggle button
// The component exports a default Header component that can be used in the website's App.js file, or in other components.