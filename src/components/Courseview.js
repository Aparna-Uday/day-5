import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const Courseview = () => {
    var[course,setcourse]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/course/view")
        .then((response)=>{
            console.log(response.data);
            setcourse(course=response.data)
        })
      },[])
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Course Name</StyledTableCell>
            <StyledTableCell align="right">Course Description</StyledTableCell>
            <StyledTableCell align="right">Course Duration</StyledTableCell>
            <StyledTableCell align="right">Course Start Date</StyledTableCell>
          </TableRow>
        </TableHead>
         <TableBody> 
          {course.map((value,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"> {value.courseName}</StyledTableCell>
              <StyledTableCell align="right">{value.courseDesc}</StyledTableCell>
              <StyledTableCell align="right">{value.courseDuration}</StyledTableCell>
              <StyledTableCell align="right">{value.courseStartDate}</StyledTableCell>
              </StyledTableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Courseview
