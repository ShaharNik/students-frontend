import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';



const AsyncAwait = () => {
  const [students, setStudents] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://localhost:7119/unSubmitted")
    const data = await response.json()
    //console.log(data)
    setStudents(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
    // <div>
    //   {students.length > 0 && (
    //     <ul>
    //       {students.map(student => (
    //         <li key={student.studentId}>student id:{student.studentId} first name:{student.firstName} last name:{student.lastName} nation:{student.nation}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
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
  return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Student ID</StyledTableCell>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Nation&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <StyledTableRow key={student.name}>
              <StyledTableCell align="left">{student.studentId}</StyledTableCell>
              <StyledTableCell align="left">{student.firstName}</StyledTableCell>
              <StyledTableCell align="left">{student.lastName}</StyledTableCell>
              <StyledTableCell align="left">{student.nation}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
  )
}

export default AsyncAwait
