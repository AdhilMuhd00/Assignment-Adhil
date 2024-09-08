import {  Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <br />
      <h2 > Add Product</h2>
      

    <TextField type='text' label="Product Name" variant="outlined" /><br /><br /> 
    <TextField type='text' label="Price" variant="outlined" /><br /><br />
    <TextField type='text' label="Category" variant="outlined" /><br /><br />
    <TextField  type='file'   label="image" variant="outlined" /><br /><br />
    
    <Button variant="contained" type='submit' color="success">ADD</Button>&nbsp;
    <Button variant="contained" type='submit' color="secondary">CLEAR</Button>
    
   
    </div>
  )
}

export default Add