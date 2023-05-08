import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';


const Header = () => {
  return (
    <div>
       < Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICTAK course App
          </Typography>
          <Button color="inherit"><Link to="/">View Courses</Link></Button>
          <Button color="inherit"><Link to="/create">Add Courses</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default Header
