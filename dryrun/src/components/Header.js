import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

function Header() {
  return (
    <React.Fragment>
        <CssBaseline>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>PeloPals</Typography>
                </Toolbar>
            </AppBar>
        </CssBaseline>
    </React.Fragment>
  )
}

export default Header