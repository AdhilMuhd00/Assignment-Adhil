import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'component="div" color="white" align="left" sx={{flexGrow:1}} >
                    Product app
                </Typography>
                <Link to="/home">
                <Button variant="contained" color="secondary">HOME</Button></Link>&nbsp;&nbsp;
                <Link to="/add">
                <Button variant="contained" color="secondary">Add Product</Button></Link>&nbsp;&nbsp;

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar