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

const Bottom: React.FC = () => {

  return (
    <div className='h-32 border-t-2 bg-seashell border-black'>
    </div>
  );
};

export default Bottom;