import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  var [user, setUser]=useState([])
  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log(res.data)
      setUser(res.data)
    })
    })
  

  return (
    <div><h1>Product View</h1>
    <TableContainer component={Paper}>
    <Table  sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead>
      <TableRow>
      <TableCell>Image</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Price</TableCell>
        
        
      </TableRow>
    </TableHead>
    <TableBody>
      {user.map((products)=>{
        return(

      
      <TableRow>
        <TableCell><img src={products.image} alt={products.title} width="50" /></TableCell>
      <TableCell>{products.title}</TableCell>
        <TableCell>{products.category}</TableCell>
        <TableCell>{products.price}</TableCell>
        
        </TableRow>
        )
        })}
    </TableBody>
    </Table>
    </TableContainer>
    </div>
          
  )
}

export default Home