import { AppBar, Box, IconButton, Menu, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '@/containers/navbar/navigation';
import { BoxStyle, MenuItemStyle } from './header-navigation.styled';
import LogoSvg from '../../assets/logoSvg';
import Link from 'next/link';

export const HeaderNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const isMenuOpen = Boolean(anchorEl);

  const handleMobileMenuOpen = (event: React.SetStateAction<any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClick={handleMobileMenuClose}
    >
      <Navbar Element={MenuItemStyle} onClick={handleMobileMenuClose} />
    </Menu>
  );

  return (
    <>
      <AppBar elevation={2} color="inherit" position="fixed">
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="space-between" flexGrow="1">
            <Link color="inherit" href="/">
              <a>
                <LogoSvg width={140} height={50} viewBox="0 0 354 111" />
              </a>
            </Link>
            <Box
              component="nav"
              sx={{
                display: 'flex',
              }}
            >
              {!matchMobileView ? (
                <Navbar Element={BoxStyle} />
              ) : (
                <Box>
                  <IconButton
                    id="basic-button"
                    aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  {renderMobileMenu}
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
