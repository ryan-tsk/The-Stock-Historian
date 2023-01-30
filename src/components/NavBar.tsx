import React from 'react'
import {Link} from "react-router-dom"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <h1> The Stock Historian  
          <Link to="/"> Home </Link>
          <Link to="/stocks"> Stocks </Link>
          <Link to="/crypto"> Crypto </Link>
          </h1>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar