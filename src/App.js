import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Student ID </TableCell>
          <TableCell align="left">First Name:&nbsp;</TableCell>
          <TableCell align="left">Last Name:&nbsp;</TableCell>
          <TableCell align="left">Nation&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow
            key={student.studentId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {/* <TableCell component="th" scope="row">{student.name}</TableCell> */}
            <TableCell align="left">{student.studentId}</TableCell>
            <TableCell align="left">{student.firstName}</TableCell>
            <TableCell align="left">{student.lastName}</TableCell>
            <TableCell align="left">{student.nation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  )
}

export default AsyncAwait
