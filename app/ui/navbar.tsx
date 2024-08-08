// components/Navbar.tsx
"use client";

import React, { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { lusitana } from './fonts';
import Link from 'next/link';  // Import Link

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuEl, setProfileMenuEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setProfileMenuEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FFF4EE', height: '100px' }}>
      <Toolbar sx={{ height: '100px', minHeight: '100px' }}>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'black' , fontFamily: 'lusitana'}}>
          McGill Jewish
        </Typography>
        <IconButton
          edge="end"
          aria-label="profile"
          onClick={handleProfileMenuOpen}
          sx={{ color: 'black' }}
        >
          <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" />
        </IconButton>
        <Menu
          anchorEl={profileMenuEl}
          open={Boolean(profileMenuEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="/" passHref>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/articles" passHref>
              search
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="#world" passHref>
              World
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="#local" passHref>
              Local
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="#torah" passHref>
              Torah
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;